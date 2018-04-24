var movies = [
	{
		title: 'Harry Potter',
		desc: 'Movie about a wizard boy'
	},
	{
		title: 'Lion King',
		desc: 'Movie about a lion from savanna'
	}
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc)
	);
});

var element =
	React.createElement('div', {},
		React.createElement('h1', {}, 'List of movies'),
		React.createElement('ul', {}, moviesElements),
	);
ReactDOM.render(element, document.getElementById('app'));