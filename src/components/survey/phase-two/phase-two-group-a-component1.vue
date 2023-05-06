<template>
  <link rel="canonical" href="https://getbootstrap.com/docs/4.0/examples/dashboard/">

  <!-- Bootstrap core CSS -->
  <link href="../../dist/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom styles for this template -->
  <link href="dashboard.css" rel="stylesheet">
  <body>
  <main>
    <div class="container text-center">
      <div class="p-3 mb-2 bg-primary bg-gradient text-white shadow">
        <h3>Introduction</h3>
        At this stage of the study, you can see an integrated video below. This video shows a recording of a minimap
        from the strategy game "Starcraft 2". Your task is to answer the questions above based on this video. Select the
        suitable answers and then click on the "Submit and Next" button to go to the next phase.
      </div>
      <br>
      <div class="row">
        <div class="col">
          <form>
            <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
              <h4>Answers</h4>
              <div class="mb-3">
                <label for="phase2-q1-a" class="form-label">Does the RL-Agent has win the game?</label>
                <div class="mb-3">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="phase2-q1-a" id="phase2-q1-a">
                    <label class="form-check-label" for="phase2-q1">
                      Yes, the Agent win the game
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="phase2-q1-a" id="phase2-q1-a" checked>
                    <label class="form-check-label" for="phase2-q1-a">
                      No, the Agent loose the game
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
              <div className="mb-3">
                <label htmlFor="phase2-c-2" className="form-label">How would you assess the behavioural profile of the
                  agent? Enter your answer on the scale, where 1 is very defensive and 5 is very offensive.</label>
                <div class="range">
                  <input type="range" class="form-range" min="1" max="5" id="phase2-c-2" v-model="q2"/>
                </div>
                <span class="badge rounded-pill text-bg-primary">{{ this.q2 }}</span>
              </div>
            </div>
          </form>
        </div>
        <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
          <div class="col d-flex align-items-center">
            <iframe width="1920" height="778" src="https://www.youtube.com/embed/jat3wJh5opY" title="sc2esphase2groupa"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
          </div>
        </div>
        <div class="mb-5">
          <a class="btn btn-primary btn-lg px-4" v-on:click="send_phase_two_results">Submit and Next</a>
        </div>
      </div>
    </div>
  </main>
  <div class="container">
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div class="col-md-4 d-flex align-items-center">
        <a href="/frontend/public" class="mb-3 me
        -2 mb-md-0 text-muted text-decoration-none lh-1">
          <svg class="bi" width="30" height="24">
            <use xlink:href="#bootstrap"></use>
          </svg>
        </a>
        <span class="mb-3 mb-md-0 text-muted">Research Group Big Data and Machine learning - Master thesis by Mattes Barkowski</span>
      </div>
    </footer>
  </div>
  </body>
</template>

<script>

import router from "../../../router";
import axios from "axios";

export default {
  name: "phase-two",
  data() {
    return {
      action_body: null,
      marines_body: null,
      group: localStorage.getItem("group"),
      q1: false,
      q2: 3,
      user_id: localStorage.getItem("user_id"),
      phase2_start_time: null,
      phase2_end_time: null,
      router
    }
  },
  mounted() {
    // TODO: insert a function for sending specific feature parameters to backend and response with a new response body
    const timestampInMs = Date.now();

    // Convert the timestamp to the desired format
    const timestampInSeconds = Math.floor(timestampInMs / 1000);
    const decimalPlaces = 7;
    const fractionalSeconds = (timestampInMs / 1000 - timestampInSeconds).toFixed(decimalPlaces).substr(1);
    this.phase2_start_time = `${timestampInSeconds}${fractionalSeconds}`;
  },
  methods: {
    // write general functions here...

    send_phase_two_results() {

      const ipAddress = window.location.hostname
      // write initialization functions here...
      const timestampInMs = Date.now();

      // Convert the timestamp to the desired format
      const timestampInSeconds = Math.floor(timestampInMs / 1000);
      const decimalPlaces = 7;
      const fractionalSeconds = (timestampInMs / 1000 - timestampInSeconds).toFixed(decimalPlaces).substr(1);
      this.phase2_end_time = `${timestampInSeconds}${fractionalSeconds}`;

      this.request_body = {
        "group": this.group,
        "ip_address": ipAddress,
        "user_id": this.user_id,
        "start_time": this.phase2_start_time,
        "end_time": this.phase2_end_time,
        "answers": {
          "phase_2": {
            "q1": this.q1,
            "q2": this.q2
          }
        }
      }

      axios.post('http://localhost:8081/api/v2/phase-one-processing', this.request_body)
          .then(
              response => {
                this.response_body = response.data
                console.log(JSON.stringify(this.response_body))
                this.router.push({name: "survey-phase-two-second"})
              }
          )
          .catch(
              error => console.log(error)
          )

      //TODO: define start_timestamp for the user clicks the 'start' button
    }
  }
}

</script>

<style scoped>

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
</style>
