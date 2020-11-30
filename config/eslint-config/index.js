module.exports = {
    "extends": "react-app",
    "overrides": [
      {
        "files": ["**/*.js", "**/*.ts", "**/*.tsx"],
        "parser": "@typescript-eslint/parser",
        "plugins": ["@typescript-eslint"],
        "rules": {
          "@typescript-eslint/no-unused-vars": [
            2,
            {
              "args": "none"
            }
          ],
          "import/no-anonymous-default-export": [
            2,
            {
              "allowArray": true,
              "allowArrowFunction": true,
              "allowAnonymousClass": true,
              "allowAnonymousFunction": true,
              "allowCallExpression": true, // The true value here is for backward compatibility
              "allowLiteral": true,
              "allowObject": true
            }
          ]
        }
      }
    ]
}
