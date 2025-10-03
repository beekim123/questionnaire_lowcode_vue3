import type { TypeStatus } from '@/types'

export function setType(status: TypeStatus, payload: number) {
  if (payload !== status.type.currentStatus) {
    status.title.isShow = !status.title.isShow
    status.desc.isShow = !status.desc.isShow
    status.position.isShow = !status.position.isShow
    status.titleSize.isShow = !status.titleSize.isShow
    status.descSize.isShow = !status.descSize.isShow
    status.titleWeight.isShow = !status.titleWeight.isShow
    status.descWeight.isShow = !status.descWeight.isShow
    status.titleItalic.isShow = !status.titleItalic.isShow
    status.descItalic.isShow = !status.descItalic.isShow
    status.titleColor.isShow = !status.titleColor.isShow
    status.descColor.isShow = !status.descColor.isShow
  }
}
