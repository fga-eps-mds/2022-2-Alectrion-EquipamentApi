import { request } from 'https'
import { workStationsApiOptions } from '../services/schedula'
import { SchedulaUnitRepositoryProtocol } from './protocol/schedulaUnitRepositoryProtocol'

export class SchedulaUnitRepository implements SchedulaUnitRepositoryProtocol {
   // private readonly schedulaUnits
   constructor() {
      // this.schedulaUnits = request(workStationsApiOptions, (res) => {
      //    res.addListener()
      // })
   }

   async findAll(): Promise<any> {
      let schedulaUnits = {}
      const schedulaRequest = request(workStationsApiOptions).on('response', (res) => {
         schedulaUnits = res.read()
         console.log(`schedula units: ${schedulaUnits}`)
      }).end()
      return schedulaUnits
  }
}