import { SchedulaUnitRepository } from '../../repository/schedulaUnitRepository'
import { FindAllSchedulaUnitsUseCase } from '../../useCases/FindUnit/findAllSchedulaUnitsUseCase'

export const makeFindAllSchedulaUnits = () => {
   const schedulaUnitRepository = new SchedulaUnitRepository()
   return new FindAllSchedulaUnitsUseCase(schedulaUnitRepository)
}