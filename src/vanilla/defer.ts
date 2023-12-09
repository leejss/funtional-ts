// JavaScript has a runtime model based on an event loop
// Execution stack and message queue
// defer function is just adding a callback to the message queue, it waits for current stack is empty

export const defer = (cb: Function) => {
  const id = setTimeout(() => {
    cb();
    clearTimeout(id);
  }, 0);
};
