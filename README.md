# Interactive Portfolio Website

A fluid, interactive portfolio website with dynamic mouse-reactive effects, featuring a blue, purple, and green color scheme on a dark background.

## Features

- **Dynamic Background**: Floating gradient orbs that respond to mouse movement and scroll
- **Custom Cursor**: Interactive cursor with hover effects
- **3D Card Tilt**: Portfolio cards tilt based on mouse position
- **Smooth Animations**: Entrance animations, transitions, and hover effects
- **Responsive Design**: Works on desktop and mobile devices
- **Easy Portfolio Management**: Add projects by editing a simple JSON file

## Color Scheme

- **Background**: Dark navy (#0f0f1a)
- **Accent Blue**: #3b82f6
- **Accent Purple**: #a855f7
- **Accent Green**: #4ecca3

## How to Add Portfolio Entries

Adding new projects to your portfolio is simple! Just edit the `portfolio.json` file:

### Portfolio Entry Format

```json
{
  "id": 4,
  "title": "Your Project Title",
  "description": "A brief description of your project.",
  "tags": ["Technology1", "Technology2"],
  "image": "https://your-image-url.com/image.jpg",
  "link": "https://your-live-demo.com",
  "github": "https://github.com/yourusername/repo"
}
```

### Fields Explained

| Field | Description | Required |
|-------|-------------|----------|
| `id` | Unique identifier for the project | Yes |
| `title` | Project name displayed on the card | Yes |
| `description` | Brief description of the project | Yes |
| `tags` | Array of technologies/skills used | Yes |
| `image` | URL to the project image (400x300 recommended) | Yes |
| `link` | URL to live demo (use "#" if none) | Yes |
| `github` | URL to GitHub repository (use "#" if none) | Yes |

### Example: Adding a New Project

1. Open `portfolio.json`
2. Add a new entry to the array:

```json
[
  // ... existing projects ...
  {
    "id": 4,
    "title": "E-Commerce Platform",
    "description": "A full-stack e-commerce solution with payment integration and inventory management.",
    "tags": ["React", "Node.js", "Stripe", "PostgreSQL"],
    "image": "https://your-image-host.com/ecommerce-preview.jpg",
    "link": "https://my-ecommerce-site.com",
    "github": "https://github.com/yourusername/ecommerce"
  }
]
```

3. Save the file and push to GitHub
4. Your new project will appear automatically!

## Local Development

To run locally, you can use any static file server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Customization

### Update Personal Info

- Edit the hero section text in `index.html`
- Update contact links (email, GitHub) in the contact section
- Modify the skills list in the about section

### Change Colors

Edit the CSS variables in the `:root` selector in `index.html`:

```css
:root {
  --bg-dark: #0f0f1a;
  --accent-blue: #3b82f6;
  --accent-purple: #a855f7;
  --accent-green: #4ecca3;
}
```

## License

MIT License - feel free to use and modify!
