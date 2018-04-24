var movies = [
	{
		id:    '1',
		title: 'Harry Potter',
		desc:  'Movie about a wizard boy'
	},
	{
		id:    '2',
		title: 'Lion King',
		desc:  'Movie about a lion from savanna'
	}
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
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