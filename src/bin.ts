#!/usr/bin/env node

import { runScript } from "./script";

const scriptNames = process.argv.slice(2);

void async function () {
  for (const scriptName of scriptNames) {
    try {
      await runScript(scriptName);
    } catch (err) {
      break;
    }
  }
}();
