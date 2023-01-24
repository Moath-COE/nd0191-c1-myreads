# Project Title

My Reads app project for React course, An apllication of what I learned through out the course

## Getting Started

To get started developing right away:

- install all project dependencies with `npm install`

- install React-Router dependency using `npm install --save react-router-dom`

- start the development server with `npm start`

### Prerequisites

There is no Prerequisites programs to be installed

## Built With

- [React](https://reactjs.org/) - The web framework used
- [Node.js](https://nodejs.org/en/) - Backend FrameWorke
- [react-router](https://reactrouter.com/en/main) - library used for handling React routing

## Whats in the program

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    |__ Components #Holds all added components of the app
    |   |__ SearchBar.js
    |   |__ Shelfs.js
    |   |__ BookShelf.js
    |   |__ Book.js
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Description

The program simply implement React solution for manging components and their states. The Main state is stored in the App.js component and then passed to any component requires this list or modifies it. There are 4 main functional components in the program. 1. Shelfs.js : filters stored books acording to the assigned shelf, renders 3 shlefs into the main page. 2. BookShelf.js : this component main function is reduse the repeted code on Shelfs.js and render all the books under every category. 3. Book.js : Renders books instances through out the hall program. 4. SearchBar.js : renders the search bar and all it's functionality.

## Authors

- **Moaz Abdelaziz** - _Front-end_ - [Moath-COE](https://github.com/Moath-COE)
