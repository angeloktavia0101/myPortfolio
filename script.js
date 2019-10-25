const switchButton = document.getElementById('customSwitches');
const teksSwitch = document.getElementById('teks');

switchButton.addEventListener('click',() => {

	document.body.classList.toggle('darkBody');

	if(document.body.classList.contains('darkBody')){
		teksSwitch.innerHTML = 'Dark';
	}else{
		teksSwitch.innerHTML = 'Light';
	}

});


