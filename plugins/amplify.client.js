import { Amplify } from "aws-amplify"
import { defineNuxtPlugin } from "#app"
import outputs from "../amplify_outputs.json"

export default defineNuxtPlugin((NuxtApp) => {

  Amplify.configure(outputs)
})