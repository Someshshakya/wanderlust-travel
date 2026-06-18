# Wanderlust — Travel Recommendation Web Application

A static travel recommendation website built for the JS Essentials final project. Features beach, temple, and country recommendations with search functionality, deployed via GitHub Pages.

## Features

- **Home page** with hero section, interactive buttons, and recommendation cards
- **About Us page** with mission, vision, and team members
- **Contact Us page** with an email contact form
- **Navigation bar** with menu links, search box, and search button
- **Search & filter** by beaches, temples, or countries with image results

## Project Structure

```
js-essentials/
├── index.html          # Home page
├── about.html          # About Us page
├── contact.html        # Contact Us page
├── css/
│   └── styles.css      # Styles
├── js/
│   ├── data.js         # Recommendation data
│   └── main.js         # Search, navigation, form logic
└── README.md
```

## Local Preview

Open `index.html` in a browser, or use a local server:

```bash
npx serve .
```

## Deploy to GitHub Pages

1. Create a **public** repository on GitHub (e.g. `js-essentials`).

2. Push this project to the repository:

   ```bash
   git init
   git add .
   git commit -m "Add travel recommendation web application"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/js-essentials.git
   git push -u origin main
   ```

3. In your GitHub repo, go to **Settings → Pages**.

4. Under **Source**, select **Deploy from a branch**.

5. Choose the **main** branch and **/ (root)** folder, then click **Save**.

6. After a minute or two, your site will be live at:

   ```
   https://YOUR_USERNAME.github.io/js-essentials/
   ```

## Submission Checklist

When submitting the assignment, provide both URLs with the `https://` prefix:

| Field | Example |
|-------|---------|
| GitHub Repository | `https://github.com/YOUR_USERNAME/js-essentials` |
| GitHub Pages URL | `https://YOUR_USERNAME.github.io/js-essentials/` |

## Rubric Coverage

| Requirement | Points |
|-------------|--------|
| About Us page elements | 2 |
| Contact Us email form | 1 |
| Navigation bar (menu, search, buttons) | 6 |
| Beach recommendations (2 images) | 2 |
| Temple recommendations (2 images) | 2 |
| Country recommendations (2 images) | 2 |
