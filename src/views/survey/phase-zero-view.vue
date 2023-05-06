<template>
<div class="spinner-container" v-if="waiter === false">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>

  <phase_zero v-if="this.waiter"/>
</template>

<script>
import phase_zero from '../../components/survey/phase-zero-component.vue'
import router from "../../router";

export default {
  components: {phase_zero},
  data() {
    return {
      waiter: false,
      router
    }
  },

  mounted() {
    setTimeout(() => {
      this.waiter = true; // set the variable to true after 3 seconds
    }, 1000);
  },

  methods: {}
}
</script>

<style scoped>
.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>