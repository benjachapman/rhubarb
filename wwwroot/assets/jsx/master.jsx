window.$ = require('jquery');
var React = require('react');
var ScrollMagic = require("scrollmagic");
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');
var gsap = require("gsap");
var randomcolor = require("randomcolor");
require("velocity-animate");
var Page = require("./Page.jsx");
var Greenie = require("./pages/greenie.jsx")
var Bluey = require("./pages/bluey.jsx")

var Master = React.createClass({
    getInitialState: function() {
        this.hasRenderedOnce = false;
        this.i = 0;
        this.j = 10;
        this.pageOneKey = 0;
        this.pageTwoKey = 1000;
        this.z = 1000000;
        this.pagesToRender=[];
        return({
            activeSlot: 1,
            slotOnePage: "bluey",
            slotTwoPage: "greenie",
            slotOneColor: randomcolor({luminosity:"dark"}),
            slotTwoColor: randomcolor({luminosity:"dark"})
        });
    },
    alerthing: function(thing){
        alert(thing);
    },
    goToLink: function(page, activeSlot) {
        if(activeSlot === 2) {
            this.setState({
                transition: 2,
                slotOnePage: page,
                slotOneColor: randomcolor({luminosity:"dark"}),
            });
        } else {
            this.setState({
                transition: 1,
                slotTwoPage: page,
                slotTwoColor: randomcolor({luminosity:"dark"}),
            });
        }

    },
    componentDidMount: function() {
        var self = this;
        ee.addListener("goToPage", self.goToLink);
    },
    componentDidUpdate: function() {
        var self = this;
        setTimeout(function(){
            if(self.state.transition === 1) {
                self.pageOneKey++;
            } else {
                self.pageTwoKey++;
            }
        },2000)
    },
    render: function() {
        var self = this,
            transition = false,
            mastaClasses = "masta "
            pageOneClasses= "page page--one ",
            pageTwoClasses= "page page--two ",
            higherZ = this.z,
            z1 = this.z,
            z2 = this.z;

        this.z--;

        if(this.state.transition === 1){
            pageOneClasses +="page--transition-out";
            z2=this.z
        } else if (this.state.transition === 2){
            pageTwoClasses += "page--transition-out";
            z1=this.z;
        }

        return (
            <div className="masta">
                <Page key={this.pageOneKey} z={z1} darkColor={this.state.slotOneColor} className={pageOneClasses} goToLink={this.goToLink} slot={1} transition={transition} page={this.state.slotOnePage}/>
                <Page key={this.pageTwoKey} z={z2} darkColor={this.state.slotTwoColor}  className={pageTwoClasses} goToLink={this.goToLink} slot={2} transition={transition} page={this.state.slotTwoPage}/>
            </div>
        );
    }
});

module.exports = Master;
