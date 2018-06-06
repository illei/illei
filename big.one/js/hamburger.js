var ham = document.getElementById('hamburger');
var button = document.getElementById('ham');
var button1 = document.getElementById('ham1');
var ref_nav = document.getElementById('navbar');
var ref_body= document.getElementById('body');
var ref_empty= document.getElementById('empty-hamburger')

function show() {



	
	ham.style.display="block";
	button.style.display="none";
	button1.style.display="block";
	//ref_body.style.overflow="hidden";
	ref_empty.style.display="block";
	
}

function close_ham(){
	

	ham.style.display="none";
	button1.style.display="none";
	button.style.display="block";
	ref_body.style.overflow="scroll";
	ref_empty.style.display="none";
}

