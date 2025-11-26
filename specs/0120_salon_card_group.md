# Overview

- A React based component, which should be called 'SalonCardGroup'.
- It should receive a 'salons' as an array data prop of 'Salon[]' type.
- The 'Salon' type, along with associated child types, can be found in './src/types.

# Logic

- 'SalonCardGroup' should render one 'SalonCard' for each salon element within the
  received 'salons' array.
- 'SalonCardGroup' should display no more than four cards in a single row (irrespective of
  the screen width).
- 'SalonCardGroup' should space the cards equals (along each row)
- 'SalonCardGroup' should be responsive, handling mobile, tablet and desktop perspectives.

# Props

- The 'salons' prop should be referenced in an interface file called 'SalonCardProps.ts'.
- 'SalonCardProps.ts' should also contain a 'theme' property, which should be defined as
  having a 'UserInterfaceThemeModel' type.

# Styling

- Styling declarations should be placed in a separate CSS Module called
  'SalonCardGroup.module.css'.
- The CSS Module should begin with the following Tailwind declaration: @reference
  "tailwindcss";.
- The styling declarations should make use of Tailwind.
- The styling declarations should be imported into the component using wildcard syntax:
  import \* as styles from './SalonCardGroup.module.css'
- Colour theme variables from './src/styles' should be used.
- lucide-react should be used for any icons.

# Exports

- 'SalonCardGroup.tsx should be exported as a named export.
- An associated index file should export 'SalonCardGroup.tsx' as a default.
