<template>
    <body>
    <main>
        <div class="container text-center">
            <div class="row">
                <div class="col">
                    <div class="p-3 mb-2 bg-primary bg-gradient text-white shadow rounded">
                        <h3>Introduction</h3>
                        You will now see a similar representation as in the question before, but the last action
                        performed by the AI
                        agent is obscured. Your task is now to predict what action you think the AI might perform next.
                        Select one of
                        the possible answers.
                    </div>
                    <br>
                    <form>
                        <div class="mb-3">
                            <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                                <h4>1</h4>
                                Here you will see 5 actions from which you can choose. Now select an action that you
                                think the AI would perform next.
                                <div class="mb-3">
                                    <br/>
                                    <div class="mb-3">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="phase4-b" id="phase4-b"
                                                   value="attack"
                                                   v-model="q1">
                                            <label class="form-check-label" for="phase4-b">
                                                Attack Enemy
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="phase4-b" id="phase4-b"
                                                   value="harvest_minerals"
                                                   v-model="q1">
                                            <label class="form-check-label" for="phase4-b">
                                                Harvest minerals and resources
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="phase4-b" id="phase4-b"
                                                   value="build_supply_depots"
                                                   v-model="q1">
                                            <label class="form-check-label" for="phase4-b">
                                                Build new supply depots
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="phase4-b" id="phase4-b"
                                                   value="build_barrackses"
                                                   v-model="q1">
                                            <label class="form-check-label" for="phase4-b">
                                                Build new barracks
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="phase4-b" id="phase4-b"
                                                   value="do_nothing"
                                                   v-model="q1" checked>
                                            <label class="form-check-label" for="phase4-b">
                                                Wait and do nothing
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div class="mb-5">
                        <a class="btn btn-primary btn-lg px-4" v-on:click="send_phase_four_results">Submit and Next</a>
                    </div>
                </div>
                <div class="col d-flex align-items-center shadow rounded">
                    <ToolbarNodePhaseFour/>
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
import ToolbarNodePhaseFour from "@/views/test/ToolbarNode-Phase-Four.vue";

</script>
<script>
import Plotly from 'plotly.js-dist-min/plotly.min';
import axios from "axios";
import router from "../../../router";

export default {
    name: "phase-four",
    data() {
        return {
            labels: null,
            parents: null,
            state: null,
            text: null,
            user_id: localStorage.getItem("user_id"),
            phase4_start_time: null,
            phase4_end_time: null,
            q1: "do_nothing",
            router
        }
    },
    mounted() {
    },
    methods:
        {
            // write general functions here...

            send_phase_four_results() {
                const ipAddress = window.location.hostname
                // write initialization functions here...
                const timestampInMs = Date.now();

                // Convert the timestamp to the desired format
                const timestampInSeconds = Math.floor(timestampInMs / 1000);
                const decimalPlaces = 7;
                const fractionalSeconds = (timestampInMs / 1000 - timestampInSeconds).toFixed(decimalPlaces).substr(1);
                this.phase4_end_time = `${timestampInSeconds}${fractionalSeconds}`;

                this.request_body = {
                    "group": this.group,
                    "ip_address": ipAddress,
                    "user_id": this.user_id,
                    "start_time": this.phase4_start_time,
                    "end_time": this.phase4_end_time,
                    "answers": {
                        "phase_4": {
                            "q1": this.q1
                        }
                    }
                }

                axios.post('3.77.227.198:8080/api/v2/phase-one-processing', this.request_body)
                    .then(
                        response => {
                            this.response_body = response.data
                            this.router.push({name: "survey-phase-five"})
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
