import axios from 'axios'
// to show my garden
export default async (email) => {
  const { data } = await axios.get(`${API_BASE_URL}/garden/${email}`) // eslint-disable-line no-undef

  return data
}
