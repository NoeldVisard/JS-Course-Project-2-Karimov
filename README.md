# JS-Course-Project-2-Karimov
## Shopping website

### Site performance

When opening site we are greeted by the main page, where is routing buttons and the git hub link:

![](https://sun9-43.userapi.com/impg/hApqvZ2IkofwmFn246kdV6zvIM7o7Wp486WAgQ/DT7MbW7uIs8.jpg?size=1280x651&quality=96&sign=6f96ea196f5cb4d34bc1a460d499f2ea&type=album)

When hovering over the links the highlighting shows that we can go to another page:

![](https://sun9-55.userapi.com/impg/BHaUi5Lz3paAB671dZMEsJh9I0ozLzekEO0mdw/Lqe0OW9GIy8.jpg?size=353x161&quality=96&sign=6d10bfe1c11b572a3a38bb3395459606&type=album)

Let's go on the first page. Here we can see all our items from vuex storage:

![](https://sun9-21.userapi.com/impg/ry4i63N6cq_zzLgSHZ17N7MlpHeNgqmsx0jdbg/hJwOLlcPqQQ.jpg?size=1280x647&quality=96&sign=ab8865986054024eaa40f796d95f114d&type=album)

By pressing on the green/red buttons we can increase/decrease count of items for order.

After click on the image, you can see more info about item:

![](https://sun9-9.userapi.com/impg/5XlPYaNjVmWCrdtrVHEMhx5d3wbAiSgZjPv-fw/vgLDfnZqYi4.jpg?size=1280x649&quality=96&sign=7fbb5751ed93905965a18ce956560207&type=album)

Here you can also increase/decrease count of items.

Let's add some items and go to the card page. Here we can see all our chosen items:

![](https://sun9-57.userapi.com/impg/_23GaNQJQP-m7lyWaFEtdkjYEAoECAK3CgIYDQ/uh97Ws4MEzE.jpg?size=1280x646&quality=96&sign=657f0000f58a775c026c61c92badcb9e&type=album)

If you want to remove an item from the cart, simply reduce its count to zero. It will disappear from the page automatically.

Let's try to make an order: 

![](https://sun9-5.userapi.com/impg/fjMX1GCErogRta3VEMgAaXRKAsZmJBt0XeJXnw/cevHDX8F4tk.jpg?size=453x138&quality=96&sign=33cba4b38c61357f2984d26534827deb&type=album)

Oops, site don't know you as customer!

![](https://sun9-27.userapi.com/impg/X17oIeX_h3QHuS1OzyOZn53_G8DWYs0HQw5K1A/Jm71fH6IiTM.jpg?size=710x219&quality=96&sign=3ce328155157b5e710e57b2202f8f9da&type=album)

After closing this alert, you will be automatically moved to the profile page:

![](https://sun9-13.userapi.com/impg/vMzBKj8B2kcN8UZKvwmPLWiYqpEzJjv__PCtWQ/7qkRA50J4Fk.jpg?size=458x495&quality=96&sign=cf37e5877c998d48a4da68bf2a706966&type=album)

Note, that you should fill all gaps, otherwise you won't be able to save your profile and order.

After saving profile, let's try to make an order again. We will be moved to the orders page:

![](https://sun9-63.userapi.com/impg/jVPXyTvo2fA9lcB_OWRtMsjRZnDEPjLmlaqb3w/2B-3OHr-__o.jpg?size=1280x640&quality=96&sign=6a8dfe83a12750c05a74c957eabaf7bb&type=album)

Here you will see all items from all orders. Also here you can clear orders history:

![](https://sun9-57.userapi.com/impg/efh9ffHGdsmF2oOFuCnLKdb8pM2UA6xJDNV-qg/fEkpUh4aJYI.jpg?size=196x54&quality=96&sign=950f8e047fc5e9918d50126e5825fc4b&type=album)


### Used technologies

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

eslint:

`npm install eslint --save-dev`

Set up a configuration file: 

`npx eslint --init`