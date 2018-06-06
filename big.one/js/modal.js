


function open_modal() {
	var ref_modal= document.getElementById('modal');
	var ref_body=document.getElementById('body');
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
		
		var ref_modal= document.getElementById('form');
		var ref_modal2= document.getElementsByClassName("modal-succes");
		ref_modal.style.display="none";
		ref_modal2[0].style.display="block";

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



