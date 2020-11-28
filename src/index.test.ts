import { emitter, createAction} from "./";

describe("emitter", () => {
  const login = createAction<{id: string; password: number}>("login");
  const payload = {id: "mike", password: 123};
  const cb = jest.fn((p) => p);

  emitter.on(login, cb);  
  emitter.emit(login, payload);

  it("emit", () => {
    expect(cb.mock.results[0].value).toEqual(payload);
  });

  it("off", () => {
    emitter.off(login);  
    emitter.emit(login, payload);
    
    expect(cb).not.toBeCalledTimes(2);
    expect(cb).toBeCalledTimes(1);
  });
});