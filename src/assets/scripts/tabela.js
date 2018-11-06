import "@/assets/stylesheets/tabela.css";

import router from '../../router'

export default {
    name: "Tabela",
    data() {
      return {
 
      };
    },
  
    methods: {
      tableBuilder() {
        var tabela = document.createElement("table")
        tabela.appendChild(document.createElement("th"));
        tabela.innerHTML = "pastel"

        console.log()

      },
      next() {
        router.push({ name: "TabelaY" });
      },

      home() {
        router.push({ name: "Home" });
      },
}
}