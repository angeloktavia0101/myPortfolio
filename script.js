const switchButton = document.getElementById('customSwitches');
const teksSwitch = document.getElementById('teks');
const tablerow = document.getElementsByTagName('tr');

switchButton.addEventListener('click',() => {

	document.body.classList.toggle('darkBody');

	for(let i = 0; i < tablerow.length; i++){
		tablerow[i].classList.toggle('whiteColor');
	}

	if(document.body.classList.contains('darkBody')){
		teksSwitch.innerHTML = 'Dark';
	}else{
		teksSwitch.innerHTML = 'Light';
	}

});


