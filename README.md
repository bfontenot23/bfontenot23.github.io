# Interactive Portfolio Website

A fluid, interactive portfolio website with dynamic mouse-reactive effects, featuring a blue, purple, and green color scheme on a dark background. Built with **Tailwind CSS** for easy styling customization.

## Features

- **Tailwind CSS**: Utility-first CSS framework via CDN for easy styling changes
- **Dynamic Background**: Floating gradient orbs that respond to mouse movement and scroll
- **Custom Cursor**: Interactive cursor with hover effects
- **3D Card Tilt**: Portfolio cards tilt based on mouse position
- **Smooth Animations**: Entrance animations, transitions, and hover effects
- **Responsive Design**: Works on desktop and mobile devices
- **Easy Portfolio Management**: Add projects as individual files in the `posts/` folder

## Project Structure

```
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # Custom CSS with Tailwind directives
├── posts/                  # Portfolio projects folder
│   ├── index.json          # List of all project files
│   ├── project-one.json    # Individual project files
│   ├── project-two.json
│   └── project-three.json
├── tailwind.config.js      # Tailwind configuration
└── README.md
```

## Color Scheme

- **Background**: Dark navy (#0f0f1a)
- **Accent Blue**: #3b82f6
- **Accent Purple**: #a855f7
- **Accent Green**: #4ecca3

## How to Add Portfolio Entries

Adding new projects to your portfolio is simple! Create a new JSON file in the `posts/` folder:

### Step 1: Create a New Project File

Create a new file in `posts/` folder (e.g., `posts/my-new-project.json`):

```json
{
  "id": 4,
  "title": "My New Project",
  "description": "A brief description of your project.",
  "tags": ["Technology1", "Technology2"],
  "image": "https://your-image-url.com/image.jpg",
  "link": "https://your-live-demo.com",
  "github": "https://github.com/yourusername/repo",
  "date": "2024-04-15"
}
```

### Step 2: Update the Index File

Add your new filename to `posts/index.json`:

```json
[
  "project-one.json",
  "project-two.json",
  "project-three.json",
  "my-new-project.json"
]
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
| `date` | Project date (YYYY-MM-DD format, for sorting) | Yes |

### Example: Complete New Project

1. Create `posts/ecommerce-platform.json`:

```json
{
  "id": 4,
  "title": "E-Commerce Platform",
  "description": "A full-stack e-commerce solution with payment integration and inventory management.",
  "tags": ["React", "Node.js", "Stripe", "PostgreSQL"],
  "image": "https://your-image-host.com/ecommerce-preview.jpg",
  "link": "https://my-ecommerce-site.com",
  "github": "https://github.com/yourusername/ecommerce",
  "date": "2024-04-20"
}
```

2. Update `posts/index.json`:

```json
[
  "project-one.json",
  "project-two.json",
  "project-three.json",
  "ecommerce-platform.json"
]
```

3. Push to GitHub - your new project will appear automatically!

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

Colors are defined in two places for Tailwind compatibility:

1. In `index.html` (Tailwind config):
```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        'dark': '#0f0f1a',
        'accent-blue': '#3b82f6',
        'accent-purple': '#a855f7',
        'accent-green': '#4ecca3',
      }
    }
  }
}
```

2. In `css/styles.css` (CSS variables):
```css
:root {
  --bg-dark: #0f0f1a;
  --accent-blue: #3b82f6;
  --accent-purple: #a855f7;
  --accent-green: #4ecca3;
}
```

### Building for Production

For production, you can compile Tailwind CSS to reduce file size:

```bash
npm install -D tailwindcss
npx tailwindcss -i ./css/styles.css -o ./css/output.css --minify
```

Then update `index.html` to use `css/output.css` instead of the CDN.

## License

MIT License - feel free to use and modify!
