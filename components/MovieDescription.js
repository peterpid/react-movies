var MovieDescription = React.createClass({
  propTypes: {
    description: React.PropTypes.string.isRequired
  },

  render: function() {
    return (React.createElement('p', {}, this.props.description));
  },
});