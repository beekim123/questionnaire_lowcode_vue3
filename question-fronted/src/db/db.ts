// 负责定义数据库以及表的结构
import Dexie, { type Table } from 'dexie';
import type { SurveyDBData } from '@/types';

class SurveyDataBase extends Dexie {
  // 定义了一个属性 survey，后面是该属性的类型
  // 该类型表示表的每一条记录是 SurveyDBData 类型，主键是 number 类型
  // survey后面的!叫做非空断言，表示 survey 是非空的
  surveys!: Table<SurveyDBData, number>;

  constructor() {
    super('SurveyDataBase'); // 数据库的名称
    this.version(1).stores({
      surveys: '++id, createDate, updateDate, title, surveyCount, coms',
    });
  }
}

const db = new SurveyDataBase();

export { db };
