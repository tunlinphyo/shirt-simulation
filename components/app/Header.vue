import { NuxtLink } from '../../.nuxt/components';
<template>
    <header>
        <div class="header-container">
            <h1>Shirt Simulation</h1>
            <nav>
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/about">About</NuxtLink>
            </nav>
        </div>
    </header>
</template>

<style scoped>
header {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.header-container {
    width: 100%;
    height: 100%;
    background-color: #ddd;
    max-width: var(--max-width);

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}
nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
}
@media (max-width: 767.9px) {
    nav {
        display: none;
    }
}
</style>