<template>
   <i-card class="fruit-card" v-show="categoriesSelected.includes(fruitCategory)" > 
    <div class="fruit-image">
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
           // console.log(fruitDatas.photo_url);
            
          
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
.fruit-card{
    height:25px;
    width:300px;
}


.gallery .card > .card-body{
    background: #fefaef;
    color:#242424;
    border:solid;
    border-color: #242424;
    border-radius: 20px;
}
.fruit-image{
    max-width: auto;
    border-radius: 20px;
}
.fruit-image img{
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