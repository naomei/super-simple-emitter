type Action<P> = {type: string, payload?: P};
type Callbacks = any[];

const createEmitter = () => {
  const map: Record<string, Callbacks> = {};

  const find = (type: string): Callbacks | undefined => map[type];
  
  const off = (type: string) => {
    const found = find(type);

    found && delete map[type];
  }

  return {
    on: <A extends Action<unknown>>(action: A, callback: (payload: A["payload"]) => void) => {
      const found = find(action.type);

      if(found) {
        map[action.type].push(callback);
      } else {
        map[action.type] = [callback];
      }

      return () => {
        off(action.type);
      }
    },
    emit: <A extends Action<unknown>>(action: A, payload: A["payload"]) => {
      const found = find(action.type);

      found?.forEach(d => d(payload));
    },
    off: <A extends Action<unknown>>(action: A) => {
      off(action.type);
    },
  }
}

export const createAction = <P>(type: string): Action<P> => {
  return {type};
};

export const emitter = createEmitter();