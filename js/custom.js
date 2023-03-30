const elements = document.querySelectorAll(".animate__animated");

const inView = (el) => {
	const rect = el.getBoundingClientRect();
	return (
		(rect.top <= 0 && rect.bottom >= 0) ||
		(rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
		(rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
	);
};

// Debounce function to delay the execution of the handleScroll function
const throttle = (callback, delay) => {
	let lastCallTime = 0;

	return (...args) => {
		const now = new Date().getTime();
		if (now - lastCallTime >= delay) {
			lastCallTime = now;
			callback(...args);
		}
	};
};

const animateElements = () => {
	elements.forEach((el) => {
		if (inView(el)) {
			var animationClass = el.dataset.animation;
			el.classList.add("animate__animated", animationClass, "animate__fadeInOpacity");
		}
	});
};

window.addEventListener("scroll", throttle(() => {
	animateElements();
}, 200));


function toggleStar() {
	const star = document.querySelector(".five-pointed-star");
	if (star.classList.contains("filled")) {
	  star.classList.remove("filled");
	} else {
	  star.classList.add("filled");
	}
  }
  
  

