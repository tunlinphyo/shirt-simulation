<template>
  <div class="item"
    :class="{'active': item.id === current}"
    @click="onClick(item.id)">
    <div class="media"
      :data-value="item.value"
      :class="item.description"
      :style="getStyles(item)"
    ></div>
    <div class="value">{{ item.name }}</div>
  </div>
</template>

<script lang="ts" setup>
import { CategoryItem } from '~/interfaces/simulation'

export interface Props {
  item: CategoryItem;
  current?: number | null;
}

const props = defineProps<Props>()
const emit = defineEmits()

function onClick(id:number) {
  emit('select', id)
}
function getStyles(item: CategoryItem) {
  if (item.description == 'design') {
    return `background-image: url(${item.value})`
  }
  if (item.description == 'colors') {
    return `background-color: ${item.value}`
  }
  return ''
}
</script>

<style scoped>
.item {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: 100px 40px;
  background-color: #eee;
  border-radius: 4px;
  border: 1px solid #ddd;
  cursor: pointer;
  overflow: hidden;
}
.item:hover,
.item:focus {
  box-shadow: 0 0 0 2px #6c5ce7;
}
.item.active {
  box-shadow: 0 0 0 2px #f00;
}
.media {
  background-color: #fff;
  position: relative;
}
.value {
  padding: 0 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-transform: uppercase;
  font-size: .8rem;
}

.media.design {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.media.sizes::before,
.media.spacing::before {
  content: attr(data-value);
  display: block;
  position: absolute;
  top: 0; bottom: 0;
  left: 0; right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 7rem;
  font-weight: 900;
  overflow: hidden;
  color: #ddd;
  text-transform: uppercase;
}
.media.patterns[data-value="rhombus"] {
  background-color: #e5e5f7;
  background-image:  linear-gradient(135deg, #aaa 25%, transparent 25%), linear-gradient(225deg, #aaa 25%, transparent 25%), linear-gradient(45deg, #aaa 25%, transparent 25%), linear-gradient(315deg, #aaa 25%, #e5e5f7 25%);
  background-position:  10px 0, 10px 0, 0 0, 0 0;
  background-size: 10px 10px;
  background-repeat: repeat;
}
.media.patterns[data-value="zig-zag"] {
  background-color: #e5e5f7;
  background-image:  linear-gradient(135deg, #aaa 25%, transparent 25%), linear-gradient(225deg, #aaa 25%, transparent 25%), linear-gradient(45deg, #aaa 25%, transparent 25%), linear-gradient(315deg, #aaa 25%, #e5e5f7 25%);
  background-position:  10px 0, 10px 0, 0 0, 0 0;
  background-size: 20px 20px;
  background-repeat: repeat;
}
.media.patterns[data-value="circles"] {
  background-color: #e5e5f7;
  background-image: radial-gradient(circle at center center, #aaa, #e5e5f7), repeating-radial-gradient(circle at center center, #aaa, #aaa, 10px, transparent 20px, transparent 10px);
  background-blend-mode: multiply;
}
.media.patterns[data-value="diagonal-right"] {
  background-color: #e5e5f7;
  background: repeating-linear-gradient( 45deg, #aaa, #aaa 5px, #e5e5f7 5px, #e5e5f7 10px );
}
.media.patterns[data-value="diagonal-left"] {
  background-color: #e5e5f7;
  background: repeating-linear-gradient( -45deg, #aaa, #aaa 5px, #e5e5f7 5px, #e5e5f7 10px );
}
.media.patterns[data-value="paper"] {
  background-color: #e5e5f7;
  background-image:  linear-gradient(#aaa 2px, transparent 2px), linear-gradient(90deg, #aaa 2px, transparent 2px), linear-gradient(#aaa 1px, transparent 1px), linear-gradient(90deg, #aaa 1px, #e5e5f7 1px);
  background-size: 50px 50px, 50px 50px, 10px 10px, 10px 10px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
}
.media.media.patterns[data-value="polka"] {
  background-color: #e5e5f7;
  background-image: radial-gradient(#aaa 2px, #e5e5f7 2px);
  background-size: 10px 10px;
}
.media.media.patterns[data-value="polka-diamon"] {
  background-color: #e5e5f7;
  background-image:  radial-gradient(#aaa 2px, transparent 2px), radial-gradient(#aaa 2px, #e5e5f7 2px);
  background-size: 10px 10px;
  background-position: 0 0, 5px 5px;
}
.media.media.patterns[data-value="lines"] {
  background-color: #e5e5f7;
  background-image: linear-gradient(0deg, #e5e5f7 50%, #aaa 50%);
  background-size: 10px 10px;
}
.media.media.patterns[data-value="vertical-lines"] {
  background-color: #e5e5f7;
  background-image: linear-gradient(to right, #aaa, #aaa 5px, #e5e5f7 5px, #e5e5f7 );
  background-size: 10px 100%;
}
</style>
