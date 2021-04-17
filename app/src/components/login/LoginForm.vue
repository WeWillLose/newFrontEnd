<template>
  <div class="std_form_container">
    <q-form class="q-gutter-md q-ma-md" @submit="onSubmit">
      <div><H4><strong>Авторизация</strong></H4></div>
      <q-input type="text" label="Логин" v-model="user.username"/>
      <q-input type="password" label="Пароль" v-model="user.password"/>
      <div class="row justify-end ">
        <q-btn label="Войти" :loading="loading" type="submit" icon="login" unelevated flat
               class="login_btn_tmp"></q-btn>
      </div>
    </q-form>
  </div>
</template>

<script lang="ts">
  import {defineComponent, ref, reactive} from '@vue/composition-api';
  import {User, UserLogin, UserLoginInterface} from 'src/types/user/user';
  import notify from 'src/api/notifyApi';

  export default defineComponent({
    name: 'LoginPage',
    components: {},
    setup() {
      const loading = ref(false)
      const user = reactive(new UserLogin());

      return {loading, user};
    },
    methods: {
      onSubmit(): void {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.$store.dispatch('user/login', this.user).then(isSuccess => {
            if (isSuccess) {
              notify.showPositiveNotify('Вы успешно залогинились')
              this.$router.push('/')
            }else{
              notify.showErrorNotify('Авторизация провалена')
            }
          })
        }, 300)
      }
    }
  });
</script>

<style scoped>

</style>
