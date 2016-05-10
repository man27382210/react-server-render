"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    this.init = function () {
        var jsdom = require("jsdom-no-contextify").jsdom;
        global.document = jsdom("virtual dom");
        global.window = document.parentWindow;
        global.navigator = {};
        global.navigator.userAgent = {
            indexOf: function indexOf() {},
            toLowerCase: function toLowerCase() {
                return "mozilla/5.0 (macintosh; intel mac os x 10_10_2) applewebkit/537.36 (khtml, like gecko) chrome/43.0.2357.65 safari/537.36";
            },
            match: function match() {
                return "";
            }
        };
        //set lodash
        global._ = _lodash2.default;
        //set jquery
        require("jquery1-7-1");
    };

    this.render = function (config) {
        var Component = _react2.default.createFactory(require(config.componentPath));
        var option = config.beforeRender() || {};
        var ComponentMarkup = _server2.default.renderToStaticMarkup(Component(config.props));
        return config.afterRender(ComponentMarkup, option);
    };
};

require("babel-polyfill");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _server = require("react-dom/server");

var _server2 = _interopRequireDefault(_server);

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('node-jsx').install({
    extension: '.jsx'
});