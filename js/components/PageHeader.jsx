/** @jsx React.DOM */
(function (root) {
    // var React = require('react');
    var React = root.React;

    root.PageHeader = React.createClass({
        render: function () {
            return (
                <div className="page-header">
                    <h1>Hello, World! <small>This is a Backbone &amp; React Boilerplate.</small></h1>
                </div>
            );
        }
    });

    // module.exports = _Template;
})(this);