const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const songsFilePath = path.join(__dirname, 'public/songs.json')
// Обработка маршрута для главной страницы
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.get('/songs', (req, res) => {
    fs.readFile(songsFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Ошибка чтения файла');
        }
        res.send(data);
    });
});
app.post('/add_song', (req, res) => {
    const newSong = req.body;

    fs.readFile(songsFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Ошибка чтения файла');
        }

        const songs = JSON.parse(data);
        songs.push(newSong);

        fs.writeFile(songsFilePath, JSON.stringify(songs, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Ошибка записи файла');
            }
            res.send({ message: 'Песня добавлена!' });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
