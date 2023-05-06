<template xmlns="http://www.w3.org/1999/html">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="/docs/4.0/assets/img/favicons/favicon.ico">

    <link rel="canonical" href="https://getbootstrap.com/docs/4.0/examples/dashboard/">

    <!-- Bootstrap core CSS -->
    <link href="../../dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="dashboard.css" rel="stylesheet">
  </head>

  <body>
      <div class="container-fluid">
        <div class="row">
          <div class="container">
          <header class="d-flex justify-content-center py-3">
            <ul class="nav nav-pills">
              <li class="nav-item"><a href="/raw-data" class="nav-link">Raw Data View</a></li>
              <li class="nav-item"><a href="/feature-correlations"  class="nav-link active" aria-current="page">Feature Correlations</a></li>
              <li class="nav-item"><a href="/action-sequence" class="nav-link">Relations of Actions</a></li>
              <li class="nav-item"><a href="#" class="nav-link">Action Chains</a></li>
              <li class="nav-item"><a href="/action-radar" class="nav-link">Action Radar</a></li>
              <li class="nav-item"><a href="#" class="nav-link">Data Movement Map</a></li>
              <!--<router-link to="/raw-data"> Raw data View</router-link>-->
            </ul>
          </header>
        </div>
          <div id="myDiv"></div>
        </div>
    </div>
  </body>
</template>

<script>
import Plotly from 'plotly.js-dist-min/plotly.min'
import axios from 'axios'

export default {
  name: "PlotlyTestv2",
  data () {
    return {
      response_body: null,
      json_data: null,
      htmp_record: null,
      htmp_body: null,
      time_of_step: null,
      times_of_steps: null
    }
  },
  mounted() {
    // TODO: insert a function for sending specific feature parameters to backend and response with a new response body

    axios.get('http://131.130.122.25:9021/feature-correlations')
        .then(

            response => {
              this.response_body = response.data
              this.htmp_body = []
              this.times_of_steps = []

              for (let i = 0; i < this.response_body.length; i++) {
                this.htmp_record = [
                    // this.response_body[i]['action'],
                    this.response_body[i]['obtained_reward'],
                    this.response_body[i]['command_centers'],
                    this.response_body[i]['scvs'],
                    this.response_body[i]['idle_scvs'],
                    this.response_body[i]['supply_depots'],
                    this.response_body[i]['barrackses'],
                    this.response_body[i]['completed_barrackses'],
                    this.response_body[i]['marines'],
                    this.response_body[i]['queued_marines'],
                    this.response_body[i]['free_supply'],
                    // this.response_body[i]['can_afford_supply_depots'],
                    // this.response_body[i]['can_afford_barracks'],
                    // this.response_body[i]['can_afford_marine'],
                    this.response_body[i]['enemy_command_centers'],
                    this.response_body[i]['enemy_scvs'],
                    this.response_body[i]['enemy_supply_depots'],
                    this.response_body[i]['enemy_idle_scvs'],
                    this.response_body[i]['enemy_completed_supply_depots'],
                    this.response_body[i]['enemy_barrackses'],
                    this.response_body[i]['enemy_completed_barrackses'],
                    this.response_body[i]['enemy_marines']
                ]

                this.htmp_body.push(this.htmp_record)
                this.times_of_steps.push(i)
              }
              console.log(this.htmp_body)

              var data = [

                {

                  z: this.htmp_body,

                  x: ['Obtained Reward', 'Command Centers', 'SCVS', 'IDLE-SCVS', 'Supply Depots', 'Barrackses',
                    'Completed Barrackses', 'Marines', 'Queued Marines', 'Free Supply', 'Enemy Command Centers', 'Enemy SCVS', 'Enemy Supply Depots',
                    'Enemy IDLE SCVS', 'Enemy Completed Supply Deptos', 'Enemy Barrackses', 'Enemy Completed Barrackses',
                    'Enemy Marines'],

                  y: this.times_of_steps,

                  type: 'heatmap',
                  hoverongaps: false

                }

              ];


              Plotly.newPlot('myDiv', data);
            }
        )
        .catch(
            error => console.log(error)
        )
  }
}

</script>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
