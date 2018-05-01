var MoviePoster = React.createClass({
  propTypes: {
    imageUrl: React.PropTypes.string.isRequired
  },

  render: function() {
    return (React.createElement('img', {src: this.props.imageUrl, width: 200}));
  },
});