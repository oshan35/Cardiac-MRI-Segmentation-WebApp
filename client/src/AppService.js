import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchData = async () => {
    try {
        const response = await axios.get(`${API_URL}/data`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const segmentImage = async (imageFile) => {
    const formData = new FormData();
    formData.append('image', imageFile);
    
    try {
        const response = await axios.post(`${API_URL}/segment`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return response.data;
    } catch (error) {
        console.error('Error segmenting image:', error);
        throw error;
    }
};