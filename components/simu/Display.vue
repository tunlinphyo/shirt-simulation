<template>
    <div class="simu-display">
        <div class="shirt_container">
            <div class="pattern_overlay" :class="getClass(simulation)" :style="getStyles(simulation)" />
            <img :src="simulation.design" alt="shirt">
        </div>
    </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { SimuData } from '~/interfaces/simulation'
import { useSimulationStore } from '~/stores/simulation'

const simulationStore = useSimulationStore()
const { simulation } = storeToRefs(simulationStore)

function getStyles(simu: SimuData) {
    return `
        --color: ${simu.color};
        --color-2: ${simu.patternColor};
        --size: ${simu.patternSize}px;
        --spacing: ${simu.patternSpacing}px;
        -webkit-mask-image: url(${simu.design});
        mask-image: url(${simu.design});
    `
}
function getClass(simu: SimuData) {
    return `${simu.pattern}`
}
</script>

<style scoped>
.simu-display {
    width: 100%;
    height: 100%;

    display: grid;
    place-items: center;
    padding: 20px;
}

.shirt_container {
    max-width: 50vh;
    position: relative;
    display: grid;
    place-items: center;
    width: 100%;
}

img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    mix-blend-mode: multiply;
}

.pattern_overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    -webkit-mask-image: url(/shirts/1.png);
    mask-image: url(/shirts/1.png);
    -webkit-mask-size: contain;
    mask-size: contain;

    --color-2: #fff;
    --size: 10px;

    background-color: var(--color);
}

.rhombus {
    background-color: var(--color-2);
    background-image: linear-gradient(135deg, var(--color) 25%, transparent 25%), linear-gradient(225deg, var(--color) 25%, transparent 25%), linear-gradient(45deg, var(--color) 25%, transparent 25%), linear-gradient(315deg, var(--color) 25%, var(--color-2) 25%);
    background-position: var(--size) 0, var(--size) 0, 0 0, 0 0;
    background-size: var(--size) var(--size);
    background-repeat: repeat;
}

.zig-zag {
    background-color: var(--color-2);
    background-image: linear-gradient(135deg, var(--color) 25%, transparent 25%), linear-gradient(225deg, var(--color) 25%, transparent 25%), linear-gradient(45deg, var(--color) 25%, transparent 25%), linear-gradient(315deg, var(--color) 25%, var(--color-2) 25%);
    background-position: calc(var(--size) / 2) 0, calc(var(--size) / 2) 0, 0 0, 0 0;
    background-size: var(--size) var(--size);
    background-repeat: repeat;
}

.circles {
    background-color: var(--color-2);
    background-image: radial-gradient(circle at center center, var(--color), var(--color-2)), repeating-radial-gradient(circle at center center, var(--color), var(--color), 10px, transparent 20px, transparent 10px);
    background-blend-mode: multiply;
    background-color: var(--color-2);
}

.diagonal-right {
    background-color: var(--color-2);
    background: repeating-linear-gradient(45deg, var(--color), var(--color) var(--size), var(--color-2) var(--size), var(--color-2) calc(var(--size) + var(--spacing)));
}

.diagonal-left {
    background-color: var(--color-2);
    background: repeating-linear-gradient(-45deg, var(--color), var(--color) var(--size), var(--color-2) var(--size), var(--color-2) calc(var(--size) + var(--spacing)));
}

.polka {
    background-color: var(--color-2);
    background-image: radial-gradient(var(--color) calc(var(--size) / 2), var(--color-2) calc(var(--size) / 2));
    background-size: calc(var(--size) + var(--spacing)) calc(var(--size) + var(--spacing));
}

.polka-diamon {
    background-color: var(--color-2);
    background-image: radial-gradient(var(--color) calc(var(--size) / 5), transparent calc(var(--size) / 5)), radial-gradient(var(--color) calc(var(--size) / 5), var(--color-2) calc(var(--size) / 5));
    background-size: var(--size) var(--size);
    background-position: 0 0, calc(var(--size) / 2) calc(var(--size) / 2);
}

.lines {
    background-color: var(--color-2);
    background-image: linear-gradient(0deg, var(--color-2) var(--size), var(--color) var(--size));
    background-size: calc(var(--size) + var(--spacing)) calc(var(--size) + var(--spacing));
}

.vertical-lines {
    background-color: var(--color-2);
    background-image: linear-gradient(to right, var(--color), var(--color) var(--size), var(--color-2) var(--size), var(--color-2));
    background-size: calc(var(--size) + var(--spacing)) 100%;
}

@media (min-width: 768px) {
    .simu-display {
        padding: 40px;
    }
}
</style>