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
wanderlust-travel/
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

1. In your GitHub repo, go to **Settings → Pages**.

2. Under **Source**, select **Deploy from a branch**.

3. Choose the **main** branch and **/ (root)** folder, then click **Save**.

4. After a minute or two, your site will be live at:

   ```
   https://Someshshakya.github.io/wanderlust-travel/
   ```

## Submission Checklist

When submitting the assignment, provide both URLs with the `https://` prefix:

| Field | URL |
|-------|-----|
| GitHub Repository | `https://github.com/Someshshakya/wanderlust-travel` |
| GitHub Pages URL | `https://Someshshakya.github.io/wanderlust-travel/` |

## Rubric Coverage

| Requirement | Points |
|-------------|--------|
| About Us page elements | 2 |
| Contact Us email form | 1 |
| Navigation bar (menu, search, buttons) | 6 |
| Beach recommendations (2 images) | 2 |
| Temple recommendations (2 images) | 2 |
| Country recommendations (2 images) | 2 |
