/* Playlist
Add: Pushes the passed-through song to the songs array
Play: Plays current song based on array index
Stop: Holds place in array, but calls above stop song prototype function
Next: Sets the next song in the songs array, calling the above play prototype function
Song should take in two arguments, title and artist, which should both be added as properties when the Song constructor function is used.
Play: Sets the song as playing using isPlaying
Stop: Sets the song as not playing (isPlaying = false)
const playlist = new Playlist();
const heyJude = new Song("Hey Jude", "The Beatles");
const jaded = new Song("Jaded", "Aerosmith");
playlist.add(heyJude);
playlist.add(jaded);
playlist.play(); // Hey Jude started to play
playlist.next(); // Hey Jude stopped, Jaded started
playlist.next(); // Jaded stopped, Hey Jude started
playlist.stop(); // Hey Jude stopped
playlist.play(); // Hey Jude started */

class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
  }
}

const song1 = new Song("Hey Jude", "The Beatles");
console.log(song1);
const song2 = new Song("Jaded", "Aerosmith");

class PlayList {
  constructor() {
    this.playList = [];
    this.current = 0;
  }
  add(song) {
    this.playList.push(song);
    console.log(this.playList);
  }
  play() {
    let currentSong = this.playList[this.current];
    console.log(`${currentSong.title} started to play!`);
  }
  next() {
    if (this.current + 1 >= this.playList.length) {
      this.current = 0;
    } else {
      ++this.current;
    }
    this.play();
  }
  stop() {
    console.log(`${this.playList[this.current].title} stopped!`);
  }
}

const playList = new PlayList();
playList.add(song1);
playList.add(song2);
playList.play();
playList.next();
playList.next();
playList.stop();
