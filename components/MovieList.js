var MovieList = React.createClass({
  propTypes: {
  	listTitle: React.PropTypes.string.isRequired,
    moviesElements: React.PropTypes.arrayOf(React.PropTypes.element).isRequired
  },

  render: function() {
    return (React.createElement('div', {},
				React.createElement('h1', {}, this.props.listTitle),
				React.createElement('ul', {}, this.props.moviesElements)
				)
    );
  },
});