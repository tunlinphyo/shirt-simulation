<template>
  <LayoutDocument>
      <ContainerDocument>
          <h1>Confirm</h1>
          <ContainerArticle>
              <p>Create sample confirm. Second parameter is optional.</p>
              <AppButton @click="sampleConfirm()">Sample Confirm</AppButton>
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
              <p>Create confirm with options.</p>
              <AppButton @click="optionConfirm()">Option Confirm</AppButton>
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
          :prev="{ url: '/document/alerts', name: 'alert' }"
          :next="{ url: '/document/prompts', name: 'prompt' }"
      />
  </LayoutDocument>
</template>

<script lang="ts" setup>
import CodeBlock from 'vue3-code-block'

const { $confirm, $toast } = useNuxtApp()

const options = `# Confirm Options
cancelText: optional -> default = 'Cancel'
confirmText: optional -> default = 'Confirm'
`
const sampleCode = `const { $confirm, $toast } = useNextApp()
const result = await $confirm('Are you sure?')
$toast('Result: ' + result)
`
const optionCode = `const { $confirm, $toast } = useNextApp()
const result = await $confirm('Are you sure?', { cancelText: 'no', confirmText: 'yes' })
if (result) {
  $toast('You click YES')
} else {
  $toast('You click NO')
}
`

async function sampleConfirm() {
  const result = await $confirm('Are you sure?')
  $toast('Result: ' + result)
}
async function optionConfirm() {
  const result = await $confirm('Are you sure?', { cancelText: 'no', confirmText: 'yes' })
  if (result) {
    $toast('You click YES')
  } else {
    $toast('You click NO')
  }
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
