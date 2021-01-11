<template>
<li> 
  <p @click="firstContentClick" class="first"><slot name="firstContent"></slot></p>
  <p @click="secondContentClick" class="second"><slot name="secondContent"></slot></p>
  <Button @click="buttonClick"><slot name="button"/></Button>
</li>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import Button from '@/components/VButton.vue'
@Component({
  components: {
    Button
  }
})
export default class Li extends Vue {

   firstContentClick() {
    this.$emit("firstContentClick")
  }
   secondContentClick() {
    this.$emit("secondContentClick")
  }
   buttonClick() {
    this.$emit("buttonClick")
  }
}
</script>
<style scoped>
li {
  width: 400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  border-bottom:1px solid #999999;
  margin-bottom: 8px;
}
li:hover{
  opacity: 0.7;
}
.first,.second,.third{
  cursor: pointer;
}
</style>