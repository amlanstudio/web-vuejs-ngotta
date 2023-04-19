<template>
    <div class="banniere">
        <i-header id="cover-header" cover class="_text-align:center _color:white">
            <h1>BIENVENUE CHEZ LES FRUITZS</h1>
            <p>L'application qui a la 🍑 et qui va te donner la 🍌 ! </p>
            <i-button class="enter" color="primary" v-on:click="scrollIntro">RAMÈNE TA FRAISE ! 🍓</i-button>
        </i-header>
    </div>
    <div class="presentation" ref="prez">
            <h2> Qui sommes-nous ?</h2>
            <p>Bla bla bla, nous somme une grande famille, la famille des fruits, les fructus ! Sur cette app, tu vas découvrir toutes les variétés de fruits différentes ! Bla bla bla, nous somme une grande famille, la famille des fruits, les fructus ! Sur cette app, tu vas découvrir toutes les variétés de fruits différentes ! Bla bla bla, nous somme une grande famille, la famille des fruits, les fructus ! Sur cette app, tu vas découvrir toutes les variétés de fruits différentes ! Bla bla bla, nous somme une grande famille, la famille des fruits, les fructus ! Sur cette app, tu vas découvrir toutes les variétés de fruits différentes ! Bla bla bla, nous somme une grande famille, la famille des fruits, les fructus ! Sur cette app, tu vas découvrir toutes les variétés de fruits différentes ! Bla bla bla, nous somme une grande famille, la famille des fruits, les fructus ! Sur cette app, tu vas découvrir toutes les variétés de fruits différentes ! Bla bla bla, nous somme une grande famille, la famille des fruits, les fructus ! Sur cette app, tu vas découvrir toutes les variétés de fruits différentes !  </p>
    </div>
</template>

<script>
export default {
    name : 'FruitHeader',
    methods:{
        scrollIntro:function(){
            this.$refs["prez"].scrollIntoView({ behavior: "smooth" });
        }
    }
}

// document.getElementsByClassName("enter").addEventListener('click', () => {
//     document.getElementsByClassName("presentation").scrollIntoView({ behavior: 'smooth' });

// });
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
}


</style>

