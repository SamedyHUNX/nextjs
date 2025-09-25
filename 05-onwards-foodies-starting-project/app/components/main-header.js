import Image from "next/image";
import Link from "next/link";
import logoImg from "./../../assets/logo.png";
import classes from "./main-header.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image
          src={logoImg.src}
          alt="A plate with food on it"
          width={100}
          height={100}
        />
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Brown Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
