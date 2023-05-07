<template>
    <link rel="canonical" href="https://getbootstrap.com/docs/4.0/examples/dashboard/">

  <!-- Bootstrap core CSS -->
    <link href="../../dist/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom styles for this template -->
    <link href="dashboard.css" rel="stylesheet">
    <body>
    <main>
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <form>
                        <div class="p-3 mb-2 bg-primary bg-gradient text-white shadow rounded">
                            <h3>Introduction</h3>
                            Here you can see a plot that shows the behavioral profile of the AI agent based on the count
                            on different
                            actions which it performs inside the game.
                            Using the data, try to answer the question on the left. Once you have decided on an answer,
                            click on the "Submit
                            and Next" button.
                        </div>
                        <br>
                        <div className="mb-3">
                            <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                                <label htmlFor="exampleInputPassword1" className="form-label">Please rate the
                                    behavioural profile of the agent on a scale of 1 to 5, where 1 indicates a very
                                    defensive profile and 5 indicates a very offensive profile.</label>
                                <div className="range">
                                    <input type="range" className="form-range" min="1" max="5" id="customRange2"
                                           v-model="q2"/>
                                </div>
                                <span class="badge rounded-pill text-bg-primary">{{ this.q2 }}</span>
                            </div>
                        </div>
                        <div className="mb-5">
                            <a className="btn btn-primary btn-lg px-4" v-on:click="send_phase_two_results">Submit and
                                Next</a>
                        </div>
                    </form>
                </div>
                <div className="col d-flex align-items-center">
                    <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                        <div id="myDiv"/>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
                <a href="/frontend/public" className="mb-3 me
        -2 mb-md-0 text-muted text-decoration-none lh-1">
                    <svg className="bi" width="30" height="24">
                        <use xlink:href="#bootstrap"></use>
                    </svg>
                </a>
                <span className="mb-3 mb-md-0 text-muted">Research Group Big Data and Machine learning - Master thesis by Mattes Barkowski</span>
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
    name: "phase-one",
    data() {
        return {
            response_body: null,
            radar_dict: null,
            action_list: ['do_nothing', 'attack', 'train_marine', 'harvest_minerals', 'build_barracks', 'build_supply_depot'],
            r_list: [],
            q1: localStorage.getItem('phase2-q1'),
            q2: 3,
            user_id: localStorage.getItem("user_id"),
            phase1_start_time: null,
            phase1_end_time: null,
            router
        }
    },
    mounted() {
        // TODO: insert a function for sending specific feature parameters to backend and response with a new response body

        axios.get('3.77.227.198:8080/action-radar')
            .then(
                response => {
                    this.response_body = response.data
                    console.log(this.response_body)

                    // TODO: check if the number of keys equals number of elements in action_list
                    // get the number of actions for each element in list
                    for (let i = 0; i < this.action_list.length; i++) {
                        this.r_list.push(this.response_body[this.action_list[i]])
                    }
                    console.log(JSON.stringify(this.response_body))
                    console.log(JSON.stringify(this.r_list))
                    console.log(JSON.stringify(this.action_list))

                    this.radar_list = {
                        type: 'scatterpolar',
                        r: this.r_list,
                        theta: this.action_list,
                        fill: 'toself',
                        name: 'Test Sample1 - Game X0002'
                    }

                    // create radar chart after successfull request
                    let data;
                    data = [this.radar_list]

                    let layout;
                    layout = {
                        polar: {
                            radialaxis: {
                                visible: true,
                                range: [0, Math.max(this.r_list)]
                            }
                        }
                    }

                    Plotly.newPlot("myDiv", data, layout)
                })
            .catch(
                error => console.log(error)
            )
    },
    methods: {
        // write general functions here...

        send_phase_two_results() {
            // TODO: rethink the timestamp structure inside the request body
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
