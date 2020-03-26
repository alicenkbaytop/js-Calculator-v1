//expressions are taken here
function print(input){   
  document.textField.text.value += input;
}
//calculations
function calculate(process){
  var begin = 0, newNum;
  newNum = eval(document.textField.text.value);
 
  if (process == '+'){
    begin += newNum;
  }
  else if (process == '-'){
    begin -= newNum;
  }
  else if (process == '/'){
    begin /= newNum;
  }
  else if (process == '*'){
    begin *= newNum;
  }
  else{ 
    begin = newNum;
  }
   
  document.textField.text.value = begin;
}
//delete all
function c(){
  document.textField.text.value = '';
}
//backspace 
function back(){
  var output = document.textField.text.value;
  document.textField.text.value = output.substring(0,output.length-1);
}