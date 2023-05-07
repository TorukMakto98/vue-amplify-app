<template>
    <body>
    <main>
        <div class="container text-center">
            <br>
            <div class="row">
                <div class="col">
                    <div class="p-3 mb-2 bg-primary bg-gradient text-white shadow rounded">
                        <h3>Introduction</h3>
                        You will now see a similar representation as in the question before, but the last action
                        performed by
                        the AI
                        agent is obscured. Your task is now to predict what action you think the AI might perform next.
                        Select
                        one of
                        the possible answers and justify your decision using the free text field.
                    </div>
                    <br/>
                    <div class="mb-5">
                    </div>
                </div>
                <div class="col d-flex align-items-center">
                    <!-- put table content here -->
                    <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded"><label><h2>1</h2>
                        In this sequence, the last action has been obscured. Based on the data and your knowledge,
                        consider what action the AI might have performed at this point and choose one from the following
                        opportunities.
                    </label>
                        <div class="mb-3">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="phase4-b" id="phase4-b"
                                       value="attack" v-model="q1">
                                <label class="form-check-label" for="phase4-b">
                                    Attack Enemy
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="phase4-b" id="phase4-b"
                                       value="harvest_minerals"
                                       v-model="q1">
                                <label class="form-check-label" for="phase4-b">
                                    Farm Minerals and Resources
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="phase4-b" id="phase4-b"
                                       value="build_supply_depots"
                                       v-model="q1">
                                <label class="form-check-label" for="phase4-b">
                                    Build new Supply Depots
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="phase4-b" id="phase4-b"
                                       value="build_barrackses"
                                       v-model="q1">
                                <label class="form-check-label" for="phase4-b">
                                    Build new Barracks
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="phase4-b" id="phase4-b"
                                       value="build_barrackses"
                                       v-model="q1">
                                <label class="form-check-label" for="phase4-b">
                                    Build new Soldiers
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
                <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                    <table class="table table-hover">
                        <thead class="table-primary">
                        <tr>
                            <th>Action <abbr :title='this.tooltip_action'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                     fill="currentColor" class="bi bi-question-circle-fill"
                                     viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
                                </svg>
                            </abbr></th>
                            <th>Agents Soldiers <abbr :title="this.tooltip_agent_soldiers">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                     fill="currentColor" class="bi bi-question-circle-fill"
                                     viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
                                </svg>
                            </abbr></th>
                            <th>Agents Queued Soldiers <abbr :title="this.tooltip_agents_queued_marines">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                     fill="currentColor" class="bi bi-question-circle-fill"
                                     viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
                                </svg>
                            </abbr></th>
                            <th>Agents Command Centers <abbr :title="this.tooltip_agents_command_centers">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                     fill="currentColor" class="bi bi-question-circle-fill"
                                     viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
                                </svg>
                            </abbr></th>
                            <th>Agents Barrackses <abbr :title="this.tooltip_agents_barrackses">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                     fill="currentColor" class="bi bi-question-circle-fill"
                                     viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
                                </svg>
                            </abbr></th>
                            <th>Enemy Soldiers <abbr :title="this.tooltip_enemy_soldiers">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                     fill="currentColor" class="bi bi-question-circle-fill"
                                     viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
                                </svg>
                            </abbr></th>
                            <th>Enemy Command Centers <abbr :title="this.tooltip_enemy_command_centers">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                     fill="currentColor" class="bi bi-question-circle-fill"
                                     viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
                                </svg>
                            </abbr></th>
                            <th>Enemy Barrackses <abbr :title="this.tooltip_enemy_barrackses">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                     fill="currentColor" class="bi bi-question-circle-fill"
                                     viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
                                </svg>
                            </abbr></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item, index) in first_four_body">
                            <td>{{ item.display_name }}</td>
                            <td>{{ item.marines }}</td>
                            <td>{{ item.queued_marines }}</td>
                            <td>{{ item.command_centers }}</td>
                            <td>{{ item.barrackses }}</td>
                            <td>{{ item.enemy_marines }}</td>
                            <td>{{ item.enemy_command_centers }}</td>
                            <td>{{ item.enemy_barrackses }}</td>
                        </tr>
                        <tr>
                            <td>???</td>
                            <td>?</td>
                            <td>?</td>
                            <td>?</td>
                            <td>?</td>
                            <td>?</td>
                            <td>?</td>
                            <td>?</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <a class="btn btn-primary btn-lg px-4" v-on:click="send_phase_four_results">Submit and Next</a>
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

export default {
    name: "phase-three",
    data() {
        return {
            first_four_body: null,
            last_one_body: null,
            tooltip_action: null,
            tooltip_agent_soldiers: null,
            tooltip_agents_queued_marines: null,
            tooltip_agents_command_centers: null,
            tooltip_agents_barrackses: null,
            tooltip_enemy_marines: null,
            tooltip_enemy_command_centers: null,
            tooltip_enemy_barrackses: null,
            tooltip_enemy_soldiers: null,
            tooltip_body: null,
            q1: "answer5",
            user_id: localStorage.getItem('user_id'),
            group: localStorage.getItem("group"),
            phase4_start_time: null,
            phase4_end_time: null,
            router
        }
    },
    mounted() {
        const timestampInMs = Date.now();

        // Convert the timestamp to the desired format
        const timestampInSeconds = Math.floor(timestampInMs / 1000);
        const decimalPlaces = 7;
        const fractionalSeconds = (timestampInMs / 1000 - timestampInSeconds).toFixed(decimalPlaces).substr(1);
        this.phase4_start_time = `${timestampInSeconds}${fractionalSeconds}`;

        axios.get('3.77.227.198:8080/api/v2/phase-four-group-b')
            .then(
                response => {
                    console.log(JSON.stringify(response))
                    this.first_four_body = response.data['first_four']
                    this.last_one_body = response.data['last_one']
                    this.tooltip_body = response.data['tooltips']
                    this.tooltip_action = this.tooltip_body["action"]
                    this.tooltip_agent_soldiers = this.tooltip_body["agent_soldiers"]
                    this.tooltip_agents_queued_marines = this.tooltip_body["agents_queued_marines"]
                    this.tooltip_agents_command_centers = this.tooltip_body["agents_command_centers"]
                    this.tooltip_agents_barrackses = this.tooltip_body["agents_barrackses"]
                    this.tooltip_enemy_soldiers = this.tooltip_body["enemy_soldiers"]
                    this.tooltip_enemy_command_centers = this.tooltip_body["enemy_command_centers"]
                    this.tooltip_enemy_barrackses = this.tooltip_body["enemy_barrackses"]

                    console.log(this.first_four_body)
                    console.log(this.last_one_body)
                }
            )
            .catch(
                error => console.log(error)
            )
    },
    methods: {
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
