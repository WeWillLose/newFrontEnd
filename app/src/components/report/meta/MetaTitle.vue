<template>
  <div>
    <q-form>
      <h5><strong>Иформация об учителе</strong></h5>
      <div class="row q-gutter-md">
        <q-input class="col" label="Фамилия" ref="lastNameField"
                 v-model="lastName"></q-input>
        <q-input class="col" label="Имя" ref="firstNameField"
                 v-model="firstName"></q-input>
        <q-input class="col" label="Отчество" ref="middleNameField"
                 v-model="middleName"></q-input>
      </div>
      <h5><strong>Информация об отчете</strong></h5>
      <div class="row q-gutter-md">
        <q-select :options="quarterOptions" class="col" ref="quarterField"
                  label="Квартал" hint="За какой квартал" v-model="quarter"></q-select>
        <q-input class="col" type="number" label="Год" ref="year1Field"
                 hint="С какого года" v-model="year1"></q-input>
        <q-input class="col" type="number" label="Год" ref="year2Field"
                 hint="По какой год" v-model="year2"></q-input>
      </div>
    </q-form>
  </div>
</template>

<script lang="ts">
  import {computed, defineComponent, getCurrentInstance, ref} from "@vue/composition-api";
  import {createNamespacedHelpers} from "vuex-composition-helpers";
  import store from 'src/store';
  const metaHelper = createNamespacedHelpers('report/meta');
  export default defineComponent({
    name: 'MetaTitle',
    setup(props,context) {
      const vm = getCurrentInstance()
      const store1 = store;
      const quarterOptions = [1, 2, 3, 4]
      const firstName = computed({
        get: () => metaHelper.useState(['firstName']).firstName.value,
        set: (val) => context.root.$store.commit('report/meta/setFirstName',val)
      })
      const lastName = computed({
        get: () => metaHelper.useState(['lastName']).lastName.value,
        set: (val) => context.root.$store.commit('report/meta/setLastName',val)
      })
      const middleName = computed({
        get: () => metaHelper.useState(['middleName']).middleName.value,
        set: (val) => context.root.$store.commit('report/meta/setMiddleName',val)
      })
      const year1 = computed({
        get: () => metaHelper.useState(['year1']).year1.value,
        set: (val) => context.root.$store.commit('report/meta/setYear1',val)
      })
      const year2 = computed({
        get: () => metaHelper.useState(['year2']).year2.value,
        set: (val) => context.root.$store.commit('report/meta/setYear2',val)
      })
      const quarter = computed({
        get: () => metaHelper.useState(['quarter']).quarter.value,
        set: (val) => context.root.$store.commit('report/meta/setQuarter',val)
      })

      let firstNameField = ref(null);
      let lastNameField = ref(null);
      let middleNameField = ref(null);
      let year1Field = ref(null);
      let year2Field = ref(null);
      let quarterField = ref(null);

      return {
        firstName, lastName, middleName, quarter, year1, year2, quarterOptions,
        firstNameField, lastNameField, middleNameField, quarterField, year1Field, year2Field,
      }
    },
    methods: {
      hasError(): boolean {
        this.firstNameField.validate()
        this.lastNameField.validate()
        this.middleNameField.validate()
        this.quarterField.validate()
        this.year1Field.validate()
        this.year2Field.validate()

        return this.firstNameField.hasError ||
          this.lastNameField.hasError ||
          this.middleNameField.hasError ||
          this.quarterField.hasError ||
          this.year1Field.hasError ||
          this.year2Field.hasError
      }
    }
  })
</script>

<style scoped>

</style>
