import task from 'tasuku';
import {exec} from 'child_process';

export async function runScript(name: string) {
  const script = `npm run ${name}`;
  return task(script, async () => {
    await new Promise<void>((resolve, reject) => {
      const child = exec(script, (err, stdout, stderr) => {
        if (err) {
          reject(stderr ?? stdout);
          return;
        }

        resolve();
      });

      const verbose = false;
      if (verbose) {
        child.stdin?.pipe(process.stdin);
        child.stdout?.pipe(process.stdout);
        child.stderr?.pipe(process.stderr);
      }
    });
  });
}
