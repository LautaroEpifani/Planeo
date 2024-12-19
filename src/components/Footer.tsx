import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaLinkedin,
} from 'react-icons/fa';

type socialMediaIconsProps = {
  size?: number | string;
};

const classIcons = `bg-sky-400 hover:text-white`;

function Footer({ size = 23 }: socialMediaIconsProps) {
  return (
    <footer className="bg-sky-400 pt-6 pb-4 border-t-2 border-blue-950">
      {/* Sección de redes sociales */}
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://facebook.com" target="_blank" className={classIcons}>
          <FaFacebookF size={size} />
        </a>
        <a href="https://instagram.com" target="_blank" className={classIcons}>
          <FaInstagram size={size} />
        </a>
        <a href="https://twitter.com" target="_blank" className={classIcons}>
          <FaTwitter size={size} />
        </a>
        <a href="https://tiktok.com" target="_blank" className={classIcons}>
          <FaTiktok size={size} />
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          className={classIcons}
        >
          <FaLinkedin size={size} />
        </a>
      </div>

      {/* Texto de derechos reservados */}
      <div className="text-center text-sm text-white">
        © {new Date().getFullYear()} Planeo. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
