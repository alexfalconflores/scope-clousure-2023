function createPetList() {
	const petList = [];
	return function (pet) {
		if (pet) {
			petList.push(pet);
			return;
		}
		return petList;
	};
}

const myPetList = createPetList();
myPetList('michi'); // no print
myPetList('firulais'); // no print
myPetList(); // [ 'michi', 'firulais' ]
