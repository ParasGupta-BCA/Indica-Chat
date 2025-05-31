let o;
var i = r => {
    if (!o) {
        let e = function(n, t) {
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
                d: "M3 15V9a6 6 0 016-6h6a6 6 0 016 6v6a6 6 0 01-6 6H9a6 6 0 01-6-6z",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }), r.createElement("path", {
                d: "M15 3s-4.5 0-4.5 9H13c0 9 2 9 2 9",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }), r.createElement("path", {
                d: "M16.5 14.5s-1.5 2-4.5 2-4.5-2-4.5-2M7 9v2M17 9v2",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }))
        };
        o = r.forwardRef(e)
    }
    return o
};
export {
    i as
    default
};