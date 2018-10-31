<template>
<div>

    <!-- Header -->
        <header id="header">
            <a v-on:click="home()"><img src="../assets/img/UOL-OK.png" id="logoUOL"> </a>   
            <img src="../assets/img/Homem2.png" id="logoMAN">      
            <a  v-on:click="sair()"> <h5 id="usuario">Logout</h5> </a>
        </header>

    <!-- Formularios -->
    <section id="corpo">
    <div id="bloco5">
        <h1 id="titulo2"> Selecione seu parametro </h1>
    <form>
    <select id="selecionar" name="Parametro X" >
        <option value="au">Selecionar</option>
        <option value="ca">10/2018</option>
        <option value="usa">09/2018</option>
        <option value="ca">08/2018</option>
        <option value="usa">07/2018</option>
        <option value="ca">06/2018</option>
        <option value="usa">05/2018</option>
        <option value="ca">04/2018</option>
        <option value="usa">02/2018</option>
    </select>
    </form>
    <button id="enviar" v-ripple="'rgba(255, 255, 255, 0.2)'" v-on:click="enviar()"> ENVIAR </button>
    </div>
    </section>
</div>   
</template>


<!-- Exportando o Script -->
<script src="..\assets\scripts/search.js">

