<template>
<div id="fade">
     <!-- Cabeça da pagina -->
        <header id="header">
            <a><img src="../assets/img/UOL-OK.png" id="logoUOL"> </a>   
            <img src="../assets/img/Homem2.png" id="logoMAN">      
            <a  v-on:click="sair()"> <h5 id="usuario">Logout</h5> </a>
        </header>






  <!-- Corpo da pagina -->
    <section id="corpo">
        <div id="bloco">
           <img src="../assets/img/pesquisa.png" id="logoPES" v-on:click="search()"> 
           <div id="botaoHome"> 
                <h5 id="ser" class="naoSelecionavel"  v-on:click="legsearch()" v-on:dblclick="outsearch()">•••Search</h5> 
                 <div id="balao2"></div>
           </div>
        </div>

        <div id="bloco">
            <img src="../assets/img/grafico.png" id="logoGRA" v-on:click="status()">
            <div id="botaoHome2">
                <h5 id="sta" v-on:click="legstatus()" v-on:dblclick="outstatus()" class="naoSelecionavel">•••Status</h5> 
                <div id="balao"></div>
            </div> 
        </div>
    </section>
</div>
</template>

<!-- Areá dos scripts -->
<script src="@\assets\scripts\home.js">




