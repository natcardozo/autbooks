import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <img src="/images/logo-footer.png" alt="Logotipo da Autbooks" />
                <nav className={styles.footer__navigation}>
                    <ul>
                        <li>Trabalhe conosco</li>
                        <li>Contato</li>
                        <li>Blog</li>
                        <li>Novidades</li>
                    </ul>
                </nav>
                <div className={styles.footer__contact}>
                    <p>SAC: (XX) XXXX-XXXX</p>
                    <p>Email: sac@autbooks.com.br</p>
                    <div>
                        <button>
                            <TwitterIcon color="secondary" fontSize="large" cursor="pointer" />
                        </button>
                        <button>
                            <InstagramIcon color="secondary" fontSize="large" cursor="pointer" />
                        </button>
                        <button>
                            <FacebookIcon color="secondary" fontSize="large" cursor="pointer" />
                        </button>
                        <button>
                            <WhatsAppIcon color="secondary" fontSize="large" cursor="pointer" />
                        </button>
                    </div>
                </div>
                <div className={styles.footer__address}>
                    <p>Av. Paulista, 900</p>
                    <p>1º andar</p>
                    <p>Bela Vista</p>
                    <p>São Paulo - São Paulo</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
