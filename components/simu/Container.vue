<template>
    <section :inert="isOpen">
        <ContainerScroll>
            <slot />
        </ContainerScroll>
        <footer>
            <AppButton @click="onBack">Back</AppButton>
            <AppButton theme="primary" @click="onSave">Save</AppButton>
        </footer>
    </section>
</template>

<script lang="ts" setup>

export interface Props {
  isOpen: boolean;
}

const props = defineProps<Props>()
const emit = defineEmits()

function onBack() {
  emit('back')
}
function onSave() {
  emit('save')
}
</script>

<style scoped>
section {
    flex: 1;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr) 60px;
}
footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
    padding: 0 20px;
    border-top: 1px solid #ddd;
}
</style>