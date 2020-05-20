function scrollfade()
{
	var textfade = document.querySelector('.text-container');
	var textposition = textfade.getBoundingClientRect().top;
	var screenPosition = window.innerHeight / 1.6 ;
	
	if(textposition < screenPosition)
	{
		textfade.classList.add('fade-text');
	}
}

	window.addEventListener('scroll' ,scrollfade);	
