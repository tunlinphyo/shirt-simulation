<template>
    <LayoutDocument>
        <ContainerDocument>
            <h1>Loading</h1>
            <ContainerArticle>
                <p>Create a loading. $loading() return a callback function that close loading.</p>
                <AppButton @click="sampleLoading()">Show Loaidng</AppButton>
                <ContainerSpacer />
                <ClientOnly>
                    <CodeBlock :code="sampleCode" leng="JavaScript" :highlightjs="true" />
                </ClientOnly>
            </ContainerArticle>
            <ContainerArticle>
                <p>Create a loading with message.</p>
                <AppButton @click="messageLoading()">Show Loaidng</AppButton>
                <ContainerSpacer />
                <ClientOnly>
                    <CodeBlock :code="messsageCode" leng="JavaScript" :highlightjs="true" />
                </ClientOnly>
            </ContainerArticle>
        </ContainerDocument>
        <ContainerFooter :prev="{ url: '/document/prompts', name: 'prompt' }"
            :next="{ url: '/document/toasts', name: 'toast' }" />
    </LayoutDocument>
</template>

<script lang="ts" setup>
import CodeBlock from 'vue3-code-block'

const { $loading } = useNuxtApp()

const sampleCode = `const { $loading } = useNextApp()
const close = $loading()
await wait(2000)
close()
`
const messsageCode = `const { $loading } = useNextApp()
const close = $loading('Loading..')
await wait(2000)
close()
`

async function sampleLoading() {
    const close = $loading()
    await wait(2000)
    close()
}
async function messageLoading() {
    const close = $loading('Loading..')
    await wait(2000)
    close()
}
</script>

<style scoped>
.flex-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    margin: 20px 0;
}

p {
    padding: 0;
    margin: 20px 0;
}
</style>
