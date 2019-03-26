document.addEventListener('DOMContentLoaded', () => {


	// let divTestElement1 = document.querySelector('.product');

	// console.log(divTestElement1);


	// console.log(divTestElement1.dataset.price);
	// console.log(divTestElement1.dataset.ged);


	let divTestElements = document.querySelectorAll('.product');
	let displayPriceElement = document.querySelector('#display-product-price');
	let krString = " kr";
	let displayTitleElement = document.querySelector('#display-product-title');

	console.log(divTestElements);

	divTestElements.forEach((divTestElement)=>{
		// console.log(divTestElement.dataset.price);
		divTestElement.addEventListener('click',()=>{
			// console.log(divTestElement.dataset.price);
			displayPriceElement.innerHTML = divTestElement.dataset.price + krString;
			displayTitleElement.innerHTML = divTestElement.innerHTML;
		})
	})


}) // DOMContent Slutter
