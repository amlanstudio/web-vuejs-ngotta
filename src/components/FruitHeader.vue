<template>
    <div class="banner">
        <i-header id="cover-header" cover class="_text-align:center _color:white">
            <h1>BIENVENUE CHEZ LES FRUITZS</h1>
            <p>L'application qui a la 🍑 et qui va te donner la 🍌 ! </p>
            <i-button class="enter" color="primary" v-on:click="scrollToIntro">RAMÈNE TA FRAISE ! 🍓</i-button>
        </i-header>
    </div>
    <div class="presentation" ref="presentation">
            <h2 class="presentationTitle"> Qui sommes-nous ?</h2>
            <p>Bla bla bla, nous somme une grande famille, la famille des fruits, les fructus ! Sur cette app, tu vas découvrir toutes les variétés de fruits différentes ! Nous sommes ravis de partager avec vous notre passion pour ces délicieuses merveilles de la nature. Êtes-vous prêts à tester vos connaissances sur les expressions françaises qui contiennent des noms de fruits ? Sur notre site, vous trouverez un quizz amusant et instructif pour vous divertir et apprendre de nouvelles expressions en même temps. Que vous soyez fan de pommes, d'abricots, ou de tout autre fruit, nous avons rassemblé les expressions les plus populaires pour votre plaisir. Venez nous rejoindre et testez vos connaissances fruitées dès maintenant ! Chez nous, tout est évidemment 100% bio et savoureux à souhait. </p>
    </div>
    <div class="activites">
        <i-button class="discover" v-on:click="scrollToFruits">La famille ! 🍉</i-button>
        <i-button class="play"  v-on:click="scrollToGame">Jouer ! 🧃</i-button>
    </div>
</template>

<script>
export default {
    name : 'FruitHeader',
    methods:{
        scrollToIntro:function(){
            this.$refs["presentation"].scrollIntoView({ behavior: "smooth" });
        },
        scrollToFruits:function(){
            document.getElementsByClassName("typeFruitsSort")[0].scrollIntoView({ behavior: "smooth" });
        },
        scrollToGame:function(){
            document.getElementsByClassName("myGame")[0].scrollIntoView({ behavior: "smooth" });
        }
    }
}
</script>

<style>

#cover-header {
  background-image: url("../assets/image/banfruit2.jpg");
  background-size:cover;
  background-position: bottom;
  height:100vh;
  background-color: #fefaef;

}

#cover-header h1 {
    color:#000000;
}

#cover-header p {
    color:#000000;
    font-style: italic;
}

#cover-header .button{
    background-color: #FFBD53;
    border : none;
    color:#000000;
    margin-top: 5%;
    font-weight: bold;
    border-radius: 10px;
    padding : 1% 2% 1% 2%;
}

#cover-header .button:hover{
     background-color: #242424;
     color:#fefaef;
}

.presentation{
    width:80%;
    height: fit-content;
    text-align: justify;
    align-content: center;
    margin:auto;
    margin-top : 1%;
    margin-bottom: 1.5%;
}
.presentation h2{
    text-align: center;
    color:#242424;
}

.activites{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.activites .button{
    margin:80px;
    margin-bottom: 100px;
    margin-top: 50px;
    width:200px; 
    border:none;
    border-radius: 10px;
    font-size: 24px;
    color:#242424;
    background-color: #E9E98E	;

}

.activites .button:hover{
    color:white !important;
    background-color:#F08080;
}


</style>

