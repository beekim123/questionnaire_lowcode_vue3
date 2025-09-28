import type { defineComponent } from 'vue';
import type { OptionsStatus } from './editProps';

// 导出 vue 组件类型
export type VueComType = ReturnType<typeof defineComponent>;

export interface Status {
  type: VueComType;
  name: string;
  id: string;
  status: OptionsStatus;
}
