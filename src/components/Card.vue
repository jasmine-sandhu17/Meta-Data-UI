<template>
  <v-card class="mt-90 mx-auto" max-width="448">
        <v-container fluid>
          <v-card
            class="mb-2"
            density="compact"
            :prepend-avatar="data?.profilePic"
            :subtitle="data?.fullName"
            :title="data?.caption"
            variant="text"
          >
            <v-img v-if="data?.src" height="128" :src="data?.src" cover></v-img>
            <v-card-text>
              {{data?.body}}
            </v-card-text>
          </v-card>
        </v-container>
  </v-card>
</template>
<script lang="ts" setup>
import { type ComponentData } from "../types/ctypes";

const props = defineProps<{
  data : ComponentData
}>();
</script>
<style scoped>
.mt-90 {
  margin-top: 90px;
}
</style>