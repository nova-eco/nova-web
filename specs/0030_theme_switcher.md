# Overview

- A React / Redux based component for toggling between light and dark themes.

# Features

- The component should be called 'ThemeSwitch.tsx' and it should be implemented in
  Typescript.
- The component should have two states: dark and light.
- The component's initial state should be derived from the Redux store:
  store.userInterface.theme.
- The component should update the store when toggled.

# Store

- For Redux store connections, the component should use 'mapStateToProps' and
  'mapDispatchToProps' functions.
- Those functions should be contained within an HOC called 'ThemeSwitchConnected.tsx'

# Props

- Props should be defined in an interface file called 'ThemeSwitchProps.ts'.

# Styling

- Styling declarations should be placed in a separate CSS Module called
  'themeSwitch.module.css'.
- The CSS Module should begin with the following Tailwind declaration: @reference
  "tailwindcss";.
- The styling declarations should make use of Tailwind.
- The styling declarations should be imported into the component using wildcard syntax:
  import \* as styles from './ThemeSwitch.module.css'

# Exports

- 'ThemeSwitch.tsx should be exported as a named export.
- 'ThemeSwitchConnected.tsx should be exported as a named export.
- Both of those .tsx files should be contained within a directory called 'ThemeSwitch'
- An index file (at the route of the directory) should export 'ThemeSwitchConnected.tsx'
  as the default.
