# Contributing

Want to contribute? Awesome. We love contributors.

## How to Contribute

To fix a bug or create a feature, follow these steps:

1. Fork the repo and run `git clone git@github.com:your-username/youtube_desktop.git`.
2. Create a new branch ( `git checkout -b awesome-feature` ).
3. Install node modules using `npm install` or `yarn install`. 
4. `npm run watch` or `yarn run watch` to allow webpack to continueously watch for changes.
5. In a new terminal, `npm run start` or `yarn run start` to start up the electron window.
6. Make changes or add new changes.
7. Commit your changes (`git add -A; git commit -m 'Awesome new feature'`)`
8. Push the changes up to Github (`git push origin awesome-feature`)
9. [Create a Pull Request][pr], add appropriate label(s) and assign [David Hu][dh] as the reviewer.
10. You are done. Just wait for us to review your code. 

[pr]: https://www.github.com/davidhu2000/youtube_desktop/compare/
[dh]: https://www.github.com/davidhu2000

Please click [here](https://github.com/davidhu2000/youtube_desktop/issues/new) to report an issue or request a new feature.

**See [Git Instructions](docs/git_instructions.md) on how to:**

- pull remote branches that are not on local repo.
- fast forward branches that are behind the master.
- stash and un-stash uncommitted changes
