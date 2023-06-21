export const getTextProps = (strings: string[], reg: RegExp): string[] => {
    let val = "";
    const split = strings.pop().split(reg);
    if (split[1]) {
        val = split[1];
        delete split[1];
    }

    return [...strings, val, split.join("")];
};