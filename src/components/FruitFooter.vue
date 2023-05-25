<template>
    <div class="myFooter">
            <h3>BIENVENUE CHEZ LES FRUITZS</h3>
            <button class="home" @click="scrollToTop">Accueil</button>
            <p>Voici mon site web en vue.js réalisé pour le cours de développement web avec Antoine Libert. <br>Le site est connecté avec une API de Fruit que vous pouvez trouver au lien suivant : <a href="https://api.predic8.de/shop/docs" target="_blank">API Fruits</a></p>
            <p> © Sarah N'GOTTA | IMAC 2 </p>
    </div>
    
</template>

<script>
export default {
    name : 'FruitFooter',
    methods:{
        scrollToTop() {
        document.getElementsByClassName("banner")[0].scrollIntoView({ behavior: "smooth" });
        }
    }
}
</script>

<style>

.myFooter{
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #FFBD53;
}

.home{
    color:#242424;
    background-color: #fefaef;
    margin:0px 0px 0px 0px !important;
}

.home:hover{
    color:#fefaef;
    background-color: #242424;
}

a{
    color:#242424 !important;
    font-weight: 900;
}

a:hover{
background-color:#242424;
color: #fefaef !important;
text-decoration: none !important;
}

</style>