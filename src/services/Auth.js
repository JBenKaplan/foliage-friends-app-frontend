import Client from './api'

export const SignInUser = async (data) => {
  try {
    const res = await Client.post('/users/login', data)
    localStorage.setItem('token', res.data.token)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('/users/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    // Checks if the current token if it exists is valid
    const res = await Client.get('/users/session')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetRooms = async (req) => {
  try {
    console.log(req)
    const res = await Client.get(`/rooms/user/${req.id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
