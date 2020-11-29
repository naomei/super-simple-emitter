<!-- ![dep](https://badgen.net/bundlephobia/dependency-count/super-simple-emitter)
![min](https://img.shields.io/bundlephobia/min/super-simple-emitter)
![minZip](https://img.shields.io/bundlephobia/minzip/super-simple-emitter) -->

A simple **type-safe** event emitter.  

# install

```
npm i super-simple-emitter -S
```

# usage

```ts
import {emitter, createAction} from "./emitter";

const userAction = createAction<{id: string, age: number}>("user");

emitter.on(userAction, (payload) => {
  // payload: {id: string, age: number}
});

emitter.emit(userAction, {id: "abc", age: 28});
```

# API

## on

subscribe to action.

```ts
emitter.on(action, (payload) => {});
```

## off

unsubscribe to action.

```ts
emitter.off(action);

// or, use "on" return function
const off = emitter.on(...);
off();
```

## emit

```ts
emitter.emit(action, payload);
```
