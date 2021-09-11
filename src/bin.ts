#!/usr/bin/env node

import { runScript } from "./script";
import { name } from '../package.json';

const [manager] = name.split('-');

const scriptNames = process.argv.slice(2);

void async function () {
  for (const scriptName of scriptNames) {
    try {
      await runScript(manager, scriptName);
    } catch (err) {
      break;
    }
  }
}();
