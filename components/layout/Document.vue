<template>
    <ContainerScroll>
        <div class="main">
            <slot />
        </div>
    </ContainerScroll>
</template>

<style scoped>
.main {
    background-color: #eee;
    padding: 20px;
}
</style>