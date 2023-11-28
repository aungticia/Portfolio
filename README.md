## My Portfolio Website 

## This is a simple portfolio website built using Node.js, Express.js, and Pug. The project showcases my recent projects, provides an introduction about me, and offers details about individual projects.

## Project Structure
    `views/`: Contains Pug templates for rendering HTML pages.
    `layout.pug`: The base layout template.
    `index.pug`: Home page template displaying recent projects.
    `about.pug`: About page template introducing the developer.
    `project.pug`: Detailed project page template.
    `page-not-found.pug`: 404 error page template.
    `error.pug`: Generic error page template.
    `public/`: Contains static assets like stylesheets, images, and JavaScript.
    `data.json`: JSON file containing project data.
    `app.js`: Main Node.js/Express application file.

## Getting Started
    npm install 
    npm start 
    The application will be accessible at http://localhost:3000.
## Features 
## Home Page (/):
    Displays a list of recent projects.
    Clicking on a project thumbnail navigates to the project details page.
## About Page (/about):
    Provides information about the developer.
## Project Details Page (/projects/:id):
    Displays detailed information about a specific project.
    Shows project name, description, technologies used, live demo link, and GitHub repository link.
    Includes project images.
## Error Handling:
    404 Not Found page for invalid routes.
    Global error handler for other types of errors.

## Technologies Used 
    Node.js
    Express.js
    Pug templating engine
    JavaScript


## Author 
    Aung May Oo

## License
    This project is licensed under the MIT License 

