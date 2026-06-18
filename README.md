# News Explorer Frontend

## Overview

News Explorer is a responsive news search application built with React and Vite. Users can search for the latest news articles by keyword and view results from a live news API. The project focuses on modern frontend development practices, responsive design, API integration, and component-based architecture.

This project is currently the frontend portion of a larger application and will be expanded into a full-stack application with user authentication and article-saving functionality.

---

## Features

- Search for news articles using a live News API
- Responsive design for desktop, tablet, and mobile devices
- Dynamic article rendering
- Loading state with preloader
- Error handling for failed API requests
- "Nothing Found" state when no articles match a search
- "Show More" functionality for displaying additional results
- Mobile navigation menu with responsive behavior
- Login modal interface
- React Router navigation
- Clean and reusable component architecture

---

## Technologies Used

### Frontend

- React
- Vite
- JavaScript (ES6+)
- React Router
- HTML5
- CSS3
- Responsive Web Design
- BEM Methodology

### API Integration

- News API
- Fetch API
- Environment Variables (.env)

### Development Tools

- Git
- GitHub
- Visual Studio Code
- Figma

---

## Concepts Practiced

This project demonstrates:

- Component-based development
- State management with React Hooks
- Conditional rendering
- API requests and asynchronous JavaScript
- Error handling
- Responsive layouts
- Mobile-first design principles
- Form validation
- Routing with React Router
- Reusable UI components
- Clean project structure

---

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── Header/
│   ├── Navigation/
│   ├── SearchForm/
│   ├── NewsCard/
│   ├── NewsCardList/
│   ├── LoginModal/
│   ├── Preloader/
│   ├── NothingFound/
│   ├── Footer/
│   ├── About/
│   └── SavedNews/
├── utils/
│   ├── newsApi.js
│   └── constants.js
├── vendor/
└── App.jsx
```

---

## Future Development

This project is planned to evolve into a full-stack application.

Future features include:

- User registration
- User authentication with JWT
- Protected routes
- Save and remove articles
- User profile management
- Backend API with Node.js and Express
- MongoDB database integration
- Persistent article storage
- Deployment of frontend and backend services

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
VITE_NEWS_API_KEY=your_api_key
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## Author

Wahid Fayeq

- GitHub: https://github.com/Wahid2025-Fayeq
- LinkedIn: https://www.linkedin.com/in/wahid-fayeq-se/

This project was developed as part of the TripleTen Software Engineering Program.
