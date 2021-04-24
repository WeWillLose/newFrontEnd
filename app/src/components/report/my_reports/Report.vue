<template>
  <q-card class="my-card" flat bordered>
    <q-card-section>
      <div class="row items-center no-wrap">
        <div class="col">
          <div class="text-h5 text-caption">{{reportName}}</div>
          <div class="text-subtitle2">Создан: {{createdBy}}</div>
          <div class="text-subtitle2">Статус:
            <q-badge :color="color">{{status}}</q-badge>
          </div>
        </div>
        <div class="col-auto">
          <q-btn color="grey-7" round flat icon="more_vert">
            <q-menu cover auto-close>
              <q-list>
                <!--                <q-item clickable @click="editReport(report)">-->
                <!--                  <q-item-section>Редактировать</q-item-section>-->
                <!--                </q-item>-->
                <!--                <q-item clickable @click="download(report)">-->
                <!--                  <q-item-section>Скачать отчет</q-item-section>-->
                <!--                </q-item>-->
                <!--                <q-item clickable @click="downloadScoreList(report)">-->
                <!--                  <q-item-section>Скачать оценочный лист</q-item-section>-->
                <!--                </q-item>-->
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
        :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
        @click="expanded = !expanded"
      />
    </q-card-actions>
    <q-slide-transition>
      <div v-show="expanded">
        <q-separator/>
        <q-card-section class="text-subitle2">
          <div>
            дата создания : <b>{{getDate}}</b>
          </div>
        </q-card-section>
      </div>
    </q-slide-transition>
  </q-card>
</template>

<script>
  import {computed, defineComponent, ref} from "@vue/composition-api";
  import {EReportStatus} from "src/types/report/EReportStatus";

  export default defineComponent({
    name: 'Report',
    props: {
      id: {
        type: Number,
        required: true,
      },
      reportName: {
        type: String,
        default: '',
      },
      status: {
        type: String,
        default: '',
      },
      createdDate: {
        type: String,
        default: '',
      },
      createdBy: {
        type: String,
        default: '',
      }
    },
    setup(props) {
      const getDate = computed(() => new Date(props.createdDate).toLocaleDateString())
      const expanded = ref(false)
      const color = computed(() => {
        if (props.status  == EReportStatus.COMPLETED) return 'green'
        if (props.status == EReportStatus.CHECKED) return 'blue'
        return 'red'
      })
      return {getDate, expanded, color}
    },

  })
</script>

<style scoped>

</style>
