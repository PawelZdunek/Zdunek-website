function scrollfade()
{
	var textfade = document.querySelector('.uslugi-container');
	var textposition = textfade.getBoundingClientRect().top;
	var screenPosition = window.innerHeight / 1.5 ;
	
	if(textposition < screenPosition)
	{
		textfade.classList.add('uslugi-container-transform');
	}
}

	window.addEventListener('scroll' ,scrollfade);	