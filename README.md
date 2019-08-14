## JS State Machine Typing
- [Winston Papertrail](https://github.com/kenperkins/winston-papertrail) Typing
- Copy from https://github.com/sgronblo/winston-papertrail-declaration with some small modification.

## Command
- `npm install @ts-typings/winston-papertrail`
- Include custom types in your tsconfig. I.e:

```
"compilerOptions": {
  ...
  "baseUrl": "./",
  "paths": {
    "*": ["node_modules/@ts-typings/*"]
  }
}
```
