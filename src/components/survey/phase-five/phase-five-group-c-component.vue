<template>
    <link rel="canonical" href="https://getbootstrap.com/docs/4.0/examples/dashboard/">

  <!-- Bootstrap core CSS -->
    <link href="../../dist/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom styles for this template -->
    <link href="dashboard.css" rel="stylesheet">
    <div className="container">
    </div>
    <body>
    <main>
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <form>
                        <div class="p-3 mb-2 bg-primary bg-gradient text-white shadow">
                            <h3>Introduction</h3>
                            This is the final phase of this study. We now ask you to evaluate the study and answer the
                            following questions.
                            Please also feel free to give us any further information or thoughts via the free text
                            field. Thank you very
                            much for participating in this study.
                        </div>
                        <br>
                        <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                            <div className="mb-3">
                                <label htmlFor="phase5-q1" className="form-label">Would you say that the visualizations
                                    of
                                    the data helped you to answer the questions? Answer on a scale from 1 to 5 where 5
                                    is "helped me a
                                    lot"
                                    and 1 is "doesnt helped me".</label>
                                <!--    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">-->
                                <div className="range">
                                    <input type="range" className="form-range" min="1" max="5" id="phase5-q1"
                                           v-model="q1"/>
                                </div>
                                <span class="badge rounded-pill text-bg-primary">{{ this.q1 }}</span>
                            </div>
                        </div>
                        <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Could you imagine that
                                    other forms of
                                    representations like images or tables could have improved your understanding more
                                    then visualizations?
                                    Answer on a scale from 1 to 5 where 5 means "Others would fit better" and 1 "My form
                                    of representation
                                    was very suitable".</label>
                                <div className="range">
                                    <input type="range" className="form-range" min="1" max="5" id="phase5-q1"
                                           v-model="q2"/>
                                </div>
                                <span class="badge rounded-pill text-bg-primary">{{ this.q2 }}</span>
                            </div>
                        </div>
                        <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                            <div className="mb-3">
                                <label htmlFor="phase5-q1" className="form-label">Did you tend to give your answers with
                                    the
                                    conviction that they must be correct or would you say that you were more likely to
                                    guess when choosing
                                    answers? Answer this question on the scale below, where 1 means "very
                                    unsure/guessing" and 5 means
                                    "very
                                    sure/convinced".</label>
                                <div className="range">
                                    <input type="range" className="form-range" min="1" max="5" id="phase5-q1"
                                           v-model="q3"/>
                                </div>
                                <span class="badge rounded-pill text-bg-primary">{{ this.q3 }}</span>
                            </div>
                        </div>
                        <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                            <div className="mb-3">
                                <label htmlFor="phase5-q1" className="form-label">After going through this study, do you
                                    feel
                                    that you can better understand the decision-making of an AI? Answer this question on
                                    the scale below,
                                    where 1 means "definitely not" and 5 means "definitely".</label>
                                <div className="range">
                                    <input type="range" className="form-range" min="1" max="5" id="phase5-q1"
                                           v-model="q4"/>
                                </div>
                                <span class="badge rounded-pill text-bg-primary">{{ this.q4 }}</span>
                            </div>
                        </div>
                        <div className="mb-5">
                            <a className="btn btn-primary btn-lg px-4" v-on:click="send_phase_five_results">Submit and
                                finish
                                Survey</a>
                        </div>
                    </form>
                </div>
                <div className="col d-flex align-items-center">
                    <img :src="image_src" style="margin: 0 auto;"/>
                </div>
            </div>
        </div>
    </main>
    <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
                <a href="/frontend/public" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
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
import image_univie from '../rsc/images/phase-one/univie-logo.jpg'
import axios from "axios";
import router from "../../../router";

export default {
    name: "phase-one",
    data() {
        return {
            image_src: image_univie,
            q1: 3,
            q2: 3,
            q3: 3,
            q4: 3,
            user_id: localStorage.getItem('user_id'),
            group: localStorage.getItem('group'),
            phase5_start_time: null,
            phase5_end_time: null,
            router
        }
    },
    mounted() {
        // write initialization functions here...
    },
    methods: {
        // write general functions here...

        send_phase_five_results() {
            const ipAddress = window.location.hostname
            // write initialization functions here...
            const timestampInMs = Date.now();

            // Convert the timestamp to the desired format
            const timestampInSeconds = Math.floor(timestampInMs / 1000);
            const decimalPlaces = 7;
            const fractionalSeconds = (timestampInMs / 1000 - timestampInSeconds).toFixed(decimalPlaces).substr(1);
            this.phase5_end_time = `${timestampInSeconds}${fractionalSeconds}`;

            this.request_body = {
                "group": this.group,
                "ip_address": ipAddress,
                "user_id": this.user_id,
                "start_time": this.phase5_start_time,
                "end_time": this.phase5_end_time,
                "answers": {
                    "phase_5": {
                        "q1": this.q1,
                        "q2": this.q2,
                        "q3": this.q3,
                        "q4": this.q4
                    }
                }
            }

            axios.post('http://localhost:8081/api/v2/phase-one-processing', this.request_body)
                .then(
                    response => {
                        this.response_body = response.data
                        this.router.push({name: "survey-thank-you"})
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
