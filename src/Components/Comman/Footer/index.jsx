import React from "react";
import style from "./styles.module.css";
import FooterTopCard from "../../Footer/FooterTopCard/Index";
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
const dataArray = [
  {
    image:
      "https://png.pngtree.com/png-clipart/20230104/original/pngtree-blue-100-guaranteed-premium-quality-trust-badge-png-image_8871751.png",
    data1: "Assured Purchase",
    data2: "Provide genuine service & store products",
    data3: "100% genuine products",
    data4: "Deliver items at door",
    data5: "Free to return products",
  },
  {
    image:
      "https://png.pngtree.com/png-vector/20220304/ourmid/pngtree-cartoon-truck-and-trailer-in-modern-design-vector-png-image_4430142.png",
    data1: "Easy To Buy & Return",
    data2: "Single click to buy & return products",
    data3: "Same day devilery available",
    data4: "Click to return products",
    data5: "Quick support links available",
  },
  {
    image: "https://cdn4.iconfinder.com/data/icons/eshop/403/39-512.png",
    data1: "Secure Payments",
    data2: "Accepts all credit & debit cards",
    data3: "100% payment security",
    data4: "Confirmation authentity",
    data5: "delivery items at door",
  },
  {
    image: "https://archive.org/download/download-png/dl.png",
    data1: "Download Center",
    data2: "Use mobile app and get biggest discounts",
  },
];
function Footer() {
  return (
    <footer className={style.main}>
      <section className={style.top}>
        {dataArray.map((datas, i) => (
          <FooterTopCard data={datas} number={i} />
        ))}
      </section>
      <hr />
      <section className={style.bottom}>
        <div className={style.inner}>
          <p className={style.heading}>About Store</p>
          <p className={style.desc}>
            At vero eos et accusamus et iusto odio dignissimos ducimus, duis
            faucibus enim vitae nunc molestie.
          </p>
        </div>
        <div className={style.inner}>
          <p className={style.heading}>Extras</p>
          <p className={style.desc}>
            <a href="">Brands</a>
            <a href="">Gift Certificates</a>
            <a href="">Affiliates</a>
            <a href="">Contact Us</a>
            <a href="">Specials</a>
          </p>
        </div>
        <div className={style.inner}>
          <p className={style.heading}>My Account</p>
          <p className={style.desc}>
            <a href="">My Account</a>
            <a href="">Order History</a>
            <a href="">Wishlist</a>
            <a href="">Newsletter</a>
            <a href="">Returns</a>
          </p>
        </div>
        <div className={style.inner}>
          <p className={style.heading}>Store Information</p>
          <p className={style.desc}>
            <p className={style.icons}><PlaceRoundedIcon/>At- Harina Market P.O-Nawagarh Dhanbad (Jh)-828306</p>
            <p className={style.icons}><PhoneRoundedIcon/>+91 7717755757</p>
            <p className={style.icons}><MailRoundedIcon/>samikikumar@gmail.com</p>
          </p>
        </div>
      </section>
      <section className={style.socials}>
        <p>Powered By OpenCart Demo Store © 2024</p>
        <div>
            <div><FacebookRoundedIcon/></div>
            <div><InstagramIcon/></div>
            <div><TwitterIcon/></div>
            <div><LinkedInIcon/></div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
