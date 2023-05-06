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
              <li class="nav-item"><a href="/action-sequence" class="nav-link active" aria-current="page">Relations of Actions</a></li>
              <li class="nav-item"><a href="#" class="nav-link">Action Chains</a></li>
              <li class="nav-item"><a href="/action-radar" class="nav-link">Action Radar</a></li>
              <li class="nav-item"><a href="#" class="nav-link">Data Movement Map</a></li>
              <!--<router-link to="/raw-data"> Raw data View</router-link>-->
            </ul>
          </header>
    </div>
        </div>
      </div>
  <div id="myDiv"></div>
      <div id="myDiv1"></div>
  </body>
</template>

<script>
import Plotly from 'plotly.js-dist-min/plotly.min'
import axios from "axios";

export default {
  name: 'SequencesSunburst',
  data () {
    return {
      response_body: null,
      response_body1: null,
      labels_sb_list: [],
      parents_sb_list: [],
      values_sb_list: [],
      action_list: ['do_nothing', 'attack', 'train_marine', 'harvest_minerals', 'build_barracks', 'build_supply_depot'],
      labels_list: [],
      x_values: [],
      y_values: [],
      sources: [],
      targets: [],
      values: [],
    }
  },
  mounted() {
    this.CreateActionSequenceMap();
    this.CreateSunburstGraph();
  },
  methods:{

    // get initial request data
    CreateActionSequenceMap(){
      axios.get('http://131.130.122.25:9021/api/v2/action-sequence')
        .then(
            response => {
              this.response_body = response.data;
              console.log(this.response_body);
              this.labels_list = this.response_body['labels'];
              this.x_values = this.response_body['x_values'];
              this.y_values = this.response_body['y_values'];
              this.sources = this.response_body['sources'];
              this.targets = this.response_body['targets'];
              this.values = this.response_body['values'];

              console.log(this.labels_list);
              var data = [{
                type: "sankey",
                  arrangement: "snap",
                  node:{
                      label: this.labels_list,
                      x: this.x_values,
                      y: this.y_values,
                      pad:10}, // 10 Pixels
                  link: {
                      source: this.sources,
                      target: this.targets,
                      value: this.values}
                  }]

              var layout = {"title": "Action Sequence Map"}

              Plotly.newPlot('myDiv', data, layout)


            }
        )
        .catch(
            error => console.log(error)
        )
    },
    CreateSunburstGraph(){
      axios.get('http://localhost:8081/api/v1/action-sequence')
        .then(
            response => {
              this.response_body1 = response.data;
              console.log(this.response_body1);
              this.labels_sb_list = this.response_body1['labels'];
              this.parents_sb_list = this.response_body1['parents'];
              this.values_sb_list = this.response_body1['values'];

              var data = [{

              type: "sunburst",

              labels: this.labels_sb_list,

              parents: this.parents_sb_list,

              values:  this.values_sb_list,

              outsidetextfont: {size: 20, color: "#377eb8"},

              leaf: {opacity: 0.4},

              marker: {line: {width: 2}},

            }];


            var layout = {

              margin: {l: 0, r: 0, b: 0, t: 0},

              width: 500,

              height: 500

            };



            Plotly.newPlot('myDiv1', data, layout);
            }
        )
        .catch(
            error => console.log(error)
        )
    }
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