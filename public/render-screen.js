export default function renderScreen(
	screen,
	playersList,
	game,
	requestAnimationFrame
) {
	const context = screen.getContext('2d');
	context.fillStyle = 'white';
	context.clearRect(0, 0, 10, 10);
	// Clear players list

	playersList.innerHTML = '';

	for (const playerId in game.state.players) {
		const player = game.state.players[playerId];
		context.fillStyle = player.playerColor;
		context.fillRect(player.x, player.y, 1, 1);
	}

	for (const fruitId in game.state.fruits) {
		const fruit = game.state.fruits[fruitId];
		context.fillStyle = 'rgba(0, 128, 0, 0.4)';
		// context.rotate((90 * Math.PI) / 180);
		context.fillRect(fruit.x, fruit.y, 1, 1);
	}

	let playersArray = [];
	// game.state.players to array
	for (const playerId in game.state.players) {
		const player = game.state.players[playerId];
		playersArray.push({
			nickname: player.nickname,
			playerColor: player.playerColor,
			score: player.score,
		});
	}

	// Array sorted by score
	let scoreSorted = playersArray.sort((a, b) =>
		a.score < b.score ? 1 : a.score > b.score ? -1 : 0
	);

	// Display players list sorted by score
	for (const playerId in scoreSorted) {
		const player = scoreSorted[playerId];
		const item = `
		<div class="player-item">
			<div class="player-color-box" style="background-color:${player.playerColor}">
				<span class="player-nickname">${player.score} ${player.nickname}</span>
			</div>
		</div>
		`;
		playersList.insertAdjacentHTML('beforeend', item);
	}

	requestAnimationFrame(() => {
		renderScreen(screen, playersList, game, requestAnimationFrame);
	});
}
