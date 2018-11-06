import '@/assets/stylesheets/grafico.css';

import router from '../../router'
import axios from 'axios'
import { GChart } from "vue-google-charts"

let tabela1 = [];
let dadinhos = [];
let grafico;

export default {
    name: 'Grafico',
    components: {
        GChart
    },
    data() {
        return {
            variavel: grafico
        }
    },
    beforeCreate() {
        grafico = localStorage.getItem("var");
    },
    mounted() {

        // axios
        //     .get("http://192.168.4.92:8081/ABv/RotaTres")
        //     .then(function (response) {
        //         console.info(response.data[1].Data.Dados[1]);

        //         for (var i = 0; i < 10; i++)
        //             dadinhos[i] = response.data[i].Data.Dados;

        //         for (var i = 0, t = 0; i < dadinhos[2].length; i++ , t++)
        //             tabela1[i] = response.data[i].Data.Dados[t];
        //         console.log(tabela1[0]);
        //         for (var i = 5, t = 0; i < dadinhos[2].length + 5; i++ , t++)
        //             tabela1[i] = response.data[i].Data.Dados[t];
        //         console.log(tabela1[2]);
        //         for (var i = 10, t = 0; i < dadinhos[2].length + 10; i++ , t++)
        //             tabela1[i] = response.data[i].Data.Dados[t];
        //         console.log(tabela1[3]);
        //         for (var i = 15, t = 0; i < dadinhos[2].length + 15; i++ , t++)
        //             tabela1[i] = response.data[i].Data.Dados[t];
        //         console.log(tabela1[4]);
        //     })

        //     .catch(function (error) {
        //         alert("NAO FOI");
        //         console.log(error);
        //     });

    },

    methods: {

        voltando() {
            router.push({ name: "Search" });
        },

        onChartReady(chart, google) {

            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Names');
            data.addColumn('number', 'Ping');
            data.addColumn('number', 'Date');
            data.addRows([
                ['Mushrooms', tabela1[0], tabela1[1]],
                ['Onions', tabela1[1], tabela1[2]],
                ['Olives', tabela1[2], tabela1[0]],
                ['Zucchini', tabela1[3], tabela1[4]],
                ['Pepperoni', tabela1[4], tabela1[3]]
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

            var tamanhoH = window.innerHeight*0.4;
            var tamanhoW = window.innerWidth*0.75;
            var options = {
                title: 'How Much Pizza Sarah Ate Last Night',
                width: tamanhoW,
                height: tamanhoH,
                backgroundColor: "#f8f8f8"
            };

            var chart = new google.visualization.BarChart(document.getElementById('dois'));
            chart.draw(datinha, options);

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
        },
        home() {
            router.push({ name: "Home" });
        },


    }
}
