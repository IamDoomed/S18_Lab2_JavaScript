var tabSortes = ["coeur", "carreau", "pique", "trefle"];

//=================================================================
// Fournit un nombre aléatoire entier entre 0 et pMax - 1
function randNumber(pMax)
{
	return (Math.floor(pMax * Math.random()));
}

// Une fonction qui rend toutes les cartes blanches
function retirerLesClasses()
{
	let lesCartes = document.getElementsByTagName("li");

	for(let carte of lesCartes){
		carte.className = "";
	}
}

//=================================================================
function exemple1()
{
	retirerLesClasses();

	let lesCartes = document.getElementsByTagName("li");

	// Modifier le code pour appliquer le changement pour toutes les cartes
	// Il faut utiliser une boucle avec un index 
	for(let i = 0; i < lesCartes.length; i++){
		lesCartes[i].className = "coeur13";
	}
}

//=================================================================
function exemple2()
{
	retirerLesClasses();
	
	let lesCartes = document.getElementsByTagName("li");

	for(let i = 0; i < lesCartes.length; i++){
		lesCartes[i].className = "pique"+(i+1);
	}
}

//=================================================================
function exemple3()
{	
	retirerLesClasses();

	let lesCartes = document.getElementsByTagName("li");

	for(let i = 0; i < lesCartes.length; i++){
		lesCartes[i].className = "coeur"+(13-i);
	}
}

//=================================================================
function exemple4()
{ 	
	retirerLesClasses();

	let lesCartes = document.getElementsByTagName("li");

	for(let i = 0; i < lesCartes.length; i++){
		lesCartes[i].className = "carreau"+(6-i);
	}
}

//=================================================================
function exemple5()
{   
	retirerLesClasses();

	let lesCartes = document.getElementsByTagName("li");

	for(let i = 0; i < lesCartes.length; i++){
		lesCartes[i].className = "trefle"+(2*i+1);
	}
}
//=================================================================
function exemple6()
{   
	retirerLesClasses();

	let lesCartes = document.getElementsByTagName("li");

	for(let i = 0; i < lesCartes.length; i++){
		lesCartes[i].className = "carreau"+((i%3)+1);
	}
}

//=================================================================
function exemple7()
{   
	retirerLesClasses();

	let lesCartes = document.getElementsByTagName("li");

	for(let i = 0; i < lesCartes.length; i++){
		if (i%2 == 0)
		{
			lesCartes[i].className = "pique"+(i+1);
		}
		else {
			lesCartes[i].className = "coeur"+(i+1);
		}
	}
}

//=================================================================
function exemple8()
{   
	retirerLesClasses();

	let lesCartes = document.getElementsByTagName("li");

	for(let i = 0; i < lesCartes.length; i++){
		let num = randNumber(14)
		if (num == 0)
		{
			lesCartes[i].className = "carreau1";
		}
		else {
			lesCartes[i].className = "carreau"+(num);
		}
		
	}
}

//=================================================================
function exemple9()
{   
	retirerLesClasses();

	let lesCartes = document.getElementsByTagName("li");

	let num = randNumber(9);
	if (num == 0) {
		num = 1;
	} 

	for(let i = 0; i < lesCartes.length; i++){
		lesCartes[i].className = "pique"+(num+i);
	}
}

//=================================================================
function exemple10()
{   
	retirerLesClasses();

	let lesCartes = document.getElementsByTagName("li");

	for(let i = 0; i < lesCartes.length; i++){
		let numIndex = randNumber(14);
		if (numIndex == 0) numIndex = 1;
		let numCarte = randNumber(4);

		lesCartes[i].className = tabSortes[numCarte]+numIndex;
	}
}



//=================================================================
// Gestion des événements des boutons
// On obtient les boutons de la page
let liste = document.getElementsByTagName("button");

for(let button of liste){
	button.onclick = function() {
		// On utilise leur Id comme nom de fonction et on appel cette fonction!!
		// window permet d'appeler une fonction dont le nom est contenu dans une chaîne de caractères. 
		window[button.getAttribute("id")].call();
	};	
}
