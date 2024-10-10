<template>
    <v-layout>
      <v-app-bar
        color="primary"
        density="compact"
        height="100"
      >
       
        <v-app-bar-title>{{data?.title}}</v-app-bar-title>
        <v-btn color="primary" variant="tonal" style="background-color: white;" @click="utilStore.loadData(`src/mock/data${data?.title?.includes('1') ? 2 : 1 }.json`)">Switch To Mock {{ data?.title?.includes('1') ? 2 : 1 }}</v-btn>
      </v-app-bar>
    </v-layout>
</template>
<script lang="ts" setup>
import { type ComponentData } from "../types/ctypes";
import { useUtilStore } from '../stores/utilStore';

const utilStore = useUtilStore();
const props = defineProps<{
  data : ComponentData
}>();
</script>
<style scoped>
.v-toolbar__content{
  height: 80px !important;
}</style>