<template>
    <div class="oui">
        <i-header id="cover-header" cover class="_text-align:center _color:white">
            <h1>BIENVENUE CHEZ LES FRUITZS</h1>
            <p>L'application qui a la 🍑 et qui va te donner la 🍌 ! </p>
            <i-button color="primary">RAMÈNE TA FRAISE ! 🍓</i-button>
        </i-header>
    </div>
</template>

<script>
export default {
    name : 'FruitHeader'
}
</script>

<style>

#cover-header {
  background-image: url("../assets/banfruit2.jpg");
  background-size:cover;
  background-position: bottom;
  height:820px;
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
    margin-top: 3%;
    font-weight: bold;
    border-radius: 10%;
    padding : 1% 2% 1% 2%;
}


</style>