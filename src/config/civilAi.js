const fallbackConfig = {
  serverId: '',
  serverName: '',
  baseUrl: '',
  provider: '',
  model: '',
  apiVersion: '',
  apiKey: '',
}

export const civilAiConfig =
  typeof __CIVIL_AI_CONFIG__ !== 'undefined' ? __CIVIL_AI_CONFIG__ : fallbackConfig

export function hasCivilAiConfig() {
  return Boolean(
    civilAiConfig.baseUrl &&
      civilAiConfig.model &&
      civilAiConfig.apiVersion &&
      civilAiConfig.apiKey,
  )
}