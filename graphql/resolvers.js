import { getMovies, getMovie, getSuggestions } from './db';

const resolvers = {
	Query: {
		movies: (_, { rating, limit }) => getMovies(limit, rating),
		movie: (_, { id }) => getMovie(id),
		suggestions: (_, { id }) => getSuggestions(id),
	},
};

/*
## getMovies

query{
  movies(rating:10, limit:30){
		id
    title
  }
}

## getMovie

query{
  movie(id:2){
		id
    title
  }
}

## suggestions
query{
  suggestions(id:2){
		id
    title
  }
}
*/

export default resolvers;
