const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username: "shradha",
        content: "Hard Work is Important for Success ",
    },

    {
        id: uuidv4(),
        username: "rahulkumar",
        content: "I got selected ",
    },

    {
        id: uuidv4(),
        username: "the_writing_soul",
        content: "Morning journaling has completely changed the way I handle stress."
    },
    {
        id: uuidv4(),
        username: "mindful_maya",
        content: "Your phone doesn’t need your attention as much as your mind does."
    },
    {
        id: uuidv4(),
        username: "travel_with_me",
        content: "Solo trips are scary until they become the most freeing thing you've ever done."
    },
    {
        id: uuidv4(),
        username: "chai_and_chapters",
        content: "Some books don’t just tell stories — they heal you while doing it."
    },
    {
        id: uuidv4(),
        username: "sunset_diaries",
        content: "Evening skies make me believe that endings can be beautiful too."
    },
    {
        id: uuidv4(),
        username: "lifeinlines",
        content: "You don't always need a plan. Sometimes, going with the flow is the plan."
    },
    {
        id: uuidv4(),
        username: "deepthoughts",
        content: "Letting go isn’t about giving up. It’s about making space for better."
    },
    {
        id: uuidv4(),
        username: "minimal_life",
        content: "When you own less, you feel more — more freedom, more time, more peace."
    },
    {
        id: uuidv4(),
        username: "blogger_next_door",
        content: "Publishing your thoughts online is scary at first. But someone out there needs to read them."
    },
    {
        id: uuidv4(),
        username: "authorinprogress",
        content: "The first draft doesn't have to be perfect. It just has to be written."
    }
];



app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newcontent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newcontent;
    console.log(post);
    res.send("patch request working");
});


app.listen(port, () => {
    console.log("istening on port:8080");
});

