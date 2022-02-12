# Getting started

## Developer tools

First you’ll need to make sure that any new tools or apps will work in our
developer environment. To do this, open Terminal and run the following command:

```
xcode-select --install
```

This will install Xcode Command Line Tools. An installation dialogue window for
this should pop up.

## Rosetta 2

Apple has released a software solution to make the translation from Intel to M1
seamless – Rosetta 2. This emulator lets you run apps using x86 instructions
(the instruction set used by Intel chips) on ARM.

Rosetta isn’t installed by default. To use it, open Terminal and run the
following command:

```
/usr/sbin/softwareupdate --install-rosetta --agree-to-license
```

The `--agree-to-license` flag will disregard the interactive install and agree
to Apple’s licence.

## Homebrew

Open Terminal, run the command below and type in your computer password when
prompted:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## Zsh

Zsh should be your default shell, unless you excluded it from the
brew-installs.sh script. If you did exclude it, run `brew install zsh`. Make
sure Zsh is the default shell by running `echo $SHELL`, which should output
`/bin/zsh`. If this isn’t the output, change to Zsh by running
`chsh -s $(which zsh)`.

## Oh My Zsh

Oh My Zsh will make Zsh more powerful and easier to manage. Run the following
command to install it:

```
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

## Node

Install Node natively on ARM (M1) with version 15.6.0. Older versions will still
work, but they’ll need Rosetta 2 to run properly.

1. Install nvm (Node Version Manager):

```
# run this command in Terminal
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```

2. Install NodeJS version 15.6.0:

```
nvm install v15
```

You may be prompted to install command-line developer tools, if you haven’t
already. Install them and you may need to run the above command again. Once
done, nvm will build Node from the source. This may take up to 10 minutes.

3. Verify that NodeJS and npm have been installed by running the following
   command:

```
# check for node
node -v

# check for npm
npm -v
```

## Yarn

Yarn is the chosen package manager for all our projects. To get started with
this tool, run the following command:

```
npm install -g yarn
```

Run `yarn -v` to check if version `1.22.10` has been installed.

## Git and BitBucket

First, check that Git is installed. To do this, run `git --version` at the
command line.

Next, change `< USERNAME >` and `< EMAIL >` to your chosen user name and
`@lloyds.com` email address respectively.

Then run the following command sequence:

```
git config --global user.name < USERNAME > &&
git config --global user.email < EMAIL > &&
git config --global --list
```

Next, set up your SSH key and link this to your Bitbucket account. We recommend
authenticating via personal access tokens. Visit the official BitBucket tutorial
and follow the instructions.

## Commitizen

We standardise our commit messages using the Conventional Commit specification.
This is because standard-version will bump version (major, minor or patch) based
on the commit types (feature bumps minor; bug fix bumps patch; BREAKING CHANGES
bumps major; and so forth).

Commitizen helps us generate our commit messages. To install it, run the
following command in Terminal:

```
npm install -g commitizen
```

Once installed, after running `git add .` use the command `git cz`. This will
ask what type of commits we're committing (for example, feat, chore and fix) in
the CLI.

## You’re now set up 🚀

Congratulations! You’re ready for developing in Mono Design System.

Get in touch if you’ve got any questions or need any
additional support.
