import "@/assets/stylesheets/home.css";

import router from '../../router'
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      login: {
        nome: "",
        senha: ""
      }
    };
  },

  methods: {
    status() {
      router.push({ name: "Status" });
    },

    home() {
      router.push({ name: "Home"})
    },

    search() {
      router.push({ name: "Search"})
    },

    legstatus() {
      document.getElementById("balao").style.width = "28%";
      document.getElementById("balao").style.height = "120px";
      document.getElementById("balao").style.boxShadow = "";
    },

    outstatus() {
      document.getElementById("balao").style.height = "0";
      document.getElementById("balao").style.boxShadow = "none";
    },
    legsearch() {
      document.getElementById("balao2").style.width = "28%";
      document.getElementById("balao2").style.height = "120px";
      document.getElementById("balao2").style.boxShadow = "";
    },

    outsearch() {
      document.getElementById("balao2").style.height = "0";
      document.getElementById("balao2").style.boxShadow = "none";
    },

    sair() {
      localStorage.setItem('Authorization', "");

      router.push({ name: "Login" });

      //  router.push({ name: "Home" });
    },

    enter() {
      document.getElementById('fade').style.opacity = "1";
    }
  }
};