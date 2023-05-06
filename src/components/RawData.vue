<template>
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
              <li class="nav-item"><a href="/raw-data" class="nav-link active" aria-current="page">Raw Data View</a></li>
              <li class="nav-item"><a href="/feature-correlations"  class="nav-link">Feature Correlations</a></li>
              <li class="nav-item"><a href="/action-sequence" class="nav-link">Relations of Actions</a></li>
              <li class="nav-item"><a href="#" class="nav-link">Action Chains</a></li>
              <li class="nav-item"><a href="/action-radar" class="nav-link">Action Radar</a></li>
              <li class="nav-item"><a href="#" class="nav-link">Data Movement Map</a></li>
            </ul>
          </header>
        </div>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <div class="btn-toolbar mb-2 mb-md-0">
              <div class="btn-group mr-2">
                <button class="btn btn-sm btn-outline-secondary">Share</button>
                <button class="btn btn-sm btn-outline-secondary">Export</button>
              </div>
              <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar"></span>
                Filter
              </button>
            </div>
          </div>
          <!-- Adding dashboard content here -->

          <div class="bd-example">
            <table class="table table-hover">
                <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Time of Step</th>
                <th scope="col">Action</th>
                <th scope="col">Obtained Reward</th>
                <th scope="col">Command Centers</th>
                <th scope="col">SCVS</th>
                <th scope="col">IDLE-SCVS</th>
                <th scope="col">Supply Depots</th>
                <th scope="col">Barrackses</th>
                <th scope="col">Completed Barrackses</th>
                <th scope="col">Marines</th>
                <th scope="col">Queued Marines</th>
                <th scope="col">Free Supply</th>
                <th scope="col">Can Afford Supply Depot?</th>
                <th scope="col">Can Afford Barrackses?</th>
                <th scope="col">Can Afford Marine?</th>
                <th scope="col">Enemy Command Centers</th>
                <th scope="col">Enemy SCVS</th>
                <th scope="col">Enemy Supply Depots</th>
                <th scope="col">Enemy IDLE SCVS</th>
                <th scope="col">Enemy Completed Supply Deptos</th>
                <th scope="col">Enemy Barrackses</th>
                <th scope="col">Enemy Completed Barrackses</th>
                <th scope="col">Enemy Marines</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in this.response_body" :key="item._id">
                <th scope="row">{{item._id}}</th>
                <td>{{item.time_of_step}}</td>
                <td>{{item.action}}</td>
                <td>{{item.obtained_reward}}</td>
                <td>{{item.command_centers}}</td>
                <td>{{item.scvs}}</td>
                <td>{{item.idle_scvs}}</td>
                <td>{{item.supply_depots}}</td>
                <td>{{item.barrackses}}</td>
                <td>{{item.completed_barrackses}}</td>
                <td>{{item.marines}}</td>
                <td>{{item.queued_marines}}</td>
                <td>{{item.free_supply}}</td>
                <td>{{item.can_afford_supply_depot}}</td>
                <td>{{item.can_afford_barracks}}</td>
                <td>{{item.can_afford_marine}}</td>
                <td>{{item.enemy_command_centers}}</td>
                <td>{{item.enemy_scvs}}</td>
                <td>{{item.enemy_supply_depots}}</td>
                <td>{{item.enemy_idle_scvs}}</td>
                <td>{{item.enemy_completed_supply_depots}}</td>
                <td>{{item.enemy_barrackses}}</td>
                <td>{{item.enemy_completed_barrackses}}</td>
                <td>{{item.enemy_marines}}</td>
              </tr>
            </tbody>

            </table>
          </div>

          <canvas class="my-4" id="myChart" width="900" height="380">
          </canvas>

        </main>
      </div>
    </div>
  </body>
</template>
<script>

import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      response_body: null,
      json_data: null
    }
  },
  props: {
    msg: String
  },
  mounted() {
    axios.get('http://localhost:8081/raw-data')
        .then(
            response => {
              this.response_body = response.data
              //const json_string = this.response_body.substring(1, this.response_body.length-1)
              console.log(this.response_body)

              for (let i = 0; i < this.response_body.length; i++){
                console.log(this.response_body[i])
              }
            }
        )
        .catch(
            error => console.log(error)
        )
  }
}
</script>
<style scoped>
body {
  font-size: .875rem;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}

/*
 * Sidebar
 */

.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 0;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}

.sidebar-sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 48px; /* Height of navbar */
  height: calc(100vh - 48px);
  padding-top: .5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}

.sidebar .nav-link.active {
  color: #007bff;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: .75rem;
  text-transform: uppercase;
}

/*
 * Navbar
 */

.navbar-brand {
  padding-top: .75rem;
  padding-bottom: .75rem;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, .25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
}

.navbar .form-control {
  padding: .75rem 1rem;
  border-width: 0;
  border-radius: 0;
}

.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, .1);
  border-color: rgba(255, 255, 255, .1);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
}

/*
 * Utilities
 */

.border-top { border-top: 1px solid #e5e5e5; }
.border-bottom { border-bottom: 1px solid #e5e5e5; }
</style>
