# Lodgify front-end test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Folder Structure

I tried to avoid mixing different types of code/components together with the usage of folder structure (commonly used on the current assignement) that would be self-descriptive and fullfil this very purpose.

### /api

Self descriptive - contains the necessary code to handle retrieval of the data. No need for anything special (like whole data layer) since the 'api' consists of one call only.
For the data persistence in the app I could use redux store, though it seemed a bit like an overkill for one request and a few rows of data.

### /assets

Consists only from 2 items - both icons needed for the design provided.

### /components

The place for the components. Components are as small as possible and should be 'standalone' (meaning not dependent on something from outside - another component)
Ideal state is that each component should do ONE thing only. For example: __CardImage.tsx__ should only handle the image of the card and their states/transitions, nothing else.

### /scenes

Contains larger components (containers) that should render and control smaller components, fetch data for the page, and pass mentioned data to the components.
Ideal state would be that the page retrieves data needed, AND handles the subsequent requests to retrieval of additional data (or sends request with filled form data to the server via `"api layer"`)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**