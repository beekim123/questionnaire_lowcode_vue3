import DateTime from '@/components/SurveyComs/Materials/AdvancedComs/DateTime.vue'
// import type { Status } from '@/types'
import TitleEditor from '@/components/SurveyComs/EditItems/TitleEditor.vue'
import DescEditor from '@/components/SurveyComs/EditItems/DescEditor.vue'
import PositionEditor from '@/components/SurveyComs/EditItems/PositionEditor.vue'
import SizeEditor from '@/components/SurveyComs/EditItems/SizeEditor.vue'
import WeightEditor from '@/components/SurveyComs/EditItems/WeightEditor.vue'
import ItalicEditor from '@/components/SurveyComs/EditItems/ItalicEditor.vue'
import ColorEditor from '@/components/SurveyComs/EditItems/ColorEditor.vue'
import DateTimeTypeEditor from '@/components/SurveyComs/EditItems/DateTimeTypeEditor.vue'
import { markRaw } from 'vue'
import { v4 as uuidv4 } from 'uuid'

export default function () {
  return {
    type: markRaw(DateTime as object),
    name: 'date-time',
    id: uuidv4(),
    status: {
      title: {
        id: uuidv4(),
        status: '默认日期/时间标题',
        isShow: true,
        name: 'title-editor',
        editCom: markRaw(TitleEditor),
      },
      desc: {
        id: uuidv4(),
        status: '默认日期/时间描述内容',
        isShow: true,
        name: 'desc-editor',
        editCom: markRaw(DescEditor),
      },
      type: {
        currentStatus: 3,
        status: [
          {
            value: 'week',
            status: '周',
          },
          {
            value: 'year',
            status: '年',
          },
          {
            value: 'month',
            status: '月',
          },
          {
            value: 'date',
            status: '日期',
          },
        ],
        isShow: true,
        name: 'date-time-type-editor',
        editCom: markRaw(DateTimeTypeEditor as object),
        id: uuidv4(),
      },
      position: {
        id: uuidv4(),
        currentStatus: 0,
        status: ['左对齐', '居中对齐'],
        isShow: true,
        name: 'position-editor',
        editCom: markRaw(PositionEditor),
      },
      titleSize: {
        id: uuidv4(),
        currentStatus: 0,
        status: ['22', '20', '18'],
        isShow: true,
        name: 'size-editor',
        editCom: markRaw(SizeEditor),
      },
      descSize: {
        id: uuidv4(),
        currentStatus: 0,
        status: ['16', '14', '12'],
        isShow: true,
        name: 'size-editor',
        editCom: markRaw(SizeEditor),
      },
      titleWeight: {
        id: uuidv4(),
        currentStatus: 1,
        status: ['加粗', '正常'],
        isShow: true,
        name: 'weight-editor',
        editCom: markRaw(WeightEditor),
      },
      descWeight: {
        id: uuidv4(),
        currentStatus: 1,
        status: ['加粗', '正常'],
        isShow: true,
        name: 'weight-editor',
        editCom: markRaw(WeightEditor),
      },
      titleItalic: {
        id: uuidv4(),
        currentStatus: 1,
        status: ['斜体', '正常'],
        isShow: true,
        name: 'italic-editor',
        editCom: markRaw(ItalicEditor),
      },
      descItalic: {
        id: uuidv4(),
        currentStatus: 1,
        status: ['斜体', '正常'],
        isShow: true,
        name: 'italic-editor',
        editCom: markRaw(ItalicEditor),
      },
      titleColor: {
        id: uuidv4(),
        status: '#000',
        isShow: true,
        name: 'color-editor',
        editCom: markRaw(ColorEditor),
      },
      descColor: {
        id: uuidv4(),
        status: '#909399',
        isShow: true,
        name: 'color-editor',
        editCom: markRaw(ColorEditor),
      },
    },
  }
}
