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
        <q-btn round flat>
          <q-avatar size="26px">
            <q-icon name="fas fa-user"></q-icon>
          </q-avatar>
          <q-menu
            content-class="user_menu"
          >
            <q-list style="min-width: 150px">
                <q-item>
                  <q-item-section>
                    <q-item-label>{{username}}</q-item-label>
                    <q-item-label caption>
                      {{ shortFio }}
                    </q-item-label>
                  </q-item-section>
                </q-item>
              <q-item clickable @click="logout">
                <q-item-section avatar>
                  <q-avatar>
                    <q-icon name="logout" color="blue"/>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Выход</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
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
      <template v-for="(menuItem, index) in leftDrawerMenuList">
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
  import EssentialLink from './EssentialLink.vue';
  import {createNamespacedHelpers} from 'vuex-composition-helpers';
  import {ItemInterface} from 'src/store/header/state';
  import userUtils from 'src/utils/user/user';
  import {ERole} from 'src/types/user/ERole';
  import notify from "src/api/notifyApi";

  const HeaderHelper = createNamespacedHelpers('header')
  const UserHelper = createNamespacedHelpers('user')

  export default defineComponent({

      name: 'CustomHeader',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      components: {EssentialLink},
      setup() {
        const leftDrawerOpen = ref(false);
        const miniLeftDrawerState = ref(true)
        const isAdmin = ref(true)
        const leftDrawerMenuList: ItemInterface[] = HeaderHelper.useState(['leftDrawerMenuList']).leftDrawerMenuList as ItemInterface[];
        const userMenuItems: ItemInterface[] = HeaderHelper.useState(['userMenuList']).userMenuList as ItemInterface[];
        const isLogin = UserHelper.useGetters(['getIsLoggedIn']).getIsLoggedIn as boolean;
        const username = UserHelper.useGetters(['getUsername']).getUsername as string;
        const shortFio = UserHelper.useGetters(['getShortFio']).getShortFio as string;

        return {
          leftDrawerOpen,
          miniLeftDrawerState,
          leftDrawerMenuList,
          isAdmin,
          isLogin,
          username,
          userMenuItems,
          shortFio
        }
      },
      methods: {
        invertLeftDrawerState(): void {
          this.leftDrawerOpen = !this.leftDrawerOpen

        },
        invertMiniLeftDrawerState(): void {
          this.miniLeftDrawerState = !this.miniLeftDrawerState;
        },
        hasRole(role: string | null): boolean {
          if (role == null) return true;
          try {
            const erole: ERole = role as ERole;
            return userUtils.hasRole(this.$store.state.user?.user, erole)
          } catch (e) {
            return false;
          }
        },
        logout(): void {
          this.$store.dispatch('user/logout').then(isSuccess => {
            if (isSuccess) this.$router.push('/login')
            else notify.showErrorNotify('Ошибка')
          })
        }

      }
    }
  )
</script>

<style scoped type="scss">

</style>
