function pareil(a,b){
	if (typeof a == typeof b) {
		console.log("le type est le même")
	} else {
		console.log("ils sont de types différents")
	}
};

pareil(2,3);
pareil(2,"2");