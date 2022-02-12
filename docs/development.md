# Development

## Getting started

The Mono design system is build on a collection of packages, built within a
[monorepo](https://en.wikipedia.org/wiki/Monorepo). We use a few primary tool to
manage and publish all our packages:

- [Yarn](#) for handing all workspace dependancy management
- [Lerna](https://github.com/lerna/lerna) for optimising workflows across the
  repo
- [Semantic Release](https://github.com/semantic-release/semantic-release) for
  automated version management and publishing

To work on this project you'll need to have [Yarn](#) setup on your machine
([please follow this guide for M1 MacBook step](#)). In order for you to install
all the dependencies in this project you'll need to run the follow command after
setup:

```sh
yarn install
```

> Please note, this project is not managed using `npm`. Using it with this
> project might not result in correct builds or dependancy management

Once all dependancies have been installed you'll be able to start active
development on the project. To build all our packages run the following command:

```sh
yarn build
```

## Common tasks

Here are some root level commands and tasks you'll need to run from time to
time:

| Command           | Usage                                                                                    |
| ----------------- | ---------------------------------------------------------------------------------------- |
| `yarn build`      | Uses lerna to run the build script in each package                                       |
| `yarn clean`      | Removes all `node_modules` packages from the root of the project and within each package |
| `yarn lint`       | Runs stylelint and ESlint across all packages                                            |
| `yarn lint:fix`   | Fixes any lint errors across all packages                                                |
| `yarn format`     | Runs Prettier formatting and checks all files are correct                                |
| `yarn format:fix` | Fixes any Prettier errors across all packages                                            |
| `yarn test`       | Runs any unit testing within each package                                                |
| `yarn start`      | Starts storybook from the [`@lloydsoflondon/react`](./packages/react) package            |

## Commit conventions

Our changelogs are generated from commit history, and single-issue PRs that
allow maintainers to use Squash & Merge strategy to create well-written
conventional merge commits.

### Commit message format

_This section is duplicated from
[conventionalcommits.org](https://www.conventionalcommits.org/en/v1.0.0/#summary)_.

The Conventional Commits specification is a lightweight convention on top of
commit messages. It provides an easy set of rules for creating an explicit
commit history; which makes it easier to write automated tools on top of. This
convention dovetails with SemVer, by describing the features, fixes, and
breaking changes made in commit messages.

The commit message should be structured as follows:

```sh
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

The commit contains the following structural elements, to communicate intent to
the consumers of your library:

1. _fix_: a commit of the type `fix` patches a bug in your codebase (this
   correlates with [`PATCH`](http://semver.org/#summary) in Semantic
   Versioning).
2. _feat_: a commit of the type `feat` introduces a new feature to the codebase
   (this correlates with [`MINOR`](http://semver.org/#summary) in Semantic
   Versioning).
3. _BREAKING CHANGE_: a commit that has a footer `BREAKING CHANGE:`, or appends
   a `!` after the type/scope, introduces a breaking API change (correlating
   with [`MAJOR`](http://semver.org/#summary) in Semantic Versioning). A
   BREAKING CHANGE can be part of commits of any type.
4. types other than fix: and feat: are allowed, for example
   @commitlint/config-conventional (based on the the Angular convention)
   recommends build:, chore:, ci:, docs:, style:, refactor:, perf:, test:, and
   others.
5. footers other than BREAKING CHANGE: <description> may be provided and follow
   a convention similar to git trailer format.

Additional types are not mandated by the Conventional Commits specification, and
have no implicit effect in Semantic Versioning (unless they include a BREAKING
CHANGE). A scope may be provided to a commit’s type, to provide additional
contextual information and is contained within parenthesis, e.g.,
`feat(parser): add ability to parse arrays`.

### Examples

_Commit message with description and breaking change footer_

```sh
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

_Commit message with no body_

```sh
docs: correct spelling of CHANGELOG
```

_Commit message with scope_

```sh
feat(lang): add polish language
```

### Why use Conventional Commits

- Automatically generating CHANGELOGs.
- Automatically determining a semantic version bump (based on the types of
  commits landed).
- Communicating the nature of changes to teammates, the public, and other
  stakeholders.
- Triggering build and publish processes.
- Making it easier for people to contribute to your projects, by allowing them
  to explore a more structured commit history.

### Commitzen

This repo is a [Commitizen](https://github.com/commitizen/cz-cli) friendly
workspace, if you have setup the CLI tool you can simply use `git cz` instead of
`git commit`. You'll be prompted to fill in any required fields and your commit
messages will be formatted according to the standards defined by the project.

### Commitlint

On all commits
[Commitlint](https://github.com/conventional-changelog/commitlint) will check if
your commit message meets the
[conventional commits format](https://conventionalcommits.org/).

## Pull requests

Pull requests are only accepted in a single-issue format. This means a pull
request must only address one issue at a time, with specific changes being split
into separate pull requests. If you do not follow these guidelines, you may be
asked to split your PR into multiple PRs.

Why? They are quicker to review and help us to write the changelogs. Our
changelogs are generated from commit history, and single-issue PRs allow
maintainers to use
[BitBuckets Squash & Merge strategy](https://confluence.atlassian.com/bitbucketserver/pull-request-merge-strategies-844499235.html)
to create well-written conventional merge commits.

If a maintainer leaves comments, **do not resolve them**. Instead, leave them
for the maintainer to resolve. These are useful checklists for maintainers to
check you've added everything before the final merge.

**Steps**

1. Open a pull request for a specific issue. Assign it to yourself.
2. Wait for someone to review the PR.
3. If the PR is approved, the maintainer will merge it. You're done.
4. If the PR is not approved, go through each comment and address it, using
   either new commits or fixing up existing ones.
5. Do not resolve the issues. Instead, leave a reply saying "Done" on each
   comment.
6. Once it's ready for re-review, request a re-review using GitHub's re-review
   feature. Go back to 2.

### Reviews

Reviewing pull requests should only be done by maintainers. Please make sure
you're also be familiar with the Opening a PR guidelines.

In addition to reviewing the changes as you normally would, reviewers are
responsible for writing the changelog entry when writing merge commit using
Conventional Commits.

**Steps**

1. Start your review as normal.
2. Ensure that there is only one specific change in the PR.
3. Use suggested changes wherever possible to speed up the process.
4. Ensure the tests are passing.
5. Approve or reject the PR.
6. If you requested changes, wait for them to be done before reviewing and
   resolving each line comment. Contributors should leave these for you to
   resolve so that you have a checklist.
7. Merge the PR using Squash & Merge, writing an Angular-style conventional
   merge commit that considers our commit message guidelines. This will be used
   to generate the changelog.
