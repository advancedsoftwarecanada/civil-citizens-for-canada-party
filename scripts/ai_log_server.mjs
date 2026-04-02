import { createServer } from 'node:http'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = resolve(__dirname, '..')
const logsDir = resolve(rootDir, 'logs')
const logFile = resolve(logsDir, 'question-answers.json')
const host = process.env.CCC_AI_LOG_HOST || '127.0.0.1'
const port = Number(process.env.CCC_AI_LOG_PORT || '8787')

const server = createServer(async (request, response) => {
  if (request.method === 'OPTIONS') {
    applyCors(response)
    response.writeHead(204)
    response.end()
    return
  }

  if (request.method === 'POST' && request.url === '/api/ai-log') {
    try {
      const body = await readBody(request)
      const payload = JSON.parse(body)

      if (typeof payload?.question !== 'string' || typeof payload?.answer !== 'string') {
        throw new Error('Invalid payload')
      }

      const entry = {
        timestamp: typeof payload.timestamp === 'string' ? payload.timestamp : new Date().toISOString(),
        locale: typeof payload.locale === 'string' ? payload.locale : 'unknown',
        question: payload.question,
        answer: payload.answer,
      }

      await mkdir(logsDir, { recursive: true })
      const existingEntries = await readLogEntries()
      existingEntries.push(entry)
      await writeFile(logFile, `${JSON.stringify(existingEntries, null, 2)}\n`, 'utf8')

      applyCors(response)
      response.writeHead(201, { 'Content-Type': 'application/json' })
      response.end(JSON.stringify({ ok: true }))
      return
    } catch {
      applyCors(response)
      response.writeHead(400, { 'Content-Type': 'application/json' })
      response.end(JSON.stringify({ ok: false }))
      return
    }
  }

  if (request.method === 'GET' && request.url === '/logs/question-answers.json') {
    try {
      const contents = await readFile(logFile, 'utf8')
      applyCors(response)
      response.writeHead(200, { 'Content-Type': 'application/json' })
      response.end(contents)
      return
    } catch {
      applyCors(response)
      response.writeHead(200, { 'Content-Type': 'application/json' })
      response.end('[]\n')
      return
    }
  }

  applyCors(response)
  response.writeHead(404, { 'Content-Type': 'application/json' })
  response.end(JSON.stringify({ ok: false }))
})

server.listen(port, host, () => {
  console.log(`Civil AI log server listening on http://${host}:${port}`)
})

async function readLogEntries() {
  try {
    const contents = await readFile(logFile, 'utf8')
    const parsed = JSON.parse(contents)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function applyCors(response) {
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  response.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
}

function readBody(request) {
  return new Promise((resolveBody, rejectBody) => {
    let body = ''

    request.on('data', (chunk) => {
      body += chunk
      if (body.length > 1024 * 1024) {
        rejectBody(new Error('Body too large'))
        request.destroy()
      }
    })

    request.on('end', () => resolveBody(body))
    request.on('error', rejectBody)
  })
}