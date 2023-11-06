import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
        "./src/**/*.{html,js}",
        "./node_modules/tw-elements/dist/js/**/*.js",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                exo: ["Exo", "sans-serif"],
                roboto: ["Roboto", "sans-serif"],
                trocchi: ["Trocchi", "serif"],
                josefin: ["Josefin Sans", "sans-serif"],
            },
            colors: {
                custom: {
                    primary: "#0b83bf",
                    secondary: "#22668D",
                    card: "#3799CA",
                },
            },
        },
    },

    plugins: [forms, require("tw-elements/dist/plugin.cjs")],
};
