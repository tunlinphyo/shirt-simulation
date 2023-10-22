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
    animation: Rotate .8s linear infinite;
    border-radius: 100%;
    position: relative;
}

.loading::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 4px solid #6c5ce7;
    animation: PrixClipFix 1.6s linear infinite;
}

@keyframes Rotate {
    100% {
        transform: rotate(360deg)
    }
}

@keyframes PrixClipFix {
    0% {
        clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)
    }
    25% {
        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)
    }
    50% {
        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)
    }
    75% {
        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%)
    }
    100% {
        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0)
    }
}

</style>