document.addEventListener('DOMContentLoaded', () => {

	
	let headLinkElement2 = document.querySelector('#headCssID2');
	
	let changeStyleSheetBtnElement1 = document.querySelector('.cssChangerBtn1');
	let changeStyleSheetBtnElement2 = document.querySelector('.cssChangerBtn2');
	
	let colorChanger = true;
	
	// darkTheme();



	changeStyleSheetBtnElement1.addEventListener('click',()=>{

		// headLinkElement2.href = "css/lightTheme.css";
		darkTheme();
	})


	// changeStyleSheetBtnElement2.addEventListener('click', () => {

	// 	headLinkElement2.href = "css/darkTheme.css";
	// })



	// changeStyleSheetBtnElement1.addEventListener('click',()=>{

	function darkTheme() {
		if (colorChanger == true) {
			setTimeout(() => {
				headLinkElement2.href = "css/darkTheme.css";
				colorChanger = false;
				lightTheme();
				console.log(colorChanger);
			}, 1500)
		}


	}


	function lightTheme() {
		if (colorChanger == false) {
			setTimeout(() => {
				headLinkElement2.href = "css/lightTheme.css";
				colorChanger = true;
				darkTheme();
				console.log(colorChanger);

			}, 1500)
		}

	}


	// })

}) // DOMContent Slutter
