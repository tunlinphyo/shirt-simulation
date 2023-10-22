<template>
    <LayoutDocument>
        <ContainerDocument>
            <h1>Toast</h1>
            <ContainerArticle>
                <p>Create sample Toast.</p>
                <AppButton @click="sampleToast()">Sample Toast</AppButton>
                <ContainerSpacer />
                <ClientOnly>
                    <CodeBlock 
                        :code="sampleCode"
                        leng="JavaScript"
                        :highlightjs="true"
                    />
                </ClientOnly>
            </ContainerArticle>
            <ContainerArticle>
                <p>Use await to do something after Toast finished.</p>
                <AppButton @click="awaitToast()">Await Toast</AppButton>
                <ContainerSpacer />
                <ClientOnly>
                    <CodeBlock 
                        :code="awaitCode"
                        leng="JavaScript"
                        :highlightjs="true"
                    />
                </ClientOnly>
            </ContainerArticle>
            <ContainerArticle>
                <p>Create multiple toasts from array of message. Can add some delay between toasts. Second parmeter is optional, default value is 300 miliseconds.</p>
                <div class="flex-container">
                    <input type="range" id="range" name="range" v-model="toastDelay" step="50" min="0" max="600" />
                    : <label for="range">{{ toastDelay }}</label>
                </div>
                <AppButton @click="multipleToast()">Multiple Toasts</AppButton>
                <ContainerSpacer />
                <ClientOnly>
                    <CodeBlock 
                        :code="multipleCode"
                        leng="JavaScript"
                        :highlightjs="true"
                    />
                </ClientOnly>
            </ContainerArticle>
        </ContainerDocument>
        <ContainerFooter 
            :next="{ url: '/document/alerts', name: 'alert' }"
        />
    </LayoutDocument>
</template>

<script lang="ts" setup>
import CodeBlock from 'vue3-code-block'

const { $toast, $toasts } = useNuxtApp()
const toastDelay = ref(300)

const sampleCode = `const { $toast } = useNextApp()
$toast('Hello World')
`
const awaitCode = `const { $toast } = useNextApp()
await $toast('Hello World')
$toast('Toast after first finish')
`
const multipleCode = `const { $toasts } = useNextApp()
const messages = [ 'Hello world!', 'How are you?', 'What the weather like today?', 'Hoorra...' ]
$toasts(messages, 300)
`


function sampleToast() {
    $toast('Hello World')
}
async function awaitToast() {
    await $toast('Hello World')
    $toast('Toast after first finish')
}
function multipleToast() {
    const messages = [ 'Hello world!', 'How are you?', 'What the weather like today?', 'Hoorra...' ]
    $toasts(messages, toastDelay.value)
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
