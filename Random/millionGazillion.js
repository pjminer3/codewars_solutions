class millionGazillio {
    constructor() {
        this.history = {};
    }

    hasWebsite(website) {
        let newWebsite = false;
        let current = this.history;

        // iterate through each letter until you figure out if it's a new word or not
        function iterateLetters(word, current) {
            //base case need to check if 
            if (word.length === 0) {
                // check to see if there is a EndOfWord
                if (current.hasOwnProperty('End of Word')) {
                    return;
                }
                current['End of World'] = true;
                newWebsite = true;
                return;
            }
            // get the first letter
            const char = word.slice(0, 1);
            // see if the first letter is in current
            if (!current.hasOwnProperty(char)) {
                // if it isn't, make it a new word and call iterator again
                newWebsite = true;
                current[char] = {};
            } 
            return iterateLetters(word.slice(1), current[char])
        }
        iterateLetters(website, current);
        return newWebsite;
    }
}

const ourDB = new millionGazillio();

ourDB.hasWebsite('www.google.com'); 
ourDB.hasWebsite('http:patrick.com');
ourDB.hasWebsite('hello there');

console.log(ourDB.history);
// adding comment as experiment
// need to finish this problem