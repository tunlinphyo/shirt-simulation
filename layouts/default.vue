<template>
    <main>
        <AppHeader />
        <slot />
    </main>
</template>


<script lang="ts" setup>
import { AppHeader, AppFooter } from '#components';
</script>

<style scoped>
main {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: 60px minmax(0, 1fr);
}

@media (min-width: 1200px) {
    main {
        max-width: 1180px;
        max-height: 800px;
        border: 12px solid #666;
        border-radius: 30px;
        overflow: hidden;
    }
}
</style>
