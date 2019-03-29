document.addEventListener('DOMContentLoaded', () => {

	let btn1Element = document.querySelector('.btn1');

	let inputElement = document.querySelector('.inputField');

	let bodyElement = document.querySelector('body');

	let topContainerElement = document.querySelector('.topContainer');

	let h1CreatedElement;

	inputElement.addEventListener('keyup', () => {
		if (inputElement.value != "") {
			topContainerElement.innerHTML = "";
			searchByKeyUp();
		}
		else if(inputElement.value == ""){
			topContainerElement.innerHTML = "";

		}
	})

	// btn1Element.addEventListener('click', () => {
	// 	if (inputElement.value != "") {
	// 		topContainerElement.innerHTML = "";
	// 		searchByKeyUp();
	// 	}
	// 	else if(inputElement.value == ""){
	// 		topContainerElement.innerHTML = "";

	// 	}
	// })

	function searchByKeyUp() {

		let fruitElements = document.querySelectorAll('.text');

		let filter;

		filter = inputElement.value.toUpperCase();

		fruitElements.forEach((fruitElement) => {

			if (fruitElement.innerHTML.toUpperCase().indexOf(filter) > -1) {

				h1CreatedElement = document.createElement('h1');

				topContainerElement.appendChild(h1CreatedElement);

				h1CreatedElement.innerHTML = fruitElement.innerHTML;

			}

		})

	}





}); // DOMContentLoaded Slutter