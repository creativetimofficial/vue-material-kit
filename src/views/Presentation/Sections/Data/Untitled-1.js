const axios = require('axios');

async function testAPI() {
    try {
        const response = await axios.get('http://somebodyhire.me/api/projects/');
        
        const items = response.data.map((project) => ({
            image: project.featured_image,
            title: project.title,
            subtitle: project.description,
            route: project.id,
            pro: false // replace with actual condition for 'pro'
        }));
        
        console.log(items[0]);
    } catch (error) {
        console.error('Error connecting to API:', error);
    }
}

testAPI();