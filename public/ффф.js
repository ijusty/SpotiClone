let songItems = []; // Массив для хранения элементов песен
let songIndex = 0; // Индекс текущей песни
let isPlaying = false; // Флаг для отслеживания состояния воспроизведения

function displaySongs(playlist) {
    const songList = document.getElementById('songList');
    songList.innerHTML = ''; // Очищаем список перед добавлением новых песен

    const songsToDisplay = playlists[playlist]; // Получаем песни из выбранного плейлиста

    songsToDisplay.forEach((song, index) => {
        const songItem = document.createElement('div');
        songItem.classList.add('songItem');
        songItem.innerHTML = `
            <img src="${song.coverPath}" alt="${song.songName}">
            <div class="songName">${song.songName}</div>
            <span class="songlistplay"><span class="timestamp"><i id="${index}" class="far songItemPlay fa-play-circle"></i> </span></span>
        `;
        songList.appendChild(songItem);
    });

    // Обновляем ссылку на элементы песен
    songItems = Array.from(document.getElementsByClassName('songItem'));

    // Добавляем обработчики событий для элементов песен
    addSongItemEventListeners();

    // Обновляем цвет текста для текущей песни
    updateCurrentTrackColor();
    updatePlaylistColors(); // Обновляем цвета плейлистов
}

function addSongItemEventListeners() {
    // Удаляем все предыдущие обработчики событий
    songItems.forEach((songItem) => {
        const playButton = songItem.querySelector('.songItemPlay');
        playButton.removeEventListener('click', playSong); // Удаляем старый обработчик
    });

    // Добавляем новые обработчики событий
    songItems.forEach((songItem) => {
        const playButton = songItem.querySelector('.songItemPlay');
        playButton.addEventListener('click', playSong);
    });
}

function playSong(e) {
    // Сбрасываем все воспроизведения
    makeAllPlays();

    // Получаем индекс текущей песни
    songIndex = parseInt(e.target.id);

    // Устанавливаем источник аудио
    audioElement.src = playlists[currentPlaylist][songIndex].filePath;
    document.getElementById('gif').src = playlists[currentPlaylist][songIndex].coverPath;

    // Обновляем название песни и другие элементы интерфейса
    updateSongName(songIndex);
    audioElement.currentTime = 0; // Начинаем с начала
    audioElement.play(); // Воспроизводим трек

    // Обновляем иконки воспроизведения
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

    // Обновляем цвет текущего трека
    updateCurrentTrackColor();
    updatePlaylistColors(); // Обновляем цвета плейлистов
    resetPlaylistColor();
    isPlaying = true; // Устанавливаем флаг воспроизведения
}

// Обработчики событий для кнопок плейлистов
savedPlaylistButton.addEventListener('click', () => {
    currentPlaylist = 'saved'; // Обновляем текущий плейлист
    displaySongs('saved'); // Отображаем песни из нового плейлиста
    if (isPlaying) {
        audioElement.play(); // Продолжаем воспроизведение, если оно было активным
    }
    updatePlaylistColors(); // Обновляем цвета плейлистов
});

defaultPlaylistButton.addEventListener('click', () => {
    currentPlaylist = 'favourite'; // Обновляем текущий плейлист
    displaySongs('favourite'); // Отображаем песни из нового плейлиста
    if (isPlaying) {
        audioElement.play(); // Продолжаем воспроизведение, если оно было активным
    }
    updatePlaylistColors(); // Обновляем цвета плейлистов
});
