# Common Module

Common modules that both Webapp and Gateway would use

## Local development

Run `npm run dev`. This will watch for any changes to `common/src` and re-compile files. Separately, `webapp` and `gateway` will symlink this module when running locally and refresh when the `dist` has been updated.

## Usage

For `webapp`, import from `src`, i.e. `import X from '@cg/common/src/enums'`

For `gateway`, import from `dist`, i.e. `import X from '@cg/common/dist/enums'`.