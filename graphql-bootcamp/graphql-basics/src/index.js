import {GraphQLServer} from 'graphql-yoga';


//Demo data
const users = [
    {
        id: "1",
        name: "User 1",
        email: "user1@cmd.com"
    },
    {
        id: "2",
        name: "User 2",
        email: "user2@cmd.com",
        age: 24
    },
    {
        id: "3",
        name: "User 3",
        email: "user1@cmd.com",
        age: 27
    }
];

const posts = [
    {
        id: "1",
        title: "Post 1",
        body: "Body 1",
        published: true,
        author: "1"
    },
    {
        id: "2",
        title: "Post 2",
        body: "Body 2",
        published: false,
        author: "1"
    },
    {
        id: "3",
        title: "Post 3",
        body: "Body 3",
        published: true,
        author: "3"
    }
];

const comments = [
    {
        id: "1",
        text: "Testing comment 1",
        author: "3",
        post: "1"
    },
    {
        id: "2",
        text: "Testing comment 2",
        author: "3",
        post: "2"
    },
    {
        id: "3",
        text: "Testing comment 3",
        author: "3",
        post: "3"
    },
    {
        id: "4",
        text: "Testing comment 4",
        author: "2",
        post: "1"
    },
    {
        id: "5",
        text: "Testing comment 5",
        author: "2",
        post: "2"
    },
    {
        id: "6",
        text: "Testing comment 6",
        author: "1",
        post: "2"
    },
    {
        id: "7",
        text: "Testing comment 7",
        author: "1",
        post: "3"
    }
];

// Type Definitions (schema)

const typeDefs = `
    type Query {
        hello: String!
        me: User!
        users(query: String): [User!]!
        posts(query: String): [Post!]!
        comments(query: String): [Comment!]!
        post: Post!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
        posts: [Post!]!
        comments: [Comment!]!
    }

    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
        author: User!
        comments: [Comment!]!
    }

    type Comment{
        id: ID!
        text: String!
        author: User!
        post: Post!
    }
`;

// Resolvers
const resolvers = {
    Query: {
        hello() {
            return "Hello World!";
        },
        me() {
            return {
                id: "49",
                name: "Taimoor Raza",
                email: "taimoor.raza7@gmail.com"
            };
        },
        post() {
            return {
                id: "1",
                title: "Title 1",
                body: "Body 1",
                published: true
            }
        },
        posts(parent, args, ctx, info) {
            if(!args.query) {
                return posts;
            }
            return posts.filter((post) => {
                return post.title.toLowerCase().includes(args.query.toLowerCase()) || post.body.toLowerCase().includes(args.query.toLowerCase());
            });
        },
        users(parent, args, ctx, info) {
            if(!args.query) {
                return users;
            }
            return users.filter((user) => {
                return user.name.toLowerCase().includes(args.query.toLowerCase());
            });
        },
        comments(parent, args, ctx, info) {
            if(!args.query) {
                return comments;
            }
            return comments.filter((comment) => {
                return comment.text.toLowerCase().includes(args.query.toLowerCase());
            });
        }
    },
    Post: {
        author(parent, args, ctx, info) {
            return users.find(user => user.id === parent.author);
        },
        comments(parent, args, ctx, info) {
            return comments.filter((comment) => {
                return comment.post === parent.id;
            });
        }
    },
    User: {
        posts(parent, args, ctx, info) {
            return posts.filter((post) => {
                return post.author === parent.id;
            });
        },
        comments(parent, args, ctx, info) {
            return comments.filter((comment) => {
                return comment.author === parent.id;
            });
        }
    },
    Comment: {
        author(parent, args, ctx, info) {
            return users.find(user => user.id === parent.author);
        },
        post(parent, args, ctx, info) {
            return posts.find(post => post.id === parent.post);
        }
    }
};

const server = new GraphQLServer({
    typeDefs,
    resolvers
});

server.start(() => {
    console.log("Server is up and running");
});