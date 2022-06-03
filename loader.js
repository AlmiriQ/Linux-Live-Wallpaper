function change_animation(color, file_new) {
	document.getElementsByTagName('loader')[0].style.background = color;
	document.getElementsByTagName('loader')[0].style.display = 'block';
	document.getElementsByTagName('loader')[0].style.zIndex = 9;
	document.getElementsByTagName('loader')[0].style.animationName = "showing"
	document.getElementsByTagName('loader')[0].style.animationDuration = "1s"
	document.getElementsByTagName('loader')[0].style.animationFillMode = "forwards"
	setTimeout(() => {
		video.src = file_new;
		video.play();
		video.updating = false;
		document.getElementsByTagName('loader')[0].style.animationName = "removing"
		document.getElementsByTagName('loader')[0].style.animationDuration = "1s"
		document.getElementsByTagName('loader')[0].style.animationFillMode = "forwards"
		setTimeout(() => {
			document.getElementsByTagName('loader')[0].style.zIndex = -1;
			document.getElementsByTagName('loader')[0].style.display = 'none';
			document.getElementsByTagName('loader')[0].style.animationName = ""
			document.getElementsByTagName('loader')[0].style.animationDuration = ""
			document.getElementsByTagName('loader')[0].style.animationFillMode = ""
		}, 1500)
	}, 1500)
}

document.addEventListener("DOMContentLoaded", () => {
	document.getElementsByTagName('loader')[0].style.animationName = "removing"
	document.getElementsByTagName('loader')[0].style.animationDuration = "1s"
	document.getElementsByTagName('loader')[0].style.animationFillMode = "forwards"
	setTimeout(() => {
		document.getElementsByTagName('loader')[0].style.zIndex = -1;
		document.getElementsByTagName('loader')[0].style.display = 'none';
		document.getElementsByTagName('loader')[0].style.animationName = ""
		document.getElementsByTagName('loader')[0].style.animationDuration = ""
		document.getElementsByTagName('loader')[0].style.animationFillMode = ""
		setup()
	}, 1500)
})