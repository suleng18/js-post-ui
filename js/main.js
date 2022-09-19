import axiosClient from './api/axiosClient'
import postApi from './api/postApi'
import { getAllCities, getCityById } from './api/cityApi'

async function main() {
  try {
    const queryParams = {
      _page: 1,
      _limit: 5,
    }
    const data = await postApi.getAll(queryParams)
    console.log('main.js data', data)
  } catch (error) {
    console.log('get all failed', error)
    // show modal , toast error
  }

  await postApi.updateFormData({
    id: 'lea2aa9l7x3a5tk',
    title: 'Nam voluptatum porro 111',
  })
}

main()
