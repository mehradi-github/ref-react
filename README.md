# Getting Started with Create React App

## Emmet not working in Visual Studio Code issue [Solved]

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
