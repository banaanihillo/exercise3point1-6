const express = require("express");
const app = express();
app.use(express.json());

let persons = [
    {
        id: Math.floor(Math.random() * 100000),
        name: "Foo Bar",
        number: "0-ONE",
    },
    {
        id: Math.floor(Math.random() * 100000),
        name: "Chocolate Bar",
        number: "0-SUGAR",
    }
]

app.get("/api/persons", (request, response) => {
    response.json(persons)
})

app.get("/api/persons/:id", (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.get("/info", (request, response) => {
    const date = new Date()
    response.send(`The phonebook currently has ${persons.length} entries.
        This request was made on ${date}.`)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Running the server on port ${PORT}`)
})
