// console.log('test');

let question = document.getElementsByClassName('accordion-question');
let answer = document.getElementsByClassName('accordion-content');

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