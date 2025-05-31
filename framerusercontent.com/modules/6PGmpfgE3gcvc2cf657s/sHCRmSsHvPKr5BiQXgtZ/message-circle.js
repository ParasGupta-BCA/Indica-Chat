let r;
var l = e => {
    if (!r) {
        const o = e.forwardRef(({
            color: t = "currentColor",
            size: n = 24,
            ...s
        }, i) => e.createElement("svg", {
            ref: i,
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
            d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
        })));
        o.displayName = "MessageCircle", r = o
    }
    return r
};
export {
    l as
    default
};