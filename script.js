//import Movie from 'components/Movie.js';

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
	return React.createElement(Movie, {
		key: movie.id,
		title: movie.title,
		imageUrl:movie.poster,
		description: movie.desc
	});
});

var movieList =
	React.createElement(MovieList, {listTitle: 'List of movies', moviesElements: moviesElements});
ReactDOM.render(movieList, document.getElementById('app'));