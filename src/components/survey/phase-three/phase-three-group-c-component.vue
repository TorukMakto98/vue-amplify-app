<template>
    <body>
    <main>
        <div class="container text-center">
            <div class="row">
                <div class="col">
                    <div class="p-3 mb-2 bg-primary bg-gradient text-white shadow rounded">
                        <h3>Introduction</h3>
                        Your task now is to understand the decision-making of the AI. On the right side you can see the
                        successive actions of our RL agent performed in the game. By clicking on the actions, you can
                        see the data from the game on the basis of which the RL agent decided on this action.
                    </div>
                    <br/>
                    <form>
                        <div class="mb-3">
                            <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded"><label><h2>1</h2>
                                Now decide which explanation is the most plausible for the last action "Harvest Minerals and Resources".
                            </label>
                                <div class="mb-3">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="phase3-b" id="phase3-b"
                                               value="answer1"
                                               v-model="q1">
                                        <label class="form-check-label" for="phase3-b">
                                            Because the AI needs to build a better ecosystem to improve its own combat
                                            power again, as it is
                                            currently in a fight.</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="phase3-b" id="phase3-b"
                                               value="answer2"
                                               v-model="q1">
                                        <label class="form-check-label" for="phase3-b">
                                            Because previous actions have run out of minerals and the AI has realised
                                            that it needs more
                                            minerals for further actions.
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="phase3-b" id="phase3-b"
                                               value="answer3"
                                               v-model="q1">
                                        <label class="form-check-label" for="phase3-b">
                                            Because previous actions have run out of minerals and the AI has realised
                                            that it needs more
                                            minerals for further actions.
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="phase3-b" id="phase3-b"
                                               value="answer4"
                                               v-model="q1" checked>
                                        <label class="form-check-label" for="phase3-b">
                                            Because their own command centres have been lost and the AI needs more
                                            minerals to build a new
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
                <div class="col d-flex align-items-center shadow rounded">
                    <!--            <div id="myDiv"/>-->
                    <!--                    TODO: insert the code form the component file directly into these here!!!-->

                    <ToolbarNode/>
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

<script setup>
import {Position, VueFlow} from '@vue-flow/core'
import ToolbarNode from '../../../views/test/ToolbarNode.vue'

</script>

<script>
import Plotly from 'plotly.js-dist-min/plotly.min';
import router from "../../../router";
import axios from "axios";
import {ref} from "vue";

export default {
    name: "phase-three",
    data() {
        return {
            responseBody: null,
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

        axios.get("http://3.77.227.198:5000/api/v2/phase-three-group-c-flowchart").then(
            response => {
                this.responseBody = response.data;
            }
        ).catch(
            error => console.log(error)
        );
    },
    methods: {
        // write general functions here...

        send_phase_one_results() {
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

            axios.post('http://3.77.227.198:5000/api/v2/phase-one-processing', this.request_body)
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
