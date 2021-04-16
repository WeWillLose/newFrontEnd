<template>
  <div>
    <q-header elevated>
      <q-toolbar>
        <q-btn flat round dense @click="invertLeftDrawerState" icon="menu"></q-btn>
        <q-toolbar-title>
          <q-avatar class="q-mr-sm">
            <q-icon name="description" size="lg"/>
          </q-avatar>
          Docx
        </q-toolbar-title>
        <q-space/>
        <div class="row text_main">

          <template v-if="isLogin">
            <div class="text_main col-auto q-mx-md">
              {{getName}}
            </div>
            <div class="col-auto">
              <q-btn @click="logout"  push class="main_btn">Выйти</q-btn>
            </div>
          </template>

          <template v-else>
            <div class="col">
              <q-btn to="login" push class="main_btn">Войти *Временно ссылка на логин </q-btn>
            </div>
          </template>
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      :mini="miniLeftDrawerState"
      @mouseover="invertMiniLeftDrawerState"
      @mouseout="invertMiniLeftDrawerState"
      persistent
      show-if-above
      bordered
      :breakpoint="500"
      content-class="secondary_background"
    >
      <template v-for="(menuItem, index) in menuList">
        <template v-if="hasRole(menuItem.role)">
        <essential-link
          :key="index"
          :title="menuItem.title"
          :caption="menuItem.caption"
          :icon="menuItem.icon"
          :link="menuItem.link"
          :items="menuItem.items"
          :icon-color="menuItem.iconColor"
        />
        <q-separator :key="'sep' + index" v-if="menuItem.separator"/>
        </template>
      </template>
    </q-drawer>
  </div>
</template>

<script lang="ts">
  import {computed, defineComponent, ref} from '@vue/composition-api';
  import EssentialLink from 'components/EssentialLink.vue';
  import {createNamespacedHelpers} from 'vuex-composition-helpers';
  import {ItemInterface} from 'src/store/header/state';

  const {useState} = createNamespacedHelpers('header')
  export default defineComponent({

      name: 'CustomHeader',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      components: {EssentialLink},
      setup() {
        const leftDrawerOpen = ref(false);
        const miniLeftDrawerState = ref(true)
        const isAdmin = ref(true)
        const menuList: ItemInterface[] = useState(['menuList']).menuList as ItemInterface[];
        const adminMenuList: ItemInterface[] = useState(['adminMenuList']).adminMenuList as ItemInterface[];
        const isLogin = computed(() => false)
        return {leftDrawerOpen, miniLeftDrawerState, menuList, adminMenuList, isAdmin,isLogin}
      },
      methods: {
        invertLeftDrawerState(): void {
          this.leftDrawerOpen = !this.leftDrawerOpen
        },
        invertMiniLeftDrawerState(): void {
          this.miniLeftDrawerState = !this.miniLeftDrawerState;
        },
        hasRole(role:string | null):boolean{
          return true
        },
        logout():void{}
      }
    }
  )
</script>

<style scoped type="scss">

</style>
