document.addEventListener('DOMContentLoaded', () => {


	fetch("partials/stylesheetElements_partial.html")
		.then((promise) => {
			return promise.text();
		})
		.then((stylesheetPartialData) => {

			let headLinkElement = document.querySelector('#headCssID');

			let changeCssByBtnElement = document.querySelector('.changeStyleSheetBtn');

			let stylesheetArray = [];

			let stylesheetIndex = 0;

			let stylesheetDivContainerElement = document.querySelector('.hiddenhrefs');

			stylesheetDivContainerElement.innerHTML = stylesheetPartialData;

			stylesheetDivContainerElement.style.display = "none";

			let stylesheetDivElements = stylesheetDivContainerElement.querySelectorAll('.hiddenhref');

			stylesheetDivElements.forEach((stylesheetDivElement) => {
				let hrefContainer = stylesheetDivElement.dataset.stylehref;
				stylesheetArray.push(hrefContainer);
			});

			changeCssByBtnElement.addEventListener('click', () => {
				headLinkElement.href = stylesheetArray[stylesheetIndex];
				stylesheetIndex++;
				if (stylesheetIndex >= stylesheetArray.length) {
					stylesheetIndex = 0;
				}
				console.log(stylesheetIndex);
			})

		})










}) // DOMContent Slutter
