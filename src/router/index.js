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


Vue.use(Router);

export default new Router({
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
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
    },
    {
      path: '/tabelaX',
      name: 'TabelaX',
      component: TabelaX,
    }, 
    {
      path: '/tabelaY',
      name: 'TabelaY',
      component: TabelaY,
    }, 
    {
      path: '/grafico',
      name: 'Grafico',
      component: Grafico,
    },               

  ],

});
