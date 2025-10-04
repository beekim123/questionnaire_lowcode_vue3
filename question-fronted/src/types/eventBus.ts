export type EventBus = {
  scrollToBottom: void;
};
export type EventBusType = {
  on: (event: string, callback: () => void) => void;
}