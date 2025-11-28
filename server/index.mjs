/*********************************************************************
 *                                                                   *
 * SCRIPT:      server/index.mjs                                     *
 *                                                                   *
 * AUTHOR:      Nova Admin <admin@nova.eco>                          *
 *                                                                   *
 * DATE:        28th November 2025                                   *
 *                                                                   *
 * PURPOSE:     Express server def for nova-web                      *
 *                                                                   *
 *********************************************************************/

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import express from 'express';

const dirNameDist = 'dist';
const errorNotFound = 'NOT_FOUND';
const fileNameCurrent = fileURLToPath(import.meta.url);
const fileNameEnv = '.env';
const fileNameIndex = 'index.html';

const dirPathServer = path.dirname(fileNameCurrent);
const dirPathRoot = path.resolve(dirPathServer, '../');
const dirPathDist = path.resolve(dirPathRoot, dirNameDist);
const filePathIndex = path.resolve(dirPathDist, fileNameIndex);

const requiredFilePaths = [filePathIndex];

for (const requiredFilePath of requiredFilePaths) {
  if (!fs.existsSync(requiredFilePath)) {
    throw new Error(`requiredFilePath (${requiredFilePath}): ${errorNotFound}`);
  }
}

const envVarServerHost = 'NOVA_WEB_HOST';
const envVarServerName = 'NOVA_WEB_NAME';
const envVarServerPort = 'NOVA_WEB_PORT';
const envVarsRequired = [envVarServerHost, envVarServerName, envVarServerPort];

for (const envVarRequired of envVarsRequired) {
  if (typeof process.env[envVarRequired] === 'undefined') {
    throw new Error(`envVarRequired (${envVarRequired}): ${errorNotFound}`);
  }
}

const serverHost = process.env[envVarServerHost];
const serverName = process.env[envVarServerName];
const serverPort = process.env[envVarServerPort];

const app = express();
let starttime = null;

app.use(express.static(dirPathDist));

app.get('/healthcheck', (req, res) => {
  const uptime = Date.now() - starttime;
  res.send({ uptime });
});

app.get('/', (req, res) => {
  res.sendFile(filePathIndex);
});

app.listen(serverPort, () => {
  starttime = Date.now();
  console.info(`${serverName}: available at ${serverHost}:${serverPort}`);
});
