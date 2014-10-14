/** @jsx React.DOM */
(function (root) {
    // var React = require('react');
    var React = root.React;

    root.AppContainer = React.createClass({
        render: function () {
            return (
                <div className="container">
                    <PageHeader />
                </div>
            );
        }
    });

    // module.exports = _Template;
})(this);