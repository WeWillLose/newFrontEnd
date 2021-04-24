<template>
  <q-card flat bordered class="my-card bg-secondary text-black">
    <q-card-section>
      <div class="row items-center no-wrap">
        <div class="col">
          <div class="text-h5 q-mt-sm q-mb-xs">{{title}}</div>
          <div class="text-caption text-grey-9 ">{{description}}</div>
        </div>
        <div class="col-auto">
          <q-btn color="grey-7" round flat icon="more_vert">
            <q-menu cover auto-close>
              <q-list>
                <q-item clickable>
                  <q-item-section>Редактировать</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Удалить</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </div>
    </q-card-section>

    <q-card-actions>
      <q-space/>
      <q-btn
        color="grey"
        round
        flat
        dense
        :icon="isExpanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
        @click="isExpanded = !isExpanded"
      />
    </q-card-actions>

    <q-slide-transition>
      <div v-show="isExpanded">
        <q-separator/>
        <q-card-section class="text-subitle2">
          {{text}}
        </q-card-section>
      </div>
    </q-slide-transition>
  </q-card>
</template>

<script>
  import {defineComponent,ref} from '@vue/composition-api';
  export default defineComponent({
    name: 'ToDoCard',
    props:{
      id:{
        type: Number,
        required: true
      },
      title:{
        type:String,
        default:''
      },
      description:{
        type:String,
        default:''
      },
      text:{
        type:String,
        default:''
      },
    },
    setup() {
      const isExpanded = ref(false);
      return {isExpanded}
    }
  })
</script>

<style scoped>

</style>
