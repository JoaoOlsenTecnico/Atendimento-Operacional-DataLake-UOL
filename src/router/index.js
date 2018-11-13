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
  mode: "history",
  routes: [
    {
      path: '/', 
      name: 'Login',
      component: Login,
    },
    {
      path: '/home', 
      name: 'Home',
      component: Home,
      meta: {
        authorize: true
      }
    },       

    {
      path: '/status',
      name: 'Status',
      component: Status,
      meta: {
        authorize: true
      }
    },
    
    {
      path: '/detalhe',
      name: 'Detalhe',
      component: Detalhe,
      meta: {
        authorize: true
      }
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      meta: {
        authorize: true
      }
    },
    {
      path: '/tabelaX',
      name: 'TabelaX',
      component: TabelaX,
      meta: {
        authorize: true
      }
    }, 
    {
      path: '/tabelaY',
      name: 'TabelaY',
      component: TabelaY,
      meta: {
        authorize: true
      }
    }, 
    {
      path: '/grafico',
      name: 'Grafico',
      component: Grafico,
      meta: {
        authorize: true
      }
    },  
    {
      path: '/teste',
      name: 'Teste',
      component: Teste,
      meta: {
        authorize: true
      }
    },              

  ],

});

let token = localStorage.getItem('Authorization');

  
    
router.beforeEach((to, from, next) => {
  if(to.meta && to.meta.authorize === true) {
    if(localStorage.getItem('Authorization'))

    axios
      .get("http://192.168.4.92:8080/api/v1/autenticado/" , {
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

