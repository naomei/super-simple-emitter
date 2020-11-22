import { simpleEmitter, emitter } from "./emitters";

describe("simpleEmitter", () => {
  let emitter = simpleEmitter<string>();
  let fn: jest.Mock<any, any>;

  beforeEach(() => {
    emitter.off();
    fn = jest.fn();
  });

  it("emit", () => {
    emitter.on((params) => fn(params));
    emitter.emit("test");

    expect(fn).toBeCalledTimes(1);
    expect(fn).toBeCalledWith("test");
  });

  it("off", () => {
    // by method
    emitter.on((params) => fn(params));
    emitter.off();
    emitter.emit("john");
    expect(fn).toBeCalledTimes(0);

    // by return "on" function
    const off =emitter.on((params) => fn(params))
    off();
    emitter.emit("mike");
    expect(fn).toBeCalledTimes(0);
  });
})