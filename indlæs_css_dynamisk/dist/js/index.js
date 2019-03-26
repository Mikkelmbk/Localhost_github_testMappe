document.addEventListener('DOMContentLoaded', () => {

	let headScriptElement = document.querySelector('#headCssID');

	let changeStyleSheetBtnElement = document.querySelector('.cssChangerBtn');


	changeStyleSheetBtnElement.addEventListener('click',()=>{
		
		headScriptElement.href = "css/style.1.css";
		
	})



	

}) // DOMContent Slutter
