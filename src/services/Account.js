import Client from './api'

export const DeleteAccount = async (userId) => {
  try {
    const res = await Client.delete(`/users/delete/${userId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateAccount = async (updateBody) => {
  try {
    console.log(updateBody)
    let res = await Client.put('/users/update', updateBody)
    return res.data
  } catch (error) {
    throw error
  }
}