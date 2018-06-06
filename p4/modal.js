var user="illei.adrian@yahoo.com";
var pass="Tehnologia_inf";
var ref_user= document.getElementById('user');
var ref_pass= document.getElementById('pass');



function open_modal() {
	var ref_modal= document.getElementById('modal');
	ref_modal.style.display="block";
}

function close_modal() {
	var ref_modal= document.getElementById('modal');
	ref_modal.style.display="none";

}

function verifica_user(sir)
{
	if(sir.match(user)){
		return true;
	
	}
	return false;
}

function verifica_pass(sir)
{
	if(sir.match(pass)){
		return true;
	
	}
	return false;
		}


function log_in(){
	if(verifica_user(ref_user.value) && verifica_pass(ref_pass.value)){
		
		var ref_modal= document.getElementsByClassName('modal');
		
		ref_modal.style.display="none";
		

	}

	else{
		alert("User sau Parola gresita");
	}
}

function reveal(){
	ref_pass.type="text";

}

function hide(){
	ref_pass.type="password";
}



