A really simple event emitter that is not multifunctional.  
Doesn't even have an event namespace.

# usage

```ts
// emitter<CallbackParamsType>
const evEmitter1 = emitter<string>();
const evEmitter2 = emitter<{id: string, age?: number}>();

evEmitter1.on((name) => {...});
evEmitter1.emit("mike");
evEmitter1.off();

evEmitter2.on(({id, age}) => {...});
evEmitter2.emit({id: "john", age: 28 });
```
