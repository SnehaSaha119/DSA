function dayOfTheWeek(day: number, month: number, year: number): string {
    const daysOfWeek = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ]
    const resDay = new Date(`${year}-${month}-${day}`).getDay();

    return daysOfWeek[resDay];
    
};