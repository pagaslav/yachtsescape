module.exports = {
  types: [
    { value: "feat", name: "feat:     A new feature" },
    { value: "fix", name: "fix:      A bug fix" },
    { value: "docs", name: "docs:     Documentation only changes" },
    {
      value: "style",
      name: "style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)",
    },
    {
      value: "refactor",
      name: "refactor: A code change that neither fixes a bug nor adds a feature",
    },
    {
      value: "test",
      name: "test:     Adding missing tests or correcting existing tests",
    },
    {
      value: "chore",
      name: "chore:    Other changes that don't modify src or test files",
    },
  ],
  scopes: [
    { name: "core" },
    { name: "ui" },
    { name: "api" },
    { name: "tests" },
    { name: "docs" },
  ],
  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],
}