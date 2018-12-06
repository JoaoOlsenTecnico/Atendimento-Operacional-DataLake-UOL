import '@/assets/stylesheets/status.css';

import router from '../../router'
import axios from 'axios'
import { GChart } from "vue-google-charts"
import { ip }  from './ip'

let tabela1 = [];
let nome1 = [];
let grafico;

export default {
    name: 'Status',
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

        axios
            .get("http://172.16.10.47:8008/api/incidente", {
                headers: { Authorization: token }})
            .then(function (response) {
            
                let resultado = response.data;

                for (let i = 0; i < resultado.length; i++) {
                    for (let j = 0; j < resultado[i].Data.Dados.length; j++) {
                        tabela1.push(resultado[i].Data.Dados[j])
                    }
                }

                for (let i = 0; i < resultado.length; i++) {
                    for (let j = 0; j < resultado[i].Data.Nomes.length; j++) {
                        nome1.push(resultado[i].Data.Nomes[j])
                    }
                }
            })

            .catch(function (error) {
                alert("NAO FOI");
                console.log(error);
            });

    },

    methods: {

        voltar() {
            localStorage.setItem('var', null)
            router.push({ name: "Status" });
        },

        onChartReady(chart, google) {
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Topping');
            data.addColumn('number', 'Slices');
            data.addRows([
                [nome1[0], tabela1[0]],
                [nome1[1], tabela1[1]],
                [nome1[2], tabela1[2]],
                [nome1[3], tabela1[3]],
                [nome1[4], tabela1[4]]
            ]);
            var data_2 = new google.visualization.DataTable();
            data_2.addColumn('string', 'Topping');
            data_2.addColumn('number', 'Slices');
            data_2.addRows([
                [nome1[0], tabela1[5]],
                [nome1[1], tabela1[6]],
                [nome1[2], tabela1[7]],
                [nome1[3], tabela1[8]],
                [nome1[4], tabela1[9]]
            ]);
            var data_3 = new google.visualization.DataTable();
            data_3.addColumn('string', 'Topping');
            data_3.addColumn('number', 'Slices');
            data_3.addRows([
                [nome1[0], tabela1[10]],
                [nome1[1], tabela1[11]],
                [nome1[2], tabela1[12]],
                [nome1[3], tabela1[13]],
                [nome1[4], tabela1[14]]
            ]);
            var data_4 = new google.visualization.DataTable();
            data_4.addColumn('string', 'Topping');
            data_4.addColumn('number', 'Slices');
            data_4.addRows([
                [nome1[0], tabela1[15]],
                [nome1[1], tabela1[16]],
                [nome1[2], tabela1[17]],
                [nome1[3], tabela1[18]],
                [nome1[4], tabela1[19]]
            ]);
            var data_5 = new google.visualization.DataTable();
            data_5.addColumn('string', 'Topping');
            data_5.addColumn('number', 'Slices');
            data_5.addRows([
                [nome1[0], tabela1[20]],
                [nome1[1], tabela1[21]],
                [nome1[2], tabela1[22]],
                [nome1[3], tabela1[23]],
                [nome1[4], tabela1[24]]
            ]);
            var data_6 = new google.visualization.DataTable();
            data_6.addColumn('string', 'Topping');
            data_6.addColumn('number', 'Slices');
            data_6.addRows([
                [nome1[0], tabela1[25]],
                [nome1[1], tabela1[26]],
                [nome1[2], tabela1[27]],
                [nome1[3], tabela1[28]],
                [nome1[4], tabela1[29]]
            ]);
            var data_7 = new google.visualization.DataTable();
            data_7.addColumn('string', 'Topping');
            data_7.addColumn('number', 'Slices');
            data_7.addRows([
                [nome1[0], tabela1[30]],
                [nome1[1], tabela1[31]],
                [nome1[2], tabela1[32]],
                [nome1[3], tabela1[33]],
                [nome1[4], tabela1[34]]
            ]);
            var data_8 = new google.visualization.DataTable();
            data_8.addColumn('string', 'Topping');
            data_8.addColumn('number', 'Slices');
            data_8.addRows([
                [nome1[0], tabela1[35]],
                [nome1[1], tabela1[36]],
                [nome1[2], tabela1[37]],
                [nome1[3], tabela1[38]],
                [nome1[4], tabela1[39]]
            ]);
            var data_9 = new google.visualization.DataTable();
            data_9.addColumn('string', 'Topping');
            data_9.addColumn('number', 'Slices');
            data_9.addRows([
                [nome1[0], tabela1[40]],
                [nome1[1], tabela1[41]],
                [nome1[2], tabela1[42]],
                [nome1[3], tabela1[43]],
                [nome1[4], tabela1[44]]
            ]);
            var data_10 = new google.visualization.DataTable();
            data_10.addColumn('string', 'Topping');
            data_10.addColumn('number', 'Slices');
            data_10.addRows([
                [nome1[0], tabela1[45]],
                [nome1[1], tabela1[46]],
                [nome1[2], tabela1[47]],
                [nome1[3], tabela1[48]],
                [nome1[4], tabela1[49]]
            ]);
            var data_11 = new google.visualization.DataTable();
            data_11.addColumn('string', 'Topping');
            data_11.addColumn('number', 'Slices');
            data_11.addRows([
                [nome1[0], tabela1[50]],
                [nome1[1], tabela1[51]],
                [nome1[2], tabela1[52]],
                [nome1[3], tabela1[53]],
                [nome1[4], tabela1[54]]
            ]);
            var data_12 = new google.visualization.DataTable();
            data_12.addColumn('string', 'Topping');
            data_12.addColumn('number', 'Slices');
            data_12.addRows([
                [nome1[0], tabela1[55]],
                [nome1[1], tabela1[56]],
                [nome1[2], tabela1[57]],
                [nome1[3], tabela1[58]],
                [nome1[4], tabela1[59]]
            ]);
            var data_13 = new google.visualization.DataTable();
            data_13.addColumn('string', 'Topping');
            data_13.addColumn('number', 'Slices');
            data_13.addRows([
                [nome1[0], tabela1[60]],
                [nome1[1], tabela1[61]],
                [nome1[2], tabela1[62]],
                [nome1[3], tabela1[63]],
                [nome1[4], tabela1[64]]
            ]);
            var data_14 = new google.visualization.DataTable();
            data_14.addColumn('string', 'Topping');
            data_14.addColumn('number', 'Slices');
            data_14.addRows([
                [nome1[0], tabela1[65]],
                [nome1[1], tabela1[66]],
                [nome1[2], tabela1[67]],
                [nome1[3], tabela1[68]],
                [nome1[4], tabela1[69]]
            ]);
            var data_15 = new google.visualization.DataTable();
            data_15.addColumn('string', 'Topping');
            data_15.addColumn('number', 'Slices');
            data_15.addRows([
                [nome1[0], tabela1[70]],
                [nome1[1], tabela1[71]],
                [nome1[2], tabela1[72]],
                [nome1[3], tabela1[73]],
                [nome1[4], tabela1[74]]
            ]);




            var tamanhoH = window.innerHeight * 0.75;
            var tamanhoW = window.innerWidth * 0.75;
            if (window.innerWidth < 450) {
                var tamanhoW = window.innerWidth * 0.8;
            }

            var options = {
                title: 'GRAFICO',
                width: tamanhoW,
                height: tamanhoH,
                backgroundColor: "#f8f8f8"
            };
            var chart = new google.visualization.BarChart(document.getElementById('um'));
            chart.draw(data, options);
            var chart_2 = new google.visualization.PieChart(document.getElementById('dois'));
            chart_2.draw(data_2, options);
            var chart_3 = new google.visualization.AreaChart(document.getElementById('tres'));
            chart_3.draw(data_3, options);

            var chart_4 = new google.visualization.PieChart(document.getElementById('quatro'));
            chart_4.draw(data_4, options);
            var chart_5 = new google.visualization.AreaChart(document.getElementById('cinco'));
            chart_5.draw(data_5, options);
            var chart_6 = new google.visualization.BarChart(document.getElementById('seis'));
            chart_6.draw(data_6, options);

            var chart_7 = new google.visualization.AreaChart(document.getElementById('sete'));
            chart_7.draw(data_7, options);
            var chart_8 = new google.visualization.PieChart(document.getElementById('oito'));
            chart_8.draw(data_8, options);
            var chart_9 = new google.visualization.BarChart(document.getElementById('nove'));
            chart_9.draw(data_9, options);

            var chart_10 = new google.visualization.BarChart(document.getElementById('dez'));
            chart_10.draw(data_10, options);
            var chart_11 = new google.visualization.PieChart(document.getElementById('onze'));
            chart_11.draw(data_11, options);
            var chart_12 = new google.visualization.AreaChart(document.getElementById('doze'));
            chart_12.draw(data_12, options);

            var chart_13 = new google.visualization.PieChart(document.getElementById('treze'));
            chart_13.draw(data_13, options);
            var chart_14 = new google.visualization.AreaChart(document.getElementById('quatorze'));
            chart_14.draw(data_14, options);
            var chart_15 = new google.visualization.BarChart(document.getElementById('quinze'));
            chart_15.draw(data_15, options);

            

            var chart4 = new google.visualization.PieChart(document.getElementById('quinta'));
            chart4.draw(data_3, options);

            this.$forceUpdate();
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
            router.push({ name: "Status" });
        }

        


    }
}
