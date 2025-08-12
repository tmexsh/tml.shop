# Global Kitchen PWA

> [!IMPORTANT]
> **Project Status: Foundational Version**
>
> This is a foundational implementation of the Global Kitchen PWA. It includes the basic project structure, PWA configuration, and a functional UI with 2 of the 14 requested features. The majority of the features are not yet implemented.
>
> **Note on Styling:** This project uses the Tailwind CSS Play CDN for styling due to an unresolved issue with the local Tailwind CSS build process in the development environment. The local build scripts are included but are not currently used by the application.

This is a Progressive Web App (PWA) that provides a collection of useful food and cooking features.

## Implemented Features

*   **Recipe Ingredient Substitutor**: Find substitutes for common ingredients.
*   **Cooking Time Converter**: Convert cooking times between different appliances (Oven, Air Fryer, Slow Cooker).
*   **Light/Dark Mode**: Toggle between light and dark themes.

Many more features are planned!

## Project Setup

To set up and run this project locally, you'll need to have Node.js and npm installed.

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd <project-directory>
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

## Building the CSS

This project uses Tailwind CSS. The CSS is compiled from `src/input.css` into `dist/output.css`.

*   To build the CSS once, run:
    ```bash
    npm run build
    ```

*   To watch for changes and automatically rebuild the CSS, run:
    ```bash
    npm run watch
    ```

## Running the Application

Simply open the `index.html` file in your web browser to use the application.

## Deployment to GitHub Pages

This project is set up to be easily deployed to GitHub Pages.

1.  Make sure all your changes are committed and pushed to your GitHub repository.
2.  In your repository's settings, go to the "Pages" section.
3.  Under "Build and deployment", select "GitHub Actions" as the source.
4.  GitHub Actions will automatically build and deploy your site. Make sure your repository is configured to serve from the `main` branch and the `/ (root)` directory.

The PWA requires a secure context (HTTPS) to run, which GitHub Pages provides.