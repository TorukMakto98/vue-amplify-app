<template>
  <body>
  <main>
    <div class="container text-center">
      <div class="p-3 mb-2 bg-primary bg-gradient text-white shadow">
        <h3>Introduction</h3>
        In the following part you will see a sequence of actions that the AI agent has carried out one after the other
        in the game. Your task now is to choose one of the appropriate explanations on the right-hand side that you
        think best fits the data and thus the action.

        Then they are to comment on their decision-making to us, explaining what led them to choose this answer. Please
        enter your answer in the free text field.
      </div>
      <br>
      <div class="row">
        <div class="col">
          <form>
            <div class="mb-3">
              <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                <h4>Context</h4>
                Here you see 5 actions performed in sequence and
                the
                underlying data on which the AI based this decision about the action. Interpret the data and give an
                answer as to why the AI performed the last action "harvest_minerals".
              </div>
              <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                <h4>Answers</h4>
                <div class="mb-3">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="phase3-b" id="phase3-b" value="answer1"
                           v-model="q1">
                    <label class="form-check-label" for="phase3-b">
                      Because the AI needs to build a better ecosystem to improve its own combat power again, as it is
                      currently in a fight.</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="phase3-b" id="phase3-b" value="answer2"
                           v-model="q1">
                    <label class="form-check-label" for="phase3-b">
                      Because previous actions have run out of minerals and the AI has realised that it needs more
                      minerals for further actions.
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="phase3-b" id="phase3-b" value="answer3"
                           v-model="q1">
                    <label class="form-check-label" for="phase3-b">
                      Because previous actions have run out of minerals and the AI has realised that it needs more
                      minerals for further actions.
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="phase3-b" id="phase3-b" value="answer4"
                           v-model="q1" checked>
                    <label class="form-check-label" for="phase3-b">
                      Because their own command centres have been lost and the AI needs more minerals to build a new
                      one.
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div class="mb-5">
            <a class="btn btn-primary btn-lg px-4" v-on:click="send_phase_one_results">Submit and Next</a>
          </div>
        </div>
        <div class="col d-flex align-items-center">
          <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
            <div id="myDiv"/>
          </div>
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
import Plotly from 'plotly.js-dist-min/plotly.min';
import axios from "axios";
import router from "../../../router";

export default {
  name: "phase-three",
  data() {
    return {
      labels: null,
      parents: null,
      state: null,
      text: null,
      q1: "answer4",
      user_id: localStorage.getItem("user_id"),
      phase3_start_time: null,
      phase3_end_time: null,
      router
    }
  },
  mounted() {

    // write initialization functions here...
      const timestampInMs = Date.now();

      // Convert the timestamp to the desired format
      const timestampInSeconds = Math.floor(timestampInMs / 1000);
      const decimalPlaces = 7;
      const fractionalSeconds = (timestampInMs / 1000 - timestampInSeconds).toFixed(decimalPlaces).substr(1);
      this.phase3_start_time = `${timestampInSeconds}${fractionalSeconds}`;

    axios.get('3.77.227.198:8080/api/v2/phase-three-group-c')
        .then(
            response => {
              this.response_body = response.data
              this.labels = this.response_body['labels']
              this.parents = this.response_body['parents']
              this.state = this.response_body['state']
              this.text = this.response_body['text']

              console.log(this.labels)
              console.log(this.parents)
              console.log(this.state)

              // var labels = ["Action 1: attack", "Action 2: train_marine", "Action 3: build_supply_depot", "Action 4: build_supply_depot", "Action 5: harvest_minerals"]
              // var parents = ["","Action 1: attack", "Action 2: train_marine", "Action 3: build_supply_depot", "Action 4: build_supply_depot"]
              var data = [{
                type: 'treemap',
                labels: this.labels,
                parents: this.parents,
                text: this.text,
                textinfo: "label+text+value",
                hovertemplate: "<b>%{label}:</b> %{text}<br>"
              }]
              var layout = {treemapcolorway: ["pink"]}

              Plotly.newPlot('myDiv', data, layout)
            }
        )
        .catch(
            error => console.log(error)
        )
  },
  methods: {
    // write general functions here...

    send_phase_one_results(){
      const ipAddress = window.location.hostname
      // write initialization functions here...
      const timestampInMs = Date.now();

      // Convert the timestamp to the desired format
      const timestampInSeconds = Math.floor(timestampInMs / 1000);
      const decimalPlaces = 7;
      const fractionalSeconds = (timestampInMs / 1000 - timestampInSeconds).toFixed(decimalPlaces).substr(1);
      this.phase3_end_time = `${timestampInSeconds}${fractionalSeconds}`;

      this.request_body = {
        "group": this.group,
        "ip_address": ipAddress,
        "user_id": this.user_id,
        "start_time": this.phase3_start_time,
        "end_time": this.phase3_end_time,
        "answers": {
          "phase_3": {
            "q1": this.q1
          }
        }
      }

      axios.post('3.77.227.198:8080/api/v2/phase-one-processing',this.request_body)
        .then(
            response => {
              this.response_body = response.data
              this.router.push({name: "survey-phase-four"})
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
#tree-container {
  position: absolute;
  left: 0px;
  width: 100%;
}

.svgContainer {
  display: block;
  margin: auto;
}

.node {
  cursor: pointer;
}

.node-rect {
}

.node-rect-closed {
  stroke-width: 2px;
  stroke: rgb(0, 0, 0);
}

.link {
  fill: none;
  stroke: lightsteelblue;
  stroke-width: 2px;
}

.linkselected {
  fill: none;
  stroke: tomato;
  stroke-width: 2px;
}

.arrow {
  fill: lightsteelblue;
  stroke-width: 1px;
}

.arrowselected {
  fill: tomato;
  stroke-width: 2px;
}

.link text {
  font: 7px sans-serif;
  fill: #CC0000;
}

.wordwrap {
  white-space: pre-wrap; /* CSS3 */
  white-space: -moz-pre-wrap; /* Firefox */
}

.node-text {
  font: 7px sans-serif;
  color: white;
}

.tooltip-text-container {
  height: 100%;
  width: 100%;
}

.tooltip-text {
  visibility: hidden;
  font: 7px sans-serif;
  color: white;
  display: block;
  padding: 5px;
}

.tooltip-box {
  background: rgba(0, 0, 0, 0.7);
  visibility: hidden;
  position: absolute;
  border-style: solid;
  border-width: 1px;
  border-color: black;
  border-top-right-radius: 0.5em;
}

p {
  display: inline;
}

.textcolored {
  color: orange;
}

a.exchangeName {
  color: orange;
}
</style>
