<template>
  <div>
    <form @submit.prevent>
      <input type="file" accept="image/*" capture @change="handleChange" />
    </form>
    <img ref="img" />
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const img = ref<HTMLImageElement>(null)

    const handleChange = (e: InputEvent) => {
      const fileList = (e.target as HTMLInputElement).files

      if (fileList) {
        const file = fileList[0]

        if (img.value) {
          const objectURL = URL.createObjectURL(file)
          img.value.src = objectURL
          // release object URL after image load since it's no longer needed
          img.value.onload = () => URL.revokeObjectURL(objectURL)
        }
      }
    }

    return { img, handleChange }
  },
})
</script>

<style></style>
