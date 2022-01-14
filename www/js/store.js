

var createStore = Framework7.createStore;
const store = createStore({
  state: {
    products: [
      {
        id: '1',
        title: 'Lijo thollo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.',
        foto: '../assets/pic1.jpg'
      },
      {
        id: '2',
        title: 'Liphoofolo',
        description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!',
        foto: '../assets/pic2.jpg'
      },
      {
        id: '3',
        title: 'Apple iPhone X',
        description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.',
        foto: '../assets/pic3.jpg'
      },
      
    ]
  },
  getters: {
    products({ state }) {
      return state.products;
    }
  },
  actions: {
    addProduct({ state }, product) {
      state.products = [...state.products, product];
    },
  },
})

