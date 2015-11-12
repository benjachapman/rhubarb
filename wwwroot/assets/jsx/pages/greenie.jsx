window.$ = require('jquery');
var React = require('react');
var Link = require('../Link.jsx');

var Greenie = React.createClass({
    goToLink: function(link){
        console.log(this.props.slot);
        this.props.goToLink(link, this.props.slot);
    },
    render: function() {
        return (
            <div className="page__content">
                <h2>Greenie</h2>
                <p><em>Here</em> is a test paragraph!</p>
                <Link {...this.props} target="red" text="Redone"/>
                <Link {...this.props} target="bluey" text="Blue-ee"/>
            </div>
        );
    }
});

module.exports = Greenie;
