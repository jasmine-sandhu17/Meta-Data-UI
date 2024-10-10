<template>
  <div>
    <MetaProcessor v-if="components" :components="components" />
    <div v-else>Loading...</div>
  </div>
</template>

<script lang="ts" setup>
  import MetaProcessor from './components/MetaProcessor.vue'
  import { ref, onMounted, type Ref } from 'vue'
  import { type ComponentDetails } from "./types/ctypes";
  import { useUtilStore } from './stores/utilStore'
import { watchEffect } from 'vue';
  
  const utilStore = useUtilStore();
  const title = ref('')
  const components: Ref<ComponentDetails[]> = ref([]);

  onMounted(() => {
    const jsonFilePath = 'src/mock/data1.json' // Change to '/mock2.json' for other example
    utilStore.loadData(jsonFilePath);
  })

  watchEffect(()=>{
    title.value = utilStore?.title
    components.value = utilStore?.components

  })
</script>
