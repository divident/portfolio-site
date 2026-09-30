# Portfolio site

Personal portfolio of Piotr Chmielewski — plain HTML, CSS and JavaScript, no build step and no dependencies.

Live: https://divident.github.io/portfolio-site/

## Structure

```
index.html        page markup and content
404.html          GitHub Pages not-found page
css/style.css     styles (light/dark themes via CSS variables)
js/main.js        theme toggle, mobile menu, scroll effects, contact form
images/           illustrations and icons
```

## Local preview

Open `index.html` in a browser, or serve the folder:

```shell
python3 -m http.server 8000
```

then visit http://localhost:8000.

## Deploy

Pushing to `master` runs `.github/workflows/pages.yml`, which publishes the site to GitHub Pages.
One-time setup: repository **Settings → Pages → Source: GitHub Actions**.
