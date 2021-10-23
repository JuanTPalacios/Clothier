import apiService from './apiServices';

const fetchService = async (accessToken: string | number | null) => {
  const itemArr = await apiService.fetchItems();
  const userInfo = await apiService.profile(accessToken, 'Bearer');
  // if (userInfo.error) console.log('No user info found');
  return {itemArr, userInfo};
}

export default fetchService;