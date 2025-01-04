console.log("Welcome to Spoticlone");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let masterSongNameAuthor = document.getElementById('masterSongNameAuthor');
let songItems = Array.from(document.getElementsByClassName('songItem'));

const playlists = {
    favourite: [
        { songAuthor: "MZLFF", songName: "В пряничном домике", filePath: "songs/1.mp3", coverPath: "covers/mzlff-v-pryanichnom-domike.jpeg", songlyricsPath: "lyrics/mzlffbreadhouse.txt", authordesc: "mzlff (Илья Иванович Коряков) — российский рэп-исполнитель и стример из Москвы. Родился 28 апреля 1999 года. Карьеру музыканта артист начал в 2018 году. Широкой аудитории стал известен в 2021 году после выпуска сингла «Я помню», который стал мемом и завирусился в TikTok. 14 В ноябре 2022 года Илья mzlff выпустил альбом «К маяку вселенной», который помог закрепить успех артиста." },
        { songAuthor: "MZLFF", songName: "Поровну", filePath: "songs/2.mp3", coverPath: "covers/mzlff-v-pryanichnom-domike.jpeg", songlyricsPath: "lyrics/mzlffporovnu.txt", authordesc: "mzlff (Илья Иванович Коряков) — российский рэп-исполнитель и стример из Москвы. Родился 28 апреля 1999 года. Карьеру музыканта артист начал в 2018 году. Широкой аудитории стал известен в 2021 году после выпуска сингла «Я помню», который стал мемом и завирусился в TikTok. 14 В ноябре 2022 года Илья mzlff выпустил альбом «К маяку вселенной», который помог закрепить успех артиста." },
        { songAuthor: "Crystali", songName: "A Pimp Named 3K", filePath: "songs/3.mp3", coverPath: "https://static.hitmcdn.com/covers/a/810/8a5/643604.jpg", songlyricsPath: "lyrics/pimpnamed.txt", authordesc: "Crystali — исполнитель в жанре латиноамериканской музыки. Некоторые его популярные треки: «A Pimp Named 3K», «Pimp Name Dance», «A Pimp Name Social». "  },
        { songAuthor: "LIDA", songName: "ft. CMH - СТИКЕР", filePath: "songs/CMH_Lida_-_STIKER_71937829.mp3", coverPath: "https://static.hitmcdn.com/covers/a/98c/26c/637849.jpg", songlyricsPath: "lyrics/lidasticker.txt", authordesc: "Николай “Lida” Ромадов — российский видеоблогер, музыкант, автор песен, вокалист и продюсер группы “Фрио”. Под этим псевдонимом Николай начал свой творческий путь в 2014 году, выпустив композицию “Мысли”. Lida получил известность как блогер на YouTube, исполняя на своём канале каверы на популярные песни и другие музыкальные ролики."  },
        { songAuthor: "Mada", songName: "Самая", filePath: "songs/4.mp3", coverPath: "https://static.hitmcdn.com/covers/a/653/fa3/795899.jpg", songlyricsPath: "lyrics/madasamaya.txt", authordesc: "Mada — молодой и перспективный российский музыкант, работающий в жанрах рэпа и хип-хопа. Его стиль отличается энергичным звучанием и мелодичными припевами."  },
        { songAuthor: "Twinky", songName: "Ghoul", filePath: "songs/5.mp3", coverPath: "https://static.hitmcdn.com/cover/47c/f22/30139.jpg", songlyricsPath: "lyrics/twinkyghoul.txt", authordesc: "Twinky — исполнительница в жанрах поп и инди-поп. Известна своими оптимистичными мелодиями и отражающими темы музыки. В песнях она рассказывает о любви, грусти и самопознании."  },
        { songAuthor: "SANIKWAVE X SKY", songName: "TAKEOVER", filePath: "songs/6.mp3", coverPath: "https://static.hitmcdn.com/cover/3d8/1dc/79283.jpg", songlyricsPath: "lyrics/takeover.txt", authordesc: "Sanikwave — многообещающий молодой исполнитель, который привносит свежее звучание в трэп-музыку. "  },
        { songAuthor: "bbno$", songName: "it boy", filePath: "songs/7.mp3", coverPath: "https://static.hitmcdn.com/cover/7f7/90c/73536.jpg", songlyricsPath: "lyrics/itboy.txt", authordesc: "bbno$ — Александр Леон Гумучян — канадский рэп-исполнитель армянского происхождения, певец. Наибольшую известность получил благодаря своим коллаборациям с рэпером Yung Gravy, а так же синглу «Lalala»."  },
        { songAuthor: "LIDA", songName: "feat. Серега Пират - ЧСВ", filePath: "songs/lida_Serjoga_Pirat_-_CHSV_-_lida_Serjoga_Pirat_versiya_bez_mata_78217245.mp3", songlyricsPath: "lyrics/lidachsv.txt", coverPath: "https://static.hitmcdn.com/cover/44c/cf4/42367.jpg", authordesc: "Николай “Lida” Ромадов — российский видеоблогер, музыкант, автор песен, вокалист и продюсер группы “Фрио”. Под этим псевдонимом Николай начал свой творческий путь в 2014 году, выпустив композицию “Мысли”. Lida получил известность как блогер на YouTube, исполняя на своём канале каверы на популярные песни и другие музыкальные ролики."  },
        
    ],
    saved: [
        { songAuthor: "isq", songName: "void (super slowed)", filePath: "songs/8.mp3", coverPath: "https://static.hitmcdn.com/covers/a/e09/0ab/848028.jpg", songlyricsPath: "lyrics/undefined.txt", authordesc: "Информация об авторе не добавлена."  },
        { songAuthor: "rozei", songName: "Ooo La La", filePath: "songs/9.mp3", coverPath: "playlist.png", songlyricsPath: "lyrics/undefined.txt", authordesc: "Информация об авторе не добавлена."  },
        { songAuthor: "Ultra Slowed", songName: "MONTAGEM VOZES PROFUNDAS", filePath: "songs/10.mp3", coverPath: "https://static.hitmcdn.com/cover/d48/b3a/94351.jpg", songlyricsPath: "lyrics/undefined.txt", authordesc: "Информация об авторе не добавлена."  },
        { songAuthor: "mikeeysmind", songName: "VVV - HE'S BACK", filePath: "songs/11.mp3", coverPath: "https://i.scdn.co/image/ab67616d00001e02ee8ac2c6176f3025ba1111a6", songlyricsPath: "lyrics/undefined.txt", authordesc: "Информация об авторе не добавлена."  },
    ]
};

