<template>
  <LayoutDocument>
      <ContainerDocument>
          <h1>Alert</h1>
          <ContainerArticle>
              <p>Create sample alert. Second parameter is optional.</p>
              <AppButton @click="sampleAlert()">Sample Alert</AppButton>
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
              <p>Create alert with options.</p>
              <AppButton @click="optionAlert()">Option Alert</AppButton>
              <ContainerSpacer />
              <ClientOnly>
                  <CodeBlock 
                      :code="optionCode"
                      leng="JavaScript"
                      :highlightjs="true"
                  />
              </ClientOnly>
          </ContainerArticle>
          <ContainerArticle>
              <p>Use await to do something after user click OK.</p>
              <AppButton @click="awaitAlert()">Await Alert</AppButton>
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
              <p>Can create multiple alert.</p>
              <AppButton @click="multipleAlert()">Multiple Alert</AppButton>
              <ContainerSpacer />
              <ClientOnly>
                  <CodeBlock 
                      :code="multipleCode"
                      leng="JavaScript"
                      :highlightjs="true"
                  />
              </ClientOnly>
          </ContainerArticle>
          <ContainerArticle>
              <p>Also can create multiple alert list browser native alert by using await.</p>
              <AppButton @click="defaultAlert()">Native Like Alert</AppButton>
              <ContainerSpacer />
              <ClientOnly>
                  <CodeBlock 
                      :code="defaultCode"
                      leng="JavaScript"
                      :highlightjs="true"
                  />
              </ClientOnly>
          </ContainerArticle>
      </ContainerDocument>
      <ContainerFooter 
          :prev="{ url: '/document/toasts', name: 'toast' }"
          :next="{ url: '/document/confirms', name: 'confirm' }"
      />
  </LayoutDocument>
</template>

<script lang="ts" setup>
import CodeBlock from 'vue3-code-block'

const { $alert, $toast } = useNuxtApp()

const options = `# Confirm Options
buttonText: optional -> default = 'OK'
`
const sampleCode = `const { $alert } = useNextApp()
$alert('This is a sample alert!')
`
const optionCode = `const { $alert } = useNextApp()
$alert('This is a alert with custom button text!', { buttonText: 'confirm' })
`
const awaitCode = `const { $alert, $toast } = useNextApp()
await $alert('Run a toast after OK clicked.')
$toast('You clicked OK.')
`
const multipleCode = `const { $alert } = useNextApp()
$alert('This is a first alert!')
await wait(1000)
$alert('This is a second alert!')
`
const defaultCode = `const { $alert } = useNextApp()
await $alert('This is a first alert!')
$alert('This is a second alert!')  
`

function sampleAlert() {
  $alert('This is a sample alert!')
}
function optionAlert() {
  $alert('This is a alert with custom button text!', { buttonText: 'confirm' })
}
async function awaitAlert() {
  await $alert('Run a toast after OK clicked.')
  $toast('You clicked OK.')
}
async function multipleAlert() {
  $alert('This is a first alert!')
  await wait(1000)
  $alert('This is a second alert!')
}
async function defaultAlert() {
  await $alert('This is a first alert!')
  $alert('This is a second alert!')  
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
