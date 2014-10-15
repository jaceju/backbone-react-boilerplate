/** @jsx React.DOM */
(function (root) {
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
})(this);