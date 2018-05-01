var Movie = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    imageUrl: React.PropTypes.string,
    description: React.PropTypes.string
  },

  render: function() {
    return (
      React.createElement('li', {},
        React.createElement(MovieTitle, {title: this.props.title}),
        React.createElement(MoviePoster, {imageUrl: this.props.imageUrl}),
        React.createElement(MovieDescription, {description: this.props.description})
      )
    );
  },
});
