import axios from 'axios'
// to delete plant from garden
export default async (email, id) => {
  const data = { email, Id: id }

  await axios.post(`${API_BASE_URL}/gardenDelete`, data) // eslint-disable-line no-undef
}
