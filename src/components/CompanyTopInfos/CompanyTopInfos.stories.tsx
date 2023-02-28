import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { CompanyTopInfos } from '.'
import { Button } from '../Button'
import { CompanyLogo } from '../CompanyLogo'
import { CompanyTopInfosBottom } from '../CompanyTopInfosBottom'
import { CompanyTopInfosContent } from '../CompanyTopInfosContent'
import { CompanyTopInfosNumber } from '../CompanyTopInfosNumber'
import { CompanyTopInfosRatingContainer } from '../CompanyTopInfosRatingContainer'
import { CompanyTopInfosSocialMediaButtons } from '../CompanyTopInfosSocialMediaButtons'
import { CompanyTopInfosTop } from '../CompanyTopInfosTop'
import { InstagramIcon } from '../Icons/InstagramIcon'
import { LinkedinIcon } from '../Icons/LinkedinIcon'
import { TwitterIcon } from '../Icons/TwitterIcon'
import { Rating } from '../Rating'

export default {
  title: 'Components/Data/CompanyTopInfos',
  component: CompanyTopInfos,
} as ComponentMeta<typeof CompanyTopInfos>

const Template: ComponentStory<typeof CompanyTopInfos> = (args) => <CompanyTopInfos {...args} />

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <CompanyLogo
        src="https://e3ba6e8732e83984.cdn.gocache.net/uploads/image/file/2455745/regular_6cb89e17c1965121b464829af22f7a89.jpeg"
        alt="Logotipo da Empresa X"
      />

      <CompanyTopInfosContent>
        <CompanyTopInfosTop>
          <CompanyTopInfosNumber>
            {' '}
            <h1>1234</h1> <p>Oportunidades</p>
          </CompanyTopInfosNumber>
          <CompanyTopInfosNumber>
            {' '}
            <h1>456</h1> <p>Avaliações</p>
          </CompanyTopInfosNumber>
        </CompanyTopInfosTop>

        <CompanyTopInfosBottom>
          <CompanyTopInfosSocialMediaButtons>
            <Button
              color="onlyIcon"
              prefixIcon={<TwitterIcon />}
              aria-label="Link para Twitter da empresa X"
            />
            <Button
              color="onlyIcon"
              prefixIcon={<InstagramIcon />}
              aria-label="Link para Instagram da empresa X"
            />
            <Button
              color="onlyIcon"
              prefixIcon={<LinkedinIcon />}
              aria-label="Link para Linkedin da empresa X"
            />
          </CompanyTopInfosSocialMediaButtons>
          <CompanyTopInfosRatingContainer>
            <Rating rate={4.8} />
          </CompanyTopInfosRatingContainer>
        </CompanyTopInfosBottom>
      </CompanyTopInfosContent>
    </>
  ),
}
