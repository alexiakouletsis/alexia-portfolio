export default function Footer() {
  return (
    <footer className="w-full mt-20">
      {/* Divider line */}
      <div className="w-full px-10">
        <img
          src="/src/assets/images/footer-line-desktop.svg"
          alt=""
          className="hidden md:block w-full"
        />
        <img
          src="/src/assets/images/footer-line-mobile.svg"
          alt=""
          className="md:hidden w-full"
        />
      </div>

      {/* Icons */}
      <div className="flex justify-center items-center gap-10 md:gap-25 py-10">
       <a 
          href="https://www.linkedin.com/in/alexia-kouletsis/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-110"
        >
          <img
            src="/src/assets/images/linkedin-icon.svg"
            alt="LinkedIn"
            className="w-[42px] h-[42px] md:w-[84px] md:h-[84px]"
          />
        </a>

        <a
          href="https://github.com/alexiakouletsis"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-110"
        >
          <img
            src="/src/assets/images/github-icon.svg"
            alt="GitHub"
            className="w-[42px] h-[42px] md:w-[84px] md:h-[84px]"
          />
        </a>

        
          <a href="mailto:kouletsis.a@northeastern.edu"
          className="transition-transform duration-300 hover:scale-110"
        >
          <img
            src="/src/assets/images/email-icon.svg"
            alt="Email"
            className="w-[42px] h-[42px] md:w-[84px] md:h-[84px]"
          />
        </a>
      </div>
    </footer>
  )
}