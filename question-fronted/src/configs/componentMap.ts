// 类型
import type { ComponentMap } from '@/types'
// 引入业务组件
import SingleSelect from '@/components/SurveyComs/Materials/SelectComs/SingleSelect.vue'
import MultiSelect from '@/components/SurveyComs/Materials/SelectComs/MultiSelect.vue'
import OptionsSelect from '@/components/SurveyComs/Materials/SelectComs/OptionSelect.vue'
import SinglePicSelect from '@/components/SurveyComs/Materials/SelectComs/SinglePicSelect.vue'
import MultiPicSelect from '@/components/SurveyComs/Materials/SelectComs/MultiPicSelect.vue'
import TextNote from '@/components/SurveyComs/Materials/NoteComs/TextNote.vue'
import TextInput from '@/components/SurveyComs/Materials/InputComs/TextInput.vue'
import DateTime from '@/components/SurveyComs/Materials/AdvancedComs/DateTime.vue'
import RateScore from '@/components/SurveyComs/Materials/AdvancedComs/RateScore.vue'
// 引入编辑组件
import TitleEditor from '@/components/SurveyComs/EditItems/TitleEditor.vue'
import DescEditor from '@/components/SurveyComs/EditItems/DescEditor.vue'
import PositionEditor from '@/components/SurveyComs/EditItems/PositionEditor.vue'
import SizeEditor from '@/components/SurveyComs/EditItems/SizeEditor.vue'
import WeightEditor from '@/components/SurveyComs/EditItems/WeightEditor.vue'
import ItalicEditor from '@/components/SurveyComs/EditItems/ItalicEditor.vue'
import TextInputTypeEditor from '@/components/SurveyComs/EditItems/TextInputTypeEditor.vue'
import TextTypeEditor from '@/components/SurveyComs/EditItems/TextTypeEditor.vue'
import OptionsEditor from '@/components/SurveyComs/EditItems/OptionsEditor.vue'
import PicOptionsEditor from '@/components/SurveyComs/EditItems/PicOptionsEditor.vue'
import DateTimeTypeEditor from '@/components/SurveyComs/EditItems/DateTimeTypeEditor.vue'
import rateTextEditor from '@/components/SurveyComs/EditItems/rateTextEditor.vue'

import { markRaw } from 'vue'

 const componentMap: ComponentMap = {
  // 业务组件
  'single-select': markRaw(SingleSelect),
  'multi-select': markRaw(MultiSelect),
  'option-select': markRaw(OptionsSelect),
  'single-pic-select': markRaw(SinglePicSelect),
  'multi-pic-select': markRaw(MultiPicSelect),
  'text-note': markRaw(TextNote),
  'text-input': markRaw(TextInput),
  'personal-info-name': markRaw(TextInput),
  'personal-info-id': markRaw(TextInput),
  'personal-info-tel': markRaw(TextInput),
  'personal-info-wechat': markRaw(TextInput),
  'personal-info-qq': markRaw(TextInput),
  'personal-info-email': markRaw(TextInput),
  'personal-info-address': markRaw(TextInput),
  'personal-info-gender': markRaw(SingleSelect),
  'personal-info-age': markRaw(SingleSelect),
  'personal-info-education': markRaw(SingleSelect),
  'personal-info-career': markRaw(SingleSelect),
  'date-time': markRaw(DateTime),
  'personal-info-birth': markRaw(DateTime),
  'personal-info-collage': markRaw(TextInput),
  'personal-info-major': markRaw(TextInput),
  'personal-info-industry': markRaw(TextInput),
  'personal-info-company': markRaw(TextInput),
  'personal-info-position': markRaw(TextInput),
  'rate-score': markRaw(RateScore),
  // 编辑组件
  'title-editor': markRaw(TitleEditor),
  'desc-editor': markRaw(DescEditor),
  'position-editor': markRaw(PositionEditor),
  'options-editor': markRaw(OptionsEditor),
  'size-editor': markRaw(SizeEditor),
  'weight-editor': markRaw(WeightEditor),
  'italic-editor': markRaw(ItalicEditor),
  'text-input-type-editor': markRaw(TextInputTypeEditor),
  'text-type-editor': markRaw(TextTypeEditor),
  'pic-options-editor': markRaw(PicOptionsEditor),
  'date-time-type-editor': markRaw(DateTimeTypeEditor),
  'rate-text-editor': markRaw(rateTextEditor),
}
export default componentMap