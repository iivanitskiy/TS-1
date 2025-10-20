interface Comment {
	id: number;
	email: string;
}

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

const getData = (url: string): Promise<Comment[]> => {
	return fetch(url)
		.then(response => {
			if (!response.ok) {
				throw new Error(`Error ${response.status}`);
			}
			return response.json() as Promise<Comment[]>;
		});
}

getData(COMMENTS_URL)
	.then(data => {
		data.forEach(comment => {
			console.log(`ID: ${comment.id}, Email: ${comment.email}`);
		});
	})
	.catch(error => {
		console.error('Error', error);
	});

/**
* ID: 1, Email: Eliseo...
* ID: 2, Email: Jayne_Kuhic...
* ID: 3, Email: Nikita...
* ID: 4, Email: Lew...
* ...
*/