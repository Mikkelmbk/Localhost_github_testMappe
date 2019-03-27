document.addEventListener('DOMContentLoaded',()=>{

	let changeCssByHeadLinkElement = document.querySelector('#changeCss');

	let changeCssByIndex = 0;

	let changeCssByBtnElement = document.querySelector('.changeCssByBtn');

	changeCssByBtnElement.addEventListener('click',()=>{

		if(changeCssByIndex == 0){
			changeCssByHeadLinkElement.href = "";
			changeCssByIndex++;
		}
		
		else if(changeCssByIndex == 1){
			changeCssByHeadLinkElement.href = "css/style2.css";
			changeCssByIndex--;

		}

	})
	
}) // DomContentLoaded Slutter

