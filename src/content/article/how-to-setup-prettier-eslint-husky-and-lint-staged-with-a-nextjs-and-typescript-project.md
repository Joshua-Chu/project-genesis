---
title: "How to setup Prettier, ESLint, Husky and Lint-Staged with a NextJS and Typescript Project"
description: "This article is about setting up Prettier, ESLint, Husky and Lint-Staged with a NextJS and Typescript Project "
publishDate: "Mar 6 2022"
tags: ["javascript", "nextjs", "webdev"]
draft: true
---

Working in a team can sometimes be challenging, we try to make our codebase look like it has been coded by one person. We can do this by adhering to a code style/format that everyone should follow.

However, it would be tiresome and impractical to do it manually and it would be easy to bypass and forget following these standards. Therefore, it's in our best interest to automate it using tools.

Setting up project tools can sometimes be a pain. I've been in this situation, existing materials is either out of date, has conflicting versions or simply just doesn't work on my end. And for that reason, I would like to share my own setup which I use for almost all of the projects I do.

> Disclaimer. Do keep in mind that these versions are working properly at the time of writing **Mar 6, 2022**. You can update these packages but make sure to account for these changes and fix conflicting errors.

### 1. Now, to start with our project. Let's install a fresh NextJS & Typescript project.

```bash
npx create-next-app --typescript new-app --use-npm
```

> I added the flag `--use-npm` to ensure that my project is generated using npm instead of yarn.

### 2. We would now be installing [Prettier](https://prettier.io/) and [EsLint](https://eslint.org/).

```bash
npm install prettier@2.5.1 eslint@8.9.0 -D
```

### 3 Install additional configs and plugins in order to extend the functionality of our linter.

