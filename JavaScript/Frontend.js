//Popup Contact Form


//Validating All Fields
function input_fields(){
	if(document.getElementById('name').value==""|| document.getElementById('email').value=="" || document.getElementById('msg').value==""){
		alert("Please Complete All Fields to Continue...");
	}
	
	else{
	document.getElementById('form').sumbit();
	alert("Message Sent Successfully...");

	}
}
//Display Contact form

function show_form(){
	document.getElementById('MessageBox').style.display = "block";
}

//Close Contact Form

function close_form(){
	document.getElementById('MessageBox').style.display = 'none';
}

/* Audio Player */
function playclip()
{
   if(navigator.appName == "Microsoft internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) ||
   (navigator.appVersion.indexOf("MSIE 8")!=-1))
   {
      if(document.all)
      {
         document.all.sound.src="/Users/willkory/Documents/Web Designs/Udemy - Frontend Responsive Website 2020/Front End Complete/Audio/audios/Jingle-Bells.mp3";
      }
   }
   else 
   {
      var audio = document.getElementsByTagName("audio")[0];
      audio.play();
   }
}
