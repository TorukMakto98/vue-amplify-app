<template>
  <VueFlow v-model="responseBody" fit-view-on-init class="vue-flow-basic-example">
    <template #node-toolbar="nodeProps">
      <ToolbarNode :data="nodeProps.data" :label="nodeProps.label"/>
    </template>
  </VueFlow>
</template>

<script setup>
import { Position, VueFlow } from '@vue-flow/core'
import { ref } from 'vue'
import ToolbarNode from '../../components/test/ToolbarNode.vue'
import axios from "axios";
import DashboardViewNew from "@/views/DashboardViewNew.vue";

const responseBody = ref(null);
const survey_group = localStorage.getItem("survey_group");


axios.get("http://localhost:8081/api/v2/phase-three-group-c-flowchart").then(
    response => {
        responseBody.value = response.data;
    }
).catch(
    error => console.log(error)
);
</script>
