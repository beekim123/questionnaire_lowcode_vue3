import type { MaterialGroup } from '@/types'
import { CircleCheck, Files, EditPen, ChatLineSquare, User, Message } from '@element-plus/icons-vue'
 const SurveyComsList: MaterialGroup[] = [
  {
    title: '选择',
    icon: CircleCheck,
    list: [
      { materialName: 'single-select', comName: '单选' },
      { materialName: 'multi-select', comName: '多选' },
      { materialName: 'option-select', comName: '下拉' },
      { materialName: 'single-pic-select', comName: '图片单选' },
      { materialName: 'multi-pic-select', comName: '图片多选' },
    ],
  },

  {
    title: '文本输入',
    icon: EditPen,
    list: [{ materialName: 'text-input', comName: '文本输入' }],
  },
  {
    title: '高级题型',
    icon: Files,
    list: [
      { materialName: 'rate-score', comName: '评价/打分' },
      { materialName: 'date-time', comName: '日期/时间' },
    ],
  },
  {
    title: '备注说明',
    icon: ChatLineSquare,
    list: [
      {
        materialName: 'text-note',
        comName: '备注说明',
      },
    ],
  },
  {
    title: '个人信息',
    icon: User,

    list: [
      { materialName: 'personal-info-name', comName: '姓名' },
      { materialName: 'personal-info-id', comName: '身份证' },
      { materialName: 'personal-info-birth', comName: '出生日期' },
      { materialName: 'personal-info-gender', comName: '性别' },
      { materialName: 'personal-info-age', comName: '年龄' },
      { materialName: 'personal-info-education', comName: '学历' },
      { materialName: 'personal-info-collage', comName: '大学' },
      { materialName: 'personal-info-major', comName: '专业' },
      { materialName: 'personal-info-industry', comName: '行业' },
      { materialName: 'personal-info-career', comName: '职业' },
      { materialName: 'personal-info-company', comName: '公司' },
      { materialName: 'personal-info-position', comName: '职位' },
    ],
  },
  {
    title: '联系方式',
    icon: Message,
    list: [
      { materialName: 'personal-info-tel', comName: '手机' },
      { materialName: 'personal-info-wechat', comName: '微信号' },
      { materialName: 'personal-info-qq', comName: 'QQ号' },
      { materialName: 'personal-info-email', comName: '邮箱' },
      { materialName: 'personal-info-address', comName: '地址' },
    ],
  },
]
export default SurveyComsList