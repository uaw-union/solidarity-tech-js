# solidarity-tech-api

This is simply the solidarity.tech [API generator](https://docs.solidarity.tech/reference/solidarity-tech-api) compiled to be published as an npm package
for use in environments that don't support folders well (or importing JSON),
such as [Windmill scripts](https://windmill.dev/).

It was last generated on 06/05/2024.

## Typescript Usage

```typescript
import { createSdk } from 'solidarity-tech-js';

const sdk = createSdk()

sdk.auth(apiKey) // not defined here

// All examples from docs
```


