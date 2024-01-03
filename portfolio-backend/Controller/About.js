
import articleModel from '../models/articleModel.js';
import aboutModel from '../models/aboutModel.js';


const getAbout = async (req, res, next) => {
    try {
        const dbAbout = await aboutModel.find().populate('article');
        return res.json(dbAbout);
    } catch (error) {
        next(error)
    }
}

const createAbout = async ( req, res, next) => {
try {
    req.body.forEach( async ( { article }) => {
        const about = await aboutModel.create({ article });
    })
    return res.json('about created');
} catch (error) {
    next(error)
}
}


const createArticle = async (req, res, next) => {
    try {
        const { headline, paragraph } = req.body;
        if (!headline || !paragraph) {
            return res.status(400).json({error: 'Headline and paragraph are required please hand all data needed'})
        }
        const newArticle = await articleModel.create({
            headline, 
            paragraph
        });
        return res.json('Article created!')
    } catch (error) {
        next(error)
    }
}


export {
    createAbout,
    createArticle,
    getAbout
}