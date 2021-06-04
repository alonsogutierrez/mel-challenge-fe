import axios from 'axios';

const API_BFF_URL = process.env.API_BFF_URL || 'http://localhost:3000';

const logger = console;

logger.info('BaseURL: ', API_BFF_URL);

const bffInstance = () => {
  const bffInstance = axios.create({
    baseURL: API_BFF_URL,
    timeout: 10 * 1000
  });
  return bffInstance;
};

const getProductsByText = async text => {
  try {
    const client = bffInstance();
    const response = await client.request({
      url: '/api/items',
      method: 'get',
      params: {
        q: text
      }
    });
    return response.data;
  } catch (err) {
    throw new Error(`Can't get products by text ${err.message}`);
  }
};

const getProductById = async id => {
  try {
    const client = bffInstance();
    const response = await client.request({
      url: `/api/items/${id}`,
      method: 'get',
      params: {}
    });
    return response.data;
  } catch (err) {
    throw new Error(`Can't get product by id ${err.message}`);
  }
};

export default {
  getProductsByText,
  getProductById
};
