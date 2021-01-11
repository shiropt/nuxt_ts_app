<template>
<div>
  <Label><slot /></Label>
  <Input :value.sync="inputedValue" />
</div>
</template>

<script lang="ts">
import Input from '@/components/VInput.vue'
import Label from '@/components/VLabel.vue'
import { Vue, Component, Prop } from 'nuxt-property-decorator'
@Component({
  components:{
    Label,
    Input,
  }
})
export default class Form extends Vue {
  @Prop({ type:String, required:true })
  value:string = ""

  get inputedValue(){
    return this.value
  }
  set inputedValue(value){
    this.$emit("update:value",value)    
  }
}
</script>