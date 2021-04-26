<template>
  <div>
    <q-table :data="users" :columns="columns" class="bg-secondary">
      <template v-slot:top-right>
        <q-btn color="primary" @click="showNewUserDialog">Создать пользователя</q-btn>
        <q-dialog v-model="new_user_dialog">
          <q-card class="bg-secondary add_row_dialog">
            <q-form
              @submit="addNewUserHandler">
              <q-card-section>
                <div class="text-h6">Добавить Пользователя</div>
              </q-card-section>
              <q-card-section>
                <div class="row q-gutter-md">
                  <q-input class="col-12 col-md"
                           :rules="[v=>!!v || 'Заполните поле', v=>v.length > 4 || 'Логин должен быть длинее 4 символов']"
                           type="text" label="Логин" v-model="editedUser.username"></q-input>
                  <q-input class="col-12 col-md"
                           :rules="[v=>!!v || 'Заполните поле', v=>v.length > 6 || 'Пароль должен быть длинее 6 символов']"
                           type="password" label="Пароль" v-model="editedUser.password"></q-input>
                </div>
                <div class="row q-gutter-md">
                  <q-input class="col-12 col-md" :rules="[v=>!!v || 'Заполните поле']" type="text" label="Имя"
                           v-model="editedUser.firstName"></q-input>
                  <q-input class="col-12 col-md" :rules="[v=>!!v || 'Заполните поле']" type="text" label="Фамилия"
                           v-model="editedUser.lastName"></q-input>
                  <q-input class="col-12 col-md" :rules="[v=>!!v || 'Заполните поле']" type="text" label="Отчество"
                           v-model="editedUser.middleName"></q-input>
                </div>
              </q-card-section>
              <q-card-actions align="right">
                <q-btn flat label="Добавить" color="primary" size="lg" type="submit"></q-btn>
              </q-card-actions>
            </q-form>
          </q-card>
        </q-dialog>
        <q-dialog v-model="edit_user_dialog">
          <q-card class="add_row_dialog bg-secondary">
            <q-form
              @submit="editUserHandler">
              <q-card-section>
                <div class="text-h6">Изменить пользователя</div>
              </q-card-section>
              <q-card-section class="">
                <div class="row q-gutter-md">
                  <q-input class="col-12 col-md"
                           :rules="[v=>!!v || 'Заполните поле', v=>v.length > 4 || 'Логин должен быть длинее 4 символов']"
                           type="text" label="Логин" v-model="editedUser.username"></q-input>
                </div>
                <div class="row q-gutter-md">
                  <q-input class="col-12 col-md" :rules="[v=>!!v || 'Заполните поле']" type="text" label="Имя"
                           v-model="editedUser.firstName"></q-input>
                  <q-input class="col-12 col-md" :rules="[v=>!!v || 'Заполните поле']" type="text" label="Фамилия"
                           v-model="editedUser.lastName"></q-input>
                  <q-input class="col-12 col-md" :rules="[v=>!!v || 'Заполните поле']" type="text" label="Отчество"
                           v-model="editedUser.middleName"></q-input>
                </div>
              </q-card-section>
              <q-card-actions align="right">
                <q-btn flat label="Изменить" color="primary" size="lg" type="submit"></q-btn>
              </q-card-actions>
            </q-form>
          </q-card>
        </q-dialog>
        <q-dialog v-model="reset_password_dialog">
          <q-card class="add_row_dialog bg-secondary">
            <q-form
              @submit="resetPasswordHandler">
              <q-card-section>
                <div class="text-h6">Сбросить пароль</div>
              </q-card-section>
              <q-card-section class="">
                <div class="row q-gutter-md q-ma-md">
                  <q-input class="col-12 col-md"
                           :rules="[v=>!!v || 'Заполните поле', v=>v.length > 6 || 'Пароль должен быть длинее 6 символов']"
                           type="password" label="Пароль" v-model="editedUser.password"></q-input>
                </div>
              </q-card-section>
              <q-card-actions align="right">
                <q-btn flat label="Сбросить" color="primary" size="lg" type="submit"></q-btn>
              </q-card-actions>
            </q-form>
          </q-card>
        </q-dialog>
        <q-dialog v-model="set_roles_dialog">
          <q-card class="add_row_dialog bg-secondary">
            <q-form
              @submit="setRolesHandler">
              <q-card-section>
                <div class="text-h6">Назначить роли</div>
              </q-card-section>
              <q-card-section class="">
                <div class="row q-gutter-md q-ma-md">
                  <q-select
                    class="col-12 col-md"
                    v-model="editedUser.roles"
                    multiple
                    option-value="name"
                    option-label="name"
                    :options="rolesOptions"></q-select>
                </div>
              </q-card-section>
              <q-card-actions align="right">
                <q-btn flat label="OK" color="primary" type="submit"></q-btn>
              </q-card-actions>
            </q-form>
          </q-card>
        </q-dialog>
        <q-dialog v-model="set_chairman_dialog">
          <q-card class="add-row-dialog">
            <q-form
              @submit="setChairmanHandler">
              <q-card-section>
                <div class="text-h6">Назначить председателя</div>
              </q-card-section>
              <q-card-section class="">
                <div class="row q-gutter-md q-ma-md">
                  <q-input v-model="editedUser.id" class="hidden" readonly></q-input>
                  <q-select
                    emit-value
                    v-model="editedUser.chairman"
                    :option-label="opt =>UserUtils.getShortFio(opt)"
                    :options="chairmans">
                  </q-select>
                </div>
              </q-card-section>
              <q-card-actions align="right">
                <q-btn flat label="OK" color="primary" type="submit"></q-btn>
              </q-card-actions>
            </q-form>
          </q-card>
        </q-dialog>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="username" :props="props">
            <q-tr :props="props" dense autofocus>{{props.row.username}}</q-tr>
          </q-td>
          <q-td key="firstName" :props="props">
            <q-tr :props="props" dense autofocus>{{props.row.firstName}}</q-tr>
          </q-td>
          <q-td key="lastName" :props="props">
            <q-tr :props="props" dense autofocus>{{props.row.lastName}}</q-tr>
          </q-td>
          <q-td key="middleName" :props="props">
            <q-tr :props="props" dense autofocus>{{props.row.middleName}}</q-tr>
          </q-td>

          <q-td key="roles" :props="props">
            <q-tr :props="props" dense autofocus>{{getRoles(props.row.roles)}}</q-tr>
          </q-td>
          <q-td key="chairman" :props="props">
            <q-tr :props="props" dense autofocus>{{UserUtils.getShortFio(props.row.chairman)}}</q-tr>
          </q-td>
          <q-td key="actions" :props="props" auto-width>
            <q-btn color="blue" label="Изменить данные" @click="showEditUserDialog(props.row)" size=sm no-caps></q-btn>
            <q-btn color="blue" label="Сбросить пароль" @click="showResetPasswordDialog(props.row)" size=sm
                   no-caps></q-btn>
            <q-btn color="blue" label="Назначить роль" @click="showSetRolesDialog(props.row)" size=sm no-caps></q-btn>
            <q-btn color="blue" label="Назначить председателя" @click="showSetChairmanDialog(props.row)" size=sm
                   no-caps></q-btn>
            <q-btn color="red" label="Удалить" @click="deleteUserHandler(props.row.id)" size=sm no-caps></q-btn>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script lang="ts">
  import {defineComponent, ref, reactive} from '@vue/composition-api';
  import {RoleInterface, User, UserInterface} from 'src/types/user/user';
  import UserUtils from 'src/utils/user/user';
  import {createNamespacedHelpers} from 'vuex-composition-helpers';
  import notify from 'src/api/notifyApi';
  import api from "src/api/restApi";

  const AdminHelper = createNamespacedHelpers('admin')
  export default defineComponent({
    name: 'AdminTable',
    props: {},
    setup(props, context) {
      const columns = AdminHelper.useGetters(['getColumns']).getColumns
      const users = AdminHelper.useGetters(['getUsers']).getUsers
      const rolesOptions = AdminHelper.useGetters(['getRoles']).getRoles
      const new_user_dialog = ref(false)
      const edit_user_dialog = ref(false)
      const reset_password_dialog = ref(false)
      const set_roles_dialog = ref(false)
      const set_chairman_dialog = ref(false)
      const editedUser = AdminHelper.useState(['editedUser']).editedUser
      const chairmans = ref([])
      return {
        chairmans,
        set_chairman_dialog,
        UserUtils,
        columns,
        users,
        new_user_dialog,
        editedUser,
        edit_user_dialog,
        reset_password_dialog,
        set_roles_dialog,
        rolesOptions
      }
    },
    computed: {},
    methods: {
      getRoles(roles: RoleInterface[]) {
        if (!roles) return []
        return roles.map(x => x.name)
      },
      deleteUserHandler(id: number): void {
        confirm('Вы действительно хотите удалить пользователя') && this.$store.dispatch('admin/deleteUser', id)
          .then(t => notify.showPositiveNotify(t))
          .catch(e => notify.showErrorNotify(e))
      },
      showNewUserDialog() {
        this.$store.commit('admin/setDefaultEditedUser')
        this.new_user_dialog = true;
      },
      addNewUserHandler(): void {
        this.new_user_dialog = false;
        this.$store.dispatch('admin/registrationUser', this.editedUser)
          .then(t => notify.showPositiveNotify(t))
          .catch(e => notify.showErrorNotify(e))
      },
      showEditUserDialog(user: UserInterface): void {
        this.$store.commit('admin/setEditedUser', user)
        this.edit_user_dialog = true;
      },
      editUserHandler() {
        this.edit_user_dialog = false;
        this.$store.dispatch('admin/editUser', this.editedUser)
          .then(t => notify.showPositiveNotify(t))
          .catch(e => notify.showErrorNotify(e))
      },
      showResetPasswordDialog(user: UserInterface): void {
        this.reset_password_dialog = true;
        this.$store.commit('admin/setEditedUser', user)
      },
      resetPasswordHandler() {
        this.reset_password_dialog = false;
        this.$store.dispatch('admin/resetPassword', this.editedUser)
          .then(t => notify.showPositiveNotify(t))
          .catch(e => notify.showErrorNotify(e))
      },
      showSetRolesDialog(user: UserInterface): void {
        this.set_roles_dialog = true;
        console.log(this.set_roles_dialog)
        this.$store.commit('admin/setEditedUser', user)

      },
      setRolesHandler(): void {
        this.set_roles_dialog = false;
        this.$store.dispatch('admin/setRoles', {id: this.editedUser.id, roles: this.editedUser.roles})
          .then(t => notify.showPositiveNotify(t))
          .catch(e => notify.showErrorNotify(e))
      },
      showSetChairmanDialog(user: UserInterface): void {
        this.$store.commit('admin/setEditedUser', user)
        api.getChairmans().then(t => this.chairmans = t.data)
        this.set_chairman_dialog = true
      },
      setChairmanHandler(): void {
        this.set_chairman_dialog = false;
        this.$store.dispatch('admin/setChairman', this.editedUser)
          .then(t => notify.showPositiveNotify(t))
          .catch(e => notify.showErrorNotify(e))
      }

    },


  })
</script>

<style scoped>

</style>
