/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        cream: "#f7f2eb",
        card: "#fffdfb",
        line: "#eedfd0",
        primary: "#d2231f",
        "primary-deep": "#b8120f",
        accent: "#ff8a00",
        ink: "#5d1f14",
        "ink-soft": "#6b5f57",
        muted: "#aa8f77"
      },
      boxShadow: {
        soft: "0 10px 26px rgba(175, 93, 32, 0.08)",
        warm: "0 18px 50px rgba(129, 71, 29, 0.08)",
        pill: "0 10px 20px rgba(210, 35, 31, 0.18)"
      },
      borderRadius: {
        panel: "24px",
        shell: "34px"
      },
      maxWidth: {
        container: "1200px"
      },
      fontFamily: {
        sans: [
          "\"Noto Sans SC\"",
          "\"Source Han Sans SC\"",
          "\"PingFang SC\"",
          "\"Microsoft YaHei\"",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};
