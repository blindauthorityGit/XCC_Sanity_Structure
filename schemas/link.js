export default {
    name: "link",
    type: "document",
    title: "Link",
    initialValue: {
        box: false,
        showTitle: true,
    },
    fields: [
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },
        {
            name: "title",
            type: "string",
            title: "Titel",
        },

        {
            name: "showTitle",
            type: "boolean",
            title: "Show title",
            description: "Anzeigen des Titels im Button",
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
            title: "Hintergrundbild",
            name: "hintergrundbild",
            type: "image",
            description: "Upload Hintergrund Bild",
        },
        {
            name: "box",
            type: "boolean",
            title: "1/2 Width",
            description: "Button halbe Breite",
        },
        {
            name: "display",
            type: "string",
            title: "Art des Links",
            description: "Link zu Datei oder zu externen Website?",

            options: {
                list: [
                    { title: "Datei Download", value: "file", selected: "true" },
                    { title: "Externer Link", value: "link" },
                ],
                layout: "radio", // <-- defaults to 'dropdown'
            },
        },

        {
            name: "file",
            type: "file",
            title: "Datei",
            description: "Laden Sie die gewünschte Datei hoch (z.B. PDF)",
        },
        {
            name: "url",
            type: "url",
            title: "Externer Link",
            description: "Link zu externer Website (inkl. https://)",
        },
    ],
};
