declare const breakpoints: string[];
declare const mediaQueries: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
};
declare const responsive: {
    breakpoints: string[];
    mediaQueries: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
    };
};
export declare type Breakpoints = typeof breakpoints;
export declare type MediaQueries = typeof mediaQueries;
export default responsive;
