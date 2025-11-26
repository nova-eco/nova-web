# Overview

- Update 'SalonCardHeader' to received an array of 'salonImageTypes' from a
  'mapStateToProps' function contained within an HOC called 'SalonCardHeaderConnected'.
- Modify findValidImage to accept (in addition to the existing args) the array of
  'salonImageTypes'
- Modify findValidImage to find the salonImageType by salonImage.imageTypeId
- Remove SalonImageWithType
- Export SalonCardHeaderConnected as the default component.
