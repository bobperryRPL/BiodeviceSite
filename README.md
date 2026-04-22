# BiodeviceSite

This site is set up to deploy to GitHub Pages from the `main` branch using the workflow in `.github/workflows/jekyll.yml`.

## GitHub Pages setup

1. Push this repository to GitHub.
2. In the repository, open `Settings` -> `Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. Push to `main` or run the `Deploy Jekyll site to Pages` workflow manually from the `Actions` tab.

The site is configured as a project Pages site for:

- Production URL: `https://bobperryRPL.github.io/BiodeviceSite`
- Base path: `/BiodeviceSite`

## Local preview

Install gems and run Jekyll with the project base path:

```powershell
bundle install
bundle exec jekyll serve --baseurl /BiodeviceSite
```

## Notes

- Large source-only folders such as `CLF Template`, `new site template`, and `ubc_signature_design_package` are excluded from the published site.
- The `admin/` area is intentionally excluded from GitHub Pages builds. Its current Decap CMS configuration uses Netlify Git Gateway, which does not work on GitHub Pages without separate auth setup.
