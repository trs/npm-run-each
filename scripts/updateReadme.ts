#!/usr/bin/env node

import {readFileSync, writeFileSync} from 'fs';

const [packageName, readmePath] = process.argv.slice(2);

if (!packageName || !readmePath) {
  throw new Error("Missing parameters");
}

const readme = readFileSync(readmePath, {encoding: 'utf-8'});

writeFileSync(readmePath, readme.replace(/(\w+-run-each)/g, packageName), {encoding: 'utf-8'});
