window.$ = require("jquery");
window.React = require('react'); 
var Page = require("../jsx/Page.jsx");

$(function(){
	var appDiv = document.getElementById('app');
	React.render(<Page />, appDiv);
});
