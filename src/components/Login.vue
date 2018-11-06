<template>


<div>
<!-- Cabeça da pagina -->
  <header id="headerL" >
    <h4 id="titulo1">Projeto Matrix</h4>
  </header>
  
   <!-- Corpo da pagina -->
    <section id="corpo">
        <div id="blocoL">
            <img src="../assets/img/White.png">
            <input type="text" placeholder="Login" name="Login" v-model="login.nome">
            <input type="password" id="senha" placeholder="Senha" name="Senha" v-model="login.senha">
            <button v-ripple="'rgba(255, 255, 255, 0.2)'" id="enviar"  v-on:click="entrar()">ENTRAR</button>
        </div>
    </section>

    <!-- Rodapé da pagina -->
    <footer id="footer">
        <div id="logosPÉ">
            <img src="../assets/img/MATRIX-OK.png">
            <img src="../assets/img/UOL-OK.png">
            <img src="../assets/img/SENAI-OK.png">
        </div>   
    </footer>
</div>
</template>

<!-- Areá dos scripts -->
<script src="..\assets\scripts/login.js">
   
