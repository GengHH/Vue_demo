const data = require('./mock-data')
//const getImgPanel = require('./mock-img-data')
const LATENCY = 16

export function getAllMessages (cb) {
  setTimeout(() => {
    cb(data)
  }, LATENCY)
}

//mocking message datas
export function createMessage ({ text, thread }, cb) {
  const timestamp = Date.now()
  const id = 'm_' + timestamp
  const message = {
    id,
    text,
    timestamp,
    threadID: thread.id,
    threadName: thread.name,
    authorName: 'Evan'
  }
  setTimeout(function () {
    cb(message)
  }, LATENCY)
}

//mocking image panel datas
// export function getAllImages (cb) {
//   setTimeout(() => {
//     cb(imgData)
//   }, LATENCY)
//   cb(getImgPanel())
// }

// export function createImages ({ text, thread }, cb) {
//   const timestamp = Date.now()
//   const id = 'i_' + timestamp
//   const imageData = {
//     id,
//     title:timestamp + 'img',
//     path:'/api/assets/imagesPanel/'+timestamp+'.jpg'
//   }
//   setTimeout(function () {
//     cb(imageData)
//   }, LATENCY)
// }
