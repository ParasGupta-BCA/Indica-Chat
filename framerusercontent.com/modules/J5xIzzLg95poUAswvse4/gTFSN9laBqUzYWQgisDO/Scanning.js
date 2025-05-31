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
                d: "M6 3H3v3M2 12h20M9 19v-4M12 16v-1M15 17v-2M12 21v-3M18 3h3v3M6 21H3v-3M18 21h3v-3",
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