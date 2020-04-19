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

const db = {
    users,
    posts,
    comments
};

export default db;