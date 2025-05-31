let o;
var l = r => {
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
                d: "M8.5 11.5l3 3 5-5",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }), r.createElement("path", {
                d: "M5 18L3.13 4.913a.996.996 0 01.774-1.114l7.662-1.703a2 2 0 01.868 0L20.096 3.8c.51.113.848.596.774 1.114L19 18c-.07.495-.5 3.5-7 3.5S5.07 18.495 5 18z",
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
    l as
    default
};