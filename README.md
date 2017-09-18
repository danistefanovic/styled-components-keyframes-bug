# styled-components-keyframes-bug

This repository simulates a library condition where the actual library is in the repo root, and a demo site that uses this library is located in the folder "website."

As soon as the `keyframes` helper is imported in the library, the styling from the library stops working on the website.


## Steps to reproduce

1. Install dependencies
```sh
# Install dependencies for "library"
yarn install

# Install dependencies for "website"
yarn install --cwd ./website
```

2. Build the library
```sh
# Create dist.js
yarn build
```

3. Link library in website
```
# Register our library
yarn link

# Link to our local module in the website folder
cd website/ && yarn link "styled-components-keyframes-bug"
```

4. Start the web app
```
yarn start
```


## Expected Behavior

The text on the gray background should be red and rotating.


# Actual Behavior

The text is neither red nor rotating. As soon as `keyframes`is removed from index.js, the text on the website becomes red.

Make sure to run `yarn build` in the root when making changes to index.js.

