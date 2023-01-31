export const scoreformatter = (num : number): string => {
    const numstring = num.toFixed(2).toString();
    let [dec, xx] = numstring.split(".");
    
    if (dec.length >= 2) {
        xx = "0"
    }

    return `${dec}.${xx}`;
}