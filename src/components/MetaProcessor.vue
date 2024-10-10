<template>
    <div>
        <component
            v-for="(component, index) in components"
            :is="getComponentType(component?.name)"
            :key="index"
            :data="component?.data"
        />
    </div>
  </template>
  
  <script lang="ts" setup>
    import { type ComponentDetails } from "../types/ctypes";
    import Header from './Header.vue'
    import Card from './Card.vue'


    const props = defineProps<{
        components: ComponentDetails[],
    }>();

    const getComponentType = (name: string) => {
        const componentMap: any = {
            header: Header,
            card: Card,
        }
        return componentMap[name] || null
    }
  </script>
  