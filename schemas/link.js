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
            title: "Titel",
            name: "titel_intern",
            type: "string",
            description: "Titel des Beitrags",
            initialValue: "",
        },
        {
            name: "orderClass",
            title: "Reihenfolge",
            type: "number",
            description: "Reihenfolge des Buttons. Beispiel: 0 = erstes Element",
        },
        {
            title: "Button Settings",
            name: "button_settings",
            type: "document",
            initialValue: {
                box: false,
                border: false,
                icon: true,
            },
            fields: [
                {
                    title: "Titel Button",
                    name: "titel",
                    type: "string",
                    description: "Titel des Buttons",
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
                    name: "border",
                    type: "boolean",
                    title: "Border",
                    description: "Dunkler Border um den Button",
                },
                {
                    name: "box",
                    type: "boolean",
                    title: "1/2 Width",
                    description: "Button halbe Breite",
                },
                {
                    name: "icon",
                    type: "boolean",
                    title: "Show Icon",
                    description: "Icon in Button anzeigen",
                },
                {
                    title: "Button Hintergrundbild",
                    name: "bg",
                    type: "image",
                    description: "Hintergrundbild für Button. Ersetzt den Titel des Button",
                },
                {
                    title: "Hintergrund Platzierung",
                    name: "bgPlacement",
                    type: "string",
                    options: {
                        list: [
                            { title: "Links", value: "left" },
                            { title: "Zentriert", value: "center" },
                            { title: "Rechts", value: "right" },
                        ], // <-- predefined values
                        layout: "radio", // <-- defaults to 'dropdown'
                    },
                },
            ],
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
