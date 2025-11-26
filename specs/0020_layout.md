# Overview

- A React based responsive Tailwind / CSS Grid based layout into which additional
  components (to be developed later) will be placed.

# Features

- The layout should be called 'BaseLayout.tsx' and it should be implemented in Typescript.
- The layout should be responsive.
- The layout should contain a position for a full width top navigation bar component,
  which should be 'sticky'.
- The layout should contain a position for a left hand side secondary navigation bar
  component.
- The layout should contain a position for a full width footer.
- The layout should contain a position for main content, which should be generated from a
  React Router Outlet component: <Outlet />
- The layout should also contain a position for an overlay component.

# Styling

- Styling declarations should be placed in a separate CSS Module called
  'StandardLayout.module.css'.
- The styling declarations, themselves, should make use of Tailwind.

# Exports

- The layout should be exported as a named export.
- The layout should be placed in a directory called 'StandardLayout'.
- The 'StandardLayout' directory should contain 'index.ts'.
- The index file should export 'StandardLayout' as the default.
