let r;
var i = e => {
    if (!r) {
        const o = e.forwardRef(({
            color: t = "currentColor",
            size: n = 24,
            ...s
        }, a) => e.createElement("svg", {
            ref: a,
            xmlns: "http://www.w3.org/2000/svg",
            width: n,
            height: n,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: t,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            ...s
        }, e.createElement("path", {
            d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
        })));
        o.displayName = "MessageSquare", r = o
    }
    return r
};
export {
    i as
    default
};