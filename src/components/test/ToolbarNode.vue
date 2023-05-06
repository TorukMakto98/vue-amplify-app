<script setup>
import {Handle, Position} from '@vue-flow/core'
import {NodeToolbar} from '@vue-flow/node-toolbar'

defineProps(['data', 'label'])
</script>

<template>
    <NodeToolbar
            style="display: flex; gap: 0.5rem; align-items: center"
            :is-visible="data.toolbarVisible"
            :position="data.toolbarPosition"
    >
        <table class="table table-primary table-bordered border-primary">
            <thead>
            <tr>
                <th scope="col">Agents Soldiers</th>
                <th scope="col">Agents Queued Soldiers</th>
                <th scope="col">Agents Command Centers</th>
                <th scope="col">Agents Barracks</th>
                <th scope="col">Enemy Soldiers</th>
                <th scope="col">Enemy Command Centers</th>
                <th scope="col">Enemy Barracks</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{{ data.states.marines }}</td>
                <td>{{ data.states.queued_marines}}</td>
                <td>{{ data.states.command_centers}}</td>
                <td>{{ data.states.barrackses}}</td>
                <td>{{ data.states.enemy_marines}}</td>
                <td>{{ data.states.enemy_command_centers}}</td>
                <td>{{ data.states.barrackses}}</td>
            </tr>
            </tbody>
        </table>
    </NodeToolbar>

    <div :style="{ padding: '10px 20px' }">
        {{ label }}
    </div>

    <Handle type="target" :position="Position.Left"/>
    <Handle type="source" :position="Position.Right"/>
</template>

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

/*#app {*/
/*    text-transform: uppercase;*/
/*    font-family: 'JetBrains Mono', monospace;*/
/*    -webkit-font-smoothing: antialiased;*/
/*    -moz-osx-font-smoothing: grayscale;*/
/*    text-align: center;*/
/*    color: #2c3e50;*/
/*}*/

.vue-flow__minimap {
    transform: scale(75%);
    transform-origin: bottom right;
}


</style>
