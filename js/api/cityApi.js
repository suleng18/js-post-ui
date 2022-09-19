import axiosClient from './axiosClient'

// import : default import, named import
// export : defalut export , named export
// default: can use your name---> have one default export ONLY
// named export : use exactly name ---> have multiple export

export function getAllCities(params) {
  const url = '/cities'
  return axiosClient.get(url, { params })
}

// named export
export function getCityById(id) {
  const url = `/cities/${id}`
  return axiosClient.get(url)
}

// const cityApi = {
//   add(data) {
//     const url = '/cities'
//     return axiosClient.post(url, data)
//   },

//   update(data) {
//     const url = `/cities/${data.id}`
//     return axiosClient.patch(url, data)
//   },

//   updateFormData(data) {
//     const url = `/cities/${data.id}`
//     return axiosClient.patch(url, data, {
//       headers: { 'Content-Type': 'multipart/form-data' },
//     })
//   },

//   remove(id) {
//     const url = `/cities/${id}`
//     return axiosClient.delete(url, data)
//   },
// }

// export default cityApi
