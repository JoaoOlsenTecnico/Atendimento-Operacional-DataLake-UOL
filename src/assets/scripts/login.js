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
            axios.post(ip + '/api/v1/jwt', this.login)
            .then(response => {
                let token =response.data.token;
            
            
            localStorage.setItem('Authorization', "Bearer " + token);

              if(token != null) {
                console.log("oi");
                router.push({ name: "Home"});
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