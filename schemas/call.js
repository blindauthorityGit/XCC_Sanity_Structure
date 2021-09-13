export default {
    name: "call",
    type: "document",
    title: "Anruf",
    initialValue: {
        box: false,
    },
    fields: [
        {
            name: "title",
            type: "string",
            title: "Titel",
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
            name: "box",
            type: "boolean",
            title: "1/2 Width",
            description: "Button halbe Breite",
        },
        {
            name: "phone",
            type: "string",
            title: "Telefonnummer",
            description: "Geben Sie die vollständige Telefonnummer an (z.B. +43 660 1234567)",
        },
    ],
};
