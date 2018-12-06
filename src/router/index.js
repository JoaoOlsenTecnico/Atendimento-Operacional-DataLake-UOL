import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Home from '@/components/Home';
import Status from '@/components/Status';
import Detalhe from '@/components/Detalhe';
import Search from '@/components/Search';
import TabelaX from '@/components/Tabela';
import TabelaY from '@/components/Tabela2';
import Grafico from '@/components/Grafico';
import Teste from '@/components/teste';
import axios from 'axios';


Vue.use(Router);

var router = new Router({
  mode: "hash",
  routes: [
    {
      path: '/', 
      name: 'Login',
      component: Login,
    },     
    {
      path: '/status',
      name: 'Status',
      component: Status,

    },
  
    {
      path: '/detalhe',
      name: 'Detalhe',
      component: Detalhe,
      // meta: {
      //   authorize: true
      // }
    },             
  ],

});

let token = localStorage.getItem('Authorization');

  
    
router.beforeEach((to, from, next) => {
  if(to.meta && to.meta.authorize === true) {
    if(localStorage.getItem('Authorization'))

    axios
      .get("http://172.16.6.17:8080/api/incidentes" , {
      headers: { Authorization:  token } })
      .then(function (response) {
        next();
        
      })
      .catch(function (error) {
        next('/');
          console.log(error);
      })

    else
      next('/');
  }
  else {
    next();
  }
});

export default router;

