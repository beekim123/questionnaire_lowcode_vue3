import type { Status } from './common';
// 表的类型
export interface SurveyDBData {
  createDate: number;
  updateDate: number;
  title: string;
  surveyCount: number;
  coms: Status[];
}
export interface SurveyDBReturnData extends SurveyDBData {
  id: number;
}
