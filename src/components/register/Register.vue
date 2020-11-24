<template>
  <div class="contact">
    <h1>This is an Regisster Component for {{name}}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Register extends Vue {}
</script>
