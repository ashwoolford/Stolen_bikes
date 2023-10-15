export const serializeFormQuery = (queryParams: any): any => {
    return Object.entries(queryParams).reduce((acc: any, [key, val]: any) => {
        if(val) acc[key] = val;
        return acc;
    }, {});
};

export const dateToUnix = (date: Date): number => {
    return Math.floor(date.getTime() / 1000);
};

export const unixToDate = (unixTs: number): Date => {
    return new Date(unixTs * 1000);
};
