export default {
    name: "emailContact",
    type: "document",
    title: "Email",
    initialValue: {
        box: false,
    },
    fields: [
        {
            title: "Title entry",
            name: "titel_intern",
            type: "string",
            initialValue: "",
        },
        {
            name: "orderClass",
            title: "Order",
            type: "number",
            description: "Button order. Example: 0 = first button",
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
                    title: "Title button",
                    name: "titel",
                    type: "string",
                    initialValue: "",
                },
                {
                    title: "Color List",
                    description: "Button color",
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
                    description: "dark border for button",
                },
                {
                    name: "box",
                    type: "boolean",
                    title: "1/2 Width",
                    description: "half width button",
                },
                {
                    name: "icon",
                    type: "boolean",
                    title: "Show Icon",
                    description: "show icon in button",
                },
            ],
        },

        {
            name: "email",
            type: "string",
            title: "Email",
        },
    ],
};
