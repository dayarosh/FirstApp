import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to the Home Page!!!");
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("Listening...");
});

console.log("So far so good");