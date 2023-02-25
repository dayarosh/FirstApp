import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to the Home Page");
});

app.listen(3000, () => {
    console.log("Listening...");
});

console.log("So far so good");