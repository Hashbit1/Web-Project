FitRak – Fitness Tracking Web App 

--Overview
FitRak is a web application that allows users to create, view, edit, and delete workout sessions.  
It’s designed to help users stay consistent, track progress, and manage their fitness routines efficiently.

--What We Used
- HTML5, CSS3
- Node.js, Express.js
- EJS (for templates)
- Render (for deployment)

--Group Members
- Sahran – Frontend Developer  
- Muhammad – Backend Developer  
- Hashim – Deployment & Documentation

--Features (Part 1)
- Landing Page with team logo and navigation  
- Add new workouts  
- View all workouts in a table format  
- Edit or Delete workouts  
- Basic functional design (no login system yet)

--Video Demo
Link: 

<<<<<<< HEAD
--
=======
-- External Code Citations
- **Express.js Setup (Server Initialization)**
**Referenced in:** `app.js`  
**Source:** [Express.js Documentation – Hello World Example](https://expressjs.com/en/starter/hello-world.html)  
**Used for:**  
- Basic server creation (`const express = require('express')`)  
- Setting up the port and response rendering (`app.listen()`, `res.render()`)  
**Modification:**  
- Expanded to support EJS templates and multiple CRUD routes (`/add`, `/edit`, `/delete`).

- **EJS Template Syntax**
**Referenced in:** `views/index.ejs` and `views/edit.ejs`  
**Source:** [EJS Official Documentation](https://ejs.co/#docs)  
**Used for:**  
- Looping and conditionals with `<% %>` and `<%= %>` syntax  
- Rendering workouts dynamically inside HTML tables  
**Modification:**  
- Combined with Express routes for dynamic rendering of fitness data.

- **CRUD Delete Route Logic**
**Referenced in:** `app.js`  
**Source:** [Stack Overflow – How to Delete an Item in Express](https://stackoverflow.com/questions/18647182/how-to-delete-an-item-in-express)  
**Used for:**  
- Correct syntax for form-based deletion using `app.post('/delete/:id')`.  
**Modification:**  
- Integrated into FitRak to remove items from the in-memory `workouts` array.
  
- **Responsive CSS Media Queries**
**Referenced in:** `/public/css/mobile.css`, `/tablet.css`, `/laptop.css`  
**Source:** [W3Schools – CSS Media Queries](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)  
**Used for:**  
- Syntax for applying custom styles to mobile, tablet, and laptop screen widths.  
**Modification:**  
- Custom colors, layout adjustments, and typography added for FitRak design.

-**Semantic HTML5 Tag Usage**
**Referenced in:** `index.ejs`  
**Source:** [MDN Web Docs – HTML5 Semantics](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html)  
**Used for:**  
- Correct use of semantic elements like `<header>`, `<main>`, `<section>`, `<article>`, and `<footer>`.  
**Modification:**  
- Implemented throughout the EJS files for accessibility and clean structure.

--**Render Deployment Setup**
**Referenced in:** `README.md` (Deployment Section)  
**Source:** [Render Docs – Deploying Node Express App](https://render.com/docs/deploy-node-express-app)  
**Used for:**  
- Understanding how to connect GitHub repo to Render and configure build/start commands.  
**Modification:**  
- Adjusted build/start commands to match FitRak’s file structure.
  
>>>>>>> 1f3950c23244c09aa17fb38ab64693704285313b
© 2025 FitRak - | Hashim-Sahran-Muhammad
