import { schedulaAxiosClient } from "../services/schedula";
import { SchedulaUnit } from "../domain/entities/schedulaUnit";
import { SchedulaUnitRepositoryProtocol } from "./protocol/schedulaUnitRepositoryProtocol";

export class SchedulaUnitRepository implements SchedulaUnitRepositoryProtocol {
   constructor() { }

   async findAll(): Promise<SchedulaUnit[] | null> {
      console.log(`base url: ${schedulaAxiosClient.defaults.baseURL}`);
      const responseData: [any] = await schedulaAxiosClient
         .get("/workstations")
         .then((res) => {
            console.log(
               `SchedulaUnitRepository.findAll(): res.status = ${res.status}`
            );
            return res.data;
         });

      /*
       * Com os dados em maos, filtrar para retornar apenas os campos de acordo
       * com o tipo SchedulaUnit
       */
      try {
         const schedulaUnits: SchedulaUnit[] = responseData.map((obj) => {
            return {
               id: obj.id,
               name: obj.name,
               localization: obj.city.name,
            };
         });
         return schedulaUnits;
      } catch (error) {
         console.log(`SchedulaUnitRepository.findAll(): failed to map results,
         returning null`);
         return null;
      }
   }
}
