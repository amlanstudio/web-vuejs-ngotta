<template>
    <div class="fruits-gallery">
        <div class="typeFruitsTri">
            <h3>Dans ma salade de fruit il y a ...</h3>
            <div class="choiceButton">
                <i-button v-on:click="toggleCards(['Fresh','Fruits'])">Fruits frais</i-button>
                <i-button v-on:click="toggleCards(['Exotic'])">Fruits exotiques</i-button>
                <i-button v-on:click="toggleCards(['Dried'])">Fruits secs</i-button>
                <i-button v-on:click="toggleCards(['Nuts'])">Noix</i-button>
            </div>
            </div>
        <div class="classicalTri">
            <i-select
                v-model="selected"
                :options="options"
                label="name"
                placeholder="... des fruits !"
>                <template #prepend>
                    <span>Trier mes fruits par</span>
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
                        v-bind:categoriesSelected="categoriesSelected"
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
            categoriesSelected:[],
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

            toggleCards:function(category){
            for(let i=0; i<category.length;i++){ //pour chaque element present dans category
                    //si category est deja dans cat selected alors tu l'enleves de cat selected
                    if(this.categoriesSelected.includes(i)){
                        this.categoriesSelected.filter((cat) => cat !== i);
                    }else{
                    //si category est pas dans cat selected tu mets dans cat selected
                        this.categoriesSelected.push(i);
                    }
            }
        }
        

        }
        
    }
</script>
<style>
html{
    background-color: #fefaef;
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

.classicalTri{
    width:80%;
    margin:auto;
    margin-bottom: 3%;
    margin-top: 3%;

}

.choiceButton .button{
    margin: 20px;
    width:150px;
    border:none;
    border-radius: 10px;
    background-color: #242424;
    color:#fefaef;
}

.choiceButton .button:hover{
    background-color: #FFBD53;
}

.choiceButton{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

</style>