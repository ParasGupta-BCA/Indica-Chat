let o;
var s = r => {
    if (!o) {
        const e = r.forwardRef(({
            color: t = "currentColor",
            size: n = 24,
            ...i
        }, h) => r.createElement("svg", {
            ref: h,
            xmlns: "http://www.w3.org/2000/svg",
            width: n,
            height: n,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: t,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            ...i
        }, r.createElement("path", {
            d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
        })));
        e.displayName = "Maximize", o = e
    }
    return o
};
export {
    s as
    default
};