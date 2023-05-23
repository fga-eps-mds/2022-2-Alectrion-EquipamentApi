import { Equipment } from '../../db/entities/equipment'
import { Status } from '../../domain/entities/equipamentEnum/status'

export type Query = {
  type?: string
  unit?: string
  situation?: string
  updatedAt?: Date
  brand?: string
  model?: string
  take?: number
  skip?: number
}

export interface EquipmentRepositoryProtocol {
  create(equipment: Equipment): Promise<Equipment>
  updateOne(equipmentData: any): Promise<boolean>
  findOne(equipmentId: string): Promise<Equipment | null>
  genericFind(query: any): Promise<Equipment[]>
  findByTippingNumberOrSerialNumber(id: string): Promise<Equipment | null>
  findByTippingNumber(tippingNumber: string): Promise<Equipment | null>
  deleteOne(id: string): Promise<boolean>
}
