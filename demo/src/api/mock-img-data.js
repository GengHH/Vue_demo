const _images = [
    {
      id: 'i1',
      title: '1img',
      path: require("../assets/imagesPanel/1.jpg"),
    },
    {
      id: 'i2',
      title: '2img',
      path: require("../assets/imagesPanel/2.jpg"),
    },
    {
      id: 'i3',
      title: '3img',
      path: require("../assets/imagesPanel/3.jpg"),
    },
    {
      id: 'i4',
      title: '4img',
      path: require("../assets/imagesPanel/4.jpg"),
    },
    {
      id: 'i5',
      title: '5img',
      path: require("../assets/imagesPanel/5.jpg"),
    },
    {
      id: 'i6',
      title: '6img',
      path: require("../assets/imagesPanel/6.jpg"),
    },
    {
      id: 'i7',
      title: '7img',
      path: require("../assets/imagesPanel/7.jpg"),
    },
    {
      id: 'i8',
      title: '8img',
      path: require("../assets/imagesPanel/8.jpg"),
    },
    {
      id: 'i9',
      title: '9img',
      path: require("../assets/imagesPanel/9.jpg"),
    },
    {
      id: 'i1',
      title: '1img',
      path: require("../assets/imagesPanel/1.jpg"),
    },
    {
      id: 'i2',
      title: '2img',
      path: require("../assets/imagesPanel/2.jpg"),
    },
    {
      id: 'i3',
      title: '3img',
      path: require("../assets/imagesPanel/3.jpg"),
    },
    {
      id: 'i4',
      title: '4img',
      path: require("../assets/imagesPanel/4.jpg"),
    },
    {
      id: 'i5',
      title: '5img',
      path: require("../assets/imagesPanel/5.jpg"),
    },
    {
      id: 'i6',
      title: '6img',
      path: require("../assets/imagesPanel/6.jpg"),
    },
    {
      id: 'i7',
      title: '7img',
      path: require("../assets/imagesPanel/7.jpg"),
    },
    {
      id: 'i8',
      title: '8img',
      path: require("../assets/imagesPanel/8.jpg"),
    },
    {
      id: 'i9',
      title: '9img',
      path: require("../assets/imagesPanel/9.jpg"),
    }
]

export default {
  getAllImages (cb) {
    setTimeout(() => cb(_images), 100)
  }
}