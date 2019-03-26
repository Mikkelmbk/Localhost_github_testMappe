document.addEventListener('DOMContentLoaded', () => {

	let itemElements = document.querySelectorAll('.item');

	let bodyElement = document.querySelector('body');

	let count = 0;

	itemElements.forEach((itemElement)=>{
		itemElement.addEventListener('click',()=>{
			itemElement.classList.add('colorClass1');
			count++;
			if(itemElement.classList.contains('colorClass1') && count >= itemElements.length){
			bodyElement.classList.toggle('colorClass2');
		}
		
		})

		
	})

	

	

}) // DOMContent Slutter
