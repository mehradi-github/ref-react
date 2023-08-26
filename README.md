# Getting Started with Create React App

- [Getting Started with Create React App](#getting-started-with-create-react-app)
  - [Emmet](#emmet)
    - [Emmet not working in Visual Studio Code issue \[Solved\]](#emmet-not-working-in-visual-studio-code-issue-solved)
    - [Only updating the configuration for your current project](#only-updating-the-configuration-for-your-current-project)

## Emmet

[Emmet — the essential toolkit for web-developers](https://github.com/mehradi-github/ref-landingpage-photography#emmet--the-essential-toolkit-for-web-developers)

### Emmet not working in Visual Studio Code issue [Solved]

1. Press Ctrl + Shift + P (or Command + Shift + P on macOS).
2. Type user settings json.
3. Click on Preferences: Open User Settings (JSON)

```json
"emmet.triggerExpansionOnTab": true,
"files.associations": {
  "*html": "html",
  "*njk": "html"
},
"emmet.useInlineCompletions": true,
"emmet.includeLanguages": {
  "javascript": "javascriptreact",
  "typescript": "typescriptreact",
  "vue-html": "html",
  "vue": "html",
  "razor": "html",
  "plaintext": "pug",
  "django-html": "html"
},
"emmet.showSuggestionsAsSnippets": true,
"emmet.showExpandedAbbreviation": "always",

```

### Only updating the configuration for your current project

.vscode/settings.json

```json
{
  "emmet.triggerExpansionOnTab": true,
  "files.associations": {
    "*html": "html",
    "*njk": "html"
  },
  "emmet.useInlineCompletions": true,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "typescript": "typescriptreact",
    "vue-html": "html",
    "vue": "html",
    "razor": "html",
    "plaintext": "pug",
    "django-html": "html"
  },
  "emmet.showSuggestionsAsSnippets": true,
  "emmet.showExpandedAbbreviation": "always"
}
```
