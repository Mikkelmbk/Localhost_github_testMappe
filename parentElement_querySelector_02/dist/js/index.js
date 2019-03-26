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

	let itemElements = document.querySelectorAll('.item');


	itemElements.forEach((itemElement) => {

		// itemElement.querySelector('.item-title').innerHTML += "X"
		// itemElement.querySelector('.item-desc').innerHTML += "X"

		let title = itemElement.querySelector('.item-title');

		let desc = itemElement.querySelector('.item-desc');

		title.innerHTML += "X";

		desc.innerHTML += "X";

		// itemElement.addEventListener('click',()=>{
		// 	itemElement.querySelector('.item-title').innerHTML += "X";
		// })
		let count = 0;

		title.addEventListener('click', () => {
			title.innerHTML += "X";
			title.classList.add('color');
			if (count >= 1) {
				title.classList.toggle('color2');
				title.classList.remove('color');
			}

			if(count >= 5){
			title.classList.add('change__font-size');
			}

			count++;
			console.log(count);
		})

		desc.addEventListener('click', () => {
			desc.innerHTML += "X";
			desc.classList.add('color2');
		})



	})



})
