function TimeConversion(s) {
    let hour = parseInt(s[0]+s[1]);
    let minute = s[3]+s[4];
    let second = s[6]+s[7];
    let isPM = s.includes("PM")
    let isAM = s.includes("AM")
    let newTime = "";
    let hourAM = "";
 
    if (isPM) {
        if (hour < 12) {
            hour += 12;
        } 
        newTime = hour+":"+minute+":"+second;
    } else if (isAM) {
        if (hour > 12) {
            hour -= 12;
            hourAM = toString(hour);
        } else if (hour < 12) {
            hourAM = s[0] + s[1];
        } else {
            hourAM = "00"
        }
        newTime = hourAM+":"+minute+":"+second;
    }

    return (newTime);    
}

console.log(TimeConversion("12:40:22AM"));