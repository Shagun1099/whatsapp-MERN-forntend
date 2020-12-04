import axios from 'axios';

const instance= axios.create({
	baseURL:"https://git.heroku.com/whatsapp-mern-backend-app.git",
});

export default instance;