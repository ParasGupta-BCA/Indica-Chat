let o;
var l = r => {
    if (!o) {
        const e = r.forwardRef(({
            color: i = "currentColor",
            size: n = 24,
            ...s
        }, t) => r.createElement("svg", {
            ref: t,
            xmlns: "http://www.w3.org/2000/svg",
            width: n,
            height: n,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: i,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            ...s
        }, r.createElement("circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }), r.createElement("circle", {
            cx: "12",
            cy: "12",
            r: "3"
        })));
        e.displayName = "Disc", o = e
    }
    return o
};
export {
    l as
    default
};