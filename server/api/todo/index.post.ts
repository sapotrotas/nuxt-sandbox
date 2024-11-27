export default defineEventHandler(async event => {
  // handle POST requests for the `api/todo` endpoint

  const body = await readBody(event)
  console.log('body= ', body)
  return { body }
})