These the are multiple configs and plugins that I use for every project. ( you can add or exclude anything that you don't want from this setup ). [Here](https://github.com/dustinspecker/awesome-eslint) is a list of things you can add.

- [**@typescript-eslint/eslint-plugin**](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) (version 5.3.0) - An ESLint plugin which provides lint rules for TypeScript codebases.

- [**eslint-config-airbnb**)](https://www.npmjs.com/package/eslint-config-airbnb) (version 18.2.1) - This package provides Airbnb's .eslintrc as an extensible shared config.
- [**eslint-config-prettier**](https://www.npmjs.com/package/eslint-config-prettier) (version 8.3.0) - Turns off all rules that are unnecessary or might conflict with [Prettier].

- [**eslint-plugin-jsx-a11y**](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) (version 6.4.1) - Static AST checker for accessibility rules on JSX elements.

- [**eslint-plugin-prettier**](https://www.npmjs.com/package/eslint-plugin-prettier) (version 4.0.0) -Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.

- [**eslint-plugin-react**](https://www.npmjs.com/package/eslint-plugin-react) (version 7.27.0) -React specific linting rules for eslint.

- [**eslint-plugin-react-hooks**](https://www.npmjs.com/package/eslint-plugin-react-hooks)(version 4.2.0) - This ESLint plugin enforces the Rules of Hooks.

- [**eslint-plugin-security**](https://www.npmjs.com/package/eslint-plugin-security) (version 1.4.0) - ESLint rules for Node Security.

- [**eslint-plugin-simple-import-sort**](https://www.npmjs.com/package/eslint-plugin-simple-import-sort) (version 7.0.0) - Easy autofixable import sorting.

- [**eslint-plugin-sonarjs**](https://www.npmjs.com/package/eslint-plugin-sonarjs) (version 0.12.0) - SonarJS rules for ESLint to detect bugs and suspicious patterns in your code.

To install these packages:

```bash
npm install @typescript-eslint/eslint-plugin@5.12.1 eslint-config-airbnb@18.2.1 eslint-config-prettier@8.4.0 eslint-plugin-jsx-a11y@6.5.1 eslint-plugin-prettier@4.0.0 eslint-plugin-react@7.27.0 eslint-plugin-react-hooks@4.3.0 eslint-plugin-security@1.4.0 eslint-plugin-simple-import-sort@7.0.0 eslint-plugin-sonarjs@0.12.0 -D
```

### 4. Setting up .eslintrc.js

After installing, we should start setting up our `.eslintrc.js` and `.prettierrc.js` files. Let's first setup our `.eslintrc.js` file. Currently our project scaffolding has a `.eslintrc.json` there is nothing wrong with using this as a default and writing the configs in JSON format but I prefer writing my configs in Javascript that's why we need to rename it.

```javascript title=".eslintrc.json"
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },

  env: {
    browser: true,
    node: true,
    es6: true,
  },

  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"],
      },
    },
  },

  plugins: ["@typescript-eslint"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "prettier",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:sonarjs/recommended",
    "plugin:security/recommended",
    "plugin:react-hooks/recommended",
  ],

  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "no-nested-ternary": "off",
    "import/prefer-default-export": "off",
  },
};
```

We need to export these configs inside an object. The first we need to setup is the parserOptions. we specify in `ecmaVersion` that we want our linter to support ES2020. `sourceType` indicates that we would be parsing files in Javascript Modules. and `ecmaFeatures` additional support that we would like to have, in our case we want to have `jsx` support.

The `env` defines which environments we will be supporting.

`settings` are just additional settings for our linter. `import/resolvers` sets the resolver for finding where the export is in `import x in "module"`.

`plugins` provides additional rule definitions like for the previous configs that we added.

`extends` extends configuration of our base file based on the eslint plugins we added.

> difference between plugins and extends is further discussed [here](https://prateeksurana.me/blog/difference-between-eslint-extends-and-plugins/).

finally, `rules` which specifies how your linter should treat every little detail you want to be checked. For me, these are the rules I want my linter to check or ignore. [Here](https://eslint.org/docs/rules/) are the list of rules you can add.

### 5. Setting up .prettierrc.js

We now setup our `.prettierrc.js`. By default, this is not included in the scaffolding of our project. Setting up our prettier configs are pretty much similar with how we setup eslint configs.

```js title=".prettierrc.js"
module.exports = {
  tabWidth: 4,
  printWidth: 80,
  endOfLine: "auto",
  arrowParens: "avoid",
  trailingComma: "es5",
  semi: true,
  useTabs: false,
  singleQuote: false,
  bracketSpacing: true,
};
```

Here are the prettier options I use for all of my projects. You can see that I prefer trailing commas and I don't like using single quotes. You can add more options and modify these according to the what your team agreed on. You can find the list of options [here](https://prettier.io/docs/en/options.html).

At this point everything should be working properly. But, there are instances that it doesn't. The first step I do to ensure that It's working properly is to restart my Code Editor. This usually solves the problem.

If you use `eslint-plugin-jsx-a11y` you might come up with an error:

```bash
Error: Plugin "jsx-a11y" was conflicted between ".eslintrc.json » eslint-config-next/core-web-vitals » /node_modules/eslint-config-next/index.js" and ".eslintrc.json » ../../.eslintrc.json » eslint-config-airbnb » /node_modules/eslint-config-airbnb/rules/react-a11y.js".
```

You can resolve this issue by ensuring that you've installed `eslint-plugin-jsx-a11y@^6.5.1` and
`eslint-plugin-react@^7.27.0` in your project and running `npm dedupe` : this is what [dedupe](https://docs.npmjs.com/cli/v7/commands/npm-dedupe) means.

Now, we've pretty much setup our ESLint and Prettier. Our work here is pretty much done. However, it would also be nice to catch these errors and fix code formatting on every git commit we make to ensure that we won't be pushing bad code accidentally and for that we would use [**Husky**](https://www.npmjs.com/package/husky) to create some git hooks.

### 6. Install and add the command we want to perform on every commit we perform.

```bash
npm install husky -D
```

And to initialize the our pre-commit hooks run:

```bash
npx  husky install
```

and

```bash
npx husky add .husky/pre-commit "npx tsc --noEmit && npx eslint --fix . && npx prettier --write ."
```

these commands ensures that there are no typescript errors with `tsc`. running `eslint` to ensure no linting error and formatting our code with prettier by runnint `prettier --write .`.

If you try to add and commit your changes right now you'll notice that the checking pauses and takes a bit of time to do that. This happens because it checks all the files even for those that didn't even change. This is a not optimal for us so we also want to use `lint-staged` package to only check those files that changed or those that we addded to the stage to later on commit.

### 7. Install `lint-staged`

```bash
npm install lint-staged -D
```

### 8. Now we're going to create a `lint-staged.config.js` file. add these rules:

```js title="lint-staged.config.js"
module.exports = {
  // this will check Typescript files
  "**/*.(ts|tsx)": () => "yarn tsc --noEmit",

  // This will lint and format TypeScript and                                             //JavaScript files
  "**/*.(ts|tsx|js)": (filenames) => [
    `yarn eslint --fix ${filenames.join(" ")}`,
    `yarn prettier --write ${filenames.join(" ")}`,
  ],

  // this will Format MarkDown and JSON
  "**/*.(md|json)": (filenames) =>
    `yarn prettier --write ${filenames.join(" ")}`,
};
```

### 9. go to the file under the `.husky` folder and open `pre-commit` and then replace the last line with .

```bash
npx lint-staged
```

And we're pretty much done with the setup. **Congratulations!** 🚀

## Conclusion

These tools are used in order to enhance the consistency of our codebase they help us enforce the rules and standards that we ought to follow. However, there are limitations to these tools and that we all must be aware of it. We must still code in a manner that would ideally need less of these tools. After all, we progress forwards and not back.
