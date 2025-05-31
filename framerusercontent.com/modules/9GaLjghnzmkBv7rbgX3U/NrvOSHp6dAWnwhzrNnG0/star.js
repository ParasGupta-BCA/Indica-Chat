let r;
var l = o => {
    if (!r) {
        const n = o.forwardRef(({
            color: e = "currentColor",
            size: t = 24,
            ...i
        }, s) => o.createElement("svg", {
            ref: s,
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: t,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            ...i
        }, o.createElement("polygon", {
            points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        })));
        n.displayName = "Star", r = n
    }
    return r
};
export {
    l as
    default
};