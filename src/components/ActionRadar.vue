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
              <li class="nav-item"><a href="/feature-correlations"  class="nav-link">Feature Correlations</a></li>
              <li class="nav-item"><a href="/action-sequence" class="nav-link">Relations of Actions</a></li>
              <li class="nav-item"><a href="#" class="nav-link">Action Chains</a></li>
              <li class="nav-item"><a href="/action-radar" class="nav-link active" aria-current="page">Action Radar</a></li>
              <li class="nav-item"><a href="#" class="nav-link">Data Movement Map</a></li>
              <!--<router-link to="/raw-data"> Raw data View</router-link>-->
            </ul>
          </header>
    </div>
        </div>
      </div>
      <div id="myDiv"></div>
  </body>
</template>

<script>
import Plotly from 'plotly.js-dist-min/plotly.min'
import axios from 'axios'

export default {
  name: "ActionRader",
  data () {
    return {
      response_body: null,
      radar_dict: null,
      action_list: ['do_nothing', 'attack', 'train_marine', 'harvest_minerals', 'build_barracks', 'build_supply_depot'],
      r_list: []
    }
  },
  mounted() {
    // TODO:

    axios.get('http://131.130.122.25:9021/action-radar')
        .then(
            response => {
              this.response_body = response.data
              console.log(this.response_body)

              // TODO: check if the number of keys equals number of elements in action_list
              // get the number of actions for each element in list
              for (let i = 0; i < this.action_list.length; i++){
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