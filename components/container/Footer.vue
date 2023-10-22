<template>
    <footer class="document">
        <div class="prev">
            <NuxtLink :to="prev.url" v-if="prev">
                {{ prev.name }}
            </NuxtLink>
        </div>
        <div class="next">
            <NuxtLink :to="next.url" v-if="next">
                {{ next.name }}
            </NuxtLink>
        </div>
    </footer>
</template>

<script lang="ts" setup>
export interface Props {
  prev?: { url:string, name:string };
  next?: { url:string, name:string };
}

const props = defineProps<Props>()
</script>

<style scoped>
.document {
    width: 100%;
    max-width: 860px;
    border: 1px solid #ddd;
    border-radius: 10px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    /* position: sticky;
  z-index: 5;
  bottom: 10px; */
}
.prev a,
.next a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    color: #6c5ce7;
    text-decoration: none;
    text-transform: uppercase;
}
.next a {
    justify-content: flex-end;
    text-decoration: none;
}
.prev a::before {
    content: '';
    display: block;
    width: 0; 
    height: 0; 
    border-top: .5em solid transparent;
    border-bottom: .5em solid transparent; 
    
    border-right: .6em solid #6c5ce7; 
}
.next a::after {
    content: '';
    display: block;
    width: 0; 
    height: 0; 
    border-top: .5em solid transparent;
    border-bottom: .5em solid transparent;
    
    border-left: .6em solid #6c5ce7;
}
</style>