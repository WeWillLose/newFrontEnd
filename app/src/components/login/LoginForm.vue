<template>
  <div class="std_form_container">
    <q-form class="q-gutter-md q-ma-md" @submit="onSubmit">
      <div><H4><strong>Авторизация</strong></H4></div>
      <q-input type="text" label="Логин"/>
      <q-input type="password" label="Пароль"/>
      <div class="row justify-end ">
        <q-btn label="Войти" :loading="loading" type="submit" icon="login" unelevated flat class="login_btn_tmp"></q-btn>
      </div>
    </q-form>
  </div>
</template>

<script lang="ts">
  import {defineComponent, ref} from '@vue/composition-api';

  export default defineComponent({
    name: 'LoginPage',
    components: {},
    setup() {
      const loading = ref(false)
      return {loading};
    },
    methods: {
      onSubmit():void{
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.$router.push("/")
        },300)
      }
    }
  });
</script>

<style scoped>

</style>
