/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        // extend is the json object which stores our CUSTOM class extensions. i.e. if we want to introduce a custom value for a property as a tailwind class, we can use this json.
        // This json takes keys which are the css property
        extend: {
            // For example : Iw want to introduce a new background color.
            backgroundColor: {
                // Class will be bg-
                // Now inside this json, I can add as many new background color classes as I want.
                // For this particular entry, class will be bg-custom-green
                "custom-green": "#7fc792",
                agrim: "#f63452",
            },
        },
    },
    plugins: [],
};
