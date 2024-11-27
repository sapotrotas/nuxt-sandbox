import { ref, toValue } from 'vue'

export function useFetch(url) {
  const data = ref(null)
  const error = ref(null)

  const fetchData = () => {
    data.value = null
    data.error = null

    fetch(toValue(url))
      .then(res => res.json())
      .then(json => data.value = json)
      .catch(err => error.value = err)
  }

//  watchEffect(() => {
    fetchData()
//  })


  console.log('using fetch ')

  return {
    data,
    error
  }
}



// artificial delay
/*
//await timeout()

function timeout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        resolve()
      } else {
        reject(new Error('Random Error'))
      }
    }, 300)
  })
}
*/