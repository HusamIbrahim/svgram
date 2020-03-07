<template>
  <div>
    <form @submit.prevent>
      <input type="file" accept="image/*" capture @change="handleChange" />
    </form>
    <img ref="img" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const img = ref(null)

    const handleChange = (e: InputEvent) => {
      console.log(e)
    }

    return { img, handleChange }
  },
})
</script>

<style></style>
