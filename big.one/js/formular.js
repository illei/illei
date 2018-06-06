/*asignari*/
	var ref_nume = document.getElementById("nume");
	var ref_prenume = document.getElementById("prenume");
	var ref_adresa = document.getElementById("adresa");
	var ref_telefon= document.getElementById("telefon");
	var ref_email= document.getElementById("email");
	var ref_data= document.getElementById("data");
	var ref_culoare=document.getElementById("culoare");
	var ref_oras=document.getElementById("oras");

	var tablou1=["Campul nume este incorect completat","Campul prenume este incorect completat"," Campul Adresa este incorect completat","Campul Oras este incorect completat"," Campul Data nasteri este incorect completat"," Campul Numarul de telefon este incoret completat"," Campul E-mail este incorect completat"];
	var tablou2=[false,false,false,false,false,false,false];
	
	
	

	/*functia pentru nume*/
function verifica_nume() 
{
    
    if (ref_nume.value.length < 3 || areNumar(ref_nume.value)|| areSimbol(ref_nume.value)) 
    {
    ref_nume.style.backgroundColor="#FFA500";
    tablou2[0]=false;
    return false;

    

    
	}

	else{
		ref_nume.style.backgroundColor="#FFFFFF";
		tablou2[0]=true;
		return true;

	

	}

}

	/*functia pentru prenume*/
function verifica_prenume() 
{
    
    if (ref_prenume.value.length < 3 || areNumar(ref_prenume.value)|| areSimbol(ref_prenume.value)) 
    {
    ref_prenume.style.backgroundColor="#FFA500";
    tablou2[1]=false;
    return false;
    
	}

	else{
		ref_prenume.style.backgroundColor="#FFFFFF";
		tablou2[1]=true;
    	return true;
	
	}

  
}

function verifica_adresa() 
{
    
    if (ref_adresa.value.length < 3 || !areNumar(ref_adresa.value)|| areSimbol(ref_adresa.value) || cateLitere(ref_adresa.value)<3) 
    {
    ref_adresa.style.backgroundColor="#FFA500";
    tablou2[2]=false;
    return false;
    

	}

	else{
		ref_adresa.style.backgroundColor="#FFFFFF";
		tablou2[2]=true;
    	return true;
	

	}

  
}

function verifica_oras()
{
	 if (ref_oras.value.length < 3 || areNumar(ref_oras.value)|| areSimbol(ref_oras.value)) 
    {
    ref_oras.style.backgroundColor="#FFA500";
    tablou2[3]=false;
    return false;

    

    
	}

	else{
		ref_oras.style.backgroundColor="#FFFFFF";
		tablou2[3]=true;
		return true;

	

	}


}

function verifica_data()
{
	if(dataNasterii(ref_data.value) )
	{
		
		ref_data.style.backgroundColor="#FFFFFF";
		tablou2[4]=true;
    	return true;

	}
	
	else{
	ref_data.style.backgroundColor="#FFA500";
		tablou2[4]=false;
    return false;	
	}

}

function verifica_telefon()
{
	if(ref_telefon.value.length <10 ||areLitere(ref_telefon.value) || areSimbol(ref_telefon.value)){
		ref_telefon.style.backgroundColor="#FFA500";
		tablou2[5]=false;
    return false;	

		
	}
	else
	{
		ref_telefon.style.backgroundColor="#FFFFFF";
		tablou2[5]=true;
    	return true;
	
	}
}

function verifica_email()
{
	if(!validareEmail(ref_email.value))
	{
		ref_email.style.backgroundColor="#FFA500";	
		tablou2[6]=false;
    	return false;	
		
	}
	else{
		ref_email.style.backgroundColor="#FFFFFF";
		tablou2[6]=true;
    	return true;
	
	}

}





	/*functia  pt numere*/
function areNumar(sir)
{

	var cifre="1234567890";
	for (var i=0;i<sir.length;i++) 
	{
	 	for (var j=0;j<cifre.length;j++) 
	 	{
	 			if (sir.includes(cifre.charAt(j))) {
	 				return true;
	 			}
	 	
	 	}	
	 
	 } 
	 return false;

}

