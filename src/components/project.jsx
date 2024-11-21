import React from 'react'
import'aos/dist/aos.css'

const project = () => {
  return (
    <>
         <div>
        <h1 className="text-center text-2xl my-3 font-bold" data-aos="fade-up">
          Projects
        </h1>
      </div>

      
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mx-6 md:mx-16 lg:mx-28"
        data-aos="fade-up"
      >
        
        <div className="bg-slate-100 shadow-md rounded-lg p-4">
          <h2 className="text-center text-xl font-bold mb-4">AI-Spam Classifier</h2>
          <p className="text-sm">
            The AI Spam Classifier is a machine learning project aimed at accurately distinguishing between spam
            (unwanted, junk emails) and non-spam (legitimate) emails. The project leverages natural language
            processing (NLP) techniques and machine learning algorithms to analyze and classify email content based
            on certain features that are commonly associated with spam, such as specific keywords, patterns, sender
            information, and more.
          </p>
        </div>

        
        <div className="bg-slate-100 shadow-md rounded-lg p-4">
          <h2 className="text-center text-xl font-bold mb-4">Smart Parking Solution</h2>
          <p className="text-sm">
            The Smart Parking Solution project enables users to check parking availability and book a parking slot
            remotely before heading out. This system offers real-time updates on available parking spaces, allowing
            users to view and reserve a slot from the convenience of their home. With features for user registration,
            slot monitoring, and booking, the solution improves parking efficiency and reduces time spent searching
            for spaces, ensuring a hassle-free parking experience.
          </p>
        </div>

      
        <div className="bg-slate-100 shadow-md rounded-lg p-4">
          <h2 className="text-center text-xl font-bold mb-4">One Fold</h2>
          <p className="text-sm">
            The Onefold Website project is a multi-page website created using HTML, CSS, and JavaScript, featuring a
            seamless and interactive user experience with page routing functionality. Designed to provide users with
            a structured navigation flow, this website employs JavaScript to dynamically route between pages without
            the need for page reloads, enhancing performance and responsiveness.
          </p>
        </div>
      </div>
       
    </>
  )
}

export default project
