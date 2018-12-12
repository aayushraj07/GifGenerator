This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

# Working of the App.

---

##In search.js
*First User inputs the value
*value get stored in "inputValue" which is the property of the state in search's Component
*Then user click on the button which has the an event handeler which calls the function "returnKeyword"
*This function acts as the a callback function to "setKeyword" which is present in the App.js , this function is called and it takes an arguement which is the user's input i.e "keyword"
*Hence Keyword get transfered to the App.js
*Now "SetKeyword" function runs and it setState the arguement (i.e user input ) to the keyword which is the App.js's state property.
*After this "Setkeyword" calls "loadGif" function
*Since the state has been updated by the another component (using callback function) ,the loadGif can not be simply called
\*It is called in a special way i.e with arrow function

fun(arg,()=> this.newfunction)

---

## Now API work starts inside loadGif()

\*loadGif function starts with the use of axios

axios.get(\***\*\_\_\_\*\***)
.then(\***\*\_\_\*\***)

\*Axios first fetches the data and then gives the output .

\*In .get() , we write URL from where we expecting the data

> URL = website / keyword / API_key / limit

*Then .then() ,works on the response it got from the API
*It first checks whether there is some data or not .
*Then it setState the data into the 'gifUrl' which is the state property of App component
*Here ,Axios work is done

*Now in App.js ,next instance is rendered i.e Display
*In Display component , it renders the gifUrl which it is getting by prop from the app.js
\*We have used if statement in display so that we dont get any broken result at the inital stage when we dont have a gif to show.

\*This is how our GiGenerator works using API , react major function like state ,props,controlled input.
