<template>
  <div>
    Wellcome {{ todoList.name }}
  </div>
  <div>
    <p>You have:</p>
    <p>{{ incompleteQty }} items To Do</p>
    <p>{{ todoList.todos.length }} items in total</p>
  </div>
  <li v-for="todo in todoList.todos">
    {{ todo.text }}
  </li>

  <div>
    <input v-model="text" placeholder="Type a new ToDo">
    <button v-if="text?.length" @click="addTodo">Add</button>
  </div>
 
</template>

<script setup>
const todoList = ref()

//const client = generateClient()



// this will occur in the server
const { data } = await useFetch('/api/todo')
console.log('data = ', data.value)
todoList.value = data.value

// NOTE: use $fetch on client side interactions

const text = ref('')

const incompleteQty = computed(() => {
  return todoList.value.todos.filter(item => !item.completed).length
})

async function addTodo() {

  const { body } = await $fetch('api/todo', {
    method: 'post',
    body: {
    id: 3,  // TODO...
    dateCreated: Date.now(),
    dateChanged: null,
    text: text.value,
    completed: 0
  }
  })

  // TODO...call api
  //todoList.value.todos.push()

  text.value = ''
}
</script>