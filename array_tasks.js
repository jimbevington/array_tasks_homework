var arrayTasks = {

	concat: function (arr1, arr2) {
		let result = [];
		let arrays = [arr1, arr2]

		for (let array of arrays){
			for (let element of array){
				result.push(element);
			}
		}
		return result;
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		return arr.map(element => element**2);
	},

	sum: function (arr) {
		return arr.reduce(function(element, total){
			return element + total;
		}, 0);
	},

	findDuplicates: function (arr) {
		let duplicates = [];
		// for each element
		for (let element of arr){
			let ofElement = arr.filter(x => x === element);
			if (ofElement.length > 1){
				duplicates.push(element);
				arr = arr.filter(x => x !== element);
			}
		}
		return duplicates;
	},

	removeAndClone: function (arr, valueToRemove) {
		return arr.filter(element => element !== valueToRemove);
	},

	findIndexesOf: function (arr, itemToFind) {
		let indices = [];
		count = 0;
		arr.forEach(function(element){
			if (element === itemToFind){
				indices.push(count);
			}
			count += 1;
		})
		return indices;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		let evens = arr.filter(element => (element % 2) === 0);
		let sqrdEvens = this.square(evens);
		return this.sum(sqrdEvens);
	}

}

module.exports = arrayTasks

// return arr.reduce(function(element, total){
// 	return element + total;
// }, 0);
