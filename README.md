# facto store

Application for product configuration and order management

## Live view

[facto-store.vercel.app](https://facto-store.vercel.app)

## Table of Contents
- [Documentation](#documentation)
- [Features](#features)
- [Assumptions](#assumptions)
- [Future Improvements](#future-improvements)
- [Installation](#installation)
- [Stack and tools](#stack-and-tools)

## Documentation

- [Database and data models](./documentation/data-model.md)
- [User actions](./documentation/user-actions.md)

## Features

- Browse and purchase products, and customize product parts
- User-friendly interface with React components (prebuild components by shadcn/ui)
- Integration with PostgreSQL via Drizzle ORM

## Assumptions

- Anonymous users (users who have not logged in) will primarily interact with the application by browsing available products and configuring them based on predefined options
- Customization logic: The system assumes that product customization will be based on a modular structure where parts are independent entities that can be combined in various ways. The customization logic must handle dependencies between parts to prevent invalid configurations.

## Future Improvements

- Add test for the different use cases from unit to E2E, to ensure the quality and expect behavior of the system
- Improve Typescript types in general, and clean up `any` types
- Split UI components better and improve reuse them between public and private pages
- Add authentication, to allow a better tracking of the "save for later orders" from the users

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
