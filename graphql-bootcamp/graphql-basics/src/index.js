import {GraphQLServer} from 'graphql-yoga';
import db from './db';
import Mutation from "./resolvers/Mutation";
import Query from "./resolvers/Query";
import User from "./resolvers/User";
import Post from "./resolvers/Post";
import Comment from "./resolvers/Comment";

// Resolvers
const resolvers = {
    Mutation,
    Query,
    User,
    Post,
    Comment
};

const server = new GraphQLServer({
    typeDefs: `./src/schema.graphql`,
    resolvers,
    context: {
        db
    }
});

server.start(() => {
    console.log("Server is up and running");
});