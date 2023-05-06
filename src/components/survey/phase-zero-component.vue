<template>
    <body>
    <div class="col-lg-8 mx-auto p-4 py-md-5">
        <header class="d-flex align-items-center pb-3 mb-5 border-bottom">
            <a href="/frontend/public" class="d-flex align-items-center text-dark text-decoration-none">
                <img :src="image_src" alt="logo">
            </a>
        </header>

        <main>
            <h1>But, before we start...</h1>
            <br>
            <br>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="false" aria-controls="collapseOne">
                            <strong>What is the study about?</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            I am conducting a study on the topic of human interpretation skills compared to that of AI
                            data. In this study, you will be presented with different forms of visual
                            representations of AI data and will be asked to interpret and answer questions based on
                            your understanding. Prior knowledge is not important, but it is essential that you
                            engage with the study and attempt to interpret the data in your own way.
                            <br/>
                            The purpose of the study is to find out how well humans can interpret the data of AI agents
                            and
                            which forms of representation can support humans in interpreting the data.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>What do you need to know about the data in advance?</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            The data set that will be the subject of the study comes from a video game called "Starcraft
                            II". This is a real-time strategy game for the PC. In this game, several opponents always
                            compete in duels and have to collect minerals, train troops, develop infrastructure and
                            attack the opponent.
                            <br/>
                            We have now developed a so-called AI agent ourselves, which competes against a simple bot
                            and also carries out such actions against the bot. In doing so, we have extracted and stored
                            the data from the 1 vs 1 duels of these two. You will have to see and interpret this
                            extracted data in this study.
                            <br/>
                            <br/>
                            But don't worry, you don't have to be a gamer to be able to answer the questions 😉
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <br>
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
<!--            <div class="row g-5">-->
<!--                <div class="col-md-6">-->
<!--                    <a class="icon-link mb-1" href="https://github.com/twbs/examples/tree/main/webpack" rel="noopener"-->
<!--                       target="_blank">-->
<!--                        <svg class="bi" width="16" height="16">-->
<!--                            <use xlink:href="#arrow-right-circle"></use>-->
<!--                        </svg>-->
<!--                        Information & Help-->
<!--                    </a>-->
<!--                </div>-->
<!--            </div>-->
        </div>
    </div>
    </body>
</template>

<script>
import image_univie from './rsc/images/phase-one/univie-logo.jpg'
import axios from "axios";
import router from "../../router";


export default {
    name: "phase-zero",
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
    },
    methods: {
        // implement functions here

        send_initial_user_data() {
            this.router.push({name: "survey-phase-one"})
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
