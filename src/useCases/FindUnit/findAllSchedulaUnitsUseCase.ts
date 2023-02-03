import { SchedulaUnitRepository } from "../../repository/schedulaUnitRepository";
import { UseCase, UseCaseReponse } from "../protocol/useCase";
import { NotUnitsFound } from "./findAllUnitUseCase";

export class FindAllSchedulaUnitsUseCase implements UseCase<any, any> {
   constructor(private readonly schedulaUnitRepository: SchedulaUnitRepository){}

   async execute(): Promise<UseCaseReponse<any>> {
      const units = await this.schedulaUnitRepository.findAll()
      if (units !== null) {
         return {
           isSuccess: true,
           data: units
         }
       } else {
         return {
           isSuccess: false,
           error: new NotUnitsFound()
         }
       }
   }
}