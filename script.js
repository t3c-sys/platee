// Не показывает футер, если мы в iframe
if (window !== window.parent) {
	const footer = document.querySelector('footer');
	if (footer) footer.style.visibility = 'hidden';
}