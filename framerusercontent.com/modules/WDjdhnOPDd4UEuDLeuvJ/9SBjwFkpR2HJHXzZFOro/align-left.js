let r;
var s = n => {
    if (!r) {
        const o = n.forwardRef(({
            color: e = "currentColor",
            size: i = 24,
            ...l
        }, x) => n.createElement("svg", {
            ref: x,
            xmlns: "http://www.w3.org/2000/svg",
            width: i,
            height: i,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            ...l
        }, n.createElement("line", {
            x1: "17",
            y1: "10",
            x2: "3",
            y2: "10"
        }), n.createElement("line", {
            x1: "21",
            y1: "6",
            x2: "3",
            y2: "6"
        }), n.createElement("line", {
            x1: "21",
            y1: "14",
            x2: "3",
            y2: "14"
        }), n.createElement("line", {
            x1: "17",
            y1: "18",
            x2: "3",
            y2: "18"
        })));
        o.displayName = "AlignLeft", r = o
    }
    return r
};
export {
    s as
    default
};