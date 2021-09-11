# `npm-run-each`

Given a list of script names, run them in series.

## Usage

```
npm-run-each <script-name> [...script-names]
```

## Example

```jsonc
// package.json
{
  "scripts": {
    "one": "...",
    "two": "..."
  }
}
```

```
npm-run-each one two
```
