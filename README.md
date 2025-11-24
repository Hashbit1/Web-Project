# FitTrak – Fitness Tracking Web App

## Overview
FitTrak is an application that allows users to record workout sessions, look at past workouts, edit workouts, and delete them.

---

## Technologies Used
### Frontend
- HTML5  
- CSS3  
- EJS Templates  

### Backend
- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- bcryptjs (password hashing)  
- express-session (user authentication)

---

## Group Members
- Sahran – Frontend Developer  
- Muhammad – Backend Developer  
- Hashim – Deployment & Documentation  

---

## Features 
- Landing page with team logo and navigation  
- Add new workouts  
- View all workouts  
- Edit workouts  
- Delete workouts
  
---

# Outside Code Citations 

Below are all external code used in this project.

---

## 1. Express.js Server Setup
Referenced In: app.js  
Source: https://expressjs.com/en/starter/hello-world.html  

Function:
- Creating the Express server  
- Basic route handling pattern  
- `app.listen()` setup  

---

## 2. EJS Syntax & Rendering
Referenced In: All .ejs template files  
Source: https://ejs.co  

Function:
- `<% %>` logic tags  
- `<%= %>` output rendering  
- Looping over workout data  
- Renders dynamic content  

---

## 3. bcryptjs Password Hashing
Referenced In: routes/authRoutes.js  
Source: https://www.npmjs.com/package/bcryptjs  

Function:
- Hashing passwords during registration  
- Comparing hashed passwords during login  

---

## 4. MongoDB and Mongoose Model Patterns
Referenced In: models/User.js, models/Workout.js  
Source: https://mongoosejs.com/docs/models.html  

Function:
- Defining schemas  
- Creating models  
- CRUD operations using `find`, `create`, `update`, `delete`  

---

## 5. method-override for PUT/DELETE
Referenced In: app.js  
Source: https://www.npmjs.com/package/method-override  

Function:
- Allowing PUT and DELETE HTTP requests from HTML forms  
- Allows `_method` override for update/delete operations  

---

## 6. CSS Media Query Syntax
Referenced In: /public/css/mobile.css, tablet.css, laptop.css  
Source: https://www.w3schools.com/css/css_rwd_mediaqueries.asp  

Function:
- Media query syntax  
- Supporting mobile, tablet, and desktop responsive layouts  

---

## 7. Semantic HTML5 Tags
Referenced In: All .ejs template files  
Source: https://developer.mozilla.org/en-US/docs/Web

Function:
- Makes ure the webpages having good structure with elements like `<header>`, `<main>`, `<section>`, `<article>`, and `<footer>`  
- Better readability and organization of the page layout  
- Helps browsers and screen readers understand the purpose of each page   
- Allows cleaner, and more accessible templates for the FitTrak user interface
  
© 2025 FitRak - | Hashim-Sahran-Muhammad
