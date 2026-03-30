# Civil Citizens For Canada Party

Official repository for [www.CivilCitizensCanada.ca](https://www.civilcitizenscanada.ca).

This project is the public codebase for the Civil Citizens For Canada Party website. Contributions, fixes, refinements, and new policy-page work are welcome.

Politics is Open Source!

## Tech Stack

- React 18
- Vite 5
- React Router
- Plain CSS
- Node.js and npm for local development and builds
- Nginx for production static hosting

## Repository Purpose

This repository contains the website source for the official Civil Citizens For Canada Party site, including:

- shared layout and navigation components
- reusable page structure for platform and policy content
- frontend routing for clean public URLs
- production build output for deployment

## Local Development On Ubuntu

### 1. Install prerequisites

If Node.js and npm are not already installed:

```bash
sudo apt-get update
sudo apt-get install -y nodejs npm
```

### 2. Clone the repository

```bash
git clone git@github.com:advancedsoftwarecanada/civil-citizens-for-canada-party.git
cd civil-citizens-for-canada-party
```

If you prefer HTTPS:

```bash
git clone https://github.com/advancedsoftwarecanada/civil-citizens-for-canada-party.git
cd civil-citizens-for-canada-party
```

### 3. Install project dependencies

```bash
npm install
```

### 4. Start the local development server

```bash
npm run dev
```

By default, Vite serves the app on:

```text
http://localhost:5173
```

### 5. Build for production

```bash
npm run build
```

This generates the production site in the `dist/` directory.

### 6. Preview the production build locally

```bash
npm run preview
```

## Project Structure

```text
.
├── public/                # Static assets served as-is
├── src/
│   ├── components/        # Shared React UI components
│   ├── data/              # Structured policy/content data
│   ├── pages/             # Route-level page components
│   ├── App.jsx            # Application routes
│   ├── main.jsx           # React entry point
│   └── styles.css         # Global site styles
├── index.html             # Vite HTML entry
├── package.json           # Scripts and dependencies
└── vite.config.js         # Vite configuration
```

## Contributions

We welcome contributions.

Useful contributions include:

- new policy pages
- copy improvements and proofreading
- accessibility improvements
- layout and navigation improvements
- performance and SEO refinements
- issue reports and reproducible bug fixes

Suggested workflow:

```bash
git checkout -b your-feature-name
npm install
npm run build
git add .
git commit -m "Describe your change"
git push origin your-feature-name
```

Then open a pull request on GitHub.

## Working With AI Agents

This repo is intentionally simple enough to work well with AI coding agents.

You can use tools such as:

- GitHub Copilot in VS Code
- local coding agents that can edit files and run shell commands
- custom internal agents that operate on a checked-out Git repository

### Recommended AI workflow

1. Clone the repo locally.
2. Give the agent a concrete task, such as "add a housing policy page" or "refactor the shared header into a reusable component".
3. Ask the agent to run `npm run build` after making changes.
4. Review the diff manually before committing.
5. Open a pull request for human review.

### Good prompts for agents

- "Add a new routed page for immigration policy using the existing site layout."
- "Refactor repeated UI into a reusable React component without changing the visual design."
- "Improve the mobile navigation and keep the current visual style."
- "Add a README section explaining how deployment works."

### Guidance for agent-based changes

- keep changes focused and reviewable
- preserve the public-facing tone of the site
- avoid unnecessary dependency churn
- run the build before proposing a merge
- prefer reusable components over duplicated markup

## Deployment Notes

The site is built as a static frontend application. Production hosting should serve the built files from `dist/` and route application URLs back to `index.html` so React Router can resolve page routes.

## Official Links

- Website: [www.CivilCitizensCanada.ca](https://www.civilcitizenscanada.ca)
- GitHub: [advancedsoftwarecanada/civil-citizens-for-canada-party](https://github.com/advancedsoftwarecanada/civil-citizens-for-canada-party)

## License And Use

No license file is currently included in this repository. If public reuse terms are intended, add an explicit license so contributors and downstream users know the rules.