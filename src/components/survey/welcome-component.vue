<template>
    <body>
    <div class="col-lg-8 mx-auto p-4 py-md-5">
        <header class="d-flex align-items-center pb-3 mb-5 border-bottom">
            <a href="/frontend/public" class="d-flex align-items-center text-dark text-decoration-none">
                <img :src="image_src" alt="logo">
            </a>
        </header>

        <main>
            <h1>Welcome to RAES - Reinforcement learning Agent Evaluation System</h1>
            <br/>
            <p class="fs-5 col-md-8">
                We are conducting a user study aimed at comprehending the behavior of a Reinforcement Learning Agent in
                the context of Starcraft 2. The study has been organized into five distinct parts for enhanced efficacy.
                Initially, we would appreciate your sharing your existing knowledge concerning AI and machine learning.
                Subsequently, you will be presented with relevant data about RL agents, and your input in the form of
                statements or responses to questions will be sought. The study is estimated to take approximately 5-10
                minutes of your time. We value your participation, and your contribution will assist us in advancing our
                understanding of the topic.</p>
            <br/>
            <p class="fs-5 col-md-8"> And no worries, we will not collect any personal information's about you ✌️</p>
            <div class="mb-5">
                <a class="btn btn-primary btn-lg px-4" v-on:click="this.send_initial_user_data()">Start Study</a>
            </div>
        </main>
        <div class="container">
            <div class="col-md-4 d-flex align-items-center">
                <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    <svg class="bi" width="30" height="24">
                        <use xlink:href="#bootstrap"></use>
                    </svg>
                </a>
                <span class="mb-3 mb-md-0 text-muted">Research Group Big Data and Machine learning - Master thesis by Mattes Barkowski</span>
            </div>
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            </footer>
        </div>
    </div>
    </body>
</template>

<script>
import image_univie from './rsc/images/phase-one/univie-logo.jpg'
import axios from "axios";
import router from "../../router";


export default {
    name: "welcome-survey",
    data() {
        return {
            request_body: null,
            response_body: null,
            image_src: image_univie,
            group_list: ["A", "B", "C"],
            group: null,
            user_id: null,
            router
        }
    },
    mounted() {
        //TODO: define group for the user
        // this.setValueinLocalStorage();
    },
    methods: {
        // implement functions here

        send_initial_user_data() {
            const ipAddress = window.location.hostname

            this.request_body = {
                "ip_address": ipAddress
            }

            axios.post('http://3.77.227.198:5000/api/v2/welcome', this.request_body)
                .then(
                    response => {
                        this.response_body = response.data
                        console.log(JSON.stringify(this.response_body))
                        this.user_id = this.response_body[0]['user_id']
                        this.group = this.response_body[0]['group']
                        localStorage.setItem('user_id', this.user_id)
                        localStorage.setItem('SurveyGroup', this.group)
                        this.router.push({name: "survey-phase-zero"})
                    }
                )
                .catch(
                    error => console.log(error)
                )

            //TODO: define start_timestamp for the user clicks the 'start' button


        },

        // setValueinLocalStorage() {
        //     this.group = this.group_list[Math.floor(Math.random() * this.group_list.length)];
        //     localStorage.setItem('SurveyGroup', this.group)
        // }
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
