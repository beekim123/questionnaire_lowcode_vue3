/**
 * 切换仓库，对外暴露的统一接口
 */
import { useMaterialStore } from './useMaterial'
import { useEditorStore } from './useEditor'
export default function () {
  // 从本地拿到当前的视图
  const activeView = localStorage.getItem('activeView')
  switch (activeView) {
    case 'materials': {
      const materialStore = useMaterialStore()
      return materialStore
    }
    case 'editor': {
      const editStore = useEditorStore()
      return editStore
    }
  }
}
