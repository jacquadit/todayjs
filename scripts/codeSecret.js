var motSecret="pfmp";
var annee=2020;

var motEntree = prompt("Entrez le mot secret ");
var anneeEntree = prompt("entrez l'annee : ");
alert("votre mot est bien "+ motEntree + "  l'année est bien "+anneeEntree);

if(motEntree === motSecret){
	alert("C'est deja le bon mot secret "+motSecret);
}		
	else if(anneeEntree===annee){
	alert("c'est la bonne anne : " + annee);
	}			
	else 
	{alert("non ce n'est pas le bon mot secret, vous avez entré :"+motEntree);
	}

