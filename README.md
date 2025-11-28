# nova-web

[![Code Quality](https://github.com/nova-eco/nova-web/actions/workflows/code-quality.yml/badge.svg)](https://github.com/nova-eco/nova-web/actions/workflows/code-quality.yml)
[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)
[![CSpell](https://img.shields.io/badge/spell_check-cspell-blue.svg)](https://cspell.org/)

Web frontend for the Nova booking and management system, built with React, TypeScript, and
Redux.

## Project Status

This project is **actively maintained**. We welcome contributions, bug reports, and
feature requests.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Usage](#usage)
- [Architecture](#architecture)
  - [Frontend Structure](#frontend-structure)
  - [State Management](#state-management)
- [CI/CD & GitHub Actions](#cicd--github-actions)
  - [Automated Workflows](#automated-workflows)
  - [Pull Request Validation](#pull-request-validation)
  - [Code Quality Checks](#code-quality-checks)
  - [Required Secrets](#required-secrets)
- [Development](#development)
  - [Code Quality Standards](#code-quality-standards)
    - [Formatting](#formatting)
    - [Linting](#linting)
    - [Spell Checking](#spell-checking)
    - [Code Analysis](#code-analysis)
  - [Testing](#testing)
  - [Building](#building)
  - [Pushing Changes](#pushing-changes)
  - [Running All Checks Manually](#running-all-checks-manually)
- [Scripts](#scripts)
- [Changelog](#changelog)
- [License](#license)
- [Author](#author)

## Getting Started

### Prerequisites

- Node.js >= 22
- npm >= 10
- Git
- nova-api backend service running (or configured endpoint)

### Installation

1. **Clone the repository from GitHub:**

   ```bash
   git clone https://github.com/nova-eco/nova-web.git
   cd nova-web
   ```

2. **Install dependencies:**

   ```bash
   npm i
   ```

   This will automatically:
   - Install all required packages
   - Set up Husky git hooks for commit validation and pre-push checks

3. **Configure environment variables:**

   Create a `.env` file in the root directory and set the required variables for your API
   connection and other configuration.

### Configuration

The web application uses environment variables for configuration. See the
[Environment Variables](#environment-variables) section for a complete list of required
variables.

### Usage

#### Development Mode

To start the web application in development mode with hot-reload:

```bash
npm run dev:server
```

The application will automatically open in your browser on the configured port
(default: 3002) and reload when you make changes.

#### Production Mode

To build the application for production:

1. **Build the application:**

   ```bash
   npm run build
   ```

   This compiles TypeScript, bundles assets with Webpack, and optimizes for production.

2. **Serve the built files:**

   The built files in the `dist/` directory can be served by any static file server or
   deployed to a CDN.

## Environment Variables

The nova-web requires several environment variables for configuration. All web-related
variables are prefixed with `NOVA_WEB_`.

### Core Web Variables

| Variable                       | Description                       | Default | Used In                      |
| ------------------------------ | --------------------------------- | ------- | ---------------------------- |
| `NOVA_WEB_SERVER_PORT`         | Web application server port       | `""`    | Development server startup   |
| `NOVA_WEB_API_SERVER_HOST`     | API backend host                  | `""`    | src/config/serverHost.ts     |
| `NOVA_WEB_API_SERVER_PORT`     | API backend port                  | `""`    | src/config/serverPort.ts     |
| `NOVA_WEB_API_SERVER_PROTOCOL` | API backend protocol (http/https) | `""`    | src/config/serverProtocol.ts |

### Variable Dependencies

The API-related variables should match the corresponding values in the nova-api
configuration:

- `NOVA_WEB_API_SERVER_HOST` should match the API service host
- `NOVA_WEB_API_SERVER_PORT` should match `NOVA_API_PORT`
- `NOVA_WEB_API_SERVER_PROTOCOL` should match the API protocol (http or https)

## Architecture

### Frontend Structure

The nova-web follows a component-based architecture:

- **`src/index.tsx`**: Application entry point
- **`src/app/`**: Main application setup and routing
- **`src/components/`**: Reusable React components
- **`src/pages/`**: Page-level components
- **`src/store/`**: Redux store configuration and slices
- **`src/hooks/`**: Custom React hooks
- **`src/config/`**: Configuration files and constants
- **`src/services/`**: API integration and external services
- **`src/utils/`**: Utility functions and helpers
- **`src/interfaces/`**: TypeScript interfaces and types

### State Management

The application uses Redux Toolkit for state management:

- **Redux Store**: Centralized state management
- **RTK Query**: Data fetching and caching (if applicable)
- **Redux DevTools**: Development-time debugging support

## CI/CD & GitHub Actions

This project uses GitHub Actions for continuous integration. Two automated workflows
ensure code quality and validate pull requests.

### Automated Workflows

The following workflows are configured in `.github/workflows/`:

| Workflow                    | Trigger           | Purpose                             |
| --------------------------- | ----------------- | ----------------------------------- |
| **Pull Request Validation** | PR to master      | Validates code quality before merge |
| **Code Quality**            | Push/PR to master | Runs comprehensive quality checks   |

### Pull Request Validation

**Workflow:** `.github/workflows/pr-validation.yml`

Automatically runs when a pull request is opened, synchronized, or reopened against the
`master` branch.

**Checks performed:**

- ✅ Code formatting (Prettier)
- ✅ Linting (ESLint)
- ✅ Spell checking (CSpell)
- ✅ Code analysis (fta-cli)
- ✅ Unit tests (Jest)

All checks must pass before the PR can be merged. This ensures that only quality code
enters the main branch.

### Code Quality Checks

**Workflow:** `.github/workflows/code-quality.yml`

Runs on every push and on pull requests. Executes multiple quality checks in parallel for
fast feedback:

**Jobs:**

- **Prettier Format Check** - Ensures consistent code formatting
- **ESLint Check** - Validates code quality and TypeScript standards
- **CSpell Check** - Catches spelling errors in code and comments
- **Code Analysis** - Analyses code structure and complexity
- **Unit Tests** - Runs the complete unit test suite

Each job runs independently, allowing partial results if one check fails.

### Required Secrets

Configure these secrets in your GitHub repository settings (`Settings` →
`Secrets and variables` → `Actions`) as needed for deployment workflows.

## Development

### Code Quality Standards

This project enforces strict code quality standards using automated tools:

#### Formatting

- **Tool**: [Prettier](https://prettier.io/)
- **Configuration**: `.prettierrc.json`
- **Standards**:
  - Line width: 90 characters
  - Single quotes for strings
  - Semicolons required
  - 2-space indentation
  - LF line endings
  - Trailing commas in multi-line structures

**Commands**:

```bash
npm run format:check # Check formatting without making changes
npm run format:fix   # Automatically fix formatting issues
```

#### Linting

- **Tool**: [ESLint](https://eslint.org/)
- **Configuration**: `eslint.config.mjs`
- **Standards**:
  - TypeScript-specific rules
  - React best practices
  - Integration with Prettier
  - Console warnings for `console.log` statements

**Commands**:

```bash
npm run lint:check # Check for linting issues
npm run lint:fix   # Automatically fix linting issues
```

#### Spell Checking

- **Tool**: [cspell](https://cspell.org/)
- **Configuration**: `cspell.json`
- **Standards**:
  - British English (en-gb)
  - Checks JavaScript, TypeScript, and configuration files
  - Custom dictionary for technical terms

**Commands**:

```bash
npm run spell # Check spelling
```

#### Code Analysis

- **Tool**: [fta-cli](https://www.npmjs.com/package/fta-cli)
- **Purpose**: Analyses code structure and complexity

**Commands**:

```bash
npm run analysis # Run code analysis
```

### Testing

The project uses [Jest](https://jestjs.io/) for testing with separate unit and integration
test suites.

#### Running Tests

**Default test suite:**

```bash
npm run test # Runs unit tests (default)
npm test     # Alternative command
```

**Specific test suites:**

```bash
npm run test:unit        # Run unit tests only
npm run test:integration # Run integration tests only
npm run test:it          # Alias for integration tests
```

#### Test Configuration

- **Configuration file**: `jest.config.ts`
- **Test environment**: jsdom (for React component testing)
- **Test framework**: Jest with ts-jest for TypeScript support
- **Testing Library**: React Testing Library for component tests

The test configuration automatically determines which tests to run based on the
`TEST_TYPE` environment variable:

- `TEST_TYPE='unit'` - Runs unit tests
- `TEST_TYPE='integration'` - Runs integration tests

#### Test Structure

Test files should be organised alongside components or in dedicated test directories:

```
src/
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   └── Button.test.tsx
│   └── Form/
│       ├── Form.tsx
│       └── Form.test.tsx
└── services/
    ├── api.ts
    └── api.test.ts
```

#### Test Patterns

**Component test example:**

```typescript
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('should render button with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

#### CI/CD Integration

Tests are automatically run in GitHub Actions:

- **Pull Request Validation**: Runs `npm run test` on every PR
- **Code Quality Workflow**: Runs `npm run test` on push

All tests must pass before code can be merged to the master branch.

### Building

Build the TypeScript and React project for production:

```bash
npm run build
```

This command:

1. Compiles TypeScript and JSX/TSX using Webpack
2. Bundles all assets and dependencies
3. Optimizes and minifies code for production
4. Outputs compiled files to the `dist/` directory

### Pushing Changes

This repository uses Git hooks to ensure code quality before changes are pushed. Follow
these steps:

#### 1. Make Your Changes

Edit files as needed for your feature or bugfix.

#### 2. Stage Your Changes

```bash
git add .
```

#### 3. Commit Your Changes

**IMPORTANT**: All commits must follow the
[Conventional Commits](https://www.conventionalcommits.org/) standard:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

**Commit Types**:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes only
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code changes that neither fix bugs nor add features
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `build`: Changes to build system or dependencies
- `ci`: Changes to CI/CD configuration
- `chore`: Other changes that don't modify src or test files
- `revert`: Reverts a previous commit

**Examples**:

```bash
git commit -m "feat: add user profile page"
git commit -m "fix: correct form validation logic"
git commit -m "docs: update README with setup instructions"
git commit -m "test: add unit tests for login component"
```

**Commit Hooks**:

- The `commit-msg` hook will automatically validate your commit message format using
  Commitlint. If the format is incorrect, the commit will be rejected.

#### 4. Push Your Changes

```bash
git push
```

**Pre-push Hook**: Before your changes are pushed, the `pre-push` hook will automatically
run:

1. **Format check** - Ensures all files are properly formatted
2. **ESLint check** - Validates TypeScript code quality
3. **Spell check** - Ensures no spelling errors
4. **Code analysis** - Analyses code structure

If any of these checks fail, the push will be blocked. You must fix the issues before
pushing:

```bash
npm run format:fix # Fix formatting issues
npm run lint:fix   # Fix linting issues
npm run check      # Run all checks manually
```

### Running All Checks Manually

To run all quality checks before committing:

```bash
npm run check
```

This runs the same checks that will be executed during the pre-push hook.

## Scripts

| Script                     | Description                                         |
| -------------------------- | --------------------------------------------------- |
| `npm run dev:server`       | Start development server with hot-reload            |
| `npm run dev:db`           | Start JSON server for mock data (development)       |
| `npm run build`            | Build application for production                    |
| `npm run storybook`        | Start Storybook component development environment   |
| `npm run test`             | Run default test suite (unit tests)                 |
| `npm run test:unit`        | Run unit tests                                      |
| `npm run test:integration` | Run integration tests                               |
| `npm run changelog`        | Generate changelog from git commits                 |
| `npm run check`            | Run all quality checks (format/lint/spell/analysis) |
| `npm run format`           | Check code formatting                               |
| `npm run format:fix`       | Fix code formatting issues                          |
| `npm run lint`             | Check code with ESLint                              |
| `npm run lint:fix`         | Fix ESLint issues automatically                     |
| `npm run spell`            | Check spelling in source files                      |
| `npm run analysis`         | Run code analysis                                   |

## Changelog

All notable changes to this project are automatically documented in
[CHANGELOG.md](CHANGELOG.md). The changelog is generated from git commits using
[auto-changelog](https://github.com/CookPete/auto-changelog) and follows the
[Conventional Commits](https://www.conventionalcommits.org/) standard.

## License

MIT

## Author

Nova Admin <admin@nova.eco>
