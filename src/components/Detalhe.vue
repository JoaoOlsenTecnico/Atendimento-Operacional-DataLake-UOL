<template>
<div>
     <!-- Cabeça da pagina -->
        <header id="header">
            <a v-on:click="gohome()"><img src="../assets/img/UOL-OK.png" id="logoUOL"> </a>    
            <img src="../assets/img/Homem2.png" id="logoMAN">      
            <a  v-on:click="sair()"> <h5 id="usuario">Logout</h5> </a>
        </header>

  <!-- Corpo da pagina -->




    <section id="corpo">
        <div id="bloco3">
            <div id="app" >
            <h2> Grafico Expandido </h2> 
                <GChart  
                :id="variavel"      
                type="ColumnChart"                     
                @ready="onChartReady"
                class="GraGrande"
                /> 
            </div>      
   
        </div>

        <div id="nao">
            <div id="app" >
            <GChart  
            id="quinta"        
            type="ColumnChart"                     
            @ready="onChartReady"
            /> 
            <div id="app" >
            <GChart 
            id="dois"
            class="tamanho"        
            type="ColumnChart"                     
            @ready="onChartReady"
            /> 
            </div>    
             <div id="app" >
            <GChart 
            id="um"
            class="tamanho"        
            type="ColumnChart"                     
            @ready="onChartReady"
            /> 
            </div>      
            <div id="app" >
            <GChart 
            id="tres"
            class="tamanho"        
            type="ColumnChart"                     
            @ready="onChartReady"
            /> 
            </div>  
            </div>
            <div id="app" >
            <GChart 
            id="quatro"
            class="tamanho"        
            type="ColumnChart"                     
            @ready="onChartReady"
            /> 
           <div id="app" >
            <GChart 
            id="cinco"
            class="tamanho"        
            type="ColumnChart"                     
            @ready="onChartReady"
            /> 
            </div> 
           <div id="app" >
            <GChart 
            id="seis"
            class="tamanho"        
            type="ColumnChart"                     
            @ready="onChartReady"
            /> 
            </div> 
           <div id="app" >
            <GChart 
            id="sete"
            class="tamanho"        
            type="ColumnChart"                     
            @ready="onChartReady"
            /> 
            </div> 
           <div id="app" >
            <GChart 
            id="oito"
            class="tamanho"        
            type="ColumnChart"                     
            @ready="onChartReady"
            /> 
            </div> 
           <div id="app" >
            <GChart 
            id="nove"
            class="tamanho"        
            type="ColumnChart"                     
            @ready="onChartReady"
            /> 
            </div> 
           <div id="app" >
            <GChart 
            id="dez"
            class="tamanho"        
            type="ColumnChart"                     
            @ready="onChartReady"
            /> 
            </div> 
           <div id="app" >
            <GChart 
            id="onze"
            class="tamanho"        
            type="ColumnChart"                     
            @ready="onChartReady"
            /> 
            </div> 
           <div id="app" >
            <GChart 
            id="doze"
            class="tamanho"        
            type="ColumnChart"                     
            @ready="onChartReady"
            /> 
            </div> 
           <div id="app" >
            <GChart 
            id="treze"
            class="tamanho"        
            type="ColumnChart"                     
            @ready="onChartReady"
            /> 
            </div> 
           <div id="app" >
            <GChart 
            id="quatorze"
            class="tamanho"        
            type="ColumnChart"                     
            @ready="onChartReady"
            /> 
            </div> 
           <div id="app" >
            <GChart 
            id="quinze"
            class="tamanho"        
            type="ColumnChart"                     
            @ready="onChartReady"
            /> 
            </div>           
            </div>   
        </div>
    </section>
</div>
</template>

<!-- Área dos scripts -->
<script src="@\assets\scripts\detalhe.js">
