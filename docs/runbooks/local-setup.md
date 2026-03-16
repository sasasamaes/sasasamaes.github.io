# Local Development Setup

## Prerequisites

- Node.js 18+
- Corepack enabled (`corepack enable`) or Yarn 4.5.0 installed
- Git

## Steps

1. **Clone the repository**

   ```bash
   git clone git@github.com:sasasamaes/sasasamaes.github.io.git
   cd sasasamaes.github.io
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

   If yarn is not available, use npm:

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Copy `.env.local.example` or create `.env.local` with:

   ```
   CONTENTFUL_SPACE_ID=<your-space-id>
   CONTENTFUL_ACCESS_TOKEN=<your-access-token>
   CONTENTFUL_MANAGEMENT_TOKEN=<your-management-token>
   ```

4. **Start dev server**

   ```bash
   npm run dev
   ```

   Open http://localhost:3000

5. **Verify pre-commit hooks**
   ```bash
   npx husky
   ```
   Hooks should already be installed via the `prepare` script.

## Available Scripts

| Command                | Description                      |
| ---------------------- | -------------------------------- |
| `npm run dev`          | Start development server         |
| `npm run build`        | Production build                 |
| `npm run lint`         | Run ESLint                       |
| `npm run lint:fix`     | Auto-fix ESLint issues           |
| `npm run format`       | Format all files with Prettier   |
| `npm run format:check` | Check formatting without changes |

## Troubleshooting

- **Yarn not found**: Run `corepack enable` or use `npm` instead
- **Contentful errors**: Ensure `.env.local` has valid credentials. The site builds even without them (blog will be empty).
- **Port 3000 in use**: `npm run dev -- -p 3001`
