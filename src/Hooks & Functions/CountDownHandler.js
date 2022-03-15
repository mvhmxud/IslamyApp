import dayjs from 'dayjs'

export  const countDownHandler= (timestamp)=>{
    const LastDayDate = dayjs(timestamp);
    const nowDate = dayjs()
    if(LastDayDate.isBefore(nowDate)){
        return {
            day :null,
            hrs :'00',
            mins :'00',
            secs :'00'
        }
    }
    return{
        day: getRemainingDays(LastDayDate ,nowDate),
        hrs:getRemainingHours(LastDayDate ,nowDate),
        mins:getRemainingMinutes(LastDayDate , nowDate),
        secs:getRemainingSeconds(LastDayDate , nowDate),
    }
}

function getRemainingSeconds(LastDayDate ,nowDate ){
    let second = (LastDayDate.diff(nowDate ,'seconds')%60).toString()
    if(second.length < 2 ){
    second = '0'+second
    }
    return second
}
function getRemainingMinutes(LastDayDate , nowDate){
    let mins = (LastDayDate.diff(nowDate,'minutes')%60).toString()
    if(mins.length < 2 ){
        mins = '0'+mins
    }
    return mins
}
function getRemainingHours(LastDayDate , nowDate){
    let hrs = (LastDayDate.diff(nowDate ,'hours')%24).toString()
    if(hrs.length < 2 ){
        hrs = '0'+hrs
    }
    return hrs
}
function getRemainingDays(LastDayDate , nowDate){
    const days = LastDayDate.diff(nowDate ,'days')
    return days
}