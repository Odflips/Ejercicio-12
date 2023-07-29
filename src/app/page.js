import Image from "next/image";

export default function Home() {
  return (
    <main className="main">
      <header>
        <nav className="nav">
          <h2 className="tit">Edie</h2>
          <Image
            className="menuh"
            src="./menu.svg"
            alt="menu"
            width={40}
            height={40}
          />
          <ul className="lista">
            <li>Home</li>
            <li>Services</li>
            <li>Our Works</li>
            <li>Clients</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      <section className="box">
        <div className="box1">
          <p className="text">Unhapppy with your website?</p>
          <h1 className="tit2">We create beatuful</h1>
          <h1>and fast web services</h1>
        </div>

        <div>
          <Image
            className="img1"
            src="/heroimage.jpg"
            alt="heroimage"
            width={1300}
            height={300}
          />
        </div>
      </section>

      <section>
        <div className="box2">
          <h1 className="tit2">Story, emotion and purpose</h1>
          <div className="box3">
            <p className="text2">
              We help transform your ideas into real world applications that
              will outperform your toughest competition and help you achieve
              your strategic goals in short period of time.
            </p>

            <p className="text3">Want us to contact you?</p>
            <div className="box-e">
              <input className="input" type="email" placeholder="Email"></input>
              <button className="but">Join</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="card-box1">
          <div>
            <h1>We offer high demand services</h1>
          </div>
          <div className="card-box">
            <div className="card">
              <Image
                className="img2"
                src="/icono1.jpeg"
                alt=""
                width={40}
                height={40}
              />
              <h3 className="tit-card">UI/UX Design</h3>
              <p className="p-card">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore consectetur eius recusandae numquam nesciunt dolor. Est
                laboriosam facilis veniam laborum, vel, aut deserunt eligendi
                asperiores dolor amet adipisci nihil! Voluptates.
              </p>
              <button className="b-card">Get started</button>
            </div>
            <div className="card">
              <Image
                className="img2"
                src="/icono3.jpeg"
                alt=""
                width={40}
                height={40}
              />
              <h3 className="tit-card">Front End</h3>
              <p className="p-card">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore consectetur eius recusandae numquam nesciunt dolor. Est
                laboriosam facilis veniam laborum, vel, aut deserunt eligendi
                asperiores dolor amet adipisci nihil! Voluptates.
              </p>
              <button className="b-card">Get started</button>
            </div>
            <div className="card">
              <Image
                className="img2"
                src="/icono2.jpeg"
                alt=""
                width={40}
                height={40}
              />
              <h3 className="tit-card">Back End</h3>
              <p className="p-card">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore consectetur eius recusandae numquam nesciunt dolor. Est
                laboriosam facilis veniam laborum, vel, aut deserunt eligendi
                asperiores dolor amet adipisci nihil! Voluptates.
              </p>
              <button className="b-card">Get started</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="text4">
          <h1>Good design means good business</h1>
        </div>

        <div className="caja1">
          <Image
            className="imgs3"
            src="/smarthome.jpg"
            alt="smarthome-image"
            width={534}
            height={534}
          />
          <p>Full stack application</p>
          <h1>Smart home dashboard</h1>
        </div>
        <div className="caja2">
          <Image
            className="imgs3"
            src="/onboard.png"
            alt="smarthome-image"
            width={534}
            height={534}
          />
          <p>UX/UI design</p>
          <h1>Onboard application</h1>
        </div>
        <div className="caja3">
          <Image
            className="imgs3"
            src="/booking.png"
            alt="smarthome-image"
            width={534}
            height={534}
          />
          <p>Mobiile application</p>
          <h1>Booking system</h1>
        </div>
        <div className="caja4">
          <Image
            className="imgs3"
            src="/juice-product.png"
            alt="smarthome-image"
            width={534}
            height={534}
          />
          <p>Front End application</p>
          <h1>Juice product homepage</h1>
        </div>
        <button className="but3">See more</button>
      </section>

      <section className="meet-box">
        <div className="meet">
          <p>Meet the team</p>
          <h1>We are chilled and a laidback team</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="box-img">
          <Image
            className="imgb1"
            src="/person3.png"
            alt="person"
            width={291}
            height={300}
          />
          <Image
            className="imgb2"
            src="/person1.png"
            alt="person"
            width={291}
            height={300}
          />
          <Image
            className="imgb3"
            src="/person2.png"
            alt="person"
            width={291}
            height={300}
          />
        </div>
      </section>
      <div className="prefoot">
        <h1>
          "Fast and outstanding results. Edie understands their customer´s
          needs. They have a young and talented team."
        </h1>
        <div className="avatar-box">
          <Image className="img-avatar" src="/person4.png" alt="person" width={135} height={162} />
          <div className="avatar-text">
          <h3>Carlos Tran</h3>
          <p>The Decorate Gatsby</p>
          </div>
        </div>
      </div>

      <footer className="foot">
        <div>
          <ul className="list-foot">
            <li>Home</li>
            <li>Services</li>
            <li>our works</li>
            <li>Clients</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h2>Edie</h2>
          <Image src="/instagram.svg" alt="insta" width={24} height={24} />
          <Image src="/linkedin.svg" alt="insta" width={24} height={24} />
          <Image src="/twitter.svg" alt="insta" width={24} height={24} />
        </div>

        <div className="box-e">

          <input className="input2" type="email" placeholder="Email"></input>
          <button className="but2">Join</button>
        </div>

        
      </footer>

      <div className="span">

        <span>Created By Oliver leal - devChallenges.io</span>

        </div>
    </main>
  );
}
