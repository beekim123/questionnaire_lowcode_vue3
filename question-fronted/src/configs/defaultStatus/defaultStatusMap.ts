// 该文件用于定义默认状态的映射表
import singleSelectDefaultStatus from './SingleSelect';
import singlePicSelectDefaultStatus from './SinglePicSelect';
import textNote from './TextNote';
import multiSelectDefaultStatus from './MultiSelect';
import optionSelectDefaultStatus from './OptionSelect'
import multiPicSelectDefaultStatus from './MultiPicSelect'


export const defaultStatusMap = {
  'single-select': singleSelectDefaultStatus,
   'single-pic-select': singlePicSelectDefaultStatus,
   'text-note': textNote,
   'multi-select': multiSelectDefaultStatus,
   'option-select': optionSelectDefaultStatus,
     'multi-pic-select': multiPicSelectDefaultStatus,
};
