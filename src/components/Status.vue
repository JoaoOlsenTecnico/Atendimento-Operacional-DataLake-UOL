<template>


    <section id="tudo">

        <div class="vld-parent">
            <loading :active.sync="isLoading" 
            :is-full-page="fullPage"></loading>
        </div>

        <!-- Barra lateral -->
        <div id="barraLateral">
            <div id="mySidenav" class="sidenav">
                <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav()">&times;</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>

            <img src="../assets/img/HOMEM.png" id="logoMAN2" v-on:click="gohome()">

            <span style="cursor:pointer" v-on:click="openNav()" id="wng" v-on:dblclick="closeNav()">
                <img src="../assets/img/warning.png" id="warning">
            </span>  

        </div>

             <!-- Cabeça da pagina -->
        <header id="headerS">
            <a v-on:click="home()"><img src="../assets/img/UOL-OK.png" id="logoUOL"> </a>   
            <img src="../assets/img/Homem2.png" id="logoMAN">      
            <a  v-on:click="sair()"> <h5 id="usuario">Logout</h5> </a>
        </header>




        <!-- Seção dos cards -->
        <form>
        <select id="" name="Cliente">
            <option value="au">Cliente 1</option>
            <option value="ca">Cliente 2</option>
            <option value="usa">Cliente 3</option>
        </select>
        </form>
        <form>
        <select id="horario" name="Hora">
            <option value="au">Uma hora atrás</option>
            <option value="ca">Duas horas atrás</option>
            <option value="usa">Cinco horas atrás</option>
        </select>
        </form>

        <section id="corpo2"> 

            <!-- Cards -->    
            <div id="bloco2">
                <div id="app" >
                <h2> Grafico 1 </h2>                    
                <GChart  
                id="dois"
                class="teste"        
                type="ColumnChart"                     
                @ready="onChartReady"
                /> 
                </div> 
                <p> "Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  </p>
                <a v-on:click="dois()"><h1 class="ver"> VER MAIS </h1></a>  
            </div>
            
            <div id="bloco2">
                <div id="app" >
                <h2> Grafico 2 </h2> 
                <GChart  
                id="tres"        
                type="ColumnChart"                     
                @ready="onChartReady"
                /> 
                </div>
                 <p> "Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  </p>  
                <a v-on:click="tres()"><h1 class="ver"> VER MAIS </h1></a>    
            </div>

            <div id="bloco2">
                <h2> Grafico 3 </h2> 
                <div id="app" >
                <GChart  
                id="quatro"        
                type="ColumnChart"                     
                @ready="onChartReady"
                /> 
                </div> 
                 <p> "Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  </p>
                <a v-on:click="quatro()"><h1 class="ver"> VER MAIS </h1></a>  
            </div>

            <div id="nao">
                <div id="app" >
                <GChart  
                id="quinta"        
                type="ColumnChart"                     
                @ready="onChartReady"
                /> 
                </div>  
            </div>

        </section>

    </section>


</template>

<!-- Areá dos scripts -->
<script src="..\assets\scripts/status.js">

