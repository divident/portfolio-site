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

  const valueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues(s => ({ ...s, [e.target.name]: e.target.value }));
  }


  return (
    <div className="text-slate-800">
      <main className="bg-gradient-to-r from-cyan-500 to-blue-500">
        <title>Piotr Chmielewski</title>
        <section className="px-6 py-12 flex justify-evenly h-screen">
          <div className="self-center border-1 rounded-lg bg-slate-800 text-white p-3 md:p-6">
            <h1 className="text-xl md:text-4xl capitalize tracking-widest font-bold mb-8 md:md-16" id="home">Hi, I'm Piotr Chmielewski</h1>
            <p className="text-md md:text-2xl tracking-wide font-semibold max-w-2xl">
              I specialize in leveraging modern technologies to solve complex business challenges.
              Feel free to reach out using the <a href="#contact" className="underline underline-offset-1 text-cyan-500 hover:text-cyan-700">contact form</a>
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
              <h2 className="mb-2 text-xl font-medium">Diverse Experience</h2>
              <p className="text-base">
              Over 4 years working on projects from SDN to web apps, including medical clinics, insurance platforms, and internal tools. I also deliver marketing analytics to help businesses track conversions and understand customers.
              </p>
            </div>
            <div className="bg-slate-800 border-4 border-pink-600 text-white p-4 rounded-lg hover:shadow-2xl">
              <h2 className="mb-2 text-xl font-medium">Tailored Solutions</h2>
              <p className="text-base">
              I build custom applications for unique business needs, optimizing web performance and migrating to cloud platforms like Azure, AWS, or GCP. My focus is on reliability and scalability for your business.
              </p>
            </div>
            <div className="bg-slate-800 border-4 border-pink-600 text-white p-4 rounded-lg hover:shadow-2xl">
              <h2 className="mb-2 text-xl font-medium">Scaling for Growth</h2>
              <p className="text-base">
              I help scale applications to meet growing demand using cloud-based solutions. My experience ensures reliability for large user bases, and I apply SEO and marketing strategies to expand your reach.
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
                This application streamlines clinic operations by collecting diagnostic data, enabling video and text consultations, and conducting surveys. It proved invaluable during the pandemic, serving multiple satisfied clients. I also handled maintenance, bug fixes, and feature enhancements based on user feedback.
              </p>
            </div>
            <div className="bg-slate-800 border-4 border-pink-600 text-white p-4 rounded-lg h-full">
              <h2 className="mb-2 text-xl font-medium capitalize">Pitkalkulator</h2>
              <p>
                A solution for Polish investors using Revolut, this tool generated yearly tax statements compliant with Polish law. At its peak, it served 200 daily users. While no longer needed due to Revolut's CSV support, the source code remains available on <a className="underline underline-offset-1 text-cyan-500 hover:text-cyan-700" href="https://github.com/divident/pitkalkulator" target="_blank">GitHub</a>. Built with Flask and Next.js.
              </p>
            </div>
            <div className="bg-slate-800 border-4 border-pink-600 text-white p-4 rounded-lg h-full">
                <h2 className="mb-2 text-xl font-medium capitalize">Campaign App</h2>
                <p>
                A decentralized crowdfunding platform utilizing blockchain technology. Campaigns are managed via transparent smart contracts, ensuring security and trust. This project deepened my expertise in blockchain, smart contracts, and Solidity. Explore it <a className="underline underline-offset-1 text-cyan-500 hover:text-cyan-700" href="https://divident.github.io/crowd-found/" target="_blank">here</a>.
                </p>
            </div>
            <div className="bg-slate-800 border-4 border-pink-600 text-white p-4 rounded-lg h-full">
              <h2 className="mb-2 text-xl font-medium capitalize">Pomodoro App</h2>
                <p className="text-base">
                  This productivity tool implements the Pomodoro Technique, breaking work into intervals with customizable settings for themes and fonts. It helps users maintain focus and manage their time efficiently, making it ideal for students, professionals, and anyone seeking to boost productivity. The app features session tracking, notifications, and a clean, intuitive interface. Try it <a className="underline underline-offset-1 text-cyan-500 hover:text-cyan-700" href="https://divident.github.io/pomodoro" target="_blank">here</a>.
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
