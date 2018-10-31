import "@/assets/stylesheets/tabela.css";

import router from '../../router'

export default {
    name: "Tabela",
    data() {
      return {
 
      };
    },
  
    methods: {
      next() {
        router.push({ name: "TabelaY" });
      },

      home() {
        router.push({ name: "Home" });
      },
}
}