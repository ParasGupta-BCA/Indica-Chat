let o;
var x = r => {
    if (!o) {
        const n = r.forwardRef(({
            color: s = "currentColor",
            size: i = 24,
            ...l
        }, e) => r.createElement("svg", {
            ref: e,
            xmlns: "http://www.w3.org/2000/svg",
            width: i,
            height: i,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: s,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            ...l
        }, r.createElement("circle", {
            cx: "6",
            cy: "6",
            r: "3"
        }), r.createElement("circle", {
            cx: "6",
            cy: "18",
            r: "3"
        }), r.createElement("line", {
            x1: "20",
            y1: "4",
            x2: "8.12",
            y2: "15.88"
        }), r.createElement("line", {
            x1: "14.47",
            y1: "14.48",
            x2: "20",
            y2: "20"
        }), r.createElement("line", {
            x1: "8.12",
            y1: "8.12",
            x2: "12",
            y2: "12"
        })));
        n.displayName = "Scissors", o = n
    }
    return o
};
export {
    x as
    default
};