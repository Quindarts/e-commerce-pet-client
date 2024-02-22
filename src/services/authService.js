import axiosConfig from './axiosConfig'
// api register
const apiRegister = async (data) => {
  const response = await axiosConfig.post('/auth/register', data)
  if (response) {
    localStorage.setItem('user', JSON.stringify(response))
  }
  return response
}
// api login

const apiLogin = async (data, token) => {
  const headers = {
    Authorization: `Bearer ${token || ''}`,
    'Content-Type': 'application/json',
  }
  const response = await axiosConfig.post('/auth/login', data, { headers })
  if (response) {
    localStorage.setItem('user', JSON.stringify(response))
  }
  return response
}

// api logout
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  apiRegister,
  logout,
  apiLogin,
}
export default authService
