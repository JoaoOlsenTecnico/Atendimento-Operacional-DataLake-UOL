import '@/assets/stylesheets/status.css';

import router from '../../router'
import axios from 'axios'
import { GChart } from "vue-google-charts"
import { ip }  from './ip'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
    


let tabela1 = [];
let nome1 = [];
let dadinhos = [];

export default {
    name: 'Status',
    components: {
        GChart,
        Loading
    },
    data() {
        return {
            isLoading: false,
            fullPage: true
        }
    },

    mounted() {

        let token = localStorage.getItem('Authorization');
        this.isLoading = true;
        axios
            .get(ip + "/api/incidente/", {
             headers: { Authorization:  token } })
            .then(function (response) {
               
                console.info(response.data[0].Data.Dados[0]);
                console.info(response.data[0].Data.Nomes[0]);  
                
               let tamanho = response.data[0].Data.Dados.length;
               console.log(tamanho);

                for (var i = 0; i < tamanho; i++)
                tabela1[i] = response.data[0].Data.Dados[i];

                for (var i = 0; i < tamanho; i++)
                nome1[i] = response.data[0].Data.Nomes[i];
        
                // for (var i = 0, t = 0; i < dadinhos[2].length; i++ , t++)
                //     tabela1[i] = response.data[i].Data.Dados[t];
                // console.log(tabela1[0]);
                // for (var i = 5, t = 0; i < dadinhos[2].length + 5; i++ , t++)
                //     tabela1[i] = response.data[i].Data.Dados[t];
                // console.log(tabela1[2]);
                // for (var i = 10, t = 0; i < dadinhos[2].length + 10; i++ , t++)
                //     tabela1[i] = response.data[i].Data.Dados[t];
                // console.log(tabela1[3]);
                // for (var i = 15, t = 0; i < dadinhos[2].length + 15; i++ , t++)
                //     tabela1[i] = response.data[i].Data.Dados[t];
                // console.log(tabela1[4]);
            })

            .catch(function (error) {
                alert("Erro ao carregar!");
                console.log(error);
            });

     
    },

    methods: {
        
        home() {
            router.push({ name: "Home"})
          },
        

        dois() {      
            localStorage.setItem('var', "dois")
            router.push({ name: "Detalhe" });

        },

        tres() {      
            localStorage.setItem('var', "tres")
            router.push({ name: "Detalhe" });

        },

        quatro() {      
            localStorage.setItem('var', "quatro")
            router.push({ name: "Detalhe" });

        },

        onChartReady(chart, google) {

            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Topping');
            data.addColumn('number', 'Slices');
            data.addRows([
                [nome1[0], tabela1[0]],
                [nome1[1], tabela1[1]],
                [nome1[2], tabela1[2]],
                [nome1[3], tabela1[3] ],
                [nome1[4], tabela1[4]]
            ]);

            var datinha = new google.visualization.DataTable();
            datinha.addColumn('string', 'begin');
            datinha.addColumn('number', 'end');
            datinha.addRows([
                ['Mushrooms1', 1],
                ['Onions1', 2],
                ['Olives1', 3],
                ['Zucchini1', 4],
                ['Pepperoni1', 5]
            ]);

            
            var tamanhoH = window.innerHeight*0.25;
            var tamanhoW = window.innerWidth*0.25;
            if (window.innerWidth < 450) {
                var tamanhoW = window.innerWidth*0.8;
            }

            var options = {
                title: 'GRAFICO'    ,
                width: tamanhoW,
                height: tamanhoH,
                backgroundColor: "#f8f8f8"
            };

            var chart = new google.visualization.BarChart(document.getElementById('dois'));
            chart.draw(data, options);
            var chart2 = new google.visualization.PieChart(document.getElementById('tres'));
            chart2.draw(datinha, options);
            var chart3 = new google.visualization.LineChart(document.getElementById('quatro'));
            chart3.draw(data, options);
            var chart4 = new google.visualization.PieChart(document.getElementById('quinta'));
            chart4.draw(datinha, options);
            this.isLoading = false;
          
        },


        home() {
            router.push({ name: "Home"})
          },

        openNav() {
            document.getElementById("mySidenav").style.width = "250px";
            document.getElementById("warning").style.backgroundColor = "rgb(255, 255, 255, 0.20)"

        },
        closeNav() {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("warning").style.backgroundColor = "";
            document.getElementById("mySidenav").style.border = "none";
        },
        openNav2() {
            document.getElementById("mySidenav2").style.width = "250px";
            document.getElementById("logoMAN").style.backgroundColor = "rgb(255, 255, 255, 0.20)"
        },
        closeNav2() {
            document.getElementById("mySidenav2").style.width = "0";
            document.getElementById("logoMAN").style.backgroundColor = "";
            document.getElementById("mySidenav2").style.border = "none";
        },

        gohome() {
            router.push({ name: "Home" });
        }


    }
}
