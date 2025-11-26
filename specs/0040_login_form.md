# Overview

- A React / Redux based login form.

# Features

- The component should be called 'LoginForm.tsx' and it should be implemented in
  Typescript.
- The component should have 'username' and 'password' fields.
- By default the password field should hide the entered details.
- However, the user should be provided with an option to view what has been enetered.

# Store

- For Redux store connections, the component should use 'mapStateToProps' and
  'mapDispatchToProps' functions.
- Those functions should be contained within an HOC called 'LoginFormConnected.tsx'

# Props

- Props should be defined in an interface file called 'ThemeSwitchProps.ts'.
- The interface should contain an optional prop called 'theme', which should be defined as
  having a 'UserInterfaceThemeModel' type.
- A dispatch function should also be accepted. It should be called 'userLogin' and it
  should reference 'userLoginThunk'.

# Styling

- Styling declarations should be placed in a separate CSS Module called
  'themeSwitch.module.css'.
- Note that the name of the CSS Module should begin with a lower case letter.
- The CSS Module should begin with the following Tailwind declaration: @reference
  "tailwindcss";.
- The styling declarations should make use of Tailwind.
- The styling declarations should be imported into the component using wildcard syntax:
  import \* as styles from './LoginForm.module.css'

# Exports

- 'LoginForm.tsx should be exported as a named export.
- 'LoginFormConnected.tsx should be exported as a named export.
- Both of those .tsx files should be contained within a directory called 'LoginForm'
- An index file (at the route of the directory) should export 'LoginFormConnected.tsx' as
  the default.
