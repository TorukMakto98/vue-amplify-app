<template>
  <VueFlow v-model="this.elements_list" />
</template>
<script setup>
import { VueFlow  } from '@vue-flow/core'
import { ref } from 'vue'
</script>
<script>
import axios from 'axios'

export default {
  name: "test-component",
  data () {
    return {
      response_body: null,
      radar_dict: null,
      action_list: ['do_nothing', 'attack', 'train_marine', 'harvest_minerals', 'build_barracks', 'build_supply_depot'],
      r_list: [],
      elements_list: null
    }
  },
  mounted() {

  //   axios.get('http://0.0.0.0:8081/api/v2/phase-three-group-c-flowchart')
  // .then(
  //       response => {
  //         this.response_body = response.data
  //         this.elements_list = this.response_body
  //       })
  //       .catch(
  //           error => console.log(error)
  //       )

      this.elements_list = ref([
    {
        "id": 1,
        "label": "Build new Barracks",
        "data": {
            "toolbarPosition": "Position.Right"
        },
        "position": {
            "x": 100,
            "y": 100
        }
    },
    {
        "id": "e1-2",
        "source": "1",
        "target": "2",
        "animated": true
    },
    {
        "id": 2,
        "label": "Build new Supply Depots",
        "data": {
            "toolbarPosition": "Position.Right"
        },
        "position": {
            "x": 100,
            "y": 175
        }
    },
    {
        "id": "e2-3",
        "source": "2",
        "target": "3",
        "animated": true
    },
    {
        "id": 3,
        "label": "Wait and do nothing",
        "data": {
            "toolbarPosition": "Position.Right"
        },
        "position": {
            "x": 100,
            "y": 250
        }
    },
    {
        "id": "e3-4",
        "source": "3",
        "target": "4",
        "animated": true
    },
    {
        "id": 4,
        "label": "Attack Enemy",
        "data": {
            "toolbarPosition": "Position.Right"
        },
        "position": {
            "x": 100,
            "y": 325
        }
    },
    {
        "id": "e4-5",
        "source": "4",
        "target": "5",
        "animated": true
    },
    {
        "id": "5",
        "label": "Build new Barracks",
        "position": {
            "x": 100,
            "y": 400
        }
    }
])
  }
}

</script>

<style lang="css">
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/core@1.19.0/dist/style.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/core@1.19.0/dist/theme-default.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/controls@latest/dist/style.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/minimap@latest/dist/style.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/node-resizer@latest/dist/style.css';

html,
body,
#app {
  margin: 0;
  height: 100%;
}

#app {
  text-transform: uppercase;
  font-family: 'JetBrains Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.vue-flow__minimap {
  transform: scale(75%);
  transform-origin: bottom right;
}

.basicflow.dark{background:#57534e;color:#fffffb}.basicflow.dark .vue-flow__node{background:#292524;color:#fffffb}.basicflow.dark .vue-flow__controls .vue-flow__controls-button{background:#292524;fill:#fffffb;border-color:#fffffb}.basicflow.dark .vue-flow__edge-textbg{fill:#292524}.basicflow.dark .vue-flow__edge-text{fill:#fffffb}.basicflow .controls{display:flex;flex-wrap:wrap;justify-content:center;gap:8px}.basicflow .controls button{padding:4px;border-radius:5px;font-weight:600;-webkit-box-shadow:0px 5px 10px 0px rgba(0,0,0,.3);box-shadow:0 5px 10px #0000004d;cursor:pointer;display:flex;justify-content:center;align-items:center}.basicflow .controls button:hover{transform:scale(102%);transition:.25s all ease}

</style>