# Copa Website Cloner

This repository contains the code for the Copa Website Cloner project. The purpose of this project is to provide a tool for cloning websites, including their structure and content, for various use cases such as backups, migrations, and offline browsing.

## Project Structure

The project is organized into the following directories:

```
copa-website-cloner/apps/
├── server/ (Nest.js backend)
│   ├── src/
│   │   ├── app.controller.ts
│   │   ├── app.controller.spec.ts
│   │   ├── app.module.ts
│   │   ├── app.service.ts
│   │   ├── main.ts
│   │   ├── cloner/
│   │   │   ├── cloner.controller.ts
│   │   │   ├── cloner.controller.spec.ts
│   │   │   ├── cloner.module.ts
│   │   │   ├── cloner.service.ts
│   │   │   └── dto/
│   │   │       ├── clone-website.dto.ts
│   │   │       └── clone-result.dto.ts
│   │   ├── database/
│   │   │   ├── database.module.ts
│   │   │   └── entities/
│   │   │       ├── clone-job.entity.ts
│   │   │       └── index.ts
│   │   ├── config/
│   │   │   └── configuration.ts
│   │   └── utils/
│   │       ├── website-cloner.util.ts
│   │       └── file-generator.util.ts
│   ├── test/
│   │   ├── app.e2e-spec.ts
│   │   └── jest-e2e.json
│   ├── .env
│   ├── .eslintrc.js
│   ├── .prettierrc
│   ├── nest-cli.json
│   ├── package.json
│   ├── tsconfig.build.json
│   └── tsconfig.json
│
├── .gitignore
├── package.json (workspace)
├── README.md
└── docker-compose.yml (optional)
```

## Setup and Run

To set up and run the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/githubnext/workspace-blank.git
   cd workspace-blank
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the `copa-website-cloner/apps/server` directory and add the necessary environment variables.

4. Run the Nest.js server:
   ```bash
   npm run start:dev
   ```

5. Access the application:
   Open your browser and navigate to `http://localhost:3000`.

## Contributing

We welcome contributions to the Copa Website Cloner project. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with clear and descriptive commit messages.
4. Push your changes to your forked repository.
5. Create a pull request to the main repository.

Please ensure that your code follows the project's coding standards and includes appropriate tests.

Thank you for contributing!
