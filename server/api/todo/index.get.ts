export default defineEventHandler(event => {
  // handle GET requests for the `api/todo` endpoint

  return {
    name: 'bruno',
    todos: [{
        id: 1,
        dateCreated: 1536879600000,
        dateChanged: null,
        text: 'some first dummy note x',
        completed: false
      },
      {
        id: 2,
        dateCreated: 1584748800000,
        dateChanged: 1585008000000,
        text: 'note 2',
        completed: true
      }
    ]
  }
})