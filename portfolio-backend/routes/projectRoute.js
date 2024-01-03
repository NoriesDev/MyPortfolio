import express from 'express';
import { getProjects, createProject} from '../Controller/ProjectCon.js'

const projectRouter = express.Router();

projectRouter.route('/').get(getProjects);
projectRouter.route('/add').post(createProject);


export default projectRouter;