import * as path from 'node:path';
import * as dotenv from 'dotenv';
import '@testing-library/jest-dom';

/*********************************************************************
 *                                                                   *
 * SCRIPT:      envVars.ts                                           *
 *                                                                   *
 * AUTHOR:      Nova Admin <admin.nova.eco>                          *
 *                                                                   *
 * PURPOSE:     Set up test specific env vars, using '.env'          *
 *              with overrides from '.env.override.jest'.            *
 *                                                                   *
 *********************************************************************/

/*
 * 1. DIR PATHS
 */
const currentDirPath = __dirname;
const rootDirPath = path.resolve(currentDirPath, '../../');

/*
 * 2. ENV FILE NAMES
 */
const envBaseFileName = '.env';
const envOverridesFileName = '.env.override.jest';

/*
 * 3. ENV FILE PATHS
 */
const envBaseFilePath = path.resolve(rootDirPath, envBaseFileName);
const envOverridesFilePath = path.resolve(rootDirPath, envOverridesFileName);

/*
 * 4. DOTENV CONFIG WITH OVERRIDE
 */
dotenv.config({
  override: true,
  path: [envBaseFilePath, envOverridesFilePath],
  quiet: true,
});
