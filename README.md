# @podium/eslint-config

Shared config for ESLint used in Podium projects.

## Install

```
npm install --save-dev eslint @podium/eslint-config
```

## Usage

Create and add this to `eslint.config.js`:

```js
import config from "@podium/eslint-config";

export default config;
```

The default config should cover most needs, but you can extend or override if you need to.

```js
import config from "@podium/eslint-config";

export default [
	...config,
	/* Your customisations */
	{
		ignores: [".docusaurus/*"],
	},
];
```

If you do need to change the config, consider whether that change should happen here in the shared config so it applies to all repos.
