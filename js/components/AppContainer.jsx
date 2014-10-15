/** @jsx React.DOM */
(function (root) {
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
})(this);