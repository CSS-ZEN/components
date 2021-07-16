# Components

React.js components & hooks used in [CSS-ZEN/garden](https://czg.vercel.app).

View details of the components and hooks at [bit.dev/csszen](https://bit.dev/csszen/~collections).

## Install

To install components in non-bit projects, append this to your `.npmrc`

```bash
@csszen:registry=https://node.bit.dev
always-auth=true
```

Or run `npm config set @csszen:registry https://node.bit.dev` instead.

Then you can install components with npm/yarn like:

`yarn add @csszen/components.markdown`

Especially, if you are using `Next.js`, you may need to transiple these modules with [next-transpile-modules](https://www.npmjs.com/package/next-transpile-modules) as [Next.js are not allowed to include CSS Modules in node modules](https://nextjs.org/docs/messages/css-modules-npm).

You may find more instructions at [bit.dev#installing-components](https://harmony-docs.bit.dev/building-with-bit/installing-components/). Or take [CSS-ZEN/garden](https://github.com/CSS-ZEN/garden) as an example.

## Contribution Guidelines

To start development from zero, run `npm run bootstrap` and run development environment with `npm start`.

- To add a component: `bit create react-component [componentname]`
- To add a hook: `bit create react-hook -s hooks [hookname]`

## LICENSE

Copyright (c) 2021 CSS ZEN
