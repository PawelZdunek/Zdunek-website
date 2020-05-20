function scrollfade()
{
	var textfade = document.querySelector('.picture-container');
	var textposition = textfade.getBoundingClientRect().top;
	var screenPosition = window.innerHeight / 1.6 ;
	
	if(textposition < screenPosition)
	{
		textfade.classList.add('fade-picture');
	}
}

	window.addEventListener('scroll' ,scrollfade);