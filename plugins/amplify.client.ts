import { Amplify } from "aws-amplify"
import { defineNuxtPlugin } from "#app"
import outputs from "../amplify_outputs.json"

//Amplify.configure(outputs)

export default defineNuxtPlugin((NuxtApp) => {

  return {
    provide: {
      amplifyConfigs: Amplify.configure(outputs)
    }
  }
})