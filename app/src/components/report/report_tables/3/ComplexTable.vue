<template>
  <div class="q-gutter-sm">
    <q-table title="3.3 Работа по созданию и совершенствованию учебно-методического комплекса по преподаваемым дисциплинам (в том числе в электронном виде)" :hide-no-data="true" :data="getRows"
             :separator="separator"
             :columns="getColumns"
             class="bg-transparent no-box-shadow">
      <template v-slot:top-right>
        <div>
        </div>
        <div class="q-pa-sm q-gutter-sm">
          <q-dialog v-model="show_dialog">
            <q-card class="add_row_dialog bg-secondary">
              <q-card-section>
                <div class="text-h6">Добавить строку</div>
              </q-card-section>

              <q-card-section class="">
                <div class="row q-gutter-md q-ma-md">
                  <q-input  type="text" clearable v-model="getEditedItem.typework" label="Вид работ"></q-input>
                  <q-input  type="text" v-model="getEditedItem.MDK" label="УД, МДК"></q-input>
                  <q-input  type="textarea" clearable v-model="getEditedItem.materials" label="Количество материалов"></q-input>
                </div>
              </q-card-section>

              <q-card-actions align="right">
                <q-btn flat label="Добавить" color="accent" v-close-popup @click="addRowHandler" ></q-btn>
              </q-card-actions>
            </q-card>
          </q-dialog>
        </div>

      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="typework" :props="props">
            <q-input type="text" v-model="props.row.typework" dense autofocus></q-input>
          </q-td>
          <q-td key="MDK" :props="props">
            <q-input type="textarea" v-model="props.row.MDK" dense autofocus ></q-input>
          </q-td>
          <q-td key="materials" :props="props">
            <q-input type="textarea" v-model="props.row.materials" dense autofocus ></q-input>
          </q-td>
          <q-td key="score" :props="props">
            <q-input min="0" type="number" v-model="props.row.score" dense autofocus
                     :rules="[ruleApi.withoutSpaces(),ruleApi.numberBetweenNotStrictScore(0.5,1)]"   ></q-input>
          </q-td>
          <q-td key="actions" :props="props" auto-width>
            <!--                <q-btn color="blue" label="Update" @click="editItem(props.row)" size=sm no-caps></q-btn>-->
            <q-btn color="red" label="Delete"  @click="deleteItem(props.row)" size=sm no-caps></q-btn>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script lang="ts">
import {createNamespacedHelpers} from 'vuex-composition-helpers';
import {computed, defineComponent, ref, watch} from "@vue/composition-api";
import ruleApi from 'src/api/ruleApi';

const ComplexHelper = createNamespacedHelpers('report/complex')

export default defineComponent({
  name: 'ComplexTable',
  setup(props,context) {
    const getColumns = ComplexHelper.useGetters(['getColumns']).getColumns as unknown as Record < string, unknown>[];
    console.log(getColumns)
    const show_dialog = ref(false)

    let getRows =  ComplexHelper.useGetters(['getRows']).getRows as unknown as Record < string, unknown>[];
    const getDefaultItem = ComplexHelper.useGetters(['getDefaultItem']).getDefaultItem as unknown as Record<string, unknown>;
    const getEditedIndex = ComplexHelper.useGetters(['getEditedIndex']).getEditedIndex as unknown as number;
    const getEditedItem = ComplexHelper.useGetters(['getEditedItem']).getEditedItem as unknown as Record<string, unknown>;
    const separator = ref("vertical")

    return {getColumns, getRows, getDefaultItem, getEditedIndex, getEditedItem, ruleApi,separator,show_dialog}
  },

  methods: {
    addRowHandler() {
      this.$store.commit('report/complex/addRow', {'editedItem':this.getEditedItem,'editedIndex':this.getEditedIndex})
      this.close()
    },
    deleteItem(item: Record<string, unknown>) {
      confirm('Вы уверены что хотите удалить строку') && this.$store.commit('report/complex/deleteItem',item)
    },
    editItem(item: Record<string, unknown>) {
      this.$store.commit('report/complex/editItem',item)
      this.show_dialog = true;
    },
    close () {
      this.show_dialog = false
      setTimeout(() => {this.$store.commit('report/complex/setDefault')}, 300)
    }
  }

})

</script>

<style scoped>

</style>
