<template>
    <div class="1q2wcontainer">
        <main>
            <div class="container text-center">
                <br>
                <div class="row">
                    <div class="col-md-6">
                        <form>
                            <div class="p-3 mb-2 bg-primary bg-gradient text-white shadow rounded">
                                <h3>Introduction</h3>
                                Here you can see a plot that shows the data of a match in relation to the temporal
                                progression within the match.
                                Using the data, try to answer the question on the left. Once you have decided on an
                                answer, click on the "Submit
                                and Next" button.
                            </div>
                            <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                                <div class="mb-3">
                                    <label for="phase2-q1-b" class="form-label">Does the RL-Agent has win the
                                        game?</label>
                                    <div class="mb-3">
                                        <div class="form-check">
                                            <input class="form-check-input" value="true" type="radio" name="phase2-q1"
                                                   id="phase2-q1-b" v-model="q1">
                                            <label class="form-check-label" for="phase2-q1-b">
                                                Yes, the Agent won the game
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" value="false" type="radio" name="phase2-q1"
                                                   id="phase2-q1-a" v-model="q1" checked>
                                            <label class="form-check-label" for="phase2-q1-a">
                                                No, the Agent lost the game
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-5">
                                <a class="btn btn-primary btn-lg px-4" v-on:click="send_phase_two_results">Submit and
                                    Next</a>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-6 custom-col">
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
    </div>
</template>



<script>
import Plotly from 'plotly.js-dist-min/plotly.min';
import axios from "axios";
import image_univie from '../rsc/images/phase-one/univie-logo.jpg'
import router from "../../../router";

export default {
    name: "phase-two",
    data() {
        return {
            num_entries: null,
            marines: null,
            enemy_marines: null,
            queued_marines: null,
            response_body: null,
            marines_body: null,
            univie_logo: image_univie,
            q1: false,
            user_id: localStorage.getItem("user_id"),
            phase1_start_time: null,
            phase1_end_time: null,
            router
        }
    },
    mounted() {

        axios.get('http://3.77.227.198:5000/api/v2/phase-two-group-c')
            .then(
                response => {
                    this.response_body = response.data
                    this.num_entries = this.response_body['num_executions']
                    this.marines = this.response_body['marines']
                    this.queued_marines = this.response_body['queued_marines']
                    this.enemy_marines = this.response_body['enemy_marines']

                    console.log(this.num_entries)
                    console.log(this.marines)
                    console.log(this.enemy_marines)
                    var marines = {
                        x: this.num_entries,
                        y: this.marines,
                        type: 'scatter',
                        name: 'marines'
                    };


                    var enemy_marines = {
                        x: this.num_entries,
                        y: this.enemy_marines,
                        type: 'scatter',
                        name: 'enemy marines'
                    };

                    var queued_marines = {
                        x: this.num_entries,
                        y: this.queued_marines,
                        type: 'scatter',
                        name: 'queued marines'
                    }

                    var layout = {
                        xaxis: {
                            title: 'Performed Steps in Game',
                            showgrid: false,
                            zeroline: false
                        },
                        yaxis: {
                            title: 'Number of occurrence',
                            showline: false
                        }

                    };
                    var data = [marines, enemy_marines, queued_marines];


                    Plotly.newPlot('myDiv', data, layout);
                }
            )
            .catch(
                error => console.log(error)
            )


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
            this.phase1_end_time = `${timestampInSeconds}${fractionalSeconds}`;

            this.request_body = {
                "group": this.group,
                "ip_address": ipAddress,
                "user_id": this.user_id,
                "start_time": this.phase1_start_time,
                "end_time": this.phase1_end_time,
                "answers": {
                    "phase_2": {
                        "q1": this.q1
                    }
                }
            }

            localStorage.setItem('phase2-q1', this.q1)

            axios.post('http://3.77.227.198:5000/api/v2/phase-one-processing', this.request_body)
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
