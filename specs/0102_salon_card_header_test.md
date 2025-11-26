# Overview

- From the root of the project, create a 'test' directory, which will be used to contain
  all of the tests.
- Within 'test' create 'fixtures', 'integration' and 'unit' child directories.
- Within 'unit', create a further directory called 'components', which should be used to
  hold all component based unit tests.
- Within 'componets', create the following folders 'SalonCardHeader',
  'SalonCardHeaderImage' and 'SalonCardHeaderImageFallback'
- For each component, create Jest based positive and negative parameterised tests.
- For example, the positive tests for SalonCardHeader should be located in a file called
  'SalonCardHeader.positive.test.tsx'
- Equally, the negative tests for SalonCardHeader should be located in a file called
  'SalonCardHeader.negative.test.tsx'
- The params used for the positive tests should lead to successful outcomes.
- The params used for the negative tests should lead to errors or the expected content not
  being displayed.
- Fixtures should be defined within ./test/fixtures
- Mocks should be defined within ./test/mocks
- Fixtures or mocks should be imported into a test using '@test/ ...'
