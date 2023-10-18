<template>
    <div class="loading-container">
        <div class="loading" />
    </div>
</template>

<style scoped>
.loading-container {
    width: 100%;
    min-height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.loading {
    width: 40px;
    height: 40px;
    border: 4px solid #aaa;
    border-left-color: transparent;
    animation: Loading .5s ease infinite;
    border-radius: 100%;
}
@keyframes Loading {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
</style>