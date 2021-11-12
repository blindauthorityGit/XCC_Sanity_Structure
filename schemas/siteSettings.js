export default {
    title: "Site Settings",
    name: "siteSettings",
    type: "document",
    initialValue: {
        fullBG: false,
    },

    fields: [
        {
            name: "titleApp",
            title: "Titel der App",
            type: "string",
            description: "erscheint im Browser",
        },
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
