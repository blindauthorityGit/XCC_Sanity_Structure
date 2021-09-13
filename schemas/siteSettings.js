export default {
    title: "Site Settings",
    name: "siteSettings",
    type: "document",
    initialValue: {
        fullBG: false,
    },

    fields: [
        {
            title: "Logo Upload",
            name: "logoUpload",
            type: "image",
            description: "Upload Logo",
        },
        {
            title: "Logo Platzierung",
            name: "logoPlacement",
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
        {
            title: "Hintergund",
            name: "backgroundUpload",
            type: "image",
            description: "Upload Hintergrund",
        },

        {
            name: "fullBG",
            type: "boolean",
            title: "Fullscreen Background",
            description: "Fullscreen Background",
        },
        {
            title: "Color List",
            description: "Hintergrundfarbe Startseite",
            name: "colorlist",
            type: "colorlist", // required
            options: {
                borderradius: {
                    outer: "100%",
                    inner: "100%",
                },
                list: [
                    { title: "Dunkelrot", value: "#34101a" },
                    { title: "Dunkelblau", value: "#161923" },
                    { title: "Orange", value: "#F29E4C" },
                    { title: "Gruen", value: "#16DB93" },
                    { title: "Hellgrau", value: "#e4e4e4" },
                    { title: "Schwarz", value: "#000000" },
                    { title: "Weiss", value: "white" },
                ],
            },
        },

        {
            name: "headline",
            title: "Überschrift",
            type: "string",
        },

        {
            title: "Text",
            name: "richtext",
            type: "array",
            of: [{ type: "block" }],
        },
    ],
};
