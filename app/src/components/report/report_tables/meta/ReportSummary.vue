<template>
  <div>
    <h5><strong>Баллы</strong></h5>
    <div class="row q-gutter-md">
      <q-input class="col-12 col-md" label="Сумма по 1-2 критерию" ref="sum1Field"
               v-model="sum1" readonly></q-input>
      <q-input class="col-12 col-md" label="Сумма по 3-10 критерию" ref="sum2Field"
               v-model="sum2" readonly></q-input>
    </div>
    <h5><strong>Ожидаемая надбавка</strong></h5>
    <div class="row q-gutter-md">
      <q-input class="col-12 col-md" label="За 1-2 критерий" ref="procent1Field"
               v-model="procent1" readonly></q-input>
      <q-input class="col-12 col-md" label="За 3-10 критерий" ref="procent2Field"
               v-model="procent2" readonly></q-input>
    </div>
  </div>
</template>

<script>
  import {computed, defineComponent, ref} from '@vue/composition-api';

  export default defineComponent({
    name: 'ReportSummary',
    setup(props,context) {
      const sum1Field = ref(null)
      const sum1 = computed(()=> context.root.$store.getters['report/meta/getSum1']);
      const sum2Field = ref(null)
      const sum2 = computed(()=> context.root.$store.getters['report/meta/getSum2']);

      const procent1Field = ref(null)
      const procent1 = computed(()=>{
        if(sum1.value>=4 && sum1.value<=5) return 5;
        if(sum1.value>=6 && sum1.value<=10) return 10;
        if(sum1.value>=11 && sum1.value<=15) return 15;
        return 0
      });

      const procent2Field = ref(null)
      const procent2 = computed(()=>{
        if(sum2.value<=10) return 5;
        if(sum2.value<=20) return 10;
        if(sum2.value<=30) return 15;
        if(sum2.value<=40) return 20;
        return 30
      });
      return {
        sum1Field, sum1, sum2Field, sum2, procent1,procent1Field, procent2,procent2Field
      }
    },
    methods:{
    }
  })
</script>

<style scoped>

</style>
