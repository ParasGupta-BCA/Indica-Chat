let o;
var l = r => {
    if (!o) {
        let e = function(n, t) {
            return r.createElement("svg", {
                width: "100%",
                height: "1.5em",
                strokeWidth: 1.5,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                color: "currentColor",
                ref: t,
                ...n
            }, r.createElement("path", {
                d: "M7 12.5l3 3 7-7",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }), r.createElement("path", {
                d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }))
        };
        o = r.forwardRef(e)
    }
    return o
};
export {
    l as
    default
};