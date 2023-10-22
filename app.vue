<template>
    <Body>
        <NuxtLayout>
            <NuxtLoadingIndicator />
            <NuxtPage />
        </NuxtLayout>
    </Body>
</template>

<style>
:root {
    --max-width: 1200px;
    --custom-ease: cubic-bezier(.2, 1, .2, 1);
    --font: 'Montserrat', sans-serif;;
}

html,
body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-size: 16px;
    font-family: var(--font);
}

#__nuxt {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

.slide-enter-active,
.slide-leave-active {
    transition: transform .5s var(--custom-ease);
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(100%);
    transition: transform .3s ease;
}
</style>
