function firstNonRepeatedChar(str) {
 // Write your code here
	const charFrequency = {};
	for (let char of str) {
        charFrequency[char] = (charFrequency[char] || 0) + 1;
    }
	 for (let char of str) {
        if (charFrequency[char] === 1) {
            return char; 
		}
}
	 return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
