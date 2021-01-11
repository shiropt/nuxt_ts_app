<template>
  <div class="container">
    <div class="form-wrapper">
    <InputForm
    :initalValue.sync="inputedId"
    :secondValue.sync="inputedPass"
    @click="login"
    >
      <template v-slot:initalInput>ID</template>
      <template v-slot:secondInput>PASS</template>
      <template v-slot:button>ログイン</template>
    </InputForm>
  </div>
 </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import InputForm from '@/components/InputForm.vue'
@Component({
  components: {
      InputForm
    }
})
export default class  extends Vue {
  inputedId:string = ""
  inputedPass:string = ""
  loginId   = this.$store.state.user.id
  loginPass = this.$store.state.user.pass

  login(){
    if(!(this.inputedId && this.inputedPass)){
      return
    }
    if (this.loginId === this.inputedId && this.loginPass === this.loginPass){
      alert("ログインに成功しました")
      this.$router.push('todo')
    } else {
      alert("ログインに失敗しました")
    }
    this.inputedId = ""
    this.inputedPass = ""
  }
}
</script>
<style scoped>
.container{
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-wrapper{
  margin-top: 200px;
}
</style>
