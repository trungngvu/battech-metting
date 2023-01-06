/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9',
      },
      backgroundImage: {
        about: "url('/assets/images/about-us.png')",
        signin: "url('/assets/images/signin/signin.png')",
        trial: "url('/assets/images/trial.png')",
        banner: "url('/assets/images/banner.jpg')",
        signup: "url('/assets/images/signup.png')",
        vision: "url('/assets/images/vision.jpg')",
        core: "url('/assets/images/bg-core.jpg')",
        person: "url('/assets/images/person.png')",
        intro: "url('/assets/images/bg-intro.jpg')",
        overlay: "url('/assets/images/overlay-person.png')",
        preview: "url('/assets/images/preview.png')",
        preview1: "url('/assets/images/preview-1.png')",
        preview2: "url('/assets/images/preview-2.png')",
        backdrop1: "url('/assets/images/backdrop1.png')",
        backdrop2: "url('/assets/images/backdrop2.png')",
        services: "url('/assets/images/services.png')",
        new: "url('/assets/images/background-new.png')",
        info: "url('/assets/images/about-us/info.png')",
      },
      borderRadius: {
        18: '1.125rem',
        28: '1.75rem',
      },
      boxShadow: {
        table: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        contact: '0px 6px 8px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        black: '#0d0d0d',
        yellow: '#F5F5F5',
        purple: '#8415CA',
        primary: '#316FDC',
        secondary: '#929292',
        review: 'rgba(49, 111, 220, 0.8)',
        previewC1: 'linear-gradient(260.11deg, #F093FF -2.49%, #0A8BEB 106.7%)',
        previewC2: 'linear-gradient(260.11deg, #F093FF -2.49%, #0A8BEB 106.7%)',
      },
      fontSize: {
        news: ['2rem', '2,375rem'],
      },
      height: {
        banner: '25rem',
      },
      spacing: {
        18: '4.5rem',
      },
      screens: {
        w1730: '1730px',
        w1640: '1640px',
        w1550: '1550px',
        w1460: '1460px',
      },
      width: {
        service: '31.25rem',
        review: '33.125rem',
      },
      container: {
        center: true,
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
      keyframes: {
        MoveUpDown: {
          '0%': { bottom: '0' },
          '50%': { bottom: '-100px' },
          '100%': { bottom: '0' },
        },
        spinHorizontal: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
      animation: {
        wiggleUpDown: 'MoveUpDown 2s linear infinite',
        spinHorizontal: 'spinHorizontal .8s infinite linear',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};
