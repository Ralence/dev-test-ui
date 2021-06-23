# dev-test-ui

This repo was created to demonstrate the creation of a basic stencil js UI component
and integrating it inside of a react js app

## Repo content

The repo consists of two parts:

- driver-evaluation which is a React app bootstraped with create-react-app and this is the custom web component consumer
- test-ui-dropdown which is a stencil component creation project and it is used to create the custom web component

## How to get it running

### Intro

The idea was to create a simple dev environment that will make it possible to develop, preview and integrate react and stencil components
without complicated setup or without npm publishing the web component.

This was done by simply connecting the two apps via a script tag placed in the react app public index.html

<script type="module" src="http://localhost:3333/build/test-ui-dropdown.esm.js"></script>

IMPORTANT in case your stancil is NOT running on localhost:3333 you need to update this script to match your localhost

### Instructions

- CD into test-ui-dropdown
- run npm install
- run npm start

- CD into driver-evaluation
- run npm install
- run npm start

This should start the react app on http://localhost:3000/
and stencil app on http://localhost:3333/
if the these are available

If stencil starts on any other localhost make sure to update the script tag to get everything up and running correctly
