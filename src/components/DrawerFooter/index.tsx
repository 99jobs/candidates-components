import { type ComponentProps } from '@stitches/react'
import { Heart } from 'iconsax-react'
import { BlockCreditCardIcon } from '../Icons/BlockCreditCardIcon'
import { BlockPhoneIcon } from '../Icons/BlockPhoneIcon'
import { FacebookIcon } from '../Icons/FacebookIcon'
import { InstagramIcon } from '../Icons/InstagramIcon'
import { LinkedinIcon } from '../Icons/LinkedinIcon'
import { Logo99jobs } from '../Icons/Logo99jobs'
import { MediumIcon } from '../Icons/MediumIcon'
import { TiktokIcon } from '../Icons/TiktokIcon'
import { TwitterIcon } from '../Icons/TwitterIcon'
import { YoutubeIcon } from '../Icons/YoutubeIcon'
import { StyledDrawerFooter } from './style'

export interface DrawerFooterProps extends ComponentProps<typeof StyledDrawerFooter> {}

export const DrawerFooter = ({ ...props }: DrawerFooterProps) => (
  <StyledDrawerFooter {...props}>
    <div className="drawer-footer-alert">
      <p>Um minutinho da sua atenção, por favor:</p>

      <ul>
        <li>
          <BlockPhoneIcon />
          <span>
            <strong>Não ligamos</strong> para confirmar seus dados
          </span>
        </li>

        <li>
          <BlockCreditCardIcon />
          <span>
            <strong>Não cobramos</strong> qualquer taxa de pessoas candidatas
          </span>
        </li>
      </ul>
    </div>

    <div className="drawer-footer-social-links">
      <ul>
        <li>
          <a
            href="https://www.instagram.com/99jobs/?utm_source=tagportal&utm_medium=footer&utm_campaign=instagram&utm_id=001"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/99jobs?utm_source=tagportal&utm_medium=footer&utm_campaign=linkedin&utm_id=001"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon />
          </a>
        </li>
        <li>
          <a
            href="https://www.tiktok.com/@99jobs?utm_source=tagportal&utm_medium=footer&utm_campaign=tiktok&utm_id=001"
            target="_blank"
            rel="noreferrer"
          >
            <TiktokIcon />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/99jobs?utm_source=tagportal&utm_medium=footer&utm_campaign=facebook&utm_id=001"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/99jobs?utm_source=tagportal&utm_medium=footer&utm_campaign=twitter&utm_id=001"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/user/99jobs?utm_source=tagportal&utm_medium=footer&utm_campaign=twitter&utm_id=001"
            target="_blank"
            rel="noreferrer"
          >
            <YoutubeIcon />
          </a>
        </li>
        <li>
          <a
            href="https://inquietaria.99jobs.com/?utm_source=tagportal&utm_medium=footer&utm_campaign=inquietaria&utm_id=001"
            target="_blank"
            rel="noreferrer"
          >
            <MediumIcon />
          </a>
        </li>
      </ul>
    </div>

    <Logo99jobs />

    <p className="drawer-footer-developed-by">
      <Heart variant="Bold" size={14} /> Feito por pessoas que{' '}
      <strong>amam e acreditam no que fazem</strong>
      <span>.</span>
    </p>
  </StyledDrawerFooter>
)
