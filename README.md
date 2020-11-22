A really simple event emitter.  
There are two emitters `simpleEmitter` `emitter`.

# 1. simpleEmitter

A simple emitter with no namespace.

```ts
import {simpleEmitter} from "./emitters";

// define: emitter<CallbackParamsType>
const emitter = simpleEmitter<{id: string, age?: number}>();

// on: return off function
const off = emitter.on(({id, age}) => {...});

emitter.emit({id: "john", age: 28 });

// cleanup: There are two ways.
off();
emitter.off();
```

# 2. emitter

Normal emitter with namespace.

```ts

```