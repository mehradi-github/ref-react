# Getting Started with Create React App

- [Getting Started with Create React App](#getting-started-with-create-react-app)
  - [Emmet](#emmet)
    - [Adding Emmet in Visual Studio Code](#adding-emmet-in-visual-studio-code)

## Emmet

[Emmet — the essential toolkit for web-developers](https://github.com/mehradi-github/ref-landingpage-photography#emmet--the-essential-toolkit-for-web-developers)

### Adding Emmet in Visual Studio Code

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

For your current project only update the configuration in ".vscode/settings.json".
