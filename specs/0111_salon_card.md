# Overview

- A React based component, which should be called 'SalonCard'.
- It should receive a 'salon' as a data prop of 'Salon' type.
- The 'Salon' type, along with associated child types, can be found in './src/types.

# Logic

- 'SalonCard' should render items as children within 'Card'.
- It should call 'SalonHeader' and 'SalonBody', rendering the header vertically above the
  body.
- Beneath the body, it should render a button, whose text should read 'Select'.
- When clicked, the button should pass the id of the received salon to the received
  'setSalonId' function.

# Props

- The 'salon' propd should be referenced in an interface file called
  'SalonCardOwnProps.ts'.
- A further interface file, called 'SalonCardProps.ts', should extend from
  'SalonCardOwnProps.ts'.
- 'SalonCardProps.ts' should contain a 'theme' property, which should be defined as having
  a 'UserInterfaceThemeModel' type.
- It should also contain the definition of the setSalonId function: (salonId: string) =>
  void

# Store

- 'SalonCardConnected' should be an HOC with 'mapStateToProps' and 'mapDispatchToProps'
  functions
- mapStateToProps to pass theme to the component
- mapDispatchToProps should pass setSalonId.
- The location (or origin) of setSalonId is yet to be determined.

# Styling

- Styling declarations should be placed in a separate CSS Module called
  'SalonCard.module.css'.
- The CSS Module should begin with the following Tailwind declaration: @reference
  "tailwindcss";.
- The styling declarations should make use of Tailwind.
- The styling declarations should be imported into the component using wildcard syntax:
  import \* as styles from './SalonCard.module.css'
- Colour theme variables from './src/styles' should be used.
- lucide-react should be used for any icons.

# Exports

- 'SalonCard.tsx should be exported as a named export.
- An associated index file should export 'SalonCardConnected.tsx' as a default.
