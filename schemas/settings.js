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
        {
            title: "Social Media",
            name: "socialmedia_global",
            type: "document",
            description: "Social Media Accounts für Startseite",
            fields: [
                { title: "Facebook", name: "facebook", type: "string", description: "Link zu ihrem Facebook Profil" },
                {
                    title: "Instagram",
                    name: "instagram",
                    type: "string",
                    description: "Link zu ihrem Instagram Profil",
                    initialValue: "",
                },
                {
                    title: "Twitter",
                    name: "twitter",
                    type: "string",
                    description: "Link zu ihrem Twitter Profil",
                    initialValue: "",
                },
                {
                    title: "Whatsapp",
                    name: "whatsapp",
                    type: "string",
                    description: "Ihre WhatsApp Nummer",
                    initialValue: "",
                },
                {
                    title: "LinkedIn",
                    name: "linkedin",
                    type: "string",
                    description: "Link zu Ihrem LinkedIn Profil",
                    initialValue: "",
                },
                {
                    title: "Youtube",
                    name: "youtube",
                    type: "string",
                    description: "Link zu Ihrem Youtube Kanal",
                    initialValue: "",
                },
            ],
        },
    ],
};
