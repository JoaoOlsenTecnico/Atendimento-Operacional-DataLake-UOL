<template>


    <section id="tudo">
             <!-- Cabeça da pagina -->

        <header id="header">
            <a><img src="../assets/img/UOL-OK.png" id="logoUOL"> </a>   
            <img src="../assets/img/Homem2.png" id="logoMAN">      
            <a  v-on:click="sair()"> <h5 id="usuario">Logout</h5> </a>
        </header>

        <header id="headerS">
            <a v-on:click="home()"><img src="../assets/img/UOL-OK.png" id="logoUOL"> </a>   
            <img src="../assets/img/Homem2.png" id="logoMAN">      
            <a  v-on:click="sair()"> <h5 id="usuario">Logout</h5> </a>
        </header>




        <!-- Seção dos cards -->
        <!-- <form>
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
        </form> -->

        <section id="corpo2"> 

            <!-- Cards -->    
            <div id="bloco2">
                <div id="app" >
                <h2> Grafico 1 </h2>                    
                <GChart id="um" class="teste" type="ColumnChart" @ready="onChartReady"/> 
                </div> 
                <p> "Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  </p>
                <a v-on:click="um()"><h1 class="ver"> VER MAIS </h1></a>  
            </div>
            
            <div id="bloco_1">
                <div id="app" >
                <h2> Grafico 2 </h2> 
                <GChart  
                id="dois"        
                type="ColumnChart"                     
                @ready="onChartReady"
                /> 
                </div>
                 <p> "Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  </p>  
                <a v-on:click="dois()"><h1 class="ver"> VER MAIS </h1></a>    
            </div>

            <div id="bloco_2">
                <h2> Grafico 3 </h2> 
                <div id="app" >
                <GChart id="tres" type="ColumnChart" @ready="onChartReady"/> 
                </div> 
                 <p> "Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  </p>
                <a v-on:click="tres()"><h1 class="ver"> VER MAIS </h1></a>  
            </div>
            
        </section>

        <section id="corpo_2"> 
            <div id="bloco_3">
                <h2> Grafico 4 </h2> 
                <div id="app" >
                <GChart id="quatro" type="ColumnChart" @ready="onChartReady"/> 
                </div> 
                 <p> "Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  </p>
                <a v-on:click="quatro()"><h1 class="ver"> VER MAIS </h1></a>  
            </div>

            <div id="bloco_4">
                <h2> Grafico 5 </h2> 
                <div id="app" >
                <GChart id="cinco" type="ColumnChart" @ready="onChartReady"/> 
                </div> 
                 <p> "Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  </p>
                <a v-on:click="cinco()"><h1 class="ver"> VER MAIS </h1></a>  
            </div>

            <div id="bloco_5">
                <h2> Grafico 6 </h2> 
                <div id="app" >
                <GChart id="seis" type="ColumnChart" @ready="onChartReady"/> 
                </div> 
                 <p> "Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  </p>
                <a v-on:click="seis()"><h1 class="ver"> VER MAIS </h1></a>  
            </div>
        </section>

        <section id="corpo_3"> 

            <div id="bloco_6">
                <h2> Grafico 7 </h2> 
                <div id="app" >
                <GChart id="sete" type="ColumnChart" @ready="onChartReady"/> 
                </div> 
                 <p> "Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  </p>
                <a v-on:click="sete()"><h1 class="ver"> VER MAIS </h1></a>  
            </div>

            <div id="bloco_7">
                <h2> Grafico 8 </h2> 
                <div id="app" >
                <GChart id="oito" type="ColumnChart" @ready="onChartReady"/> 
                </div> 
                 <p> "Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  </p>
                <a v-on:click="oito()"><h1 class="ver"> VER MAIS </h1></a>  
            </div>

            <div id="bloco_8">
                <h2> Grafico 9 </h2> 
                <div id="app" >
                <GChart id="nove" type="ColumnChart" @ready="onChartReady"/> 
                </div> 
                 <p> "Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  </p>
                <a v-on:click="nove()"><h1 class="ver"> VER MAIS </h1></a>  
            </div>
        </section>

       <section id="corpo_4"> 

            <div id="bloco_9">
                <h2> Grafico 10 </h2> 
                <div id="app" >
                <GChart id="dez" type="ColumnChart" @ready="onChartReady"/> 
                </div> 
                 <p> "Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  </p>
                <a v-on:click="dez()"><h1 class="ver"> VER MAIS </h1></a>  
            </div>

            <div id="bloco_10">
                <h2> Grafico 11 </h2> 
                <div id="app" >
                <GChart id="onze" type="ColumnChart" @ready="onChartReady"/> 
                </div> 
                 <p> "Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  </p>
                <a v-on:click="onze()"><h1 class="ver"> VER MAIS </h1></a>  
            </div>

            <div id="bloco_11">
                <h2> Grafico 12 </h2> 
                <div id="app" >
                <GChart id="doze" type="ColumnChart" @ready="onChartReady"/> 
                </div> 
                 <p> "Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  </p>
                <a v-on:click="doze()"><h1 class="ver"> VER MAIS </h1></a>  
            </div>
       </section>

      <section id="corpo_5"> 

            <div id="bloco_12">
                <h2> Grafico 13 </h2> 
                <div id="app" >
                <GChart id="treze" type="ColumnChart" @ready="onChartReady"/> 
                </div> 
                 <p> "Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  </p>
                <a v-on:click="treze()"><h1 class="ver"> VER MAIS </h1></a>  
            </div>

            <div id="bloco_13">
                <h2> Grafico 14 </h2> 
                <div id="app" >
                <GChart id="quatorze" type="ColumnChart" @ready="onChartReady"/> 
                </div> 
                 <p> "Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  </p>
                <a v-on:click="quatorze()"><h1 class="ver"> VER MAIS </h1></a>  
            </div>

            <div id="bloco_14">
                <h2> Grafico 15 </h2> 
                <div id="app" >
                <GChart id="quinze" type="ColumnChart" @ready="onChartReady"/> 
                </div> 
                 <p> "Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  </p>
                <a v-on:click="quinze()"><h1 class="ver"> VER MAIS </h1></a>  
            </div>
      </section>    

        <div id="nao">
                <div id="app" >
                <GChart  id="quinta" type="ColumnChart"  @ready="onChartReady"/> 
                </div>  
            </div>

        </section>




</template>

<!-- Areá dos scripts -->
<script src="..\assets\scripts/status.js">

