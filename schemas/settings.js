export default {
    title: "Settings",
    name: "settings",
    type: "document",
    fields: [
        {
            title: "Logo",
            name: "logo",
            type: "image",
            description: "Upload Logo",
            initialValue: false,
        },
        {
            title: "Logo Platzierung",
            name: "logoPlacment",
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
            name: "background",
            type: "image",
            description: "Upload Hintergrund",
        },

        {
            name: "headline",
            title: "Überschrift",
            type: "string",
            initialValue: false,
        },

        {
            title: "Text",
            name: "richtextee",
            type: "array",
            of: [{ type: "block" }],
        },
    ],
};
