<template>
  <q-table :data="rows" :columns="columns">
    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td key="name" :props="props">
          {{ props.row.name }}
        </q-td>
        <q-td key="date" :props="props">
          <q-badge color="green">
            {{ props.row.date }}
          </q-badge>
        </q-td>
        <q-td key="status" :props="props">
          <q-badge color="purple" >
            <q-icon name="bluetooth"/>{{ props.row.status }}
          </q-badge>
        </q-td>
      </q-tr>
    </template>
  </q-table>
</template>

<script>
  import {defineComponent, ref} from "@vue/composition-api";
  const columns = [
    {
      name: 'name',
      label: 'Название',
      align: 'center',
      field: 'name'
    },
    {
      name: 'date',
      align: 'center',
      label: 'Дата создания',
      field: 'date',
    },
    {
      name: 'status',
      align: 'center',
      label: 'Статус',
      field: 'status',
    },
  ]
  const rows = [
    {
      date: '',
      name: '',
      status: 'CHECKED',
    }
  ]

  export default defineComponent({
    name: 'ReportTable',
    setup() {
      return {columns,rows}
    }
  })
</script>

<style scoped>

</style>
