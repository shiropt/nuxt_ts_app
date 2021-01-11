<template>
  <div class="input-form">
    <div class="wrapper">
      <InputLabel :value.sync="initalInputedValue">
        <slot name="initalInput"/>
      </InputLabel>
      <InputLabel :value.sync="secondInputedValue">
        <slot name="secondInput"/>
      </InputLabel>
      <div class="button">
       <Button @click="click"><slot name="button" /></Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import InputLabel from '@/components/InputLabel.vue'
import Button from '@/components/VButton.vue'
@Component({
  components: {
      InputLabel,Button
    }
})
export default class InputInputLabel extends Vue {
  @Prop({ type:String, required:true })
  initalValue:string = ""
  @Prop({ type:String, required:true })
  secondValue:string = ""

  get initalInputedValue(){
    return this.initalValue
  }
  set initalInputedValue(value){
    this.$emit("update:initalValue",value)    
  }
  get secondInputedValue(){
    return this.secondValue
  }
  set secondInputedValue(value){
    this.$emit("update:secondValue",value)
  }
  click(){
    this.$emit("click")
  }
}
</script>
<style scoped>
.input-form{
  width: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper {
  position: relative;
  height: 100px;
}
.button{
  margin-top: 10px;
  position: absolute;
  right: 20px;
}
</style>