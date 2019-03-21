document.addEventListener('DOMContentLoaded', () => {

	// fetch("partials/nav_partial.html")
	// .then((promise)=>{
	// 	return promise.text();
	// })
	// .then((data)=>{

	// 	let navTest = document.querySelector('.navTest');

	// 	let articleTest = document.querySelector('.articleTest');

	// 	navTest.innerHTML = data;


	// 	let liNavTestElements = navTest.querySelectorAll('.liTest');

	// 	liNavTestElements.forEach((liTestElement)=>{
	// 		liTestElement.classList.add('color');
	// 	})

	// 	articleTest.innerHTML = data;

	// 	let liArticleTestElements = articleTest.querySelectorAll('.liTest');

	// 	liArticleTestElements.forEach((liTestElement)=>{
	// 		liTestElement.classList.add('color2');
	// 	})



	// })

	//========================================================================================================

	// let itemElements = document.querySelectorAll('.item');


	// itemElements.forEach((itemElement) => {

	// 	let title = itemElement.querySelector('.item-title');

	// 	let desc = itemElement.querySelector('.item-desc');

	// 	title.innerHTML += "X";

	// 	desc.innerHTML += "X";

		
	// 	let count = 0;

	// 	title.addEventListener('click', () => {
	// 		title.innerHTML += "X";
	// 		title.classList.add('color');
	// 		if (count >= 1) {
	// 			title.classList.toggle('color2');
	// 			title.classList.remove('color');
	// 		}

	// 		if(count >= 5){
	// 		title.classList.add('change__font-size');
	// 		}

	// 		count++;
	// 		console.log(count);
	// 	})

	// 	desc.addEventListener('click', () => {
	// 		desc.innerHTML += "X";
	// 		desc.classList.add('color2');
	// 	})



	// })

	//========================================================================================================


	let array = [{
		pris:"400",
		mærke:"whatever"
	},{
		pris:"500",
		mærke:"whatever...?"
	},{
		pris:"600",
		mærke:"whatever...!?"
	}
]
	
	let productsElement = document.querySelector('#products');

	let productTemplateElement = document.querySelector('#html-template .product');

	let productElement;

	array.forEach((produkt)=>{

		productElement = productTemplateElement.cloneNode(true);
		productsElement.appendChild(productElement);

		productElement.querySelector('.product-title').innerHTML = produkt.mærke;
		productElement.querySelector('.product-desc').innerHTML = produkt.pris;

	})



	// productElement = productTemplateElement.cloneNode(true);
	
	// productsElement.appendChild(productElement);

	// console.log(productsElement);





}) // DOMContent Slutter
