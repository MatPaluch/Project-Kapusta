export const fetchUserData = async token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  const response = await axios.get('https://project-kapusta-rest-api.vercel.app/user');
  return response.data;
};