let currentPlaylist = "favourite"; // Объявление переменной currentPlaylist

function displaySongs(playlist) {
    const songList = document.getElementById('songList');
    songList.innerHTML = ''; // Очищаем список перед добавлением новых песен

    const songsToDisplay = playlists[playlist]; // Получаем песни из выбранного плейлиста

    songsToDisplay.forEach((song, index) => {
        const songItem = document.createElement('div');
        songItem.classList.add('songItem');
        songItem.innerHTML = `
            <img src="${song.coverPath}" alt="${song.songName}">
            <div class="songName">${song.songAuthor} - ${song.songName}</div>
            <span class="songlistplay"><span class="timestamp"><i id="${index}" class="far songItemPlay fa-play-circle"></i> </span></span>
        `;
        songList.appendChild(songItem);
    });

    // Обновляем ссылку на элементы песен
    songItems = Array.from(document.getElementsByClassName('songItem'));
    addSongItemEventListeners();
    updateCurrentTrackColor();
}

function displayAuthorSongs(author) {
    const authorSongsList = document.getElementById('authorSongsList');
    authorSongsList.innerHTML = ''; // Очищаем список перед добавлением новых песен

    const songsByAuthor = playlists.favourite.filter(song => song.songAuthor === author);

    songsByAuthor.forEach(song => {
        const songItem = document.createElement('div');
        songItem.classList.add('songItem2');
        songItem.innerHTML = `
            <img src="${song.coverPath}" alt="${song.songName}">
            <div class="songName">${song.songAuthor} - ${song.songName}</div>
            
        `;
        authorSongsList.appendChild(songItem);
    });
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

updateCurrentTrackColor(); // Обновляем цвет текущего трека
resetPlaylistColor(); // Сбрасываем цвет плейлиста

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





function updatePlaylistColors() {
    const favouriteDivs = [document.getElementById("div"), document.getElementById("div2")];
    const savedDivs = [document.getElementById("div3"), document.getElementById("div4")];

    if (currentPlaylist === "favourite") {
        favouriteDivs.forEach(div => div.style.color = "#00d900");
        savedDivs.forEach(div => div.style.color = "white");
    } else if (currentPlaylist === "saved") {
        savedDivs.forEach(div => div.style.color = "#00d900");
        favouriteDivs.forEach(div => div.style.color = "white");
    }
}



function addSongItemEventListeners() {
    songItems.forEach((songItem) => {
        const playButton = songItem.querySelector('.songItemPlay');
        playButton.addEventListener('click', (e) => {
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
        });
    });
}


displaySongs('favourite');
function savePlaybackState() {
    localStorage.setItem('currentSongIndex', songIndex);
    localStorage.setItem('currentTime', audioElement.currentTime);
    localStorage.setItem('isPlaying', audioElement.paused ? 'false' : 'true');
    localStorage.setItem('currentPlaylist', currentPlaylist); // Сохраняем текущий плейлист
}

function loadPlaybackState() {
    const savedPlaylist = localStorage.getItem('currentPlaylist'); // Загружаем текущий плейлист
    if (savedPlaylist) {
        currentPlaylist = savedPlaylist; // Устанавливаем загруженный плейлист
    }

    const savedSongIndex = localStorage.getItem('currentSongIndex');
    const savedTime = localStorage.getItem('currentTime');
    const isPlayingState = localStorage.getItem('isPlaying');
    if (savedSongIndex !== null && savedTime !== null) {
        songIndex = parseInt(savedSongIndex);
        audioElement.src = playlists[currentPlaylist][songIndex].filePath;
        audioElement.currentTime = parseFloat(savedTime);
        updateSongName(songIndex);
        document.getElementById('gif').src = playlists[currentPlaylist][songIndex].coverPath;
        updateCurrentTrackColor();
        updatePlaylistColor(currentPlaylist);
        resetPlaylistColor();
        checkSongIndex();

        if (isPlayingState === 'true') {
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            isPlaying = true; // Устанавливаем флаг воспроизведения
        } else {
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            isPlaying = false; // Устанавливаем флаг остановки
        }
    }
}

window.onload = loadPlaybackState;

audioElement.addEventListener('ended', () => {
    nextTrack();
});

function nextTrack() {
    makeAllPlays();
    songIndex = (songIndex + 1) % playlists[currentPlaylist].length; 
    playCurrentTrack();
}

function playCurrentTrack() {
    audioElement.src = playlists[currentPlaylist][songIndex].filePath;
    updateSongName(songIndex);
    audioElement.currentTime = 0;
    audioElement.play();
    updateCurrentTrackColor(); // Обновляем цвет текущего трека
    updatePlaylistColor(currentPlaylist);
    resetPlaylistColor();
    checkSongIndex();
}


function updateSongName(songIndex) {
    document.getElementById('gif').src = playlists[currentPlaylist][songIndex].coverPath;
    masterSongName.innerText = playlists[currentPlaylist][songIndex].songName;
    masterSongNameAuthor.innerText = playlists[currentPlaylist][songIndex].songAuthor;

}

function updateCurrentTrackColor() {
    if (songItems[songIndex]) { // Проверяем, существует ли элемент
        songItems[songIndex].getElementsByClassName("songName")[0].style.color = "#00d900"; 
    }
}

function pauseCurrentTrackColor() {
    songItems[songIndex].getElementsByClassName("songName")[0].style.color = "white"; 
}

function updatePlaylistColor(playlistName) {
    if (playlistName === "favourite") {
        document.getElementById("div").style.color = "#00d900"; 
        document.getElementById("div2").style.color = "#00d900"; 
    } else if (playlistName === "saved") {
        document.getElementById("div3").style.color = "#00d900"; 
        document.getElementById("div4").style.color = "#00d900"; 
    }
}

function resetPlaylistColor() {
    const favouriteDivs = [document.getElementById("div"), document.getElementById("div2")];
    const savedDivs = [document.getElementById("div3"), document.getElementById("div4")];

    favouriteDivs.forEach(div => div.style.color = "white");
    savedDivs.forEach(div => div.style.color = "white");
}

function playTrack(playlistName) {
    currentPlaylist = playlistName; 
    updateCurrentTrackColor(); 
    updatePlaylistColor(currentPlaylist); 
}

function pauseTrack() {
    pauseCurrentTrackColor(); 
    resetPlaylistColor(); 
}

const savedPlaylistButton = document.getElementById('savedPlaylistButton');
const defaultPlaylistButton = document.getElementById('defaultPlaylistButton');
const songItemContainer = document.getElementById('songItemContainer');
const savedSongItemContainer = document.getElementById('savedSongItemContainer');
const AuthorButton = document.getElementById('masterSongNameAuthor');
const LyrcisButton = document.getElementById('songLyrcisButton');


defaultPlaylistButton.classList.add('active'); 
savedPlaylistButton.classList.remove('active'); 

function resetPlayback() {
    makeAllPlays(); // Останавливаем все воспроизводимые треки
    audioElement.pause(); // Останавливаем текущее воспроизведение
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    songIndex = 0; // Сбрасываем индекс песни на 0
    updateSongName(songIndex); // Обновляем название текущего трека
    document.getElementById('gif').src = playlists[currentPlaylist][songIndex].coverPath; // Обновляем обложку
}
jake = document.getElementById("AuthorInfo");
jake.hidden = true;
AuthorButton.addEventListener('click', () => {
    jake = document.getElementById("AuthorInfo");
    if (jake.hidden == true) {
        jake.hidden = false;
    }
    else {
        jake.hidden = true;
    }
    document.getElementById("AuthorTitle").innerText = playlists[currentPlaylist][songIndex].songAuthor ;
    document.getElementById("AuthorDesc").innerText = playlists[currentPlaylist][songIndex].authordesc ;
    let urlka = playlists[currentPlaylist][songIndex].coverPath;
    document.getElementById("AuthorInfo").style.backgroundImage = 
    "linear-gradient(to bottom, rgba(19, 19, 19, 0.5) 40%, rgba(19, 19, 19, 1) 60%), url(" + urlka + ")";
    
});


function loadSongText(songFile) {
    fetch(songFile)
        .then(response => {
            if (!response.ok) {
                throw new Error('Сеть не в порядке');
            }
            return response.text();
        })
        .then(text => {
            document.getElementById('songLyricss').innerText = text;
        })
        .catch(error => {
            console.error('Ошибка при загрузке текста песни:', error);
            document.getElementById('songLyricss').innerText = 'Ошибка при загрузке текста песни.';
        });
}


jake2 = document.getElementById("songLyricss");
jake2.hidden = true;
LyrcisButton.addEventListener('click', () => {
    loadSongText(playlists[currentPlaylist][songIndex].songlyricsPath);
    jake2 = document.getElementById("songLyricss");
    if (jake2.hidden == true) {
        document.getElementById("songLyrcisButton").innerText = "Скрыть текст песни";
        jake2.hidden = false;
    }
    else {
        document.getElementById("songLyrcisButton").innerText = "Показать текст песни";
        jake2.hidden = true;
    }
    loadSongText(playlists[currentPlaylist][songIndex].songlyricsPath);
})

const DescButton = document.getElementById('AuthorDescButtonn');

jake3 = document.getElementById("AuthorDesc");
jake3.hidden = false;
DescButton.addEventListener('click', () => {
    jake3 = document.getElementById("AuthorDesc");
    if (jake3.hidden == true) {
        document.getElementById("AuthorDescButtonn").innerText = "Скрыть информацию";
        jake3.hidden = false;
    }
    else {
        document.getElementById("AuthorDescButtonn").innerText = "Показать информацию";
        jake3.hidden = true;
    }
})









function changeAuthorInfo() {
    document.getElementById("AuthorTitle").innerText = playlists[currentPlaylist][songIndex].songAuthor ;
    document.getElementById("AuthorDesc").innerText = playlists[currentPlaylist][songIndex].authordesc ;
    let urlka = playlists[currentPlaylist][songIndex].coverPath;
    document.getElementById("AuthorInfo").style.backgroundImage = 
    "linear-gradient(to bottom, rgba(19, 19, 19, 0.5) 40%, rgba(19, 19, 19, 1) 60%), url(" + urlka + ")";
    displayAuthorSongs(playlists[currentPlaylist][songIndex].songAuthor);
};



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


function checkSongIndex() {
    resetPlaylistColor(); // Сброс цвета плейлиста перед воспроизведением
    if (songIndex >= songItems.length) { // Проверяем, если индекс больше или равен количеству песен
        playTrack("saved"); // Воспроизводим "saved" трек
    } else {
        playTrack("favourite"); // Воспроизводим "favourite" трек
    }
}

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        changeAuthorInfo();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        updateCurrentTrackColor();
        isPlaying = true; // Устанавливаем флаг воспроизведения
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        makeAllPlays();
        resetPlaylistColor();
        isPlaying = false; // Сбрасываем флаг воспроизведения
    }
});

