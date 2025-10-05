// 工具库
import type { TextProps, OptionsProps, Status, Material, SurveyDBData ,EditComName} from '@/types/index';
import { isPicTitleDescStatusArr, isStringArray } from '@/types/index';
import type { TableColumnCtx } from 'element-plus';
import {
  isOptionsProps,
  isValueStatusArray,
  isPicTitleDescArray,
} from '@/types'
// 引入初始化状态
import {
  ageStatus,
  genderStatus,
  educationStatus,
  careerStatus,
} from '@/configs/defaultStatus/initStatus'
import componentMap from '@/configs/componentMap';

export function getTextStatus(props: TextProps) {
  return props.status;
}

export function getStringStatus(props: OptionsProps) {
  return props?.status;
}

export function getCurrentStatus(props: OptionsProps) {
  return props?.currentStatus;
}

export function getStringStatusByCurrentStatus(props: OptionsProps) {
  if (props && isOptionsProps(props) && isStringArray(props.status)) {
    return props.currentStatus !== undefined ? props.status[props.currentStatus] : undefined;
  }
}

export function getPicTitleDescStatusArr(props: OptionsProps) {
  if (props && isPicTitleDescStatusArr(props.status)) {
    return props.status;
  }
}

export function getValueStatus(props: OptionsProps) {
  if (
    props &&
    isOptionsProps(props) &&
    (isValueStatusArray(props.status) || isPicTitleDescArray(props.status))
  ) {
    return props.status
  }
}

export function getValueStatusByCurrentStatus(props: OptionsProps) {
  if (
    props &&
    isOptionsProps(props) &&
    (isValueStatusArray(props.status) || isPicTitleDescArray(props.status))
  ) {
    return props.status && props.currentStatus !== undefined ? props.status[props.currentStatus] : undefined;
  }
}

export const updateInitStatusBeforeAdd = (comStatus: Status, newMaterialName: Material) => {
  switch (newMaterialName) {
    case 'personal-info-name': {
      comStatus.name = 'personal-info-name'
      comStatus.status.title.status = '您的姓名是'
      comStatus.status.type.isShow = false
      break
    }
    case 'personal-info-id': {
      comStatus.name = 'personal-info-id'
      comStatus.status.title.status = '请填写身份证号'
      comStatus.status.type.isShow = false
      break
    }
    case 'personal-info-tel': {
      comStatus.name = 'personal-info-tel'
      comStatus.status.title.status = '请填写手机号'
      comStatus.status.type.isShow = false
      break
    }
    case 'personal-info-wechat': {
      comStatus.name = 'personal-info-wechat'
      comStatus.status.title.status = '请填写微信号'
      comStatus.status.type.isShow = false
      break
    }
    case 'personal-info-qq': {
      comStatus.name = 'personal-info-qq'
      comStatus.status.title.status = '请填写QQ号'
      comStatus.status.type.isShow = false
      break
    }
    case 'personal-info-email': {
      comStatus.name = 'personal-info-email'
      comStatus.status.title.status = '请填写邮箱'
      comStatus.status.type.isShow = false
      break
    }
    case 'personal-info-address': {
      comStatus.name = 'personal-info-address'
      comStatus.status.title.status = '请填写地址'
      comStatus.status.type.isShow = false
      break
    }
    case 'personal-info-gender': {
      comStatus.name = 'personal-info-gender'
      comStatus.status.title.status = '您的性别是'
      comStatus.status.options.status = genderStatus()
      break
    }
    case 'personal-info-age': {
      comStatus.name = 'personal-info-age'
      comStatus.status.title.status = '您的年龄是'
      comStatus.status.options.status = ageStatus()
      break
    }
    case 'personal-info-education': {
      comStatus.name = 'personal-info-education'
      comStatus.status.title.status = '到目前为止，您的最高学历是'
      comStatus.status.options.status = educationStatus()
      break
    }
    case 'personal-info-career': {
      comStatus.name = 'personal-info-career'
      comStatus.status.title.status = '您目前的职业是'
      comStatus.status.options.status = careerStatus()
      break
    }
    case 'personal-info-birth': {
      comStatus.name = 'personal-info-birth'
      comStatus.status.title.status = '请选择出生日期'
      break
    }
    case 'personal-info-collage': {
      comStatus.name = 'personal-info-collage'
      comStatus.status.title.status = '请填写您的大学'
      comStatus.status.type.isShow = false
      break
    }
    case 'personal-info-major': {
      comStatus.name = 'personal-info-major'
      comStatus.status.title.status = '请填写您的专业'
      comStatus.status.type.isShow = false
      break
    }
    case 'personal-info-industry': {
      comStatus.name = 'personal-info-industry'
      comStatus.status.title.status = '请填写您的行业'
      comStatus.status.type.isShow = false
      break
    }
    case 'personal-info-company': {
      comStatus.name = 'personal-info-company'
      comStatus.status.title.status = '请填写您的公司'
      comStatus.status.type.isShow = false
      break
    }
    case 'personal-info-position': {
      comStatus.name = 'personal-info-position'
      comStatus.status.title.status = '请填写您的职位'
      comStatus.status.type.isShow = false
      break
    }
  }
}

// 处理日期格式的辅助方法
export function formatDate(
  row: SurveyDBData,
  column: TableColumnCtx<SurveyDBData>,
  cellValue: number,
) {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  return new Intl.DateTimeFormat('zh-CN', options).format(new Date(cellValue));
}

export const restoreComponentStatus = (coms: Status[]) => {
  coms.forEach((com) => {
    // 业务组件的还原
    com.type = componentMap[com.name]; // 这一步就做了组件的还原
    // 接下来还原编辑组件
    for (const key in com.status) {
      const name = com.status[key].name as EditComName;
      com.status[key].editCom = componentMap[name];
    }
  });
};
