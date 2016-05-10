# react-server-render
[![Build Status](https://api.travis-ci.org/man27382210/react-server-render.svg?branch=master)](https://travis-ci.org/man27382210/react-server-render)  

> Render React Component with pre environment setting and custom function.

```
npm install --save react-server-side-render
```
### Usage
```js

import renderService from "react-server-side-render";
const RenderService = new renderService();
// in ES5, use -> var RenderService = new renderService.default();
RenderService.init();
var markupDone = 
RenderService.render({
	componentPath: "",
	props: {},           
	beforeRender: function(){},
	afterRender: function(markup, option){
		return markup;
	}
});

```
* componentPath: Location of your component.
* props:         which is the "this.state.props", your data entry.
* beforeRender:  Function which will run before React server render, will return a object.
* afterRender:   Fucntion which trigger after render success. 
 * Two parameters: markup is the result of React render static html, option is the return object of beforeRender function. 
 *  render() will return afterRender().

### Simple Usage
```js
import renderService from "react-server-side-render";
const RenderService = new renderService();
RenderService.init();

var markupDone = 
RenderService.render({
	componentPath: "../test/component/testComponent.jsx",
	props: {},
	beforeRender: function(){},
	afterRender: function(markup, option){
		return markup;
	}
});


// markupDone is the result of render static html.
```

