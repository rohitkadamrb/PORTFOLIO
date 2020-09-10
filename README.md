Publish your repo to Github, then, open [Netlify](app.netlify.com) and add a “New site from Git”. Choose your newly created repo and click on “Deploy site” with the default deployment settings.

Finally need to set up an OAuth application on GitHub. Start development build with `gatsby develop` and visit `http://localhost:8000/admin` and authorize Netlify to make commits for you.

If it doesn't work, the instructions for setting up OAuth can be found here: [Netlify’s Using an Authorization Provider](https://www.netlify.com/docs/authentication-providers/#using-an-authentication-provider).
