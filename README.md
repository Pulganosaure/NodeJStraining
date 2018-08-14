# Install
- use npm install in the main folder
- use npm install in the client folder
- use npm run dev (if concurrently is missing, use "npm install -g concurrently")
- go to localhost:3000 to see the website

# Using
- bootstrap CSS https://getbootstrap.com/
- React + Redux for the frontend
- Express for the Backend
- all the others dependencies are on the package.json files


# API
- profils :
  - api/profils/users_list
    // return the list of the users
  - api/profils/user?id=username
    // return the profile of the username
- archivements :
  - api/archivements
    // return the list of all the archivements
  - api/archivements/:categoryid   
    // return the list of the archiements of the category
