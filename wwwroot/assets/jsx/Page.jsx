window.$ = require('jquery');
var React = require('react');
var ScrollMagic = require("scrollmagic");
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');
var gsap = require("gsap");

var Page = React.createClass({
    componentDidMount: function() {
        console.log("yeah");
    },
    render: function() {
        return (
            <h2>testing</h2>
        );
    }
});

module.exports = Page;
