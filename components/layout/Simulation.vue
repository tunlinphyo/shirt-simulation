
<template>
    <section class="simulation">
        <div class="media" :class="{'show': toggle}">
            <header class="simu-header"></header>
            <slot name="media" />
        </div>
        <div class="body">
            <header class="simu-header">
                <button class="menu" @click="toggleMenu"></button>
            </header>
            <slot name="body" />
        </div>
    </section>
</template>

<script lang="ts" setup>
const { toggle, toggleMenu } = useSimuMenu()
</script>

<style scoped>
.simulation {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr);

    position: relative;
}
.media {
    background-color: #eee;
}
.body {
    position: relative;
}
.simu-header {
    padding: 0 18px;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.menu,
.close {
    width: 34px;
    height: 34px;
    border-radius: 100%;
    background-color: #aaa;
    border: none;
}
.menu {
    position: relative;
    z-index: 5;
}
.menu {
    background-image: url(/shirt.png);
    background-size: 60%;
    background-position: center;
    background-repeat: no-repeat;
}
@media (max-width: 991.9px) {
    .media {
        position: absolute;
        z-index: 2;

        top: 0; bottom: 0;
        left: 0; right: 0;
        transform: translateX(-102%);
        transition: transform 0.8s var(--custom-ease);
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

        display: grid;
        grid-template-columns: minmax(0, 1fr);
        grid-template-rows: 50px minmax(0, 1fr);
    }
    .media.show {
        transform: translateX(0%);
    }
    .body {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        grid-template-rows: 50px minmax(0, 1fr);
    }
}
@media (min-width: 992px) {
    .simulation {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(600px, 1fr);
        grid-template-rows: minmax(0, 1fr);
    }
    .simu-header {
        display: none;
    }
    .body {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        grid-template-rows: minmax(0, 1fr);
    }
}
</style>