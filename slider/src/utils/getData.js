import axios from 'axios';

export default async ({method, url, params, data
}) => {
  try {
    const response = await axios({method, url, params, data});
    return response.data;
  } catch (error) {
    throw new Error('Failed to acces data: ' + error.message);
  }
};
