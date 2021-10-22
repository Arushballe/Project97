function pronounce()
{
   word = document.getElementById("word").value;
   console.log(word);
   speak();
}

function speak()
{
    var synth = window.speechSynthesis;

    speak_data = word;
 
    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
}