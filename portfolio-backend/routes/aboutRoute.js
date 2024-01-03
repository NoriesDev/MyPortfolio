import express from 'express';
import {
    createAbout,
    createArticle,
    getAbout
} from '../Controller/About.js';

const aboutRouter = express.Router();

aboutRouter.route('/').get(getAbout);
aboutRouter.route('/add').post(createAbout);
aboutRouter.route('/article').post(createArticle);

export default aboutRouter;