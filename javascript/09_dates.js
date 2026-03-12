//Dates => object



/*

                                GETTING DATE AND TIME PARTS

Method	                       |  Description	                  |                      Example
-------------------------------|--------------------------------- |-------------------------------------
getFullYear()	               |  Year	                          |            date.getFullYear() → 2025
getMonth()	                   |  Month (0–11)                    |   date.getMonth() → 9 (October)
getDate()	                   |  Day of month (1–31)	          |                 date.getDate()
getDay()	                   |  Day of week (0–6, Sunday=0)	  |                 date.getDay()
getHours                       |  Hour (0–23)	                  |                 date.getHours()
getMinutes()	               |  Minutes (0–59)	              |                 date.getMinutes()
getSeconds()	               |  Seconds (0–59)	              |                 date.getSeconds()
getMilliseconds()	           |  Milliseconds (0–999)	          |        date.getMilliseconds()
getTime()	                   |  Milliseconds since Jan 1, 1970  |               date.getTime()


                                    SETTING DATE AND TIME


Method	                                                             Example
----------------------------------------------|---------------------------------------------------------
setFullYear(2026)	                          |                       Change year
setMonth(5)	                                  |                       Change month (June)
setDate(25)	                                  |                       Change day
setHours(10)	                              |                       Change hour
setMinutes(30)	                              |                       Change minute
setSeconds(45)	                              |                        Change second



*/

let now = new Date();

console.log(now.toString()); //Tue Oct 14 2025 01:30:32 GMT+0530 (India Standard Time)

console.log(now.toDateString()) //Tue Oct 14 2025

console.log(now.toISOString())  //2025-10-13T20:00:32.087Z

console.log(now.toJSON()) // 2025-10-13T20:00:32.087Z

console.log(now.toLocaleString()) // 14/10/2025, 1:30:32 am

console.log(now.toLocaleDateString()) // 14/10/2025

console.log(now.toTimeString()) // 01:33:37 GMT+0530 (India Standard Time)

console.log(now.toUTCString()) // Mon, 13 Oct 2025 20:04:27 GMT

/* The getTimezoneOffset() method returns the difference, in minutes, between:
your local time  and  UTC (Coordinated Universal Time)  */

console.log(now.getTimezoneOffset()) //-330

let myCreateDate = new Date(2023, 0 , 23);
console.log(myCreateDate.toDateString()); // Mon Jan 23 2023
// java Script m months ki counting 0 se strat hoti h

let myCreateDate1 = new Date("2023-01-23")

console.log(myCreateDate1.toLocaleString());

let myCreateDate2 = new Date(2023, 0 , 23 , 5,23,10)

console.log(myCreateDate2.toLocaleString())


let myTimeStamp = Date.now()

console.log(myTimeStamp)

console.log(myCreateDate.getTime())

let newDate = new Date();

console.log(newDate.toLocaleString('default' , {
    weekday:"long",
    month:"long",
    year: "numeric",
    day: "2-digit"
}))





































