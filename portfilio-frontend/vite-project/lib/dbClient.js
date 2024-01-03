import axios from 'axios';
const backend = import.meta.env.VITE_BACKEND

const getAbout = async () => {
    try {
        const { data } = await axios.get(`${backend}/about/`)
        console.log("About was fetched from backend successfully!")
        console.log(data)
        return data;
        
    } catch (error) {
        console.error("failed to fetch article from backend")
    }};

    const getProjects = async () => {
        try {
            const response = await axios.get(`${backend}/project/`);
            console.log('Project fetched from backend successfully!')
            console.log(response.data); // Access data property
            return response.data; // Return data property
        } catch (error) {
            console.error('Failed to fetch project from Database..')
            throw error; // Re-throw the error for handling in the component
        }
    }
    

    export {
        getAbout,
        getProjects
    }