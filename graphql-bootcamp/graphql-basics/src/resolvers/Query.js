const Query = {
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
    posts(parent, args, {db}, info) {
        if(!args.query) {
            return db.posts;
        }
        return db.posts.filter((post) => {
            return post.title.toLowerCase().includes(args.query.toLowerCase()) || post.body.toLowerCase().includes(args.query.toLowerCase());
        });
    },
    users(parent, args, {db}, info) {
        if(!args.query) {
            return db.users;
        }
        return db.users.filter((user) => {
            return user.name.toLowerCase().includes(args.query.toLowerCase());
        });
    },
    comments(parent, args, {db}, info) {
        if(!args.query) {
            return db.comments;
        }
        return db.comments.filter((comment) => {
            return comment.text.toLowerCase().includes(args.query.toLowerCase());
        });
    } 
};

export default Query;