# `web`: The web application for the Noora platform

### Prerequisites

The documentation below uses [`pnpm`](https://pnpm.io), but you can replace it with your package manager of choice.

### Getting started

```sh
# Navigate to the project directory
cd web

# Install dependencies
pnpm i

# Start the development server
pnpm dev
```

### Adding new UI components

This repository uses [`shadcn/ui`](https://ui.shadcn.com/) for UI components. To add new components, run `pnpm ui:add [component name]` in `apps/web` or in the project directory to generate the new components. If you're unsure what the component name is, please check with the [documentation](https://ui.shadcn.com/). An example looks like this:

```sh
# Ensure you're in the project directory
cd web

# Add the button component.
# We know that `button` is a valid name because we checked the documentation: https://ui.shadcn.com/docs/components/button.
pnpm ui:add button
```
