document.addEventListener('DOMContentLoaded',()=>{

	fetch("partials/nav_partial.html")
	.then((promise)=>{
		return promise.text();
	})
	.then((data)=>{

		let navTest = document.querySelector('.navTest');

		let articleTest = document.querySelector('.articleTest');
	
		navTest.innerHTML = data;

		
		let liNavTestElements = navTest.querySelectorAll('.liTest');
		
		liNavTestElements.forEach((liTestElement)=>{
			liTestElement.classList.add('color');
		})
		
		articleTest.innerHTML = data;

		let liArticleTestElements = articleTest.querySelectorAll('.liTest');

		liArticleTestElements.forEach((liTestElement)=>{
			liTestElement.classList.add('color2');
		})

	})



})
