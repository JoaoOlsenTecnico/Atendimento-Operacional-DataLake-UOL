import '@/assets/stylesheets/login.css';

import router from '../../router'
import axios from 'axios'
import { ip }  from './ip'



export default {
    name: 'Login',
    data() {
        return{
            login: {
                nome: "",
                senha: ""
            }
        }
    },

    methods: {
        entrar() {
            axios.post("http://172.16.10.47:8008/api/v1/jwt", this.login)
            .then(response => {
                let token =response.data.token;
            
            
            localStorage.setItem('Authorization', "Bearer " + token);

              if(token != null) {
                console.log("oi");
                router.push({ name: "Status"});
            } else {
                console.log("erro")
            }
            }
            ).catch(respone => {
                console.log("erro")
            })

          
            //  router.push({ name: "Home" });


            

        }

    }
}  