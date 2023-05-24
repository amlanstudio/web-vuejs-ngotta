<template>
    <main class="myGame">
        <h2 class="gameTitle">Le quizz fruité !</h2>
        <section class="quizz" v-if="!quizzCompleted">
            <div class="quizzInfo">
                <span class="question">{{ getCurrentQuestion.question }}</span>
                <span class="score">Score {{ score }}/{{ questions.length }}</span>
            </div>
            <div class="options">
                <label 
                    v-for="(option,index) in getCurrentQuestion.options"
                    :key="index"
                    :class="`option ${
                        getCurrentQuestion.selected==index
                            ? index==getCurrentQuestion.answer   
                                ? 'correct'
                                :'wrong'
                            :'' 
                    } ${
                        getCurrentQuestion.selected != null &&
                        index != getCurrentQuestion.selected
                            ? 'disabled'
                            :''
                    }`">

                    <input type="radio"
                    :name="getCurrentQuestion.index"
                    :value="index"
                    v-model="getCurrentQuestion.selected"
                    :disabled="getCurrentQuestion.selected"
                    @change="SetAnswer">

                <span>{{ option }}</span>
                </label>
            </div>
            <button
                @click="NextQuestion"
                :disabled="!getCurrentQuestion.selected">
                {{ 
                getCurrentQuestion.index==questions.length-1
                    ? 'Terminer'
                    :getCurrentQuestion.selected==null  
                        ? 'Choisir une réponse'
                        :'Prochaine question'
                 }}
            </button>
        </section>
        <section class="endQuizz" v-else>
            <h2>Le quizz est terminé !</h2>
            <p>Votre score est {{ score }}/{{ questions.length}}</p>
            <button v-on:click="ResetQuizz">Recommencer le Quizz</button>
        </section>
    </main>
</template>

<script>
import{ref,computed} from 'vue';

const questions=ref([
    {
        question : '1/5 - Avoir les yeux légèrement bridés, c\'est avoir les yeux en ...',
        answer : 0,
        options : [
            'amande',
            'banane',
            'ananas',
            'noisette'
        ],
        selected:null
    },
    {
        question : '2/5 - Être trop naïf et se faire avoir, c\'est être une bonne ...',
        answer : 2,
        options : [
            'pêche',
            'fraise',
            'poire',
            'figue'
        ],
        selected:null
    },
    {
        question : '3/5 - Être en forme et plein d\'energie, c\'est avoir la ...',
        answer : 3,
        options : [
            'poire',
            'framboise',
            'mangue',
            'pêche'
        ],
        selected:null
    },
    {
        question : '4/5 - Avoir le sourire, c\'est avoir la ...',
        answer : 2,
        options : [
            'poire',
            'framboise',
            'banane',
            'fraise'
        ],
        selected:null
    },
    {
        question : '5/5 - S\'évanouir c\'est tomber dans les ...',
        answer : 1,
        options : [
            'oranges',
            'pommes',
            'mûres',
            'poires'
        ],
        selected:null
    },
    
])

const quizzCompleted=ref(false)
const currentQuestion=ref(0)
const score=computed(()=>{
    let value=0
    questions.value.map(q=>{
        if(q.selected==q.answer){
            value++
        }
    })
    return value
})

const getCurrentQuestion=computed(()=>{
    let question=questions.value[currentQuestion.value]
    question.index=currentQuestion.value
    return question
})

const SetAnswer= event =>{
    questions.value[currentQuestion.value].selected=event.target.value
    event.target.value=null
}

const NextQuestion=()=>{
    if (currentQuestion.value<questions.value.length-1){
        currentQuestion.value++
    }else{
        quizzCompleted.value=true
    }
}

const ResetQuizz=()=>{
    questions.value.forEach((question) => {
    question.selected = null;
    });
    currentQuestion.value = 0;
    quizzCompleted.value = false;
}

export default {
    name : 'FruitGame',
    data(){
        return{
        score,
        questions,
        quizzCompleted,
        currentQuestion,
        getCurrentQuestion,
        }
    },
    methods:{
        NextQuestion,
        SetAnswer,
        ResetQuizz,
    },
}



</script>

<style>

.myGame{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #242424;
    height: 700px;
    justify-content: space-evenly;
}

.gameTitle{
    font-size: 2rem;
    color:#fefaef !important;
}

.endQuizz{
    color:#fefaef;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.endQuizz h2{
    font-size: 2rem;
    background-color: #FFBD53;
    padding:1rem;
    border-radius:8px;
}

.endQuizz button{
    appearance: none;
    outline: none;
    border :none;
    cursor: pointer;
    padding: 0.5rem 1rem;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.25rem;
    border-radius: 0.5rem;
    margin-top: 30px !important;
}

.endQuizz button:hover{
    background-color: #E9E98E;
}


.quizz{
    width: 100%;
    padding: 2rem;
    max-width: 840px;
    color:white;
    border-radius: 0.5rem;
}

.quizzInfo{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.quizzInfo .question{
    color:#FEFAEF;
    font-size: 1.25rem;
}

.quizzInfo .score{
    color: #E9E98E;
    font-size: 1.25rem;
    font-weight: 800;
}

.options{
    margin-bottom: 1rem;
}

.option{
    display: block;
    padding:1rem;
    background-color: #fefaef;
    color:#242424;
    margin-bottom: 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    font-weight: 700;
}

.option:hover{
    background-color: #FFBD53;
}

.option.correct{
    background-color: #E9E98E;
}

.option.wrong{
    background-color: #F08080;
}

.option:last-of-type{
    margin-bottom: 0;
}

.option.disabled{
    opacity: 0.5;
}

.option input{
    display: none;
}

button{
    appearance: none;
    outline: none;
    border :none;
    cursor: pointer;
    padding: 0.5rem 1rem;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.25rem;
    border-radius: 0.5rem;
    margin-top: 30px !important;

}

</style>