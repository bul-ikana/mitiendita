const products = [
  {
    cost: "150",
    name: "Pit - juego de mesa",
    image1: 'pit1.jpg',
    image2: 'pit2.jpg',
    image3: 'pit3.jpg',
    image4: 'pit4.jpg',
    description: "Juego de mesa marca Hasbro. Excelentes condiciones. Incluye estuche con campana, 74 cartas e instructivo."
  },
  {
    cost: "900",
    name: "Super Mario Odyssey",
    image1: 'mo1.jpg',
    image2: 'mo2.jpg',
    image3: 'mo3.jpg',
    image4: 'mo4.jpg',
    description: "Super Mario Odyssey para Nintendo Switch. Nuevo y sellado."
  },
  {
    cost: "300",
    name: "Bocina bluetooth a prueba de agua",
    image1: 'bocina1.jpg',
    image2: 'bocina2.jpg',
    image3: 'bocina3.jpg',
    image4: 'bocina4.jpg',
    description: "Bocina Verbatim a prueba de agua. Muy poco uso. Micrófono incorporado para contestar llamadas. Incluye cable, mosquetón, ventosa e instructivo. "
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
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
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