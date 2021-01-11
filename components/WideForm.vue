<template>
  <div class="input-form">
    <div class="wrapper">
    <InputLabel :value.sync="inputValue" class="label">
      <slot name="inputLabel"/>
    </InputLabel>
      <Button 
        @click="click" 
        class="button">
        <slot name="button" />
      </Button>
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
  value:string = ""

  get inputValue(){
    return this.value
  }
  set inputValue(value){
    this.$emit("update:value",value)    
  }
  click(){
    this.$emit("click")
  }
}
</script>
<style scoped>
.input-form{
  width: 400px;
  width: 40%
}
.wrapper{
  display: flex;
  margin: 0 auto;
width: 50%;
}
.button{
  margin-top: 3px;
  margin-left: 10px;
}
</style>