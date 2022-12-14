// utils
const formatToTwoDigit = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
}

export const ReviewDateFormatter = (t: Date): string => {
    try {
        const time = new Date(t)
    
        const year = time.getFullYear();
        const month = time.getMonth() + 1;
        const date = time.getDate();
    
        const formattedMonth = formatToTwoDigit(month);
        const formattedDate = formatToTwoDigit(date);
        
        return `${year}-${formattedMonth}-${formattedDate}`;
    } catch {
        return t.toString();
    }
}

export const ReviewShortDateFormatter = (t: Date): string => {
    try {
        const time = new Date(t)
    
        const year = time.getFullYear().toString().slice(2,);
        const month = time.getMonth() + 1;
        const date = time.getDate();
    
        const formattedMonth = formatToTwoDigit(month);
        const formattedDate = formatToTwoDigit(date);
        
        return `${year}/${formattedMonth}/${formattedDate}`;
    } catch {
        return t.toString();
    }
}

export const ReviewTimeFormatter = (t: Date): string => {
    try {
        const time = new Date(t)
    
        const year = time.getFullYear();
        const month = time.getMonth() + 1;
        const date = time.getDate();

        const hour = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
    
        const formattedMonth = formatToTwoDigit(month);
        const formattedDate = formatToTwoDigit(date);
        const formattedHour = formatToTwoDigit(hour);
        const formattedMinutes = formatToTwoDigit(minutes);
        const formattedSeconds = formatToTwoDigit(seconds);
        
        return `${year}/${formattedMonth}/${formattedDate} ${formattedHour}:${formattedMinutes}:${formattedSeconds}`;
    } catch {
        return t.toString();
    }
}

export const getYearFormatter = (t: Date) :string | null => {
    if (t === undefined) return null;

    const time = new Date(t);
    const year = time.getFullYear().toString();

    return year ? year : null;
}