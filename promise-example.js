var counter = 0;

function updateCounter(newCount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof(newCount) == 'number') {
        counter = newCount
        resolve('successfully update counter!')
      } else {
        reject('please provide a number!')
      }
      
    }, 500)
  })
}

updateCounter(null)
.then(() => console.log(counter))
.catch(err => console.log(err))
