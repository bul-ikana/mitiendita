const products = [
  {
    cost: "1200",
    name: "Bolsa Michael Kors",
    image1: 'mk1.jpeg',
    image2: 'mk2.jpeg',
    image3: 'mk3.jpeg',
    image4: 'mk4.jpeg',
    description: "Azul",
    estado: "Poco uso",
    entrega: "Inmediata",
    ml: ""
  },
  // {
  //   cost: "400",
  //   name: "Perchero",
  //   image1: 'per1.jpeg',
  //   image2: 'per2.jpeg',
  //   image3: 'per3.jpeg',
  //   image4: 'per4.jpeg',
  //   description: "Perchero de metal con base de marmol.",
  //   estado: "Usada",
  //   entrega: "Inmediata"
  //   ml: ""
  // },
  {
    cost: "200",
    name: "Zapatera",
    image1: 'zap1.jpeg',
    image2: 'zap2.jpeg',
    image3: 'zap3.jpeg',
    image4: 'zap4.jpeg',
    description: "Zapatera de tamaño ajustable.",
    estado: "Usada",
    entrega: "Inmediata",
    ml: ""
  },
  // {
  //   cost: "300",
  //   name: "Raspberry Pi Zero",
  //   image1: 'pi1.jpeg',
  //   image2: 'pi2.jpeg',
  //   image3: 'pi3.jpeg',
  //   image4: 'pi4.jpeg',
  //   description: "Raspberry Pi Zero V1.3. USB / Mini HDMI. No incluye accesorios. Se entrega en bolsa anti estática.",
  //   estado: "Nueva",
  //   entrega: "Inmediata",
  //   ml: ""
  // },
  // {
  //   cost: "150",
  //   name: "Pit - juego de mesa",
  //   image1: 'pit1.jpg',
  //   image2: 'pit2.jpg',
  //   image3: 'pit3.jpg',
  //   image4: 'pit4.jpg',
  //   description: "Juego de mesa marca Hasbro. Excelentes condiciones. Incluye estuche con campana, 74 cartas e instructivo.",
  //   estado: "Nuevo sin empaque.",
  //   entrega: "inmediata",
  //   ml: "https://articulo.mercadolibre.com.mx/MLM-960802691-juego-de-mesa-pit-_JM"
  // },
  // {
  //   cost: "3800",
  //   name: "Scooter eléctrico",
  //   image1: 'scooter1.jpeg',
  //   image2: 'scooter2.jpeg',
  //   image3: 'scooter3.jpeg',
  //   image4: 'scooter4.jpeg',
  //   description: 'Scooter electrico plegable para adulto. 3 velocidades. Luz led frontal. Cuenta con freno trasero y freno manual. 23 kms de autonomía. Incluye cargador.',
  //   estado: "Poco uso.",
  //   entrega: "Inmediata",
  //   ml: ""
  // },
  {
    cost: "1200",
    name: "Scanner portatil IRIScan",
    image1: 'scanner1.jpg',
    image2: 'scanner2.jpg',
    image3: 'scanner3.jpg',
    image4: 'scanner4.jpg',
    description: "Scanner portatil IRIScan Book 3. Incluye accesorios.",
    estado: "Usado en su empaque.",
    entrega: "Inmediata",
    ml: ""
  },
  // {
  //   cost: "300",
  //   name: "Bocina bluetooth a prueba de agua",
  //   image1: 'bocina1.jpg',
  //   image2: 'bocina2.jpg',
  //   image3: 'bocina3.jpg',
  //   image4: 'bocina4.jpg',
  //   description: "Bocina Verbatim a prueba de agua. Excelente para uso en la playa, alberca o en la regadera. Micrófono incorporado para contestar llamadas. Incluye cable, mosquetón, ventosa e instructivo. ",
  //   estado: "Nueva en su empaque.",
  //   entrega: "Inmediata",
  //   ml: "https://articulo.mercadolibre.com.mx/MLM-960810092-bocina-bluetooth-a-prueba-de-agua-_JM"
  // },
  {
    cost: "60",
    name: "Garrafón epura 20l",
    image1: 'garrafon1.jpg',
    image2: 'garrafon2.jpg',
    image3: 'garrafon3.jpg',
    image4: 'garrafon4.jpg',
    description: "Garrafón epura 20 litros. Imagenes de referencia, se entregará el último que nos deje el camión antes de la venta.",
    estado: "Usado. El camión repartidor lo recibe sin problemas.",
    entrega: "Inmediata",
    ml: ""
  },
  {
    cost: "100",
    name: "Plancha Continental",
    image1: 'plancha1.jpg',
    image2: 'plancha2.jpg',
    image3: 'plancha3.jpg',
    image4: 'plancha4.jpg',
    description: "Plancha Continental.",
    estado: "Se uso tres veces a lo mucho.",
    entrega: "Inmediata",
    ml: ""
  },
  {
    cost: "650",
    name: "Plancha Oster",
    image1: 'oster1.jpg',
    image2: 'oster2.jpg',
    image3: 'oster3.jpg',
    image4: 'oster4.jpg',
    description: "Plancha Oster, incluye accesorios.",
    estado: "Nueva en su empaque",
    entrega: "Inmediata",
    ml: ""
  },
  // {
  //   cost: "250",
  //   name: "Cobertor Concord",
  //   image1: 'cobertor1.jpg',
  //   image2: 'cobertor2.jpg',
  //   image3: 'cobertor3.jpg',
  //   image4: 'cobertor4.jpg',
  //   description: "Cobertor ultrasuave concord con diseño de flores.",
  //   estado: "Usado, se entrega recien salido de tintoreria",
  //   entrega: "Inmediata",
  //   ml: ""
  // },
  // {
  //   cost: "200 c/u",
  //   name: "Focos Smart RGB",
  //   image1: 'focos1.jpg',
  //   image2: 'focos2.jpg',
  //   image3: 'focos3.jpg',
  //   image4: 'focos4.jpg',
  //   description: "Tres disponibles. Se controlan a través de su propia aplicación, no requieren hub. Compatible con google, alexa y siri.",
  //   estado: "Muy poco uso.",
  //   entrega: "Inmediata",
  //   ml: ""
  // },
  {
    cost: "900",
    name: "Super Mario Odyssey",
    image1: 'mo1.jpg',
    image2: 'mo2.jpg',
    image3: 'mo3.jpg',
    image4: 'mo4.jpg',
    description: "Super Mario Odyssey para Nintendo Switch.",
    estado: "Nuevo y sellado.",
    entrega: "Inmediata",
    ml: ""
  },
  {
    cost: "600",
    name: "Paper Mario: The Origami King",
    image1: 'pm1.jpg',
    image2: 'pm2.jpg',
    image3: 'pm3.jpg',
    image4: 'pm4.jpg',
    description: "Paper Mario: The Origami King para Nintendo Switch.",
    estado: "Nuevo y sellado.",
    entrega: "Inmediata",
    ml: ""
  },
  {
    cost: "750",
    name: "New Super Mario Bros. U Deluxe",
    image1: 'smb1.jpg',
    image2: 'smb2.jpg',
    image3: 'smb3.jpg',
    image4: 'smb4.jpg',
    description: "New Super Mario Bros. U Deluxe para Nintendo Switch.",
    estado: "Nuevo y sellado.",
    entrega: "Inmediata",
    ml: ""
  },
  {
    cost: "350",
    name: "The Legend Of Zelda: Triforce Heroes",
    image1: 'zelda1.jpg',
    image2: 'zelda2.jpg',
    image3: 'zelda3.jpg',
    image4: 'zelda4.jpg',
    description: "The Legend Of Zelda: Triforce Heroes para Nintendo 3DS.",
    estado: "Usado.",
    entrega: "Inmediata",
    ml: ""
  },
  {
    cost: "200",
    name: "Scribblenauts Unmasked",
    image1: 'su1.jpg',
    image2: 'su2.jpg',
    image3: 'su3.jpg',
    image4: 'su4.jpg',
    description: "Scribblenauts Unmasked para Nintendo 3DS",
    estado: "Muy poco uso.",
    entrega: "Inmediata",
    ml: ""
  },
  {
    cost: "100",
    name: "AAA Lucha Libre Héroes del Ring",
    image1: 'aaa1.jpeg',
    image2: 'aaa2.jpeg',
    image3: 'aaa3.jpeg',
    image4: 'aaa4.jpeg',
    description: "AAA Lucha Libre Héroes del Ring para Playstation 3.",
    estado: "Nuevo y sellado.",
    entrega: "Inmediata",
    ml: ""
  },
  {
    cost: "1000",
    name: "Canon PowerShot",
    image1: 'canon1.jpeg',
    image2: 'canon2.jpeg',
    image3: 'canon3.jpeg',
    image4: 'canon4.jpeg',
    description: "Cámara Canon PowerShotSD 780 IS, 12.1 megapixeles. Incluye accesorios.",
    estado: "Usada.",
    entrega: "Inmediata",
    ml: ""
  },
  // {
  //   cost: "80",
  //   name: "Powerbank",
  //   image1: 'pb1.jpeg',
  //   image2: 'pb2.jpeg',
  //   image3: 'pb3.jpeg',
  //   image4: 'pb4.jpeg',
  //   description: "Powerbank Pineng 10,000 mAh. Inlcuye linterna. Carcaza maltratada, el display no funciona y solo un puerto carga.",
  //   estado: "Bien madreado pero funciona.",
  //   entrega: "Inmediata",
  //   ml: ""
  // },
  {
    cost: "100",
    name: "Pistola Nerf con dardos",
    image1: 'nerf1.jpeg',
    image2: 'nerf2.jpeg',
    image3: 'nerf3.jpeg',
    image4: 'nerf4.jpeg',
    description: "Nerf Nanofire verde, incluye paquete de 30 dardos.",
    estado: "Muy poco uso",
    entrega: "Inmediata",
    ml: ""
  },
  {
    cost: "200",
    name: "Memoria RAM",
    image1: 'ram1.jpeg',
    image2: 'ram2.jpeg',
    description: "Ram marca Samsung para laptop. 1GB PC3-10600 DDR3-1333MHz non-ECC Unbuffered CL9 204-Pin",
    estado: "Usada",
    entrega: "Inmediata",
    ml: ""
  },
  {
    cost: "100",
    name: "Calculadora cientifica",
    image1: 'calc1.jpeg',
    image2: 'calc2.jpeg',
    image3: 'calc3.jpeg',
    description: "Calculadora científica Olivetti. Incluye modo decimal, hexadecimal, binario y octal.",
    estado: "Usada",
    entrega: "Inmediata",
    ml: ""
  },
  {
    cost: "100",
    name: "Funda Kindle Keyboard",
    image1: 'funda1.jpeg',
    image2: 'funda2.jpeg',
    image3: 'funda3.jpeg',
    image4: 'funda4.jpeg',
    description: "Funda para Kindle modelo Keyboard. Luz integrada.",
    estado: "Usada",
    entrega: "Inmediata",
    ml: ""
  },
  {
    cost: "200",
    name: "Casa Negra",
    image1: 'cn1.jpeg',
    image2: 'cn2.jpeg',
    image3: 'cn3.jpeg',
    image4: 'cn4.jpeg',
    description: "Casa Negra de Stephen King y Peter Straut.",
    estado: "Nuevo y sellado",
    entrega: "Inmediata",
    ml: ""
  },
  // {
  //   cost: "100",
  //   name: "Botella de agua ",
  //   image1: 'b1.jpeg',
  //   image2: 'b2.jpeg',
  //   image3: 'b3.jpeg',
  //   image4: 'b4.jpeg',
  //   description: "Botella de agua de alumino",
  //   estado: "Poco uso",
  //   entrega: "Inmediata",
  //   ml: ""
  // },
  // {
  //   cost: "100",
  //   name: "Botella de agua Latchel",
  //   image1: 'bl1.jpeg',
  //   image2: 'bl2.jpeg',
  //   image3: 'bl3.jpeg',
  //   image4: 'bl4.jpeg',
  //   description: "Botella de agua de aluminio. ",
  //   estado: "Nueva",
  //   entrega: "Inmediata",
  //   ml: ""
  // },
  {
    cost: "250",
    name: "Base para laptop",
    image1: 'base1.jpeg',
    image2: 'base2.jpeg',
    image3: 'base3.jpeg',
    image4: 'base4.jpeg',
    description: 'Base para laptop de aluminio marca Amazon Basics. Compatible con laptops de hasta 15". Dependiendo del centro de gravedad de la laptop, puede funcionar con laptops de hasta 15.6" como las que se miestra en las fotos.',
    estado: "Usada en muy bien estado.",
    entrega: "Inmediata",
    ml: ""
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