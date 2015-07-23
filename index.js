function listToArray (str, delimiter) {
	if (!str || typeof str !== 'string') {
		return [];
	}
	if (!delimiter) {
		delimiter = ' ';
		str = str.replace(/\,/g, ' ').replace(/\s+/g, ' ');
	}
	return str.trim().split(delimiter);
}

module.exports = listToArray;
