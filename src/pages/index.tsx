import * as React from "react"
import "../styles/global.css";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {

  const [values, setValues] = React.useState({})


  const onSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(values))
    window.location.href = `mailto:pchmielewski.projects@gmail.com?subject=${values.subject}&body=${values.content}`;
  }

  const valueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues(s => ({ ...s, [e.target.name]: e.target.value }))
  }


  return (
    <div className="text-slate-800">
      <main className="bg-gradient-to-r from-cyan-500 to-blue-500">
        <title>Home Page</title>
        {/* <ParallaxLayer offset={0} speed={-0.5} factor={0.5} style={{ marginTop: "5%" }}>
            <img src={cloud} alt="A cloud" width={128} height={128} style={{ display: 'block', marginLeft: "15%", marginTop: "-2%" }} />
            <img src={cloud} alt="A cloud" width={128} height={128} style={{ display: 'block', marginLeft: "45%", marginTop: "12%" }} />
            <img src={cloud} alt="A cloud" width={128} height={128} style={{ display: 'block', marginLeft: "15%", marginTop: "5%" }} />
          </ParallaxLayer> */}
        <section className="px-6 py-12 flex justify-evenly h-screen">
          <div className="self-center border-1 rounded-lg bg-slate-800 text-white p-3 md:p-6">
            <h1 className="text-xl md:text-4xl capitalize tracking-widest font-bold mb-8 md:md-16" id="home">Hi, I'm Piotr Chmielewski</h1>
            <p className="text-md md:text-2xl tracking-wide font-semibold max-w-2xl">
              I'm like a swiss army knife when it comes to solving it solution for your bussiness.
              Feel free to contact me using the <a href="#contact" className="underline underline-offset-1 text-cyan-500 hover:text-cyan-700">form</a>
            </p>
          </div>
          <div>
            <StaticImage src="../images/programmer.png" alt="A programmer" />
          </div>
        </section>
        <section className="p-6 mb-6">
          <h1 id="about" className="text-4xl mb-4 font-semibold">About</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mt-2 md:mt-6">
            <div className="bg-slate-800 border-4 border-pink-600 text-white p-4 rounded-lg hover:shadow-2xl">
              <h2 className="mb-2 text-xl font-medium">Over 4 years of experience</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="bg-slate-800 border-4 border-pink-600 text-white p-4 rounded-lg hover:shadow-2xl">

              <h2 className="mb-2 text-xl font-medium">Things I can do for you</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="bg-slate-800 border-4 border-pink-600 text-white p-4 rounded-lg hover:shadow-2xl">
              <h2 className="mb-2 text-xl font-medium">Keeping your bussiness growing</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-slate-800 p-6 text-white box relative">
          <h1 id="projects" className="text-4xl mb-4 font-semibold">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="bg-slate-800 border-4 border-pink-600 text-white p-4 rounded-lg">
              <h2 className="mb-2 text-xl font-medium">Poject 1</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="bg-slate-800 border-4 border-pink-600 text-white p-4 rounded-lg">
              <h2 className="mb-2 text-xl font-medium">Poject 1</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="bg-slate-800 border-4 border-pink-600 text-white p-4 rounded-lg">
              <h2 className="mb-2 text-xl font-medium">Poject 1</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </section>
        <section className="p-6">
          <h1 id="contact" className="text-4xl mb-4 font-semibold">Contact</h1>
          <div className="bg-slate-800 p-4 w-full md:w-1/2 text-white">
            <form id="contactForm">
              <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="subject">Subject</label>
                <input onChange={valueChange} className="hadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight invalid:outline-red-500 invalid:outline-2" type="subject" name="subject" id="subject" required />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="content">Content</label>
                <textarea onChange={valueChange} className="hadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight nvalid:outline-red-500 invalid:outline-2" id="content" name="content" rows={5} cols={33} placeholder="Enter your question/request here" required>
                </textarea>
              </div>
              <div>
                <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded" type="submit" onClick={onSubmit}>Submit</button>
              </div>
            </form>
          </div>
        </section>

      </main>
    </div>
  )
}

export default IndexPage
