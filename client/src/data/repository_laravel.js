import axios from 'axios';
const API_HOST = "http://localhost:3037";

const fetchMakes = async () => {
    const response = await axios.get(API_HOST + '/api/makes');
    return response.data;
  };

  const fetchModels = async (make) => {
    const response = await axios.get(API_HOST + `/api/models/${make}`);
    return response.data;
  };

  const fetchTypes = async (make, model) => {
    const response = await axios.get(API_HOST + `/api/types/${make}/${model}`);
    return response.data;
  };

  const fetchPartNumber = async (make, model, type) => {
    const response = await axios.get(API_HOST + `/api/part-number/${make}/${model}/${type}`);
    return response.data;
  };

  export {
    fetchMakes,
    fetchModels, 
    fetchTypes,
    fetchPartNumber,
  }
