let playersList = document.querySelector('.players-list');

document.getElementById('btn-players').onclick = function () {
	playersList.classList.toggle('hide');
	this.classList.toggle('active');
};
