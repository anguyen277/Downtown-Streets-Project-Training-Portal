function check() {
    var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var result=document.getElementById('result');
    var quiz=document.getElementById("quiz");
    if (q1=="Yes") {c++}
    if (q2=="Earth") {c++}
    if (q3=="SJSU") {c++}
    if (q4=="Blue") {c++}
    if (q5=="Yes") {c++}
    quiz.style.display="none";

        if (c<=3) {
            result.textContent="Your result is " + c + ". You scored 60 percent or less. Please retry."
        } else {
            result.textContent="Your result is " + c + ". You scored 80 percent or more. You have passed!"
        }
}
