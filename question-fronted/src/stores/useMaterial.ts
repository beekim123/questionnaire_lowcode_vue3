// 组件市场里面所有组件状态的仓库
import { defineStore } from 'pinia';
import { defaultStatusMap } from '@/configs/defaultStatus/defaultStatusMap';
import { setTextStatus } from './actions';

// 定义组件状态类型
type ComponentStatus = ReturnType<typeof defaultStatusMap[keyof typeof defaultStatusMap]>;

// 定义仓库状态类型
interface MaterialState {
  currentMaterialCom: string;
  coms: Record<string, ComponentStatus>;
}

export const useMaterialStore = defineStore('materialStore', {
  state: (): MaterialState => ({
    currentMaterialCom: 'single-select',
    coms: {
      'single-select': defaultStatusMap['single-select'](),
    },
  }),
   actions: {
    setTextStatus,
  },
  // getters: {
  //   // 获取当前选中组件
  //   getCurrentComponent: (state): ComponentStatus | null => {
  //     return state.coms[state.currentMaterialCom] || null;
  //   },
    
  //   // 获取所有组件
  //   getAllComponents: (state): Record<string, ComponentStatus> => {
  //     return state.coms;
  //   },
    
  //   // 检查组件是否存在
  //   hasComponent: (state) => {
  //     return (comName: string): boolean => {
  //       return comName in state.coms;
  //     };
  //   }
  // },
  
  // actions: {
  //   // 设置当前选中的组件
  //   setCurrentComponent(comName: string) {
  //     this.currentMaterialCom = comName;
  //   },
    
  //   // 添加或更新组件状态
  //   updateComponentStatus(comName: string, status: Partial<ComponentStatus>) {
  //     if (this.coms[comName]) {
  //       Object.assign(this.coms[comName], status);
  //     } else {
  //       // 如果组件不存在，使用默认状态
  //       const defaultStatus = defaultStatusMap[comName as keyof typeof defaultStatusMap];
  //       if (defaultStatus) {
  //         this.coms[comName] = { ...defaultStatus(), ...status };
  //       }
  //     }
  //   },
    
  //   // 删除组件
  //   removeComponent(comName: string) {
  //     if (this.coms[comName]) {
  //       delete this.coms[comName];
  //       // 如果删除的是当前选中的组件，重置当前选中
  //       if (this.currentMaterialCom === comName) {
  //         this.currentMaterialCom = Object.keys(this.coms)[0] || '';
  //       }
  //     }
  //   },
    
  //   // 重置所有组件状态
  //   resetAllComponents() {
  //     this.coms = {
  //       'single-select': defaultStatusMap['single-select'](),
  //     };
  //     this.currentMaterialCom = 'single-select';
  //   }
  // }
});

// 导出仓库类型
export type MaterialStore = ReturnType<typeof useMaterialStore>;