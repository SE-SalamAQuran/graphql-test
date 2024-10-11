export const typeDefs = `#graphql
    type Game {
        id: ID! # ! means not null
        name: String!
        description: String
        price: Float!
        image: String
        rating: Float
        platforms: [String!]! # two !, one inside to make sure the elements of the array are not null, one on the outside meaning the array itself cannot be null
        genres: [String!]!
        releaseDate: String
        reviews: [Review!]!
    }

    type Review {
        id: ID!
        rating: Int!
        content: String!
        author: Author
    }

    type Author {
        id: ID!
        name: String!
        age: Int!
        games: [Game!]!
        verified: Boolean!
        reviews: [Review!]!
    }

    type Query { # Every GraphQL schema needs to have this element, since it's job is to define the entry points to the graph and specify return types of those entry points
        games: [Game!]!
        game(id: ID!): Game
        authors: [Author!]!
        author(id: ID!): Author
        reviews: [Review!]!
        review(id: ID!): Review       
    }

    type Mutation {
        createGame(name: String!, description: String, price: Float!, image: String, rating: Float, platforms: [String!]!, genres: [String!]!, releaseDate: String): Game
        updateGame(game: GameInput!): Game
        deleteGame(id: ID!): Game
        createAuthor(name: String!, age: Int!, verified: Boolean): Author
        updateAuthor(author: AuthorInput!): Author
        deleteAuthor(id: ID!): Author
        createReview(review: ReviewInput!): Review
        updateReview(review: ReviewInput!): Review
        deleteReview(id: ID!): Review
    }

    input GameInput {
        id: ID!
        name: String!
        description: String
        price: Float!
        image: String
        rating: Float
        platforms: [String!]!
        genres: [String!]!
        releaseDate: String
    }

    input AuthorInput {
        id: ID!
        name: String!
        age: Int!
        verified: Boolean
    }

    input ReviewInput {
        id: ID!
        rating: Int!
        content: String!
        author: ID!
    }
    
`