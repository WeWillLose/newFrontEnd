<template>
  <div class="row items-start q-gutter-md">
    <template v-for="(toDo,index) in toDos">
      <to-do-card :key="index" :id="toDo.id" :title="toDo.title" :description="toDo.description" :text="toDo.text"></to-do-card>
    </template>
  </div>
</template>

<script lang="ts">
  import {computed, defineComponent, getCurrentInstance, ref} from "@vue/composition-api";
  import {createNamespacedHelpers} from "vuex-composition-helpers";
  import ToDoCard from './ToDoCard.vue'
  const metaHelper = createNamespacedHelpers('report/meta');
  const toDos=[
    {
      id:1,
      title: "Test1",
      description: "Description Test1",
      text: "Text 1 test\n\ntEST",
    },
    {
      id:2,
      title: "Test2",
      description: "Description Test2",
      text: "Text 2 test\n\ntEST",
    },
    {
      id:3,
      title: "Test1",
      description: "Description Test1",
      text: "Text 1 test\n\ntEST",
    },
    {
      id:4,
      title: "Test1",
      description: "Description Test1",
      text: "Text 1 test\n\ntEST",
    },
    {
      id:5,
      title: "Test1",
      description: "Description Test1",
      text: "Text 1 test\n\ntEST",
    },
    {
      id:6,
      title: "Test1",
      description: "Description Test1",
      text: "Text 1 test\n\ntEST",
    },

  ]
  export default defineComponent({
    name: 'ToDos',
    components:{ToDoCard},
    setup(props, context) {

      return {toDos}
    },
    methods: {
    }
  })
</script>

<style scoped>

</style>
