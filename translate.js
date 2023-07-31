const AmharicText = document.querySelectorAll(".amharic_text");
const EnglishText = document.querySelectorAll('.english_text');
const ButtonLabel = document.querySelectorAll('.testimony_button');



let translateLanguage = function(){
var language = '';
    ButtonLabel.forEach(label =>{
       // console.log(label.innerHTML)
        language=label.innerHTML;
        if(label.innerHTML == 'English'){
            label.innerHTML = 'Amharic';
        }else if(label.innerHTML == 'Amharic'){
            label.innerHTML = 'English';
        }
    })
   
   // console.log('the language is now: '+ language);
   
    if(language == 'Amharic'){
       // console.log('language is now Amharic')
        AmharicText.forEach(text => {
            text.style.display = 'block';
          });
          EnglishText.forEach(text => {
            text.style.display = 'none';    
          });
    }
else if(language == 'English'){
  //  console.log('language is now English')
    AmharicText.forEach(text => {
        text.style.display = 'none';
        
      });
      EnglishText.forEach(text => {
        text.style.display = 'block';
        
      });
}
   
   // EnglishText.style.display = 'block';
}

