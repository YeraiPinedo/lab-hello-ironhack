import './App.css';
import Navbar from './navbar/Navbar'
import logo from './navbar/logo.svg'
import menuTop from './navbar/menu-top.svg'
import Header from './Header'
import Img1 from './images/icon1.png'
import Img2 from './images/icon2.png'
import Img3 from './images/icon3.png'
import Img4 from './images/icon4.png'



const App = () => {

  return (
    <main>
      <Navbar logo={logo} menuTop={menuTop} />

      <Header titleText="Say Hello to ReactJS" subtitleText="You will learn how to use the most popular frontend library, and become a super Ninja develper." />

      <section>
        <Card 
        image={Img1}
        name="Declarative"
        info="React makes it painless to create interactive UIs"
        />
        <Card 
          image={Img2}
          name="Components"
          info="Build encapsulated components that manage their state"
          />
        <Card 
          image={Img3}
          name="Single-Way"
          info="A set of inmutable values are passed to the component's"
          />
        <Card
          image={Img4}
          name="JSX"
          info="Statically-typed, designed to run on modern browsers."
          />


      </section>

    </main>
  )
}

export default App;
