/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    colors: {
      
      'Emerald': '#69B99D',
      'Slate':'#F8F9FE',
      'dola':'#A6A6A6',
      'pra':'#A6A6A6',
      'gray':"#6b7280",
      'black':'#1e293b',
      'dis':'#E5E5E5',
      'best':'#054457',
      'title':'#1F2744',
      'te':'#73788C',
      'head':'#1F2744',
      'white':'#f9fafb',
      'jawa':'#A6A6A6',
      'hi':'#F5F5F5',
      'kas':'#F8F9FE',
      'line':'#DEDCDA',
      'bac':'#FEFEFF',
      'name':'#0B2E29',
      'design':'#767676',
      'letter':'D7D7D7',
      'small':'#575757',
      'icon':'#29CDB5',
      'yes':'#FFFFFF',
      'ground':'#F8F9FE',
    },
  
    extend: {
      fontFamily:{
        'Pop':[ 'Poppins','sans-serif'],
        'robot':['Roboto Slab',' serif'],
        'rubik':['Rubik', 'sans-serif'],
        'nutino':[ 'Nunito Sans', 'sans-serif'],
        'sans':[ 'DM Sans', 'sans-serif'],
      },
      boxShadow:{
        '2xl': '0px 0px 25.8753px rgba(105, 185, 157, 0.32)',
        '3xl':' 9.55396px 9.55396px 25.8753px rgba(81, 140, 119, 0.24)',
        '4xl':' 0px 0px 7.96163px rgba(105, 185, 157, 0.58)',
      }

    },
  },
  
  plugins: [],
}
