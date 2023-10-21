import { NuxtLink } from '../../.nuxt/components';
<template>
    <header>
        <div class="header-container">
            <h1>
                <NuxtLink to="/">
                    Shirt Simulation
                </NuxtLink>
            </h1>
            <nav>
                
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
    background-color: #ddd;
}
.header-container {
    width: 100%;
    height: 100%;
    /* max-width: var(--max-width); */

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}
h1 {
    font-weight: 700;
    letter-spacing: -6px;
    text-transform: uppercase;
    padding-top: 5px;
}
h1 a {
    text-decoration: none;
    color: #000;
    font-weight: 700;
}
</style>