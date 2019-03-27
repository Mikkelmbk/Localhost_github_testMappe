document.addEventListener('DOMContentLoaded',()=>{

	let changeCssByHeadLinkElement = document.querySelector('#changeCss');


	let changeCssByBtnElement1 = document.querySelector('.changeCssByBtn1');
	let changeCssByBtnElement2 = document.querySelector('.changeCssByBtn2');


	changeCssByBtnElement1.addEventListener('click',()=>{

		changeCssByHeadLinkElement.href = "css/style1.css";
		
	});
	
	changeCssByBtnElement2.addEventListener('click',()=>{
		
		changeCssByHeadLinkElement.href = "css/style2.css";
	})




}) // DomContentLoaded Slutter

