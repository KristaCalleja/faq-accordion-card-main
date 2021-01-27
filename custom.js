let question = document.getElementsByClassName('question');
let answer = document.getElementsByClassName('answer');

for (let index = 0; index < question.length; index++){
  question[index].addEventListener('click', drop); 

  function drop() {
    question[index].classList.toggle('active');

    if (answer[index].style.display != 'block'){
      answer[index].style.display = 'block';
    } else {
      answer[index].style.display = 'none';
    }
  }
}