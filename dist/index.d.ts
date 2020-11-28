declare type Action<P> = {
    type: string;
    payload?: P;
};
export declare const createAction: <P>(type: string) => Action<P>;
export declare const emitter: {
    on: <A extends Action<unknown>>(action: A, callback: (payload: A["payload"]) => void) => () => void;
    emit: <A_1 extends Action<unknown>>(action: A_1, payload: A_1["payload"]) => void;
    off: <A_2 extends Action<unknown>>(action: A_2) => void;
};
export {};
