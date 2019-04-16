export const functions = {
  getRandomNumber: function(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
  },
  getName: function () {
	let length = this.getRandomNumber(3, 10);
	let possible = "abcdefghijklmnopqrstuvwxyz";
	let name = '';
	name += possible.charAt(this.getRandomNumber(0, 25)).toUpperCase();

	for (let i = 0; i < length; i++) {
		name += possible.charAt(this.getRandomNumber(0, 25));
	}
	return name;
  },
  getSalary () {
	return this.getRandomNumber(1700, 16000);
  },
  getDate () {
	let date = '';
	date += this.getRandomNumber(1975, 2004).toString();
	date += '.' + this.getRandomNumber(1, 12).toString();
	date += '.' + this.getRandomNumber(1, 28).toString();
	date += ' ' + this.getRandomNumber(0, 23).toString();
	date += ':' + this.getRandomNumber(0, 59).toString();
	date += ':' + this.getRandomNumber(0, 59).toString();
	return date;
  }
};