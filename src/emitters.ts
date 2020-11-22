/**
 * simpleEmitter
 */
export const simpleEmitter = <P = any>() => {
  let list: ((params?: P) => void)[] = [];
  const off = () => list = [];


  return {
    on: (fn: (params?: P) => void) => {
      list.push(fn);
      
      return off;
    },
    off: () => {
      off();
    },
    emit: (params?: P) => {
      list.forEach((d) => d(params));
    },
  };
};

/**
 * 
 */
export const emitter = <P = any>() => {

};