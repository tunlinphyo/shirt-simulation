
<template>
    <button @click="onClick(item.id)">
      <div class="name">{{ item.name }}</div>
      <div class="value">{{ item.value }}</div>
      <div class="end"></div>
    </button>
</template>

<script lang="ts" setup>
import { CategoryWithValue } from '~/interfaces/simulation'

export interface Props {
  item: CategoryWithValue;
  current: number|null;
}

const props = defineProps<Props>()
const emit = defineEmits()

function onClick(id:number) {
  emit('select', id)
}
</script>

<style scoped>
button {
    width: 100%;
    height: 80px;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) 24px;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 0 20px;
    border: none;
    outline: none;
    background-color: #eee;
    text-align: left;
    cursor: pointer;
}
.value {
  text-transform: uppercase;
  letter-spacing: 1px;
}
.end {
  position: relative;
}
.end::before,
.end::after {
  content: '';
  display: block;
  position: absolute;
  width: 20px;
  height: 0;
  border-top: 1px solid #ccc;
}
.end::before {
  transform: translate(0, -7px) rotate(45deg);
}
.end::after {
  transform: translate(0, 7px) rotate(-45deg);
}
</style>