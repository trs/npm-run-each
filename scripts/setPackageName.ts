#!/usr/bin/env node

import {readFileSync, writeFileSync} from 'fs';

const [packageName, packageJSONPath] = process.argv.slice(2);

if (!packageName || !packageJSONPath) {
  throw new Error("Missing parameters");
}

const packageJSON = JSON.parse(readFileSync(packageJSONPath, {encoding: 'utf-8'}));

packageJSON.name = packageName;

writeFileSync(packageJSONPath, JSON.stringify(packageJSON, null, 2), {encoding: 'utf-8'});
