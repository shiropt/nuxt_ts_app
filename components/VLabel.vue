<template>
<label>
  <slot>Label</slot>
</label>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
@Component
export default class Lavel extends Vue {}
</script>
