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
// export const emitter = <P = any>() => {

// };

type Action<T, P> = {type: T, payload?: P};

const createAction = <P>(type: string): Action<string, P> => {
  return {type};
};

type CreateAction = ReturnType<typeof createAction>;

export const emitter = {  
  on: <A extends CreateAction>(action: A, fn?: (payload: A["payload"]) => void) => {

  },
  emit: <A extends CreateAction>(action: A, payload: A["payload"]) => {

  }
}


// const e = createEmitter();

// const ac = createAction<number>("name");


// e.on(ac, (p) => {})
// e.emit(ac, 10)
