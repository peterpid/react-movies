var movies = [
	{
		id:     '1',
		title:  'Harry Potter',
		desc:   'Movie about a wizard boy',
		poster: 'images/harry_potter.jpg'
	},
	{
		id:     '2',
		title:  'Lion King',
		desc:   'Movie about a lion from savanna',
		poster: 'images/lion_king.jpg'
	},
	{
		id:     '3',
		title:  'ET',
		desc:   'Story about a funny alien',
		poster: 'images/et.jpg'
	},
	{
		id:     '4',
		title:  'Rocky',
		desc:   'Story about a boxer',
		poster: 'images/rocky.jpg'
	}
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('img', {src: movie.poster, width: 200}),
		React.createElement('p', {}, movie.desc)
	);
});

var element =
	React.createElement('div', {},
		React.createElement('h1', {}, 'List of movies'),
		React.createElement('ul', {}, moviesElements),
	);
ReactDOM.render(element, document.getElementById('app'));