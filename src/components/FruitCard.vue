<template>
   <i-card class="fruitCard" v-show="categoriesSelected.includes(fruitCategory)">
    <div class="fruitImage">
        <img v-bind:src="urlFruitPicture"/>
    </div>
    <h2 class="name">{{ fruit }}</h2>

    <div class="details">
       <p class="family">
            <strong>Catégorie : </strong>{{ fruitCategory }}
       </p>
<!-- si cat selected est vide, tu affiches tout le monde -->
    </div>   
</i-card>
</template>



<script>
import {getFruitAllDatas, getFruitCategory} from '@/services/api/fruitAPI';
export default {
    name : 'FruitCard',
    props:{
        product_url:{type :Int16Array},
        fruit:{type :String},
        categoriesSelected:{type:Array},
    },data(){
        return{
        fruitDatas:[],
        fruitCategory:"",
        urlFruitPicture:"",
        }
    },created(){
        this.recupFruitDatas();
    },
    methods:{
        async recupFruitDatas(){
            let fruitDatas=await getFruitAllDatas(this.product_url);
            let fruitCategory=await getFruitCategory("https://api.predic8.de"+fruitDatas.category_url);
            this.fruitCategory=fruitCategory.name;
          
            if(fruitDatas.photo_url != undefined){
                this.urlFruitPicture="https://api.predic8.de"+fruitDatas.photo_url;
            }
            else{
                try{
                require("https://api.predic8.de"+fruitDatas.photo_url);
            }catch(error){
                this.urlFruitPicture= require("../assets/image/oops.png");
                return;
            }
            this.urlFruitPicture= "https://api.predic8.de"+fruitDatas.photo_url;
            }
          
        },
        
    }
}
</script>


<style>
.fruitCard{
    height:25px;
    width:300px;
}

.fruitCard:hover{
    zoom:120%;
}

.gallery .card > .card-body{
    background: #fefaef;
    color:#242424;
    border:none;
    /* border-color: #242424; */
    border-radius: 20px;
    background-color: white;
    box-shadow: 1px 2px 5px 2px rgba(0, 0, 0, 0.2);
    
}
.fruitImage{
    max-width: auto;
    border-radius: 20px;
}
.fruitImage img{
    max-width:100%;
    border-radius: 20px;
}

.details{
    text-align: center;
}
.nutrition{
    text-align: left;
}
.h4{
    text-align: center;
}

</style>