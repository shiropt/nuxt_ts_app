<template>
  <input type="text" v-model="inputedValue">
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
@Component
export default class Input extends Vue {
  @Prop({ type:String,required:true})
  value:string=""

  get inputedValue(){
    return this.value
  }
  set inputedValue(value){
    this.$emit("update:value",value)
  }
}
</script>
