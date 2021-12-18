# JS-Course-Project-2-Karimov
Shopping website

Installed with npm:
`npm i webpack -D`
`npm i webpack-cli -D`

So that we can write in the new ES6 syntax and above and have it all translate to ES5, let's add babel to the project. 
For babel to work with webpack vue js you need to install babel-loader, babel itself and its presets:

`npm i babel-loader @babel/core @babel/preset-env -D`

For webpack to understand vue syntax you need to install vue itself, vue-loader + vue-loader asks us to install 
vue-loader-plugin. You will also need vue-template-compiler to pre-compile vue templates:

`npm i vue vue-loader vue-loader-plugin vue-template-compiler -D`

To build the styles, install the following loaders:

`npm i style-loader sass-loader css-loader -D`

To get the index.html into the build folder and link it to vue automatically, set:

`npm i html-webpack-plugin -D`

`npm i webpack-dev-server -D`

This was written because of warning:
warning: LF will be replaced by CRLF in node_modules/...
The file will have its original line endings in your working directory

`git config core.autocrlf true`

vue-router:

`npm i vue-router`

`npm i vuex`