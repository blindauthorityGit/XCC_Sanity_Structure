export default {
    title: "Person",
    name: "person",
    type: "document",
    fields: [
        {
            title: "Titel",
            name: "titel",
            type: "string",
            initialValue: "",
        },
        // {
        //     title: "Icon",
        //     name: "icon",
        //     type: "iconPicker",
        //     description: "Icon der Kachel in der Übersicht",
        //     initialValue: "",
        // },

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
            title: "Poster",
            name: "poster",
            type: "image",
            initialValue: "",

            options: {
                hotspot: true, // <-- Defaults to false
            },
            fields: [
                {
                    name: "caption",
                    type: "string",
                    title: "Caption",
                    options: {
                        isHighlighted: true, // <-- make this field easily accessible
                    },
                },
                {
                    // Editing this field will be hidden behind an "Edit"-button
                    name: "attribution",
                    type: "string",
                    title: "Attribution",
                },
            ],
        },
        {
            title: "Vorname",
            name: "vorname",
            type: "string",
            initialValue: "",
        },
        {
            title: "Nachname",
            name: "nachname",
            type: "string",
            initialValue: "",
        },
        {
            title: "Position",
            name: "position",
            type: "string",
            initialValue: "",
        },
        {
            title: "Adresse",
            name: "adresse",
            type: "document",
            description: "Adresse",
            fields: [
                {
                    title: "Straße",
                    name: "strasse",
                    type: "string",
                    description: "Straße + Hausnummer",
                    initialValue: "",
                },
                {
                    title: "PLZ / Ort",
                    name: "ort",
                    type: "string",
                    description: "Postleitzahl & Ort",
                    initialValue: "",
                },
                { title: "Land", name: "land", type: "string", description: "Land", initialValue: "" },
            ],
        },
        {
            title: "Kontakt",
            name: "kontakt",
            type: "document",
            description: "Adresse",
            fields: [
                { title: "Telefon", name: "telefon", type: "string", initialValue: "test" },
                { title: "Email", name: "email", type: "string", initialValue: "" },
                { title: "Website", name: "website", type: "string", initialValue: "test" },
            ],
        },
        {
            title: "Social Media",
            name: "socialmedia",
            type: "document",
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
