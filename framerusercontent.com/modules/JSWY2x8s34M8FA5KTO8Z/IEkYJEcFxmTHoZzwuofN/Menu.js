let e;
var i = r => {
    if (!e) {
        let o = function(n, t) {
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
                d: "M3 5h18M3 12h18M3 19h18",
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
    i as
    default
};