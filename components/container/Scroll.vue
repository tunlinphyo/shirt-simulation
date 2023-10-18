<template>
    <div class="container-scroll">
        <slot />
    </div>
</template>

<style scoped>
.container-scroll {
    width: 100%;
    height: 100%;
    overflow-y: auto;
}
</style>