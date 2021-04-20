<template>
  <div class="q-gutter-sm">
    <q-table title="1. Коментарии" :data="rows" :columns="columns" :separator="separator" hide-bottom
             class="bg-transparent no-box-shadow"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="comment" :props="props">
            <q-input type="textarea" ref="comment" v-model="props.row.comment" dense maxlength="500" counter autofocus
                     debounce="530"
                     autogrow></q-input>
          </q-td>
          <q-td key="score" :props="props">
            <q-input type="number" ref="score" v-model="props.row.score" dense autofocus
                     :rules="[ruleApi.requiredWithZero()]"
            ></q-input>
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

  const CommentTableHelper = createNamespacedHelpers('report/comment')

  export default defineComponent({
    name: 'CommentTable',
    setup() {

      const columns = CommentTableHelper.useGetters(['getColumns']).getColumns as unknown as Record<string, unknown>[];
      const rows = CommentTableHelper.useState(['rows']).rows as unknown as Record<string, unknown>[];
      const defaultItem = CommentTableHelper.useGetters(['getDefaultItem']).getDefaultItem as unknown as Record<string, unknown>;
      const editedIndex = CommentTableHelper.useGetters(['getEditedIndex']).getEditedIndex as unknown as number;
      const editedItem = CommentTableHelper.useGetters(['getEditedItem']).getEditedItem as unknown as Record<string, unknown>;
      const separator = ref("vertical")
      const comment = ref(null)
      const score = ref(null)

      return {columns, rows, defaultItem, editedIndex, editedItem, comment, score, ruleApi,separator}
    },

    methods: {
      hasError(): boolean {
        this.comment?.validate()
        this.score?.validate()
        return this.comment?.hasError || this.score?.hasError
      }
    }
  })
</script>
<style>
</style>
