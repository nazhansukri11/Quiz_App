const quizData=[
    {
        question:'Which team will win World Cup 2022',
        a:'Brazil',
        b:'Argentina',
        c:'France',
        d:'England',
        correct: 'd'
    },
    {
        question:'Who will win top scorer in World Cup 2022',
        a:'Messi',
        b:'Ronaldo',
        c:'Mbappe',
        d:'Benzema',
        correct: 'd'
    },
    {
        question:'Who will win top assist in World Cup 2022',
        a:'De Bruyne',
        b:'Di Maria',
        c:'Pedri',
        d:'Guandozi',
        correct: 'c'
    },
    {
        question:'Who will win top keeper in World Cup 2022',
        a:'Lorris',
        b:'Martinez',
        c:'Courtois',
        d:'Allison',
        correct: 'a'
    },
    {
        question:'Who will win top player in World Cup 2022',
        a:'De Bruyne',
        b:'Messi',
        c:'Ronaldo',
        d:'Muller',
        correct: 'd'
    }
];


const questionEl=document.getElementById('question');
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const btnSubmit=document.getElementById('btnSubmit');

let currentQuiz=0;
function loadQuiz(){
        const currentQuizData=quizData[currentQuiz];

    questionEl.innerText=currentQuizData.question;

    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;

}
loadQuiz();


btnSubmit.addEventListener("click",()=>{
    currentQuiz++;
    if(currentQuiz<quizData.length){
        loadQuiz();
    }
    else{
        alert("You answer all the question")
    }
});