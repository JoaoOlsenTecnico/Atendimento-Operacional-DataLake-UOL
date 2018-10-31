import "@/assets/stylesheets/tabela2.css";

import router from '../../router'

export default {
    name: "Tabelay",
    data() {
      return {
 
      };
    },
  
    methods: {
      gerar() {
        router.push({ name: "Grafico" });
      },
      home() {
        router.push({ name: "Home" });
      },
} 
}