# React Gallery

This image gallery app was created using React. Using React Router, routes are set up for three default topic pages and a search page. Images are displayed from the Flickr API using Axios to fetch data. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). This project was created for the purpose of the Treehouse Full Stack JavaScript Techdegree.

## Project Requirements

This project is reviewed and graded based on a set of requirements.

### Meets Expectations

* No warnings or errors in console about unused/missing assets.
* Running npm start successfully launches the app.
* App is broken up into components.
* Provided CSS is used and the important aspects of the app generally resemble the mockups.
* React Router properly implemented.
* URLs correctly match routes.
* Clicking a nav link navigates user to new route and loads new data.
* Uses Flickr API correctly: API Keys and proper Photo source URLs.
* Data fetched from a "container" component that passes data down to presentation component via props.
* No console errors or warnings regarding unique "key" props.
* Key props passed to images.
* Submitting search data returns & displays results.

### Exceeds Expectations

* App includes a 404-like error route that displays when a URL path does not match an existing route.
* App displays a loading indicator each time the app fetches new data on at least the search route.
* If no matches are found by the search, the app includes a message to tell the user there are no matches.

## Using the App

### Get a Flickr API key

* Create yahoo account/use tumblr account to sign in
* Apply for a [non-commercial API key](https://www.flickr.com/services/apps/create/apply/)
* You’ll need to set up a config.js file in the src/components/ folder
* The config.js file should look something like this:
```
const apiKey = 'YOUR API KEY';
export default apiKey;
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify