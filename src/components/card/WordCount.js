const WordCount = (text) => {
    
    const MILLISECONDS = 60000;
    let number = 0;
    let split = text.split(" ");
    let currentTimeReading = parseFloat(0.4);
    let read = 0;

    for(let i = 0; i < split.length; i++) {
        if (split[i] != "") {
            number ++;
        }
    }
    const readingTime = currentTimeReading * number / 60
    const multipliTotal = readingTime * 60 * 1000

    if (multipliTotal < MILLISECONDS) {
        const changeFormat = readingTime.toString()
        const newTimeSeconds = changeFormat.substring(2,4) 
        return newTimeSeconds + " sec"
    }else{
        const format = readingTime.toString();
        read = format.substring(0,1)
        return parseInt(read) + " minutes";
    }
}

export default WordCount;