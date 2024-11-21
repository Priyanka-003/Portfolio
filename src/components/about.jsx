import React from 'react'
import  'aos/dist/aos.css'
const card= [
  {
   title:'frontend',
   list:["HTML","Css","Javascript","Reactjs","Tailwind CSS"]
  },
  {
    title:'Backend',
    list:["C","Python"]
  },
  {
    title:'Database',
    list:["SQL"]
  },
  {
    title:'Tools',
    list:["PowerBI","Tableau"]
  }
];

const about = () => {
  return (
    <>
      <div className="text-center" data-aos="fade-up">
        <h3 className="text-2xl mt-10 font-bold">About Me</h3>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center mt-10 space-y-6 md:space-y-0 md:space-x-6" data-aos="fade-up">
        <div className="rounded-lg shadow-md bg-purple-200 max-w-[90%] md:max-w-[450px] p-6 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">My Introduction</h2>
          <p>
            I am well-versed in HTML, CSS, and JavaScript, along with other cutting-edge frameworks and libraries, 
            which allows me to implement interactive features. Additionally, I have experience working with content 
            management systems (CMS) like WordPress.
          </p>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {card.map((card, index) => (
            <div key={index} className="p-4 rounded-lg ">
              <span className="text-slate-700 font-bold text-xl mb-4 block">{card.title}</span>
              <ul className="gap-y-2 grid">
                {card.list.map((item, i) => (
                  <li
                    key={i}
                    className="rounded-md p-2 text-sm text-white bg-sky-500 text-center"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default about
