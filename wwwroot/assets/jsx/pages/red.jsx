window.$ = require('jquery');
var React = require('react');
var Link = require('../Link.jsx');

var Red = React.createClass({
    goToLink: function(link){
        console.log(this.props.slot);
        this.props.goToLink(link, this.props.slot);
    },
    render: function() {
        return (
            <div className="page__content">
                <h2>Red</h2>

                <Link {...this.props} target="greenie" text="Greenie"/>
                <Link {...this.props} target="bluey" text="Blue-ee"/>
            </div>
        );
    }
});

module.exports = Red;
