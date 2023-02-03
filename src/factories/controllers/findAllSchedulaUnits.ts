import { FindAllSchedulaUnitsController } from "../../presentation/controller/findAllSchedulaUnitsController"
import { makeFindAllSchedulaUnits } from "../useCases/findAllSchedulaUnits"

export const makeFindAllSchedulaUnitsController = () => {
   return new FindAllSchedulaUnitsController(makeFindAllSchedulaUnits())
}