let volumeControl = document.getElementById('volume');
audioElement.volume = volumeControl.value;

volumeControl.addEventListener('input', () => {
    audioElement.volume = volumeControl.value;
});

audioElement.addEventListener('timeupdate', () => { 
    const progress = (audioElement.currentTime / audioElement.duration) * 100; 
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('input', () => {
    audioElement.currentTime = (myProgressBar.value / 100) * audioElement.duration;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
    songItems.forEach((element) => { 
        element.getElementsByClassName("songName")[0].style.color = "white";
    });
};

const songItemPlayButtons = Array.from(document.getElementsByClassName('songItemPlay'));
songItemPlayButtons.forEach((element) => {
    element.addEventListener('click', (e) => { 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = playlists[currentPlaylist][songIndex].filePath;
        document.getElementById('gif').src = playlists[currentPlaylist][songIndex].coverPath;
        updateSongName(songIndex);
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        loadSongText(playlists[currentPlaylist][songIndex].songlyricsPath);
        changeAuthorInfo();
        updateCurrentTrackColor();
        updatePlaylistColor(currentPlaylist);
        resetPlaylistColor();
        checkSongIndex();
    });
});

document.getElementById('next').addEventListener('click', () => {
    makeAllPlays(); // Останавливаем все воспроизводимые треки
    loadSongText(playlists[currentPlaylist][songIndex].songlyricsPath);
    // Увеличиваем индекс на 1
    songIndex++;

    // Проверяем, не вышел ли индекс за пределы текущего плейлиста
    if (songIndex >= playlists[currentPlaylist].length) {
        songIndex = 0; // Если вышел, сбрасываем на 0
    }

    // Устанавливаем источник аудио и обновляем интерфейс
    audioElement.src = playlists[currentPlaylist][songIndex].filePath; // Устанавливаем источник
    document.getElementById('gif').src = playlists[currentPlaylist][songIndex].coverPath; // Обновляем обложку
    audioElement.currentTime = 0; // Начинаем с начала
    audioElement.play(); // Воспроизводим трек
    masterPlay.classList.remove('fa-play-circle'); // Обновляем иконку воспроизведения
    masterPlay.classList.add('fa-pause-circle');
    loadSongText(playlists[currentPlaylist][songIndex].songlyricsPath);
    changeAuthorInfo();
    updateSongName(songIndex); // Обновляем название текущего трека
    updateCurrentTrackColor(); // Обновляем цвет текущего трека
    updatePlaylistColor(currentPlaylist); // Обновляем цвет для текущего плейлиста
    resetPlaylistColor(); // Сбрасываем цвет плейлиста
    checkSongIndex(); // Проверяем индекс песни
});


document.getElementById('previous').addEventListener('click', () => {
    makeAllPlays(); // Останавливаем все воспроизводимые треки

    // Уменьшаем индекс на 1 и обрабатываем переход в начало плейлиста
    songIndex = (songIndex - 1 + playlists[currentPlaylist].length) % playlists[currentPlaylist].length;
    loadSongText(playlists[currentPlaylist][songIndex].songlyricsPath);
    // Устанавливаем источник аудио и обновляем интерфейс
    audioElement.src = playlists[currentPlaylist][songIndex].filePath; // Устанавливаем источник
    document.getElementById('gif').src = playlists[currentPlaylist][songIndex].coverPath; // Обновляем обложку
    audioElement.currentTime = 0; // Начинаем с начала
    audioElement.play(); // Воспроизводим трек
    masterPlay.classList.remove('fa-play-circle'); // Обновляем иконку воспроизведения
    masterPlay.classList.add('fa-pause-circle');
    changeAuthorInfo();
    updateSongName(songIndex); // Обновляем название текущего трека
    updateCurrentTrackColor(); // Обновляем цвет текущего трека
    updatePlaylistColor(currentPlaylist); // Обновляем цвет для текущего плейлиста
    resetPlaylistColor(); // Сбрасываем цвет плейлиста
    checkSongIndex(); // Проверяем индекс песни
});


const loopButton = document.getElementById('loopButton');
let isLoopEnabled = false;

function toggleLoop() {
    isLoopEnabled = !isLoopEnabled; 

    if (isLoopEnabled) {
        loopButton.style.backgroundColor = 'green'; 
        loopButton.style.color = 'white'; 
        audioElement.loop = true; 
        console.log("Loop is enabled");
    } else {
        loopButton.style.backgroundColor = 'white'; 
        loopButton.style.color = 'black'; 
        audioElement.loop = false; 
        console.log("Loop is disabled");
    }
}
makeAllPlays();
loopButton.addEventListener('click', toggleLoop);
