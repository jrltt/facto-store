# facto store

Application for product configuration and order management

## Live view

[facto-store.vercel.app](https://facto-store.vercel.app)

## Table of Contents

- [facto store](#facto-store)
  - [Live view](#live-view)
  - [Table of Contents](#table-of-contents)
  - [Documentation](#documentation)
  - [Features](#features)
  - [Installation](#installation)
  - [Stack and tools](#stack-and-tools)

## Documentation

- [Database and data models](./documentation/data-model.md)
- [User actions](./documentation/user-actions.md)

## Features

- Browse and purchase products, and customize product parts
- User-friendly interface with React components (prebuild components by shadcn/ui)
- Integration with PostgreSQL via Drizzle ORM

## Installation

- NodeJs recommended version: 22, if you use nvm, you can run first `nvm use` to use the correct NodeJs vesion
- This project use `pnpm` to manage the packages and dependencies. More information [here](https://pnpm.io/)
- Remember to have up to date the `.env` file

Useful scripts

```bash
pnpm install # install dependencies
pnpm run db:generate # generate SQL file
pnpm run db:migrate # migrate SQL file
pnpm run dev # start dev environment
pnpm drizzle-kit studio # drizzle studio for db
```

## Stack and tools

- **Framework**: [Next.js](https://nextjs.org/) - React framework for server-rendered or statically-exported applications.
- **Components and styles**: [shadcn/ui](https://ui.shadcn.com/) - Accessible and customizable components / [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
- **Database**: [PostgreSQL](https://www.postgresql.org/) - Relational database management system.
- **ORM**: [Drizzle ORM](https://github.com/drizzle-team/drizzle-orm) - Type-safe ORM for SQL databases.
