const scrollFadeText = () => {

	const textFade = document.querySelector('.text-container');
	const textPosition = textFade.getBoundingClientRect().top;
	const screenPosition = window.innerHeight / 1.6 ;
	
	if(textPosition < screenPosition)
	{
		textFade.classList.add('fade-text');
	}
}

window.addEventListener('scroll', scrollFadeText);	


const scrollFadeImage = () => {

	const textfade = document.querySelector('.picture-container');
	const textposition = textfade.getBoundingClientRect().top;
	const screenPosition = window.innerHeight / 1.6 ;
	
	if(textposition < screenPosition)
	{
		textfade.classList.add('fade-picture');
	}
}

window.addEventListener('scroll', scrollFadeImage);