# Overview

- A React based component, which should be called 'PageHeader'.
- It should receive two string props: title (required) and subtitle (optional)

# Logic

- Title should displayed as an H1 and use the primary font colour.
- When present, the subtitle should be an H3.
- Visually, the subtitle should be below the title.
- The subtitle should use the secondary font colour.
- For mobile views, the subtitle should be shown as standard text (and not H3).

# Props

- The prop should be defined in an interface file called 'PageHeaderProps.ts'.
- 'PageHeaderProps.ts' should also contain a 'theme' property, which should be defined as
  having a 'UserInterfaceThemeModel' type.

# Styling

- Styling declarations should be placed in a separate CSS Module called
  'PageHeader.module.css'.
- The CSS Module should begin with the following Tailwind declaration: @reference
  "tailwindcss";.
- The styling declarations should make use of Tailwind.
- The styling declarations should be imported into the component using wildcard syntax:
  import \* as styles from './PageHeader.module.css'
- Colour theme variables from './src/styles' should be used.
- lucide-react should be used for any icons.

# Exports

- 'PageHeader.tsx should be exported as a named export.
- An associated index file should export 'PageHeader.tsx' as a default.
