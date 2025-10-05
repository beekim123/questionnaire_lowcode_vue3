// 事件总线支持的事件类型
export type EventBus = {
  scrollToBottom: void;
  scrollToCenter: number;
};

// 事件处理函数类型映射
type EventHandlers = {
  [K in keyof EventBus]: EventBus[K] extends void
    ? () => void
    : (arg: EventBus[K]) => void;
};

// 事件总线类型定义
export type EventBusType = {
  on: <K extends keyof EventBus>(event: K, callback: EventHandlers[K]) => void;
  emit: <K extends keyof EventBus>(event: K, ...args: EventBus[K] extends void ? [] : [EventBus[K]]) => void;
};