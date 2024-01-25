# Waste Not: Kitchen (Frontend)

## Overview

This is the frontend for Waste-Not: Kitchen, a React application that interacts with the waste-not-api to provide a user interface for managing ingredients, pantry items, and user-related functionalities, with the goal of managing kitchen items to prevent food waste.
![alt text](https://scontent.fmli1-1.fna.fbcdn.net/v/t39.30808-6/422832864_10160356192618173_1483527010324158792_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a73e89&_nc_ohc=A_vOa1scAh8AX9xi089&_nc_ht=scontent.fmli1-1.fna&oh=00_AfA5m4kknTB7Qcltoziem4dy9hG4jEk8S3v9AfLk3R0tNw&oe=65B6F44C "Screenshot of Ingredients Index")

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/emilyjorgensen/waste-not-frontend.git
   cd waste-not-frontend
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

## Usage

**Start the Development Server:**

```bash
npm run dev
```

The application will be accessible at http://localhost:5173/.

## Folder Structure

The project has the following folder structure:

- App.jsx: Main component rendering the application.
- Content.jsx: Component containing methods, handles routing, and renders the body.
- Footer.jsx: Renders the footer for the page.
- Header.jsx: Component to render header for page containing links.
- IngredientsIndex.jsx: Component to index all the ingredients in the database.
- IngredientShow.jsx: Component to give details of an individual ingredient.
- Login.jsx: Component to login a user.
- LogoutLink.jsx: Component to log out a user.
- main.jsx: Top level component.
- Modal.css: Contains styling for the Modal.
- Modal.jsx: Component to render the Modal.
- PantryIndex.jsx: Component to index all the pantry items for a user.
- PantryShow.jsx: Component to render an individual pantry item.
- SignUp.jsx: Component to signup a new user.

## Dependencies

- React
- React Router
- Axios
- Bootstrap

Install additional dependencies using:

```bash
npm install <package-name>
```
