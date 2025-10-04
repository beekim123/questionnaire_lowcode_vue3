// 提供事件总线
import mitt from 'mitt';
import type { EventBus } from '@/types';
const emitter = mitt<EventBus>();
export default emitter;
