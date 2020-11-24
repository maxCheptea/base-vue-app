<template>
  <div class="contact">
    <h1>This is an Auth Component for {{name}}</h1>
    <h2>This is an Auth Component for {{name}}</h2>
    <b-button variant="success">Login</b-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { BButton } from 'bootstrap-vue';

@Component({
  components: { BButton },
})
export default class Login extends Vue {
  public name!: string;

  constructor() {
    super();
    this.name = 'John Doe';
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/colors";

  .contact {
    h1 {
      color: $green;
    }
  }
</style>
