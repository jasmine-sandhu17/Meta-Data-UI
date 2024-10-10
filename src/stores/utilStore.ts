import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
import { fetchData } from '../service/index';

interface ComponentData {
    name: string
    data: Record<string, any>
  }
  
interface UIState {
  title: Ref<string>
  components: Ref<ComponentData | null>
  loadData: (file: string) => void
}

export const useUtilStore= defineStore('utilStore', (): UIState => {
  const title = ref<string>('')
  const components = ref<ComponentData | null>(null)

  const loadData = async (filePath: string) => {
    const data: any = await fetchData(filePath);
    title.value = data?.title;
    components.value = data?.components || [];
  }

  return {
    title,
    components,
    loadData
  }
})
