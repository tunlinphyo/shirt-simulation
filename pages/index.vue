<template>
    <LayoutMain>
        <section class="card">
            <h1>Welcome!</h1>
            <NuxtLink to="/simulation/shirt">Start Simulation</NuxtLink>
        </section>
    </LayoutMain>
</template>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 10px;
    gap: 40px;
    border: 1px solid #ddd;
    border-radius: 8px;
    width: 100%;
    max-width: 600px;
    height: 100%;
    max-height: 400px;
    background-color: #fff;
}

h1 {
    margin: 0;
    font-size: 3rem;
    font-weight: 900;
    text-align: center;
}

a {
    text-decoration: none;
    color: #000;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-width: 140px;
    height: 40px;
    background-color: transparent;
    border: 1px solid #999;
    border-radius: 2px;
    padding: 0 30px;
    text-transform: uppercase;
    font-size: .8rem;
    letter-spacing: 2px;
    font-family: Arial;
}

a:active,
a:hover,
a:focus {
    box-shadow: 0 0 0 2px #6c5ce7;
}
</style>