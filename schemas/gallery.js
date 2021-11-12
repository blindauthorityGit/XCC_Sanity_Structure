export default {
    name: "gallery",
    type: "document",
    title: "Gallery",
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
                    description: "Show icon in button",
                },
            ],
        },

        {
            name: "images",
            type: "array",
            title: "Images",
            of: [
                {
                    name: "image",
                    type: "image",
                    title: "Image",
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: "beschreibung",
                            type: "string",
                            title: "description",
                        },
                        {
                            name: "alt",
                            type: "string",
                            title: "Alternative text",
                        },
                    ],
                },
            ],
            options: {
                layout: "grid",
            },
        },
        {
            title: "Galerie Layout",
            name: "layout",
            type: "string",

            options: {
                list: [
                    { title: "Carousel", value: "carousel" },
                    { title: "Grid", value: "grid" },
                ], // <-- predefined values
                layout: "radio", // <-- defaults to 'dropdown'
            },
        },
        {
            title: "Text",
            name: "beschreibung",
            type: "array",
            of: [{ type: "block" }],
        },
        // {
        //     name: "display",
        //     type: "string",
        //     title: "Anzeigen als",
        //     description: "Wie sollen die Bilder angezeigt werden?",
        //     options: {
        //         list: [
        //             { title: "Bilder übereinander", value: "stacked" },
        //             { title: "Carousel", value: "carousel" },
        //         ],
        //         layout: "radio",
        //     },
        // },
        // {
        //     name: "zoom",
        //     type: "boolean",
        //     title: "Zoom enabled",
        //     description: "Should we enable zooming of images?",
        // },
    ],
    // preview: {
    //     select: {
    //         images: "images",
    //         image: "images.0",
    //     },
    //     prepare(selection) {
    //         const { images, image } = selection;

    //         return {
    //             title: `Gallery block of ${Object.keys(images).length} images`,
    //             subtitle: `Alt text: ${image.alt}`,
    //             media: image,
    //         };
    //     },
    // },
};
