window.$ = require('jquery');
var React = require('react');
var ScrollMagic = require("scrollmagic");
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');
var gsap = require("gsap");
var randomcolor = require("randomcolor");
var Greenie = require("./pages/greenie.jsx");
var Bluey = require("./pages/bluey.jsx");

var Red = require("./pages/red.jsx")

var Page = React.createClass({
    getInitialState: function(){
            this.cachedPage = null;
            this.page = null;
            this.i = 0;
            return(null);
    },
    render: function() {
        var backgroundStyle = {
                background: this.props.darkColor,
                fontSize: "40px",
                color: "white",
                textAlign: "center",
                zIndex: this.props.z
            },
            i = 0;

        if(this.cachedPage !== this.props.page) {
            if(this.props.page === "greenie") {
                this.page =(<Greenie key={this.i++} {...this.props}/>);
            } else if(this.props.page === "bluey") {
                this.page =(<Bluey key={this.i++} {...this.props}/>);
            } else if(this.props.page === "red") {
                this.page =(<Red key={this.i++} {...this.props}/>);
            }
        }

        this.cachedPage = this.props.page;

        return (
            <div className={this.props.className} style={backgroundStyle}>
                <div className="page__holder">
                    {this.page}
                </div>
            </div>
        );
    }
});

module.exports = Page;
