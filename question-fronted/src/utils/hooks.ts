import { computed } from 'vue';
import type { Status } from '@/types';
import { isSurveyComName } from '@/types';
// 返回问卷题目序号的数组
export function useSurveyNo(coms: Status[]) {
  return computed(() => {
    let questionNumber = 1;
    return coms.map((com) => {
      // 需要判断当前这个组件是不是问卷题目
      if (isSurveyComName(com.name)) {
        return questionNumber++;
      }
      return null;
    });
  });
}
// 最终形成的数组示例：[1, 2, null, 3, 4, null, 5]
