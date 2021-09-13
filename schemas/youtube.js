export default {
    name: "youtube",
    type: "document",
    title: "YouTube",
    fields: [
        {
            title: "Titel",
            name: "titel",
            type: "string",
            initialValue: "",
        },
        {
            title: "Color List",
            description: "Farbe des Buttons",
            name: "colorlist",
            type: "colorlist", // required
            options: {
                borderradius: {
                    outer: "100%",
                    inner: "100%",
                },
                list: [
                    { title: "Rot", value: "#7f243d" },
                    { title: "Blau", value: "#272d45" },
                    { title: "Orange", value: "#F29E4C" },
                    { title: "Gruen", value: "#16DB93" },
                    { title: "Hellgrau", value: "#e4e4e4" },
                    { title: "Schwarz", value: "#000000" },
                    { title: "Weiss", value: "white" },
                ],
            },
        },
        {
            name: "url",
            type: "url",
            title: "YouTube video URL",
        },
        {
            title: "Text",
            name: "beschreibung",
            type: "array",
            of: [{ type: "block" }],
        },
    ],
};
