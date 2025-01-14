# 🌟 Forkify: Your Ultimate Recipe Companion

Forkify is a **modern recipe application** that allows users to discover, bookmark, and upload recipes in an intuitive and user-friendly interface. Developed as a capstone project during a JavaScript master course in 2021, Forkify demonstrates advanced JavaScript techniques and seamless integration with APIs.

---

![Forkify Banner](https://via.placeholder.com/800x300?text=Forkify+App+Banner)

## 🚀 Features

- 🔍 **Search Recipes**: Explore thousands of recipes using the Forkify API.
- 📖 **Detailed View**: Access step-by-step instructions, ingredients, and cooking details.
- 🔄 **Adjust Servings**: Automatically update ingredient quantities based on servings.
- ⭐ **Bookmark Recipes**: Save your favorite recipes for quick access.
- ➕ **Add Recipes**: Upload custom recipes with an easy-to-use form.
- 📜 **Pagination**: Effortlessly navigate through search results.
- 🎨 **Modern Styling**: Enjoy a fully responsive and visually appealing UI built with SCSS.

---

## 🌐 Live Demo

Forkify is deployed and live at: [**Forkify on Netlify**](https://renemeier-forkify.netlify.app/)

---

## 🛠️ Technologies Used

- **JavaScript (ES6+)**: Backbone of the application.
- **Forkify API**: Fetching recipe data from a comprehensive API.
- **Parcel**: Efficient module bundler for both development and production.
- **HTML & SCSS**: Responsive and modular styling architecture.
- **Netlify**: Fast and reliable deployment platform.

---

## 🧩 Architecture & Workflow

### Modular Structure

1. **Model**: Handles application state and API interactions.
2. **View**: Renders UI components like recipes, bookmarks, and search results.
3. **Controller**: Coordinates between the model and view, managing user interactions.

### Data Flow Visualizations

1. **Recipe Loading Process**:

   ![Recipe Loading](./forkify-architecture-recipe-loading.png)

2. **Search & Pagination Flow**:

   ![Search Flow](./forkify-flowchart-part-1.png)

3. **Bookmarking and Recipe Management**:

   ![Bookmarking Flow](./forkify-flowchart-part-2.png)

4. **Adding Recipes Workflow**:

   ![Add Recipe Flow](./forkify-flowchart-part-3.png)

---

## 💻 Local Setup Instructions

To run Forkify locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/meierrene/forkify.git
   ```
2. **Navigate to the Project Directory**:
   ```bash
   cd forkify
   ```
3. **Install Dependencies**:
   ```bash
   npm install
   ```
4. **Start the Development Server**:
   ```bash
   npm start
   ```
5. Open in your browser at `http://localhost:1234`

---

## 📖 Usage Guide

1. **Search Recipes**: Type a keyword (e.g., "pasta") and press enter.
2. **View Recipe**: Click on a recipe to see its details.
3. **Adjust Servings**: Use the serving controls to modify ingredient quantities.
4. **Bookmark Recipes**: Save recipes by clicking the bookmark icon.
5. **Add a Recipe**: Use the "Add Recipe" form to contribute your own recipe.

---

## 🎨 Styling

Forkify uses modular SCSS for maintainable and scalable styling. Key partials include:

- `_base.scss`: Global resets and base styles.
- `_components.scss`: Reusable component styles.
- `_header.scss`: Header-specific styling.
- `_recipe.scss`: Recipe view styling.
- `_searchResults.scss`: Styles for search results and pagination.
- `_upload.scss`: Styles for the add-recipe form.

---

## 🙌 Credits

- Developed during the [JavaScript Master Course](https://www.udemy.com/course/the-complete-javascript-course/) by Jonas Schmedtmann.
- API support by the **Forkify API**.

---

## 🤝 Contribute

We welcome contributions! Feel free to submit issues or pull requests to make Forkify even better.

---

![Thank You Banner](https://via.placeholder.com/800x200?text=Thanks+for+visiting+Forkify!)
