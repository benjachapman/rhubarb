window.$ = require('jquery');
var React = require('react');
var Link = require('../Link.jsx');

var Bluey = React.createClass({
    render: function() {
        return (
            <div className="page__content">
                <h2>Bluey</h2>
                <p>This blue page is all the rage</p>
                <p>This blue page is all the rage</p>
                <p>This blue page is all the rage</p>
                <p>This blue page is all the rage</p>
                <p>This blue page is all the rage</p>
                    <p>This blue page is all the rage</p>
                    <p>This blue page is all the rage</p>
                    <p>This blue page is all the rage</p>
                    <p>This blue page is all the rage</p>
                    <p>This blue page is all the rage</p>
                        <p>This blue page is all the rage</p>
                        <p>This blue page is all the rage</p>
                        <p>This blue page is all the rage</p>
                        <p>This blue page is all the rage</p>
                        <p>This blue page is all the rage</p>

                <Link {...this.props} target="greenie" text="Greenie"/>
            </div>
        );
    }
});

module.exports = Bluey;
