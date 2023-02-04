import { schedulaAxiosClient } from '../services/schedula'
import { SchedulaUnitRepositoryProtocol } from './protocol/schedulaUnitRepositoryProtocol'

export class SchedulaUnitRepository implements SchedulaUnitRepositoryProtocol {
   constructor() {}

   async findAll(): Promise<any> {
      console.log(`base url: ${schedulaAxiosClient.defaults.baseURL}`)
      const responseData = await schedulaAxiosClient.get('/workstations')
      .then((res) => {
         console.log(`SchedulaUnitRepository.findAll(): res.status = ${res.status}`)
         return res.data
      })
      return responseData
  }
}