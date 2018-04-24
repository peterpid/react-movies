var element =
	React.createElement('div', {},
		React.createElement('h1', {}, 'List of movies'),
		React.createElement('ul', {},
			React.createElement('li', {},
				React.createElement('h2', {}, 'Harry Potter'),
				React.createElement('p', {}, 'Movie about a wizard boy'),
			),
			React.createElement('li', {},
				React.createElement('h2', {}, 'Lion King'),
				React.createElement('p', {}, 'Movie about a lion from savanna'),
			),
		),
	);
ReactDOM.render(element, document.getElementById('app'));