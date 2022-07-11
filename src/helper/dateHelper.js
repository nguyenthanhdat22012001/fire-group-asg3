export function convertDateTimezoneHelper(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
}

// // usage: Asia/Jakarta is GMT+7
// convertTZ("2012/04/20 10:10:30 +0000", "Asia/Jakarta") // Tue Apr 20 2012 17:10:30 GMT+0700 (Western Indonesia Time)