<template>
    <link rel="canonical" href="https://getbootstrap.com/docs/4.0/examples/dashboard/">
    <link href="../../dist/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom styles for this template -->
    <link href="dashboard.css" rel="stylesheet">
    <body>
    <main>
        <div class="container text-center">
            <div class="row">
                <div class="col d-flex align-items-center">
                    <form>
                        <div class="p-3 mb-2 bg-primary bg-gradient text-white rounded shadow">
                            <h3>Introduction</h3>
                            The data shown on the left represents a data set from the
                            game "Starcraft 2" generated by a reinforcement learning agent. This data provides a deep
                            insight into the
                            agent's actions and happenings during the game.

                            On the right side you can see questions related to this represented data set. We ask you to
                            interpret the
                            data
                            based on the questions and submit your answers to the questions.
                        </div>
                        <br>
                        <br>
                        <br>
                        <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                            <div class="mb-3">
                                <label for="phase2-c-1" class="form-label"><h2>1</h2>Does the RL-Agent has win the game?</label>
                                <div class="mb-3">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" value="true"
                                               name="phase2-c-1-first" id="phase2-c-1"
                                               v-model="q1">
                                        <label class="form-check-label" for="phase2-c-1">
                                            Yes, the Agent won the game
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" value="false"
                                               name="phase2-c-1-second" id="phase2-c-1"
                                               v-model="q1" checked>
                                        <label class="form-check-label" for="phase2-c-1">
                                            No, the Agent loose the game
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br>
                        <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                            <div className="mb-3">
                                <label htmlFor="phase2-c-2" className="form-label"><h2>2</h2>How would you assess the behavioural
                                    profile of the
                                    agent? Enter your answer on the scale, where 1 is very defensive and 5 is very
                                    offensive.</label>
                                <div class="range">
                                    <input type="range" class="form-range" min="1" max="5" id="phase2-c-2"
                                           v-model="q2"/>
                                </div>
                                <span class="badge rounded-pill text-bg-primary">{{ this.q2 }}</span>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col">
                    <form>
                        <div class="bd-example">
                            <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                                <table class="table table-hover">
                                    <thead class="table-primary">
                                    <tr>
                                        <th scope="col">Possible Actions of Soldiers</th>
                                        <th scope="col">Executions from RL Agent</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="item in action_body">
                                        <th scope="col">{{ item.display_name }}
                                        <abbr :title="item.tooltip">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                     fill="currentColor" class="bi bi-question-circle-fill"
                                                     viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
                                                </svg>
                                            </abbr>
                                        </th>
                                        <th scope="col">{{ item.value }}</th>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                                <table class="table table-hover">
                                    <thead class="table-primary">
                                    <tr>
                                        <th scope="col">Military Information</th>
                                        <th scope="col">Value</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(item, index) in marines_body">
                                        <th scope="col">{{ item.display_name }}
                                            <abbr :title="item.tooltip">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                     fill="currentColor" class="bi bi-question-circle-fill"
                                                     viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
                                                </svg>
                                            </abbr>
                                        </th>
                                        <th scope="col">{{ item.value }}</th>
                                    </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="mb-5">
                <a class="btn btn-primary btn-lg px-4" v-on:click="send_phase_two_results">Submit and Next</a>
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

import axios from "axios";
import router from "../../../router";
import tooltip from "../../../components/test/tooltip.vue";
import Tooltip from "@/views/test/tooltip.vue";

export default {
    name: "phase-two",
    components: {Tooltip},
    data() {
        return {
            action_body: null,
            marines_body: null,
            group: localStorage.getItem("group"),
            q1: false,
            q2: 3,
            user_id: localStorage.getItem("user_id"),
            phase1_start_time: null,
            phase1_end_time: null,
            router
        }
    },
    mounted() {
        axios.get('3.77.227.198:8080/api/v2/phase-two-first-group-b')
            .then(
                response => {
                    this.action_body = response.data
                    console.log(this.action_body)
                }
            )
            .catch(
                error => console.log(error)
            )

        axios.get('3.77.227.198:8080/api/v2/phase-two-group-b')
            .then(
                response => {
                    this.marines_body = response.data
                    console.log(this.marines_body)
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
                        "q1": this.q1,
                        "q2": this.q2
                    }
                }
            }

            axios.post('3.77.227.198:8080/api/v2/phase-one-processing', this.request_body)
                .then(
                    response => {
                        this.response_body = response.data
                        console.log(JSON.stringify(this.response_body))
                        this.router.push({name: "survey-phase-three"})
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
abbr {
font-style: italic;
position: relative;
}

abbr:hover::after {
background: #0d6efd;
border-radius: 4px;
bottom: 100%;
color: white; /* added */
content: attr(title);
display: block;
left: 100%;
padding: 1em;
position: absolute;
width: 280px;
z-index: 1;
}

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

.custom-tooltip {
    --bs-tooltip-bg: var(--bs-primary);
}

</style>
