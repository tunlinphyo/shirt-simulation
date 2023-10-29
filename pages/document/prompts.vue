<template>
  <LayoutDocument>
      <ContainerDocument>
          <h1>Prompts</h1>
          <ContainerArticle>
              <p>Create sample prompt. Second parameter is optional.</p>
              <AppButton @click="samplePrompt()">Sample Prompt</AppButton>
              <ContainerSpacer />
              <ClientOnly>
                  <CodeBlock 
                      :code="options"
                      leng="JavaScript"
                      :highlightjs="true"
                  />
              </ClientOnly>
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
              <p>Create prompt with options.</p>
              <AppButton @click="optionPrompt()">Option Prompt</AppButton>
              <ContainerSpacer />
              <ClientOnly>
                  <CodeBlock 
                      :code="optionCode"
                      leng="JavaScript"
                      :highlightjs="true"
                  />
              </ClientOnly>
          </ContainerArticle>
      </ContainerDocument>
      <ContainerFooter 
          :prev="{ url: '/document/confirms', name: 'confirm' }"
          :next="{ url: '/document/loading', name: 'loading' }"
      />
  </LayoutDocument>
</template>

<script lang="ts" setup>
import CodeBlock from 'vue3-code-block'

const { $prompt, $toast } = useNuxtApp()

const options = `# Confirm Options
name: optional -> default = Date.now() // name for input
placeholder: optional -> default = '' // placehloder for input
regx: optional -> default = null // Regular Expression for input validation
error: optional -> default = 'Invalid input!' // Error message for validation
required: optional -> default = false
cancelText: optional -> default = 'Cancel'
confirmText: optional -> default = 'Confirm'
waitAnimation: optional -> defualt = true
`
const sampleCode = `const { $prompt, $toast } = useNextApp()
const result = await $prompt('Enter something')
$toast('Result: ' + result)
`
const optionCode = `const { $prompt, $toast } = useNextApp()
const result = await $prompt('Enter number', {
  name: 'number',
  placeholder: 'Number',
  required: true,
  regx: /^[0-9]+$/,
  error: 'Enter number only.',
  waitAnimation: false
})
$toast(\`Result: \${result}\`)
`

async function samplePrompt() {
  const result = await $prompt('Enter something')
  $toast('Result: ' + result)
}
async function optionPrompt() {
  const result = await $prompt('Enter number', {
    name: 'number',
    placeholder: 'Number',
    required: true,
    regx: /^[0-9]+$/,
    error: 'Enter number only.',
    waitAnimation: false
  })
  $toast(`Result: ${result}`)
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
