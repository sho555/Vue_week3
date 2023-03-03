import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.45/vue.esm-browser.min.js';

const app = {
  data() {
    return {
      products: [],
      product_detail: {},
      'apiUrl': "vue3-course-api.hexschool.io",
      'apiPath':'jlhex'
    }

  },
  methods: {
    check(){

      axios.post(`https://${this.apiUrl}/v2/api/user/check`)
      .then(res =>{
        this.getData();
        
      })
      .catch((err) => {
        window.location = 'login.html';
        alert("尚未登入");
      });
    },
    getData() {
      
      axios.get(`https://${this.apiUrl}/v2/api/${this.apiPath}/admin/products`)
        .then((res) => {
          this.products = res.data.products;

        })
        .catch((err) => {
          alert("can't getData")
        })
    },
  },

  mounted(){
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    axios.defaults.headers.common['Authorization'] = token;
    //defaults: 每次都會帶入
    this.check();
  }
}

createApp(app).mount('#app');
