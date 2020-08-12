import { createEvent, restore, createStore } from 'effector'

export const changeEvent = createEvent()
export const someEvt = createEvent()

export const $store = createStore('')
  .on(changeEvent, (_, value) => value)
  .on(someEvt, () => 'some-value')

$store.watch(console.log)
