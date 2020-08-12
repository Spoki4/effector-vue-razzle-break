<template>
  <div id="app">
    <input v-model="value">
    <button @click="someEvt">
      set some-value
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { $store, changeEvent, someEvt } from 'app.model'

export default Vue.extend({
  name: 'App',
  effector: {
    value: $store,
  },
  methods: {
    changeEvent,
    someEvt,
  },
})
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
