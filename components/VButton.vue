<template>
  <button v-on="listeners">
    <slot>Button</slot>
  </button>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component
export default class Button extends Vue {
  private click() {
    this.$emit("click")
  }
  get listeners() {
    const self = this;
    return {
      ...self.$listeners
    }
  }
}
</script>
<style scoped>
button {
  height: 20px;
  position: relative;
  display: inline-block;
  color: #1B1B1B;
  text-decoration: none;
  background: white;
  border: none;
}
button:hover {
  opacity: 0.7;
  cursor: pointer;
  text-decoration: none;
}
button:focus {
	outline:0;
}
button::after {
  position: absolute;
  bottom: -1px;
  left: 0;
  content: '';
  width: 100%;
  height: 2px;
  background: #333;
  transform: scale(0, 1);
  transform-origin: right top;
  transition: transform .3s;
}
button:hover::after {
  transform-origin: left top;
  transform: scale(1, 1);
}
</style>