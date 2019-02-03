import axios from 'axios';

const KEY = 'AIzaSyBVZOxYPzOWgZtRaZ8VAAMVxtEfOcBZE38';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});