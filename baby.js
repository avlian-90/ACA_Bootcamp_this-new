/* Write a Baby constructor subclassing Person.
Besides name and age , Baby takes a third argument to initialize favoriteToy .
Besides the methods on Person.prototype, babies have the ability to .play() :
Should return a string "Playing with x", x being the favorite toy.
Playlist
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

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function (somefood) {
  if (this.stomach.length < 10) {
    this.stomach.push(somefood);
  }
  return this.stomach;
};

Person.prototype.poop = function () {
  this.stomach.length = 0;
};

Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`;
};
