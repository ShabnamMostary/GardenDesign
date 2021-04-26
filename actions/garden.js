import axios from 'axios'

export default async (email, id) => {
  const data = { userEmail: email, plantId: id }

  await axios.post(`${API_BASE_URL}/garden`, data) // eslint-disable-line no-undef
}
