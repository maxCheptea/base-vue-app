<template>
  <div class="contact">
    <Login />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Login from '@/components/login/Login.vue'; // @ is an alias to /src

@Component({
  components: {
    Login,
  },
})
export default class Auth extends Vue {}
</script>
