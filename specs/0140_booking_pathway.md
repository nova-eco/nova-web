# Overview

- A React based component, which should be called 'BookingPathway'.
- It should be placed in the following directory: './src/pages/BookingPathway/'

# Props

- The page should receive the following props:
  - 'startBookingPathway' as a function: (userId: string) => void.
  - 'nextBookingPathwayRoute' as a string.
  - userId: string
  - theme: 'UserInterfaceThemeModel'.

# Logic

- Within a 'useEffect' hook using no depenencies, the startBookingPathway function should
  be called.
- Within a 'useEffect' hook with nextBookingPathwayRoute as a depenency, any when
  nextBookingPathwayRoute !== "", the React Router (const navigate = useNavigate())
  navigate should be called within nextBookingPathwayRoute.

# Store

- 'BookingPathwayConnected' should be an HOC with 'mapStateToProps' and
  'mapDispatchToProps' functions
- mapStateToProps to pass nextBookingPathwayRoute, theme and userId to the component
- mapDispatchToProps should pass startBookingPathway.
- The location (or origin) of startBookingPathway is yet to be determined.

# Styling

- Styling declarations should be placed in a separate CSS Module called
  'BookingPathway.module.css'.
- The CSS Module should begin with the following Tailwind declaration: @reference
  "tailwindcss";.
- The styling declarations should make use of Tailwind.
- The styling declarations should be imported into the component using wildcard syntax:
  import \* as styles from './BookingPathway.module.css'
- Colour theme variables from './src/styles' should be used.
- lucide-react should be used for any icons.

# Exports

- 'BookingPathway.tsx should be exported as a named export.
- An associated index file should export 'BookingPathwayConnected.tsx' as a default.
