<template>
    <body>
    <main>
        <div class="container text-center">
            <br>
            <div class="row">
                <div class="col">
                    <div class="p-3 mb-2 bg-primary bg-gradient text-white shadow rounded">
                        <h3>Introduction</h3>
                        You will now see the actions and associated game data from the 1 vs.1 of the RL agent and the
                        bot. The actions here were performed by our developed RL agent. The RL agent decided based on
                        the game data that you can see in the rows. The actions were performed
                        sequentially by the RL agent. Please answer the question about the right-hand sight
                    </div>
                    <br/>
                </div>
                <div class="col d-flex align-items-center">
                    <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded"><label><h2>1</h2>
                        Interpret the data and answer, why the RL Agent has performed the last action "Farm Minerals and
                        Resources"
                    </label>
                        <p/>
                        <div class="mb-3">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="phase3-b" id="phase3-b"
                                       value="answer1" v-model="q1">
                                <label class="form-check-label" for="phase3-b">
                                    Because the AI needs to build a better ecosystem to improve its own combat power
                                    again, as it is
                                    currently in a fight.</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="phase3-b" id="phase3-b"
                                       value="answer2" v-model="q1">
                                <label class="form-check-label" for="phase3-b">
                                    Because previous actions have run out of minerals and the AI has realised that it
                                    needs more
                                    minerals for further actions.
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="phase3-b" id="phase3-b"
                                       value="answer3" v-model="q1">
                                <label class="form-check-label" for="phase3-b">
                                    Because previous actions have run out of minerals and the AI has realised that it
                                    needs more
                                    minerals for further actions.
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="phase3-b" id="phase3-b"
                                       value="answer4" v-model="q1"
                                       checked>
                                <label class="form-check-label" for="phase3-b">
                                    Because their own command centres have been lost and the AI needs more minerals to
                                    build a new one.
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                    </div>
                    <div class="col d-flex align-items-center">
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
                            <tr v-for="(item, index) in response_body" :key="index">
                                <td>{{ item.display_name }}</td>
                                <td>{{ item.marines }}</td>
                                <td>{{ item.queued_marines }}</td>
                                <td>{{ item.command_centers }}</td>
                                <td>{{ item.barrackses }}</td>
                                <td>{{ item.enemy_marines }}</td>
                                <td>{{ item.enemy_command_centers }}</td>
                                <td>{{ item.enemy_barrackses }}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="mb-5">
                    <a class="btn btn-primary btn-lg px-4" v-on:click="send_phase_one_results">Submit and Next</a>
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
import axios from "axios";
import router from "../../../router";

export default {
    name: "phase-three",
    data() {
        return {
            response_body: null,
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
            q1: null,
            user_id: localStorage.getItem("user_id"),
            group: localStorage.getItem("group"),
            phase3_start_time: null,
            phase3_end_time: null,
            router
        }
    },
    mounted() {

        axios.get('http://3.77.227.198:5000/api/v2/phase-three-group-b')
            .then(
                response => {
                    this.response_body = response.data["states"]
                    this.tooltip_body = response.data["tooltip_labels"]
                    this.tooltip_action = this.tooltip_body["action"]
                    this.tooltip_agent_soldiers = this.tooltip_body["agent_soldiers"]
                    this.tooltip_agents_queued_marines = this.tooltip_body["agents_queued_marines"]
                    this.tooltip_agents_command_centers = this.tooltip_body["agents_command_centers"]
                    this.tooltip_agents_barrackses = this.tooltip_body["agents_barrackses"]
                    this.tooltip_enemy_soldiers = this.tooltip_body["enemy_soldiers"]
                    this.tooltip_enemy_command_centers = this.tooltip_body["enemy_command_centers"]
                    this.tooltip_enemy_barrackses = this.tooltip_body["enemy_barrackses"]

                    console.log(this.tooltip_action)
                }
            )
            .catch(
                error => console.log(error)
            )
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
