const express = require("express")
const { v4: uuidv4 } = require("uuid")

const app = express()

app.use(express.json())

const projects = []

app.get("/", function (request, response) {
    return response.json({ message: "Olá Dev! Bem vindo ao curso!" })
})

app.get("/projects", function (request, response) {
    return response.json(projects)
})

app.post("/projects", function (request, response) {
    const { owner, name } = request.body
    const project = {
        id: uuidv4(),
        name,
        owner,
    }
    projects.push(project)

    return response.status(201).json(project)
})

app.put("/projects/:id", function (request, response) {
    const { id } = request.params
    const { owner, name } = request.body

    const projectIndex = projects.findIndex(project => project.id === id)

    if (projectIndex < 0) {
        return response.status(404).json({ error: "Project not found" })
    }

    if (!owner || !name) {
        return response.status(400).json({ error: "Owner and Name are required" })
    }

    const project = { id, name, owner }
    projects[projectIndex] = project

    return response.status(201).json(project)
})

app.delete("/projects/:id", function (request, response) {
    return response.json([
        "Projeto 2",
        "Projeto 3",
    ])
})

app.listen(3000, () => {
    console.log("Server started on port 3000!")
})