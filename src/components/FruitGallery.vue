<template>
    <div class="fruits-gallery">
        <div class="typeFruitsTri" ref="fruitSalad">
            <h3>Dans ma salade de fruits il y a ...</h3>
            <div class="choiceButton">
                <i-button :class="{'isSelected':categoriesSelected.includes('Fresh','Fruits')}" @click="toggleCards(['Fresh','Fruits'])" >Fruits frais</i-button>

                <i-button :class="{'isSelected':categoriesSelected.includes('Exotic')}" @click="toggleCards(['Exotic'])">Fruits exotiques</i-button>
                
                <i-button :class="{'isSelected':categoriesSelected.includes('Dried')}"  @click="toggleCards(['Dried'])" >Fruits secs</i-button>

                <i-button  :class="{'isSelected':categoriesSelected.includes('Nuts')}" @click="toggleCards(['Nuts'])" >Noix</i-button>
            </div>
            </div>
        <div class="classicalTri">
            <i-select
                v-model="selected"
                :options="options"
                label="name"
                placeholder="... à toi de choisir !"
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
            categoriesSelected:['Fresh','Fruits','Exotic','Dried','Nuts'],
            selected:null,
            options:[
                {id:1, label:"coucou"},
                {id:2, label:"hello"},
                {id:3, label:"hola"},
            ]
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

            toggleCards(category){
            this.active=!this.active; 
            for(let i=0; i<category.length;i++){ 
                if(this.categoriesSelected.includes(category[i])){
                    this.categoriesSelected=this.categoriesSelected.filter((cat) => cat !== category[i]); 
                }else{
                       this.categoriesSelected.push(category[i]);
                    //    this.categoriesSelected[i] = category[i];
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
    color:#fefaef;

}

.classicalTri .input-wrapper .input-prepend{
    background-color: #242424;
}

.classicalTri .select-wrapper .input-wrapper .input-suffix > .select-caret{  
    background-color: #242424;
}

.select .select-options{
    background-color: red !important;
}

.choiceButton .button{
    margin: 20px;
    width:150px;
    border:none;
    border-radius: 10px;
    background-color: #242424;
    color:#fefaef;
   
}


.choiceButton{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.isSelected{
    background-color: #FFBD53 !important;
    color:#242424 !important;
}

</style>