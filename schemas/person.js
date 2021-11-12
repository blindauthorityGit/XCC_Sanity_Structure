export default {
    title: "Person",
    name: "person",
    type: "document",
    fields: [
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
            ],
        },

        {
            title: "Bild",
            name: "poster",
            type: "image",
            description: "Ihr Avatar Bild. Empfohlene Größe 800px * 800px",
            initialValue: "",

            options: {
                hotspot: true, // <-- Defaults to false
            },
            fields: [
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
            description: "optional",
            initialValue: "",
        },
        {
            title: "Adresse",
            name: "adresse",
            type: "document",
            description: "",
            initialValue: {
                maps: false,
            },
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
                {
                    name: "maps",
                    type: "boolean",
                    title: "Google Maps anzeigen",
                    description: "Google Maps einblenden mit Pin an der oben genannten Adresse",
                },
            ],
        },
        {
            title: "Kontakt",
            name: "kontakt",
            type: "document",
            description: "Adresse",
            fields: [
                { title: "Telefon", name: "telefon", type: "string", initialValue: "" },
                { title: "Email", name: "email", type: "string", initialValue: "" },
                { title: "Website", name: "website", type: "string", initialValue: "" },
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
