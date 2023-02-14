<template>
    <div class="oui">
        <i-header id="cover-header" cover class="_text-align:center _color:white">
            <h1>BIENVENUE CHEZ LES FRUITZS</h1>
            <p>Une application qui à la pêche et qui va te donner la banane !</p>
            <i-button color="primary">Ramène ta fraise !</i-button>
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
  background-image: url("../assets/fruits.jpg");
}
</style>