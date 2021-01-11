<template>
<div class="tab">
  <div class="button">
  <Button @click="firstButtonEvent">
    <slot name="firstButton"/>
  </Button>
  <Button @click="secondButtonEvent">
    <slot name="secondButton"/>
  </Button>
  <Button @click="thirdButtonEvent">
    <slot name="thirdButton"/>
  </Button>
  </div>
</div>
</template>

<script lang="ts">
import Button from '@/components/VButton.vue'
import { Vue, Component, Prop } from 'nuxt-property-decorator'
@Component({
  components:{
    Button
  }
})
export default class Tab extends Vue {
  firstButtonEvent(){
    this.$emit("firstButtonEvent")
  }
  secondButtonEvent(){
    this.$emit("secondButtonEvent")
  }
  thirdButtonEvent(){
    this.$emit("thirdButtonEvent")
  } 
}
</script>
<style scoped>
.tab {
  width: 400px;
  margin: 0 auto;
  height: 40px;
}
.button{
  width: 80%;
  margin: 0 auto;
}
</style>