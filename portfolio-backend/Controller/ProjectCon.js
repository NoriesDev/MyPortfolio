import projectModel from "../models/projectModel.js";


const getProjects = async (req, res, next) => {
    try {
        const project = await projectModel.find();
        return res.json(project);
    } catch (error) {
        next(error)
    }
}


const createProject = async (req, res, next) => {
    try {
        const {  projectTitle, description, tools, link } = req.body;
        if ( !projectTitle || !description || !tools || !link) {
            return res.status(400).json({error: ' projectTitle, description, tools, link are required please hand all data needed'})
        }
        const newProject = await projectModel.create({
            projectTitle,
            description,
            tools,
            link
        });
        return res.json('Project created!')
    } catch (error) {
        next(error)
    }
}


export {
    getProjects, createProject
}