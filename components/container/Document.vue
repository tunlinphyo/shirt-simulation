<template>
    <section class="document">
        <slot />
    </section>
</template>

<style scoped>
.document {
    width: 100%;
    max-width: 860px;
    min-height: 300px;
    border: 1px solid #ddd;
    border-radius: 10px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
}
</style>