export const TimeCalculator = (seconds) => {
 if(seconds > 3600){
   const date = new Date(seconds * 1000).toISOString().substr(11, 8)
     return(date)
 }else{
    const date =new Date(seconds * 1000).toISOString().substr(14, 5)
    return(date)
 }
};
