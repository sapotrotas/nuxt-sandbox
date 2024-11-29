<template>
  <!--<button @click="count++">Count is: {{ count }}</button>-->
  
  <div>
    <NuxtLink to="/todo">Todo List</NuxtLink>
  </div>
<!--
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
   -->
</template>

<script setup>

/*
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs)
const currentConfig = Amplify.getConfig() 
console.log('Amplify current config = ', Amplify)
*/



const runtimeConfig = useRuntimeConfig()
console.log('runtimeConfig = ', runtimeConfig)

const appConfig = useAppConfig()
console.log('appConfig = ', appConfig)



//const baseUrl = 'https://jsonplaceholder.typicode.com/todos/'
//const { data, error } = useFetch(baseUrl)
//console.log('data = ', data.value)




/*
// reactive
const count = ref(0)

function increment() {
  count.value++
}
*/


</script>