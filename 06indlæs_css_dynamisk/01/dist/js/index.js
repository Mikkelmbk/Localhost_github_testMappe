document.addEventListener('DOMContentLoaded', () => {

	let headLinkElement = document.querySelector('#headCssID');

	let changeStyleSheetBtnElement = document.querySelector('.cssChangerBtn');

	let index = headLinkElement.dataset.index;

	changeStyleSheetBtnElement.addEventListener('click',()=>{

		if(index == 0){
			headLinkElement.href = "css/style.css";
			index++;
			console.log(index);
			headLinkElement.dataset.index = index
		}

		else if(index == 1){
			headLinkElement.href = "css/style.1.css";
			index++;
			console.log(index);
			headLinkElement.dataset.index = index
		}
		else if(index == 2){
			headLinkElement.href = "css/style.2.css";
			index++;
			console.log(index);
			headLinkElement.dataset.index = index
		}
		else if(index == 3){
			headLinkElement.href = "css/style.3.css";
			index = 0;
			console.log(index);
			headLinkElement.dataset.index = index
		}

	})

}) // DOMContent Slutter
