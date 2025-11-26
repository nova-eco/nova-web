# Overview

- A React based component which should be called 'SalonCardHeader'.
- It should receive 'location' and an array of 'salonImage' objects as props.
- The 'Location and 'SalonImage' types, along with their associated child types, can be
  found in './src/types'

# Logic

- If one of the received images has a 'salonImageTypeId' that evaluates to
  'salonImageType.value' = 'external', and if 'canUseExternally' is true, then show the
  image in a circle.
- If an 'external' is not present (or if it can not be used), and if one of the remaining
  images has a 'salonImageType.value' of 'internal', and if it has a 'canUseExternally'
  property of true, then show the 'internal' image in a circle.
- If no images can be shown, then display the map defined by 'map.url' (if present) in a
  circle.
- Otherwise, display the name of the salon in a cirle.

# Props

- Props should be defined in an interface file called 'SalonCardHeaderProps.ts'.
- In addition to the objects defined above, the interface should contain an optional prop
  called 'theme', which should be defined as having a 'UserInterfaceThemeModel' type.
- An 'onClick' function should also be accepted.
