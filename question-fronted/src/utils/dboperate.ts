import { ElMessage, ElMessageBox } from 'element-plus'
import { saveSurvey, updateSurveyById } from '@/db/operation'
// 类型
import type { EditorStore } from '@/types'
// 保存试卷
export function save(store: EditorStore) {
  return new Promise((resolve, reject) => {
    ElMessageBox.prompt('请输入问卷标题', '提示', {
      confirmButtonText: '保存',
      cancelButtonText: '取消',
      type: 'info',
    })
      .then(({ value }) => {
        const surveyToSave = {
          createDate: new Date().getTime(),
          updateDate: new Date().getTime(),
          title: value,
          surveyCount: store.surveyCount,
          coms: JSON.parse(JSON.stringify(store.coms)),
        }
        saveSurvey(surveyToSave)
          .then((id) => {
            resolve(id)
            ElMessage({
              type: 'success',
              message: '已保存',
            })
          })
          .catch((e) => {
            reject(e)
            console.log('保存失败')
          })
      })
      .catch((e) => {
        console.log(e)
        console.log('取消保存')
      })
  })
}

// 更新试卷
export function update(store: EditorStore, id: number) {
  return new Promise((resolve, reject) => {
    updateSurveyById(id, {
      updateDate: new Date().getTime(),
      surveyCount: store.surveyCount,
      coms: JSON.parse(JSON.stringify(store.coms)),
    })
      .then(() => {
        resolve(void 0)
        ElMessage({
          type: 'success',
          message: '已保存',
        })
        store.setCurrentComponentIndex(-1)
      })
      .catch((e) => {
        reject(e)
        console.log('取消更新')
      })
  })
}
