<template>
    <main class="myGame">
        <h2>Le quizz fruité !</h2>
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
                    @change="setAnswer">

                <span>{{ option }}</span>
                </label>
            </div>
            <button
                @click="NextQuestion"
                :disabled="!getCurrentQuestion.selected">
                {{ 
                getCurrentQuestion.index==questions.length-1
                    ? 'Finish'
                    :getCurrentQuestion.selected==null  
                        ? 'Select an option'
                        :'Next Question'
                 }}
            </button>
        </section>
        <section v-else>
            <h2>Le quizz est terminé !</h2>
            <p>Votre score est {{ score }}/{{ questions.length}}</p>
        </section>
    </main>
</template>

<script>
import{ref,computed} from 'vue';

const questions=ref([
    {
        question : 'Avoir les yeux légèrement bridés, c est avoir les yeux en ...',
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
        question : 'Être trop naïf et se faire avoir, c est être une bonne ...',
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
        question : 'Être en forme et plein d energie, c est avoir la ...',
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
        question : 'Avoir le sourire, c est avoir la ...',
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
        question : 'S évanouir c est tomber dans les ...',
        answer : 3,
        options : [
            'oranges',
            'pommes',
            'mûres',
            'poires'
        ],
        selected:null
    },
    
])

const quizzCompleted=ref('false')
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

const setAnswer= event =>{
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
        setAnswer,        
    }
    }

</script>

<style>

.myGame{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    min-height: 100vh;
    margin-top: 1000px;
}

h2{
    font-size: 2rem;
    margin-bottom: 2rem;
}

.quizz{
    background-color: #FFBD53;
    padding:1rem;
    width:100%;
    max-width:640px;

}

</style>