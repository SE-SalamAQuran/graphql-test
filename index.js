import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import _db from "./_db.js";


// Resolvers object contains a bunch or resolver functions and they are there to handle any incoming requests to return data to client
export const resolvers = {
    Query: {
        games: () => _db.games,
        game: (parent, args) => {
            return _db.games.find(game => game.id === args.id)
        },
        authors: () => _db.authors,
        author: (parent, args) => {
            return _db.authors.find(author => author.id === args.id)
        },
        reviews: () => _db.reviews,
        review: (parent, args) => {
            return _db.reviews.find(review => review.id === args.id)
        }
    },
    Game: {
        reviews: (parent) => {
            return _db.reviews.filter(review => review.game.id === parent.id)
        }
    },
    Author: {
        reviews: (parent) => {
            return _db.reviews.filter(review => review.author.id === parent.id)
        }
    },
    Review: {
        author: 
            (parent) => {
                return _db.authors.find(author => author.id === parent.author.id)
            }
    },

    Mutation: {
        createGame: (_, args) => {
            let game = {
                ...args, 
                id: Math.floor(Math.random() * 10000).toString()
              }
            _db.games.push(game)
            return game
        },
        createAuthor: (parent, args) => {
            _db.authors.push(args.author)
            return args.author
        },
        createReview: (parent, args) => {
            _db.reviews.push(args.review)
            return args.review
        },
        deleteGame: (parent, args) => {
            const game = _db.games.find(game => game.id === args.id)
            _db.games = _db.games.filter(game => game.id !== args.id)
            return game
        },
        deleteAuthor: (parent, args) => {
            const author = _db.authors.find(author => author.id === args.id)
            _db.authors = _db.authors.filter(author => author.id !== args.id)
            return author
        },
        deleteReview: (parent, args) => {
            const review = _db.reviews.find(review => review.id === args.id)
            _db.reviews = _db.reviews.filter(review => review.id !== args.id)
            return review
        },
        updateGame: (parent, args) => {
            const game = _db.games.find(game => game.id === args.game.id)
            game.name = args.game.name
            game.description = args.game.description
            game.price = args.game.price
            game.image = args.game.image
            game.rating = args.game.rating
            game.platforms = args.game.platforms
            game.genres = args.game.genres
            game.releaseDate = args.game.releaseDate
            return game
        },
        updateAuthor: (parent, args) => {
            const author = _db.authors.find(author => author.id === args.author.id)
            author.name = args.author.name
            author.age = args.author.age
            author.verified = args.author.verified
            return author
        },
        updateReview: (parent, args) => {
            const review = _db.reviews.find(review => review.id === args.review.id)
            review.rating = args.review.rating
            review.content = args.review.content
            return review
        }
    }
}


const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀 GraphQL  Server ready at: ${url}`);