<template>

    <section>

     <!-- Cabeça da pagina -->
        <header id="header">
            <a v-on:click="home()"><img src="../assets/img/UOL-OK.png" id="logoUOL"> </a>     
            <img src="../assets/img/Homem2.png" id="logoMAN">      
            <a  v-on:click="sair()"> <h5 id="usuario">Logout</h5> </a>
        </header>




    <!-- Tabela com dados da API -->
    <div id="bloco6">
        <h1 id="titulo">Selecione o parametro X</h1>
        <button v-ripple="'rgba(255, 255, 255, 0.2)'" id="enviar2"  v-on:click="next()">Proximo Parametro</button>

        <table>
        <tr>
            <th>
                <input type="radio" checked="checked" name="radio" class="check">
                Nome 
            </th>
            <th>
                <input type="radio" checked="checked" name="radio" class="check">
                Data
            </th>            
            <th>
                <input type="radio" checked="checked" name="radio" class="check">
                Ping
            </th> 
        </tr>
        <tr>
            <td>Peter</td>
            <td>25/04/2000</td>
            <td>100ms</td>
        </tr>
        <tr>
            <td>Lois</td>
            <td>04/02/1990</td>
            <td>150ms</td>
        </tr>
        <tr>
            <td>Joe</td>
            <td>09/08/1989</td>
            <td>300ms</td>
        </tr>
        <tr>
            <td>Cleveland</td>
            <td>20/11/1999</td>
            <td>250ms</td>
        </tr>
        <tr>
            <td>Moe</td>
            <td>21/12/1999</td>
            <td>100ms</td>
        </tr>
        <tr>
            <td>Marco</td>
            <td>20/04/1999</td>
            <td>210ms</td>
        </tr>
        <tr>
            <td>Itan</td>
            <td>20/01/1999</td>
            <td>220ms</td>
        </tr>
         <tr>
        
            <td>Peter</td>
            <td>25/04/2000</td>
            <td>100ms</td>
        </tr>
        <tr>
            <td>Lois</td>
            <td>04/02/1990</td>
            <td>150ms</td>
        </tr>
        <tr>
            <td>Joe</td>
            <td>09/08/1989</td>
            <td>300ms</td>
        </tr>
        <tr>
            <td>Cleveland</td>
            <td>20/11/1999</td>
            <td>250ms</td>
        </tr>
        <tr>
            <td>Moe</td>
            <td>21/12/1999</td>
            <td>100ms</td>
        </tr>
        <tr>
            <td>Marco</td>
            <td>20/04/1999</td>
            <td>210ms</td>
        </tr>
        <tr>
            <td>Itan</td>
            <td>20/01/1999</td>
            <td>220ms</td>
        </tr>
         <tr>
        
            <td>Peter</td>
            <td>25/04/2000</td>
            <td>100ms</td>
        </tr>
        <tr>
            <td>Lois</td>
            <td>04/02/1990</td>
            <td>150ms</td>
        </tr>
        <tr>
            <td>Joe</td>
            <td>09/08/1989</td>
            <td>300ms</td>
        </tr>
        <tr>
            <td>Cleveland</td>
            <td>20/11/1999</td>
            <td>250ms</td>
        </tr>
        <tr>
            <td>Moe</td>
            <td>21/12/1999</td>
            <td>100ms</td>
        </tr>
        <tr>
            <td>Marco</td>
            <td>20/04/1999</td>
            <td>210ms</td>
        </tr>
        <tr>
            <td>Itan</td>
            <td>20/01/1999</td>
            <td>220ms</td>
        </tr>
        
        </table>

        
    </div>    
    </section>

</template>


<!-- Área dos scripts -->
<script src="@\assets\scripts\tabela.js">