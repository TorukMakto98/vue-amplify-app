<template>
<div class="spinner-container" v-if="waiter === false">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>

  <survey_welcome v-if="this.waiter"/>
</template>

<script>
import survey_welcome from '../../components/survey/welcome-component.vue'
import router from "../../router";

export default {
  components: {survey_welcome},
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