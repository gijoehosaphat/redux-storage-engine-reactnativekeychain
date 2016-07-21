This is a `redux-storage-engine` that utilizes `react-native-keychain`

It will currently `JSON.Stringify` your JavaScript object and store using the key you identify.

## Install:

```shell
npm install --save redux-storage-engine-reactnativekeychain
```

## Use:

```js
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';
const engine = createEngine('my-unique-key');
```
