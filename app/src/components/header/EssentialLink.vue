<template>
  <q-item
    clickable
    @click="onClick"
    :to="link"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" :color="iconColor"/>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>

</template>

<script lang="ts">
  import {defineComponent} from '@vue/composition-api';

  export default defineComponent({
    name: 'EssentialLink',
    props: {
      title: {
        type: String,
        default: ''
      },
      caption: {
        type: String,
        default: ''
      },
      onClick: {
        type: String,
        default: 'pass'
      },
      link: {
        type: String,
        default: '#',
      },
      target: {
        type: String,
        default: '_self'
      },
      icon: {
        type: String,
        default: ''
      },
      iconColor: {
        type: String,
        default: 'black'
      }
    },
    methods: {
      pass() {
      }
    }
  });
</script>
