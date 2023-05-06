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
  <survey_phase_three_a v-if="this.group === 'C' && waiter"/>
  <survey_phase_three_a v-if="this.group === 'A' && waiter"/>
  <survey_phase_three_b v-if="this.group === 'B' && waiter"/>
</template>

<script>
import survey_phase_three_a from '../../components/survey/phase-four/phase-four-group-a-component.vue';
import survey_phase_three_b from '../../components/survey/phase-four/phase-four-group-b-component.vue';
import survey_phase_three_c from '../../components/survey/phase-four/phase-four-group-c-component.vue';
import image_univie from '../../components/survey/rsc/images/phase-one/univie-logo.jpg'

export default {
  components: {survey_phase_three_a, survey_phase_three_b},
  name: "phase-three",
  data() {
    return {
      group: localStorage.getItem("SurveyGroup"),
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