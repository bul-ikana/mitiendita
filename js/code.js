const products = [
  {
    cost: "123",
    name: "test 1",
    image1: 'product1.jpg',
    image2: 'product2.jpg',
    image3: 'product3.jpg',
    image4: 'product4.jpg',
  },
  {
    cost: "12345",
    name: "test 2",
    image1: 'product2.jpg',
    image2: 'product3.jpg',
    image3: 'product4.jpg',
    image4: 'product5.jpg',
  },
  {
    cost: "123",
    name: "test 1",
    image1: 'product1.jpg',
    image2: 'product2.jpg',
    image3: 'product3.jpg',
    image4: 'product4.jpg',
  },
  {
    cost: "12345",
    name: "test 2",
    image1: 'product2.jpg',
    image2: 'product3.jpg',
    image3: 'product4.jpg',
    image4: 'product5.jpg',
  },
  {
    cost: "123",
    name: "test 1",
    image1: 'product1.jpg',
    image2: 'product2.jpg',
    image3: 'product3.jpg',
    image4: 'product4.jpg',
  },
  {
    cost: "12345",
    name: "test 2",
    image1: 'product2.jpg',
    image2: 'product3.jpg',
    image3: 'product4.jpg',
    image4: 'product5.jpg',
  },
  {
    cost: "123",
    name: "test 1",
    image1: 'product1.jpg',
    image2: 'product2.jpg',
    image3: 'product3.jpg',
    image4: 'product4.jpg',
  },
  {
    cost: "12345",
    name: "test 2",
    image1: 'product2.jpg',
    image2: 'product3.jpg',
    image3: 'product4.jpg',
    image4: 'product5.jpg',
  },
]




//       //
// Pages //
//       //
const storepage = Vue.component('storepage', {
  template: '#storepage',
})

const productpage = Vue.component('productpage', {
  template: '#productpage'
})

//            //
// components //
//            //

const productcard = Vue.component('productcard', {
  template: '#productcard',

  props: [
    'cost',
    'name',
    'image',
    'index',
  ]
})

//                   //
// Router definition //
//                   //

const router = new VueRouter ({
  routes: [
    {
      path: '/',
      name: 'Store',
      component: storepage,
    },
    {
      path: '/products/:id',
      name: 'Product',
      component: productpage
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

//                //
// Vue definition //
//                //

var vm = new Vue({
  el: '#app',
  router: router,
})