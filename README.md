# FlickHide

A lightweight, framework-free, static movie download website for GitHub Pages.

## Structure

- `index.html` dynamically renders latest and popular movie cards from `data/movies.json`.
- `movie.html?id=<movie-id>` loads a movie detail JSON file from `data/movies/`.
- `search.html` provides instant client-side catalog search.
- `assets/css/` and `assets/js/` contain small vanilla CSS and JavaScript files.
- `ads/` contains notes for placing ad snippets.

## Add a movie

1. Add a summary entry to `data/movies.json`.
2. Add a matching detail file at `data/movies/<id>.json`.
3. Add poster, banner, and screenshots under `assets/images/<id>/`.

No build step is required.
