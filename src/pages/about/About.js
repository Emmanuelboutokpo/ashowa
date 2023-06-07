import React from 'react'
import "./about.css"

import Footer from '../../component/footer/Footer'
import BackTop from '../../component/backToTop/BackTop'
import Navbar from '../../component/navbar/Navbar'
import Menu from '../../component/navbars/Menu'

const About = ({cartLength}) => {
  return (
    <div>
      <Navbar cartLength={cartLength} />
      <Menu />
   {/*    <Hero hero="roomsHero">
        <Banner title="About us" />
      </Hero> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h3 className='aboutTitle mt-3'>Notre service</h3>
            <div className="abouts px-2">
             <p> Bienvenue chez DIVISIMA, l'endroit où la mode rencontre la personnalisation. Nous sommes passionnés par la création d'habits uniques qui reflètent le style et la personnalité de chacun.</p>

             <p> Chez DIVISIMA, nous croyons en la puissance de l'individualité. Nous savons que chaque personne est unique et mérite de se sentir spéciale. C'est pourquoi nous avons créé une collection d'habits personnalisés conçus pour vous permettre de vous démarquer de la foule.</p>

             <p>  Nous sommes fiers de notre concept innovant qui allie qualité exceptionnelle et personnalisation sur mesure. Nous utilisons les meilleurs matériaux pour nos habits et nous collaborons avec des artistes talentueux pour créer des designs uniques qui vous ressemblent.</p>

             <p>  Notre objectif principal est de vous offrir une expérience client exceptionnelle. Nous croyons en un service personnalisé et attentif à chaque détail. Que vous souhaitiez une pièce unique pour une occasion spéciale ou que vous cherchiez à exprimer votre style au quotidien, notre équipe dévouée est là pour vous conseiller et vous accompagner tout au long du processus de personnalisation.</p>

             <p>  La qualité et la durabilité sont au cœur de notre démarche. Nous croyons en la création d'habits qui durent, à la fois dans leur style intemporel et dans leur résistance aux épreuves du temps. Nous sélectionnons soigneusement nos matériaux et adoptons des méthodes de fabrication respectueuses de l'environnement, car nous nous engageons envers une mode durable.</p>
             <p> N'hésitez pas à nous contacter pour toute question ou demande d'information supplémentaire. Rejoignez la communauté DIVISIMA et embarquez avec nous dans un voyage au cœur de la mode personnalisée.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <img src="/img/coup.png" alt="fem" className='femImg'/>
          </div>
        </div>
      </div>
      <Footer />
      <BackTop />
    </div>
  )
}

export default About
