<template>
    <div class="fruits-gallery">
        <div class="classicalTri">
            <i-select
                v-model="selected"
                :options="options"
                :label="renderLabel"
                placeholder="... à toi de choisir !"
>                <template #prepend>
                    <span>Trier mes fruits par</span>
                </template>
        </i-select>
        </div>
            <div class="gallery">
                <div class="cards">
                    <FruitCard
                        v-for="fruit in sortMyFruits"
                        v-bind:key="fruit.product_url"
                        v-bind:product_url="fruit.product_url"
                        v-bind:fruit="fruit.name"
                        v-bind:categoriesSelected="categoriesSelected"
                        v-bind:catt="fruit.fruitCategory"
                    />
                    <ScrollToTopButton />
                </div>
        </div> 
    </div>

</template>

<script>


import FruitCard from './FruitCard.vue';
import ScrollToTopButton from './ScrollToTopButton.vue';
import { getFruitDataName,getFruitCategory, getFruitAllDatas} from '@/services/api/fruitAPI';

export default {
    name : 'FruitsGallery',
    components :{
        FruitCard,
        ScrollToTopButton,
    },
    props:{
        categoriesSelected:{type:Array},
        catt:{type:String},
    },
    data(){
        return{
            fruitsName:[],
            selected:1,
            options:[
                {id:1, label:"Tri par défaut"},
                {id:2, label:"Trier les fruits par ordre alphabétique"},
                {id:3, label:"Trier les fruits par ordre alphabétique inverse"},

            ]
        }
    },
    computed:{
        sortMyFruits:function(){
            // Je copie mes fruits
            let tempFruits=[...this.fruitsName];
            // Trier en fonction de la volonté
            tempFruits=tempFruits.sort((a,b) => {
            
                 //Tri par ordre alphabetique des fruits
                if(!this.selected || this.selected.id===4){
                    return a.name.localeCompare(b.name,'en')
                }

                //Tri par ordre alphabetique inverse des fruits
                if(!this.selected || this.selected.id===5){
                    return b.name.localeCompare(a.name,'en')
                }
            })
            console.log(tempFruits)
            return tempFruits
        }
    },
    created(){
        this.recupFruitName();
        this.recupFruitCategory();
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
        async recupFruitCategory(){
            let fruitDatas=await getFruitAllDatas(this.product_url);
            let fruitCategory=await getFruitCategory("https://api.predic8.de"+fruitDatas.category_url);
            this.fruitCategory=fruitCategory.name;
        },
        }
        
    }


</script>
<style>
html{
    background-color: #fefaef;
}

.gallery{
    margin:0px 80px 0px 80px ;
    align-items: center;
    display: flex;
}

.gallery .cards{
    display:flex;
    flex-direction:row;
    justify-content: space-evenly;
    align-content: center;
    flex-wrap: wrap;
    gap:400px 0px;
    flex-grow: 3;
    margin-bottom: 400px;
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
    background-color: #FFBD53;
}


</style>