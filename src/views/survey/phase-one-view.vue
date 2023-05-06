<template>
  <div class="spinner-container" v-if="waiter === false">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <header class="d-flex align-items-center pb-3 mb-5 border-bottom" v-if="waiter">
    <a href="/survey/welcome" class="d-flex align-items-center text-dark text-decoration-none">
      <img :src="image_univie" alt="logo">
    </a>
  </header>
  <survey_phase_one v-if="waiter"/>
</template>

<script>
import survey_phase_one from '../../components/survey/phase-one/phase-one-component.vue'
import image_univie from '../../components/survey/rsc/images/phase-one/univie-logo.jpg'

export default {
  components: {survey_phase_one},
  name: "phase-one",
  data() {
    return {
      image_univie: image_univie,
      waiter: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.waiter = true; // set the variable to true after 3 seconds
    }, 2000);
  }
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