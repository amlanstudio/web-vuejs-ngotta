const getFruitDataName = async function(){
    const response=await fetch("https://api.predic8.de/shop/products/?limit=300");
    if(response.status==200){
       // console.log(await response.json());
        return response.json();
    }else{
        new Error(response.statusText)
    }
    console.log(response.status);
}

const getFruitAllDatas = async function(url){
    const response=await fetch("https://api.predic8.de"+url);
    if(response.status==200){
       // console.log(await response.json());
        return response.json();
    }else{
        new Error(response.statusText)
    }
    console.log(response.status);
}

const getFruitCategory = async function(cat_url){
    const response=await fetch(cat_url);
    if(response.status==200){
       // console.log(await response.json());
        return response.json();
    }else{
        new Error(response.statusText)
    }
    console.log(response.status);
}


// const questions=ref([
//     {
//         question : 'Avoir les yeux légèrement bridés, c est avoir les yeux en ...',
//         answer : 0,
//         options : [
//             'amande',
//             'banane',
//             'ananas',
//             'noisette'
//         ],
//         selected:null
//     },
//     {
//         question : 'Être trop naïf et se faire avoir, c est être une bonne ...',
//         answer : 2,
//         options : [
//             'pêche',
//             'fraise',
//             'poire',
//             'figue'
//         ],
//         selected:null
//     },
//     {
//         question : 'Être en forme, avoir le sourire, c est avoir la ...',
//         answer : 3,
//         options : [
//             'poire',
//             'framboise',
//             'mangue',
//             'banane'
//         ],
//         selected:null
//     },
    
// ])

// const quizzCompleted=ref('false')
// const currentQuestion=ref(0)
// const score=computed(()=>{
//     let value=0
//     questions.value.map(q=>{
//         if(q.selected==q.answer){
//             value++
//         }
//     })
//     return value
// })

// const getCurrentQuestion=computed(()=>{
//     let question=questions.value[currentQuestion.value]
//     question.index=currentQuestion.value
//     return question
// })

// const setAnswer= event =>{
//     questions.value[currentQuestion.value].selected=event.target.value
//     event.target.value=null
// }

// const NextQuestion=()=>{
//     if (currentQuestion.value<questions.value.length-1){
//         currentQuestion.value++
//     }else{
//         quizzCompleted.value=true
//     }
// }

// import{ref,computed} from 'vue'
// export {getFruitDataName,getFruitAllDatas, getFruitCategory, questions, quizzCompleted,currentQuestion,score,getCurrentQuestion,setAnswer,NextQuestion};
export {getFruitDataName,getFruitAllDatas, getFruitCategory};


