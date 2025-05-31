let e;
var f = r => {
    if (!e) {
        let o = function(t, n) {
            return r.createElement("svg", {
                width: "100%",
                height: "1.5em",
                strokeWidth: 1.5,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                color: "currentColor",
                ref: n,
                ...t
            }, r.createElement("path", {
                d: "M7 4v1M7 9v1M17 20V4m0 0l3 3m-3-3l-3 3M7 14v6m0 0l3-3m-3 3l-3-3",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }))
        };
        e = r.forwardRef(o)
    }
    return e
};
export {
    f as
    default
};