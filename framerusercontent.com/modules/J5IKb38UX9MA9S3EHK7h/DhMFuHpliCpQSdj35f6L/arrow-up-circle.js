let o;
var t = r => {
    if (!o) {
        const n = r.forwardRef(({
            color: i = "currentColor",
            size: e = 24,
            ...l
        }, s) => r.createElement("svg", {
            ref: s,
            xmlns: "http://www.w3.org/2000/svg",
            width: e,
            height: e,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: i,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            ...l
        }, r.createElement("circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }), r.createElement("polyline", {
            points: "16 12 12 8 8 12"
        }), r.createElement("line", {
            x1: "12",
            y1: "16",
            x2: "12",
            y2: "8"
        })));
        n.displayName = "ArrowUpCircle", o = n
    }
    return o
};
export {
    t as
    default
};