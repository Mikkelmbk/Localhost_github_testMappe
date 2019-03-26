document.addEventListener('DOMContentLoaded', () => {


	


	// let divTestElement1 = document.querySelector('.product');

	// console.log(divTestElement1);


	// console.log(divTestElement1.dataset.price);
	// console.log(divTestElement1.dataset.ged);


	// let divTestElements = document.querySelectorAll('.product');
	// let displayPriceElement = document.querySelector('#display-product-price');
	// let krString = " kr";
	// let displayTitleElement = document.querySelector('#display-product-title');

	// console.log(divTestElements);

	// divTestElements.forEach((divTestElement)=>{
	// 	// console.log(divTestElement.dataset.price);
	// 	divTestElement.addEventListener('click',()=>{
	// 		// console.log(divTestElement.dataset.price);
	// 		displayPriceElement.innerHTML = divTestElement.dataset.price + krString;
	// 		displayTitleElement.innerHTML = divTestElement.innerHTML;
	// 	})
	// })


	let galleryDataElement = document.querySelector('#gallery-data');
	let divImageElements = galleryDataElement.querySelectorAll('div');
	let galleryContainerElement = document.querySelector('.galleryContainer');

	if(divImageElements.length != 0){
		
		galleryContainerElement.style.display = "flex";
		galleryContainerElement.style.alignItems = "center";
		galleryContainerElement.style.justifyContent = "space-evenly";
	

	let imageIndex = 0;
	let currentImageElement = document.querySelector('#current-image');
	let dataArray = [];

	divImageElements.forEach((divImageElement)=>{
		console.log(divImageElement.dataset.url);
		dataArray.push(divImageElement.dataset.url);
	})
	console.log(dataArray);

	updateSource();

	let nextImageBtnElement = document.querySelector('#btn-next-image');
	let previousImageBtnElement = document.querySelector('#btn-previous-image');

	nextImageBtnElement.addEventListener('click',()=>{
		imageIndex++;
		if(imageIndex >= dataArray.length){
			imageIndex = 0;
		}
		console.log(imageIndex);
		updateSource();
	});

	previousImageBtnElement.addEventListener('click',()=>{
		imageIndex--;
		if(imageIndex < 0){
			imageIndex = dataArray.length -1;
		}
		console.log(imageIndex);
		updateSource();
	})

	
	function updateSource(){
		if(dataArray.length != 0){
			currentImageElement.src = dataArray[imageIndex];
			}
	}

}

}) // DOMContent Slutter