function dataNasterii (sir){

	var regex =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
	for (var i =0;i<sir.length ; i++) {
	if(regex.test(sir)){
		return true;
	}
}

}

	/*functia  pt simboluri*/
function areSimbol(sir)
{

	var simboluri="!@#$%^&*()_+=<>?|";
	for (var i =0;i<sir.length ; i++) 
	{
	 	for (var j = 0;j<simboluri.length ; j++) 
	 	{
	 			if (sir.includes(simboluri.charAt(j))) {
	 				return true;
	 			}
	 	
	 	}	
	 
	 } 
	 return false;
}




/*Verificare pentru email*/


function areLitere(sir){
	var alfabet="qwertyuiopasdfghjklzxcvbnm";
	for(i=0;i<sir.length;i++)
	{
		for(j=0;j<alfabet.length;j++)
		{
			if(sir.includes(alfabet.charAt(j)))
			{
				return true;
			}

		}
	}
		return false;
}

function validareEmail (sir){
	var regex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	for (var i =0;i<sir.length ; i++) {
	if(regex.test(sir)){
		return true;
	}
}


}


function cateLitere(sir)
{
	var x=0;
	var alfabet="qwertyuiopasdfghjklzxcvbnm";
	for(i=0;i<sir.length;i++)
	{
		for(j=0;j<alfabet.length;j++){
			if(sir.includes(alfabet.charAt(j))){
				x++;
			}

		}
	}
	return x;
}

function cateCifre(sir)
{
	var x=0;
	var cifre="1234567890";
	for(i=0;i<sir.length;i++)
	{
		for(j=0;j<cifre.length;j++){
			if(sir.includes(cifre.charAt(j))){
				x++;
			}

		}
	}
	return x;
}

function reset(){
	
	ref_nume.value="";
	ref_prenume.value="";
	ref_adresa.value="";
	ref_oras.value="";
	ref_data.value="";
	ref_telefon.value="";
	ref_email.value="";
	ref_adresa.style.backgroundColor="#FFFFFF";
	ref_nume.style.backgroundColor="#FFFFFF";
	ref_prenume.style.backgroundColor="#FFFFFF";
	ref_data.style.backgroundColor="#FFFFFF";
	
	ref_oras.style.backgroundColor="#FFFFFF";
	ref_telefon.style.backgroundColor="#FFFFFF";
	ref_email.style.backgroundColor="#FFFFFF";
	return true;
}

function verificareTablou(){
	for(i=0;i<tablou2.length;i++){
		if(!tablou2[i])
			return true;
	}
	return false;
}

function Alerta(){
	sir="";
	for(i=0;i<tablou1.length;i++){
		if(!tablou2[i]){
			sir=sir+tablou1[i] +"\n";
		}
	}

	
	alert(sir);
  	
}

function stergeForm(){
	var form2= document.getElementById("form2");
	document.getElementById("formular").style.display="none";
	form2.innerHTML= "<p><b>Nume:</b></br> "+   ref_nume.value +   " <br><b>Prenume</b>:</br> "+ref_prenume.value+" <br><b>Adresa:</b> </br>"+ref_adresa.value+" <br><b>Oras:</b></br> "+ref_oras.value +" <br><b>Telefon: </b></br>"+ref_telefon.value+" <br><b>E-mail: </b></br>"+ref_email.value+"<br><b>Data nasteri:</b> </br>"+ref_data.value+"</p>" ;
	/*Cream  dinamic un div */
	/*var div=document.createElement("div");
	form2.appendChild(div);
	/*Atribuim culoarea selectata acelui div*/
	/*div.style.border="1px solid black";
	div.style.height="30px";
	div.style.width="60px";
	div.style.float="left";*\
	
	/*Style pt formularul asccuns*/
	form2.style.margin="auto";
	
	form2.style.height="1000px";
	form2.style.width="600px";
	form2.style.top="50px";
	form2.style.color="black";
	form2.style.backgroundColor="white";


}

function verificaErori(){
	if(verificareTablou()){
		Alerta();
	}
	else{
	stergeForm();
	}
}





	

