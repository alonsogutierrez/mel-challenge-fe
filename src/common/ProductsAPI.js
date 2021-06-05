import axios from 'axios';

const API_BFF_URL = process.env.API_BFF_URL || 'http://localhost:3000';
const AUTHOR_SIGN = process.env.AUTHOR_SIGN || 'Alonso Gutierrez';

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
      headers: {
        sign: `Sign ${AUTHOR_SIGN}`
      },
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
      headers: {
        sign: `Sign ${AUTHOR_SIGN}`
      },
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
