document.addEventListener('DOMContentLoaded',()=>{

	fetch("partials/nav_partial.html")
	.then((promise)=>{
		return promise.text();
	})
	.then((data)=>{

		let navTest = document.querySelector('.navTest');
	
		navTest.innerHTML = data;
		
		let liTestElements = document.querySelectorAll('.liTest');

		liTestElements.forEach((liTestElement)=>{
			liTestElement.classList.add('color');
		})


		console.log(liTestElements);


	})



})
