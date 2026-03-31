# Contributing to Groundwork

Groundwork is a shared React component library for USACE applications. Keep changes small, well-scoped, and documented so maintainers can review and release them predictably.

## Development setup

Groundwork's GitHub Actions workflows run on Node 20. Use the same version locally when possible.

```bash
npm install
npm run dev
npm test
npm run lint
```

## Coding standards

- Use Prettier formatting. A Husky pre-commit hook runs `lint-staged`, which applies Prettier to staged `js`, `jsx`, `json`, `css`, and `md` files.
- Run `npm run lint` before opening a pull request. ESLint is configured for the React codebase and should stay clean.
- Add or update tests when behavior changes. `lib/gw-merge.test.js` shows the existing Vitest setup.
- Update the documentation app in `src/app-pages/documentation` when a component API, behavior, or usage pattern changes.
- Edit source files in `src` and `lib`. Do not hand-edit generated output in `dist` or the built docs output in `docs`.

## Branch naming

Branch from issue so everything is connected. This means every change starts with an issue rather than just an "idea".

## Pull requests

- Link the issue or describe the problem the PR solves (See Branch Naming above)
- Keep each PR focused on one change set. Separate refactors from behavior changes when possible.
- Include screenshots or short screen recordings for visible UI changes.
- Call out any accessibility, API, or migration impact in the PR description.
- Request review from a Groundwork maintainer before merging.

## Reviews

Reviewers should be able to answer three questions quickly:

1. Is the change scoped correctly for Groundwork?
2. Are tests and docs updated for the new behavior?
3. Is the selected version bump correct? (Major, Minor, Patch)

Contributors should address review comments with follow-up commits unless a maintainer asks for a different workflow.

## Versioning and releases

Groundwork uses semantic versioning and enforces version bump labels on pull requests to `main`.

- `patch-bump`: bug fixes, docs-only changes, maintenance work, and backward-compatible internal cleanup
- `minor-bump`: new backward-compatible components, props, or behavior
- `major-bump`: breaking API changes, removals, or behavior that requires consumer updates

Current repository automation expects exactly one of these labels on every PR to `main`:

- `patch-bump`
- `minor-bump`
- `major-bump`

After a PR is merged into `main`, the `pr-close.yml` workflow bumps the package version and pushes the tag. Publishing to npm happens when a GitHub Release is published, which triggers `.github/workflows/publish.yml`.

## Commit guidance

- Prefer small commits with clear messages that describe the intent of the change.
- Avoid mixing formatting-only changes with feature or bug-fix commits unless the formatter was required for touched files.
- Do not rewrite shared branch history unless the maintainers ask for it.
