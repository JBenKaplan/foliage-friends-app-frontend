import Client from './api'

export const DeleteAccount = async (userId) => {
  try {
    const res = await Client.delete(`/users/delete/${userId}`)
    return res.data
  } catch (error) {
    throw error
  }
}
