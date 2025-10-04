// 该文件用于定义默认状态的映射表
import singleSelectDefaultStatus from './SingleSelect';
import singlePicSelectDefaultStatus from './SinglePicSelect';
import textNote from './TextNote';
import multiSelectDefaultStatus from './MultiSelect';
import optionSelectDefaultStatus from './OptionSelect'
import multiPicSelectDefaultStatus from './MultiPicSelect'
import textInputDefaultStatus from './TextInput'
import datetimeDefaultStatus from './DateTime'
import rateScoreDefaultStatus from './RateScore'



export const defaultStatusMap = {
  'single-select': singleSelectDefaultStatus,
  'single-pic-select': singlePicSelectDefaultStatus,
  'text-note': textNote,
  'multi-select': multiSelectDefaultStatus,
  'option-select': optionSelectDefaultStatus,
  'multi-pic-select': multiPicSelectDefaultStatus,
  'text-input': textInputDefaultStatus,
  'date-time': datetimeDefaultStatus,
  'rate-score': rateScoreDefaultStatus,
  //个人信息
  'personal-info-name': textInputDefaultStatus,
  'personal-info-id': textInputDefaultStatus,
  'personal-info-tel': textInputDefaultStatus,
  'personal-info-wechat': textInputDefaultStatus,
  'personal-info-qq': textInputDefaultStatus,
  'personal-info-email': textInputDefaultStatus,
  'personal-info-address': textInputDefaultStatus,
  'personal-info-gender': singleSelectDefaultStatus,
  'personal-info-age': singleSelectDefaultStatus,
  'personal-info-education': singleSelectDefaultStatus,
  'personal-info-career': singleSelectDefaultStatus,
  'personal-info-birth': datetimeDefaultStatus,
  'personal-info-collage': textInputDefaultStatus,
  'personal-info-major': textInputDefaultStatus,
  'personal-info-industry': textInputDefaultStatus,
  'personal-info-company': textInputDefaultStatus,
  'personal-info-position': textInputDefaultStatus,
};
