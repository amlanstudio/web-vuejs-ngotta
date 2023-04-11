<template>
    <div class="fruits-gallery">
        <div class="presentation">
            <h2> Qui sommes-nous ?</h2>
            <p>Bla bla bla, nous somme une grande famille, la famille des fruits, les fructus ! Sur cette app, tu vas découvrir toutes les variétés de fruits différentes ! Bla bla bla, nous somme une grande famille, la famille des fruits, les fructus ! Sur cette app, tu vas découvrir toutes les variétés de fruits différentes ! Bla bla bla, nous somme une grande famille, la famille des fruits, les fructus ! Sur cette app, tu vas découvrir toutes les variétés de fruits différentes ! Bla bla bla, nous somme une grande famille, la famille des fruits, les fructus ! Sur cette app, tu vas découvrir toutes les variétés de fruits différentes ! Bla bla bla, nous somme une grande famille, la famille des fruits, les fructus ! Sur cette app, tu vas découvrir toutes les variétés de fruits différentes ! Bla bla bla, nous somme une grande famille, la famille des fruits, les fructus ! Sur cette app, tu vas découvrir toutes les variétés de fruits différentes ! Bla bla bla, nous somme une grande famille, la famille des fruits, les fructus ! Sur cette app, tu vas découvrir toutes les variétés de fruits différentes !  </p>
        </div>
        <div class="tri">
            <i-select
                v-model="selected"
                :options="options"
                label="name"
                placeholder="... des fruits !"
>
                <template #prepend>
                    <span>Dans ma salade de fruits, il y a...</span>
                </template>
        </i-select>
        </div>
            <div class="gallery">
                <div class="cards">
                    <FruitCard
                        v-for="fruit in fruitsName"
                        v-bind:key="fruit.name"
                        v-bind:product_url="fruit.product_url"
                        v-bind:fruit="fruit.name"
                    />
                </div>
        </div>        
    </div>

</template>

<script>
import FruitCard from './FruitCard.vue';
import { getFruitDataName} from '@/services/api/fruitAPI';

export default {
    name : 'FruitsGallery',
    components :{
        FruitCard
    },
    data(){
        return{
            fruitsName:[],
        }
    },
    created(){
        this.recupFruitName();
    },
    methods:{
        async recupFruitName(){
            this.fruitsName=await getFruitDataName();
            this.fruitsName = this.fruitsName.products;   
            if(this.fruitsName.includes("Kochkurs für Studenten")){
                var cards = document.getElementsByClassName("card");
                for(var i = 0; i < cards.length; i++) {
                    cards[i].style.backgroundColor = 'red';
            }
}

            },
        }
        
    }
</script>
<style>
html{
    background-color: #fefaef;
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

.gallery{
    margin:auto;
    align-items: center;
    margin-bottom: 1.5%;
    display: flex;
    
}

.gallery .cards{
    display:flex;
    flex-direction:row;
    justify-content: space-evenly;
    align-content: center;
    flex-wrap: wrap;
    gap:450px 0px;
    flex-grow: 3;
}

.tri{
    width:80%;
    margin:auto;
    margin-bottom: 3%;
    margin-top: 3%;

}

</style>