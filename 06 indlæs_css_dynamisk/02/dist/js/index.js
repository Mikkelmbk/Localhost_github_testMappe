document.addEventListener('DOMContentLoaded', () => {

	let headLinkElement2 = document.querySelector('#headCssID2');

	let changeStyleSheetBtnElement1 = document.querySelector('.cssChangerBtn1');
	let changeStyleSheetBtnElement2 = document.querySelector('.cssChangerBtn2');

	

	changeStyleSheetBtnElement1.addEventListener('click',()=>{

		headLinkElement2.href = "css/lightTheme.css";
	})


	changeStyleSheetBtnElement2.addEventListener('click',()=>{

		headLinkElement2.href = "css/darkTheme.css";
	})	

}) // DOMContent Slutter
