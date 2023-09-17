import axios from 'axios';
axios.defaults.baseURL = 'https://6506ea363a38daf4803ed919.mockapi.io/';

export const getQuotes = async () => {
  const response = await axios.get('/quotes');
  return response.data;
};
export const createQuote = async fields => {
  const response = await axios.post('/quotes', fields);
  return response.data;
};
export const updateQuote = () => {};
export const deleteQuote = async id => {
  const response = await axios.delete(`quotes/${id}`);
  return response.data;
};
