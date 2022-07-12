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
        <title>Piotr Chmielewski</title>
        <section className="px-6 py-12 flex justify-evenly h-screen">
          <div className="self-center border-1 rounded-lg bg-slate-800 text-white p-3 md:p-6">
            <h1 className="text-xl md:text-4xl capitalize tracking-widest font-bold mb-8 md:md-16" id="home">Hi, I'm Piotr Chmielewski</h1>
            <p className="text-md md:text-2xl tracking-wide font-semibold max-w-2xl">
              I'm specialized with solving business problems with current technologies.
              Feel free to contact me using the <a href="#contact" className="underline underline-offset-1 text-cyan-500 hover:text-cyan-700">form</a>
            </p>
          </div>
          <div>
            <StaticImage src="../images/programmer.png" alt="A programmer" />
          </div>
        </section>
        <section className="p-6 mb-6 min-h-[500px]">
          <h1 id="about" className="text-4xl mb-4 font-semibold">About</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mt-2 md:mt-6">
            <div className="bg-slate-800 border-4 border-pink-600 text-white p-4 rounded-lg hover:shadow-2xl">
              <h2 className="mb-2 text-xl font-medium">Over 4 years experience</h2>
              <p>
                I was developing many various things starting from SDN (software defined network)
                and ending on regular web applications rich in functionality like digital medical
                clinics, insurance shop and internal applications. Although I am also into marketing,
                I can also help you monitor your business conversion and introduce analytics tools,
                to monitor clients behavior.
              </p>
            </div>
            <div className="bg-slate-800 border-4 border-pink-600 text-white p-4 rounded-lg hover:shadow-2xl">

              <h2 className="mb-2 text-xl font-medium">Things I can do for you</h2>
              <p>
                I specialized in writing custom applications that meet your needs, when generic
                templates available on the web fail. I can also help speed up your application by
                scaling it or doing optimization according to web vitals parameters. Last but not least,
                I can help with moving your company into a cloud provider like Azure, AWS, GCP as a part
                of scaling your business.
              </p>
            </div>
            <div className="bg-slate-800 border-4 border-pink-600 text-white p-4 rounded-lg hover:shadow-2xl">
              <h2 className="mb-2 text-xl font-medium">Keeping your business growing</h2>
              <p>
                When your business will grow larger you also need to scale your application.
                I can help you also with that, because I have experience with scaling applications
                using cloud providers, so your company can provide service for millions of people
                around the world! I also have knowledge about marketing and SEO, which helps your
                company reach more and more people
              </p>
            </div>

            <div className="justify-self-center text-center">
              <h2 className="mb-2 text-xl text-white font-semibold">Cloud deployment</h2>
              <StaticImage className="hover:animate-bounce" src="../images/cloud.svg" alt="A cloud" height={128} width={128} />
            </div>
            <div className="justify-self-center text-center">
              <h2 className="mb-2 text-xl text-white font-semibold">Web application</h2>
              <StaticImage className="hover:animate-bounce" src="../images/website.svg" alt="An web application" height={128} width={128} />

            </div>
            <div className="justify-self-center text-center">
              <h2 className="mb-2 text-xl text-white font-semibold">Marketing</h2>
              <StaticImage className="hover:animate-bounce" src="../images/chart.svg" alt="A Chart" height={128} width={128} />
            </div>
          </div>
        </section>
        <section className="bg-slate-800 p-6 text-white box relative">
          <h1 id="projects" className="text-4xl mb-4 font-semibold">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="bg-slate-800 border-4 border-pink-600 text-white p-4 rounded-lg h-full">
              <h2 className="mb-2 text-xl font-medium capitalize">Digital clinic</h2>
              <p>
                Application helps with running the clinic, main functionality was collecting diagnostic
                and examination from users devices, shared by doctors. It also has the ability to carry
                out video and text chat with the patient by doctor. Last but not least there was an option
                to conduct a survey, it was very useful especially during the pandemic period. There were multiple
                clients who were using the product and they were really satisfied with it. I was also responsible
                for a maintenance of the application, to solve bugs reported by user and add new functionalities
                according to users needs.
              </p>
            </div>
            <div className="bg-slate-800 border-4 border-pink-600 text-white p-4 rounded-lg h-full">
              <h2 className="mb-2 text-xl font-medium capitalize">Pitkalkulator</h2>
              <p>
                It solves the problem of Polish investors, which use revolut because it helps to create yearly statements
                to calculate tax according to Polish law. It helps a lot of people, at peak there were 200 visits on site
                per day. It was parsing pdf files provided by revolut and outputting the balance sheet from the investor account.
                Right now the site is not needed anymore, because revolut introduces csv information for users itself. Source code
                of the website is still publicly available on <a className="underline underline-offset-1 text-cyan-500 hover:text-cyan-700" href="https://github.com/divident/pitkalkulator" target="_blank">github</a>,
                used technologies are flask and next.js,
              </p>
            </div>
            <div className="bg-slate-800 border-4 border-pink-600 text-white p-4 rounded-lg h-full">
              <h2 className="mb-2 text-xl font-medium capitalize">Campaing App</h2>
              <p>
                Application which allows to create campaigns to collect funds in the form of cryptocurrency  using the technology of blockchain.
                The main benefit of using blockchain to this application is that rules applied to collecting funds are written down in a form
                of a smart contract and publicly available, so everyone can familiarize oneself with it. Also after deploying no one can modify
                the contract, so initial rules always apply. The project helps me to get knowledge about the blockchain technology and solidity
                language, which allows me to write smart contracts, so I can also help clients to utilize blockchain to solve problems.
                Here is <a className="underline underline-offset-1 text-cyan-500 hover:text-cyan-700" href="https://divident.github.io/crowd-found/" target="_blank">link</a> to the application.
              </p>
            </div>
          </div>
        </section>
        <section className="p-6">
          <div className="bg-slate-800 p-4 w-full md:w-1/2 text-white mx-auto rounded-lg">
            <h1 id="contact" className="text-4xl mb-4 font-semibold">Contact</h1>
            <form id="contactForm">
              <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="subject">Subject</label>
                <input onChange={valueChange} className="hadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight invalid:outline-red-500 invalid:outline-2" type="subject" name="subject" id="subject" required />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="content">Content</label>
                <textarea onChange={valueChange} className="hadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight nvalid:outline-red-500 invalid:outline-2" id="content" name="content" rows={5} cols={33} placeholder="Enter your question/requirements here" required>
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
