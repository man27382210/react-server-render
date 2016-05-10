import "babel-polyfill";
require('node-jsx').install({
    extension: '.jsx'
});
import renderService from "../src/index.js";
import path from "path";
const RenderService = new renderService();
const assert = require("assert"),
    chai=require("chai"),
    sinon=require("sinon"),
    expect=chai.expect;;

describe('React server side render test', function () {

	context('with simple component, complex component with react template', function(){
		RenderService.init();
		it('should reander with simple component', function (done) {
			var markupDone = 
				RenderService.render({
					componentPath: "../test/component/testComponent.jsx",
					props: {},
					beforeRender: function(){},
					afterRender: function(markup, option){
						return markup;
					}
				});
				expect(markupDone).to.have.string("Hello, world");
			done();
		});
		it('should render with react template', function (done) {
			var dataJson = require("../test/component/data.json");
			var dom_id = "image-area";
			var d = new Date();
            var month = parseInt(d.getMonth(), 10) + parseInt(1, 10);
            var timestamp = d.getFullYear() + "_" + month + "_" + d.getDate() + "_" + d.getHours() + "_" + d.getMinutes() + "_" + d.getMilliseconds();
			var markupDone = 
				RenderService.render({
					componentPath: "../test/component/image_area.jsx",
					props: {
						"id": dom_id,
					 	"contentObject": dataJson.imageArea.contentObject
					},
					beforeRender: function(){
						var node_async_require =  require("node-async-require").install({preParser:"rt", async:false, useUnescape: false});
					},
					afterRender: function(markup, option){
						require("node-async-require").uninstall();
						return "<div id='"+dom_id+"' data-sync='"+timestamp+"' data-loid='"+dom_id+"'>" +markup+"</div>";
					}
				});
			console.log(markupDone);
			expect(markupDone).to.have.string("證券交易所日常");
			done();
		});
	});
	



});