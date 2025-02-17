const recognition=new(window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang="en-US"

const btn=document.querySelector("#btn")
btn.addEventListener("click",()=>{
    function speak(text){
        const abc = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(abc);
    }
    function handlecommands(command){
        if(command.includes("open youtube")){
           speak("Opening youtube...")
           window.open("http://www.youtube.com","blank") 

        }
        else if(command.includes("open facebook")){
            speak("Opening facebook...")
           window.open("http://www.facebook.com","blank") 
        }
        else if(command.includes("open instagram")){
            speak("Opening instagram...")
           window.open("http://www.instagram.com","blank") 
        } 
        
        else{
            speak("search on youtube...")
        }
    }
    speak("Hello,how can I help you");
    setTimeout(()=>{
        recognition.start();
    },2000);

    recognition.onresult=(event)=>{
        const command=event.results[0][0].transcript.toLowerCase();
        handlecommands(command);

    };

});


