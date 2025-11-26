# Overview

- A React based componeny, which should be called 'SalonCardBody'.
- It should receive a 'Salon' object as a data prop.
- The 'Salon' type, along with associated child types, can be found in './src/types.

# Logic

- 'SalonCardBody' should display the received summary text (salon.summary).
- It should also indicate that further information is available.
- When the indicator is clicked upon, the summary text should be swapped for
  salon.description.

# Props

- Props should be defined in an interface file called 'SalonCardBodyProps.ts'.
- In addition to the data object defined above, the interface should contain an optional
  prop called 'theme', which should be defined as having a 'UserInterfaceThemeModel' type.

# Styling

- Styling declarations should be placed in a separate CSS Module called
  'SalonCardBody.module.css'.
- The CSS Module should begin with the following Tailwind declaration: @reference
  "tailwindcss";.
- The styling declarations should make use of Tailwind.
- The styling declarations should be imported into the component using wildcard syntax:
  import \* as styles from './SalonCardBody.module.css'
- Colour theme variables from './src/styles' should be used.
- lucide-react should be used for any icons.

# Exports

- 'SalonCardBody.tsx should be exported as a named export.
- An associated index file should export 'SalonCardBody.tsx' as a default.
