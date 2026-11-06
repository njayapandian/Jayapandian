# Dr. Jayapandian N - Academic Profile Website

A single-page profile website. All publication and achievement lists load live
from a Google Sheet, so you update the sheet and the website updates by itself.

## Files

| File | Purpose |
|------|---------|
| `index.html` | The whole website (design, photo and code). This is the file GitHub Pages serves. |
| `apps-script/Code.gs` | Backup copy of the Google Apps Script that feeds the sheet data. Not uploaded anywhere; it lives inside your Google Sheet. |
| `README.md` | These instructions. |

## Publish on GitHub Pages (free)

1. Sign in at https://github.com (create a free account if needed).
2. Click **+ > New repository**.
   - Repository name: `jayapandian.github.io` style (`<your-username>.github.io`) for a short address
     `https://<your-username>.github.io`, or any name (e.g. `profile`) for
     `https://<your-username>.github.io/profile/`.
   - Choose **Public**, tick **Add a README file**, click **Create repository**.
3. In the repository click **Add file > Upload files**. Drag in `index.html`
   (and the `apps-script` folder if you want the backup). Click **Commit changes**.
4. Go to **Settings > Pages**. Under **Build and deployment**, set **Source** to
   *Deploy from a branch*, **Branch** to `main` and folder `/ (root)`, then **Save**.
5. Wait 1 to 2 minutes and refresh. GitHub shows your live address at the top of the Pages screen.

## Updating the website

- **Publications, awards, projects and so on:** just edit your Google Sheet. Refresh the website to see changes.
  Each row is one entry in column A. A web link in column B (or at the end of the text) makes the box clickable.
- **Text, photo, links on the home page:** open `index.html` on GitHub, click the pencil icon, edit the `CONFIG`
  block near the top (`PROFILE` section), then **Commit changes**. The site updates in about a minute.
- **A new tab in the sheet:** add a matching line in the `TABS` list in `index.html`.

## Research Impact page

The "Research Impact" menu item reads the Google Sheet tab named **Research Impact** (16th tab) and shows
a Google Scholar box, a Scopus box and a publications-per-year chart (from 2015).

Suggested layout of that tab (other simple layouts also work):

| Source | Citations | h-index | i10-index | Documents |
|--------|-----------|---------|-----------|-----------|
| Google Scholar | ... | ... | ... | ... |
| Scopus | ... | ... | | ... |

| Year | Publications |
|------|--------------|
| 2015 | ... |
| 2016 | ... |

Optional: a cell such as `Updated: Nov 2026` shows an update date on the boxes.
For Scholar's "Since 2021" columns, add headings like `Citations (Since 2021)`.

Troubleshooting: open the website address with `?debug` before the `#`, for example
`https://<you>.github.io/?debug#impact`. A "Data check" box shows what the page read from the tab.

## Important notes

- The Apps Script web app shares **every tab** of the Google Sheet publicly (anyone with the link can read it).
  Do not keep private information in that sheet.
- If you ever change the Apps Script code, redeploy with **Deploy > Manage deployments > Edit > New version**
  so the web app address stays the same.
- If a tab shows an error, check its name in the sheet matches the `sheet:` name in `TABS`.
