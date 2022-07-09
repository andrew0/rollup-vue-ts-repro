<template>
  Hello {{ name }}
</template>

<script lang="ts">
import {defineComponent} from '@vue/composition-api';

export default defineComponent({
  props: {
    name: String,
  },
});
</script>
