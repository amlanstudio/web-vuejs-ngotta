<template>
<div class="typeFruitsTri">
    <h3>Dans ma salade de fruits il y a ...</h3>
    <div class="choiceButton">
        <i-button :class="{'isSelected':categoriesSelected.includes('Fresh','Fruits')}" @click="toggleCards(['Fresh','Fruits'])" >Fruits frais</i-button>

        <i-button :class="{'isSelected':categoriesSelected.includes('Exotic')}" @click="toggleCards(['Exotic'])">Fruits exotiques</i-button>
        
        <i-button :class="{'isSelected':categoriesSelected.includes('Dried')}"  @click="toggleCards(['Dried'])" >Fruits secs</i-button>

        <i-button  :class="{'isSelected':categoriesSelected.includes('Nuts')}" @click="toggleCards(['Nuts'])" >Noix</i-button>
    </div>
    </div>
</template>

<script>

export default {
    name : 'ButtonSort',
    data(){
        return{
            fruitsName:[],
            categoriesSelected:['Fresh','Fruits','Exotic','Dried','Nuts'],
            selected:null,
        }
    },
    methods:{
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
            this.$emit("update:categoriesSelected",this.categoriesSelected)
        },
        }
        
    }
    </script>

<style>

.choiceButton .button{
    margin: 20px;
    width:150px;
    border:none;
    border-radius: 10px;
    background-color: #242424;
    color:#fefaef !important;
   
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