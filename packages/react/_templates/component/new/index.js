const fs = require('fs').promises;
const path = require('path');
const postsDirectory = path.join(process.cwd(), 'src/components');

const uppercaseFirstLetter = (word) =>
  word.replace(/\w/, (firstLetter) => firstLetter.toUpperCase());

const formattedExportString = (namedExport) =>
  `export { default as ${uppercaseFirstLetter(
    namedExport
  )} } from './${uppercaseFirstLetter(namedExport)}';`;

const getDirectoryNames = async () => {
  const directories = await fs.readdir(postsDirectory);
  return directories
    .map((directory) => formattedExportString(directory))
    .filter(
      (directory) =>
        !(
          directory.match(/index.ts/i) ||
          directory.match(/snippets.ts/i) ||
          directory.match(/.DS_Store/i)
        )
    );
};

module.exports = {
  prompt: async ({ prompter }) => {
    const data = await getDirectoryNames();
    return prompter
      .prompt({
        type: 'input',
        name: 'name',
        message: "What's the name of the component? (e.g. Button)",
      })
      .then(({ name }) => {
        !data?.includes(formattedExportString(name)) &&
          data.push(formattedExportString(name));
        return Promise.resolve({
          name: uppercaseFirstLetter(name),
          fileList: data.sort().join('\n'),
        });
      });
  },
};
