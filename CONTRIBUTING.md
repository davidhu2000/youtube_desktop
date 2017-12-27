# Contributing

Want to contribute? Awesome. We love contributors.

## How to Contribute

Fork then clone the repo:

    git clone git@github.com:your-username/youtube_desktop.git

You will need to create your own Youtube Api Key. Here is the [link](https://developers.google.com/youtube/v3/getting-started) on how to get your own keys.

Below is a sample `api_keys.js` file that is in `.gitignore`. Please make your own version of this javascript file and name it `api_keys.js` and you will be able to run this project.

```js
module.exports = {
  publicDataKey: 'your public data key',
  clientId: 'your client id',
  clientSecret: 'your client secret'
};
```

Create a new branch:

    git checkout -b awesome-feature

Install the necessary dependencies (you can use `npm` or `yarn`:

    npm install

Let webpack create the bundle files and watch for changes:

    npm run watch

Start up the electron window in a separate terminal:

    npm run start

Make or add changes, commit your changes:

    git add -A;
    git commit -m 'Awesome new feature';

Make sure to run the necessary tests and lints and fix any errors:

    npm run lint;

Push up to Github:

    git push origin awesome-feature;

[Create a Pull Request][pr], add appropriate label(s).

[pr]: https://www.github.com/davidhu2000/youtube_desktop/compare/

_Congratulations!_ You are done. Just wait for us to review your code.

## Issues or Feature Requests

Please click [here](https://github.com/davidhu2000/youtube_desktop/issues/new) to report an issue or request a new feature.

**See [Git Instructions](docs/git_instructions.md) on how to:**

- pull remote branches that are not on local repo.
- fast forward branches that are behind the master.
- stash and un-stash uncommitted changes
