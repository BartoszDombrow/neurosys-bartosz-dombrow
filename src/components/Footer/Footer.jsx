import React from 'react';
import {
  Content,
  Button,
  FooterMenu,
  FooterItem,
  FooterIcon,
  FooterText,
  FooterLink,
} from './Footer.styled';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';

function Footer() {
  const footerItems = [
    {
      icon: <AiOutlineFacebook />,
      text: 'Facebook',
      link: 'https://www.facebook.com/oki47',
    },
    {
      icon: <AiOutlineInstagram />,
      text: 'Instagram',
      link: 'https://www.instagram.com/spietadresiara/',
    },
    {
      icon: <AiOutlineYoutube />,
      text: 'YouTube',
      link: 'https://www.youtube.com/watch?v=mQ7h1ujKiG4',
    },
  ];
  return (
    <Content>
      <FooterMenu>
        {footerItems.map((footerItem) => {
          return (
            <FooterItem>
              <FooterLink href={footerItem.link} target="_blank">
                <FooterIcon>{footerItem.icon}</FooterIcon>
                <FooterText>{footerItem.text}</FooterText>
              </FooterLink>
            </FooterItem>
          );
        })}
        <Button>Kontakt</Button>
      </FooterMenu>
    </Content>
  );
}

export default Footer;
