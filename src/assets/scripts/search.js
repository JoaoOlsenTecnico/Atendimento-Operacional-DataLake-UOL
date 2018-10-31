import "@/assets/stylesheets/search.css";
import router from '../../router'

export default {
    name: "Home",
    data() {
      return {

      };
    },


methods: {
    status() {
      router.push({ name: "Status" });
    },
    
    enviar() {
      router.push({ name: "TabelaX"});
    },

    home() {
      router.push({ name: "Home"})
    },
    sair() {
        localStorage.setItem("token", null);
  
        router.push({ name: "Login" });
  
        //  router.push({ name: "Home" });
      }
}
}