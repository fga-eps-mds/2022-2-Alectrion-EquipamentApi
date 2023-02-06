import { HttpResponse, ok, serverError } from "../helpers"
import { Controller } from "../protocols/controller"
import { FindAllSchedulaUnitsUseCase } from '../../useCases/FindUnit/findAllSchedulaUnitsUseCase'

export class FindAllSchedulaUnitsController extends Controller {
   constructor(private readonly findAllSchedulaUnits: FindAllSchedulaUnitsUseCase){
      super()
   }

   async perform(): Promise<HttpResponse<any>> {
      const response = await this.findAllSchedulaUnits.execute()
      if (response.isSuccess && response.data) {
         return ok(response.data)
      } else {
         return serverError(response.error)
      }
   }
}