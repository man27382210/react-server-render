import "babel-polyfill";
import React from "react";
import ReactDOMServer from "react-dom/server";
import _ from "lodash";
require('node-jsx').install({
    extension: '.jsx'
});



export default function(){
	this.init = function(){
		var jsdom = require("jsdom-no-contextify").jsdom;
        	global.document = jsdom("virtual dom");
        	global.window = document.parentWindow;
        	global.navigator = {};
        	global.navigator.userAgent = {
            		indexOf: function () {},
            		toLowerCase: function () {
                		return "mozilla/5.0 (macintosh; intel mac os x 10_10_2) applewebkit/537.36 (khtml, like gecko) chrome/43.0.2357.65 safari/537.36";
            		},
            		match: function () {
                		return "";
            		}
        	};
        	//set lodash
        	global._ = _;
        	//set jquery
        	require("jquery1-7-1");
	}

	this.render = function(config){
		var Component = React.createFactory(require(config.componentPath));
		var option = config.beforeRender() || {};
		var ComponentMarkup = ReactDOMServer.renderToStaticMarkup(Component(config.props));
		return config.afterRender(ComponentMarkup, option);
	}	

}



