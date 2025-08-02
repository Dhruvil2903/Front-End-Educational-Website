import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8083/api/courses',
  headers: {
    'Content-Type': 'application/json',
  },
});