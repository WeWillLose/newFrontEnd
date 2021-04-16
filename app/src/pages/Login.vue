<template>
  <q-page class="row items-center justify-center">
    <div class="std_form_container">
      <q-form class="q-gutter-md q-ma-md ">
        <div><H4><strong>Авторизация</strong></H4></div>
        <q-input type="text" label="Логин"/>
        <q-input type="password" label="Пароль"/>
        <div class="= row justify-end ">
          <q-btn push label="Войти" @click="login" class="login_btn"></q-btn>
        </div>

      </q-form>
    </div>
  </q-page>
</template>
<script lang="ts">
  import {defineComponent, ref} from '@vue/composition-api';

  export default defineComponent({
    name: 'LoginPage',
    components: {},
    setup() {
      return {};
    },
    methods: {
      login():void{
        this.$router.push("/")
      }
    }
  });
</script>

<style scoped>

</style>
