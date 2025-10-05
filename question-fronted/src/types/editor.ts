import type { VueComType, Status } from './common'
import type { Material } from './material'

export type MaterialItem = {
  materialName: Material
  comName: string
}

export type MaterialItemList = Array<MaterialItem>

export interface MaterialGroup {
  title: string
  icon: VueComType
  list: MaterialItemList
}

export type DefaultStatusMap = {
  [key in Material]: () => Status
}
