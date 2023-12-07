import Link from 'next/link'
import React from 'react'
const page1 = () => {
  return (
    <div id='page1'>
        <div className='page1top'>
            <h1 className='pg1title'>Make your dream career a reality</h1>
            <p className='pg1summary'>"Introducing my innovative Task Manager web app—streamlining productivity with user-friendly features. Effortlessly organize tasks, set priorities, and track progress in real-time. Enjoy a seamless experience that enhances efficiency and helps you stay focused. Elevate your productivity with this intuitive tool, designed for simplicity and effectiveness. Happy organizing!"</p>
            <h2 className='join'>Join Now</h2>
            <div id='bottamline'></div>
            <div className='buttons'>
              <Link id='goto' className='Link' href="/employe">Get Started</Link>
            </div>
        </div>
        <div className='page1bottam'>
          <img className='userss' src="https://img.freepik.com/premium-vector/premium-flat-illustration-design-online-course_203633-7570.jpg?" alt="" />
          <p>"Revolutionize your workflow with our Task Manager web app! Seamlessly manage tasks, prioritize efficiently, and track progress effortlessly. This intuitive platform empowers users to boost productivity with a user-friendly interface. Stay organized, set deadlines, and collaborate seamlessly. From personal to professional tasks, our app adapts to your needs, offering a dynamic solution for efficient task management. Experience productivity at its peak – welcome to a new era of streamlined task execution!"</p>
        </div>
    </div>
  )
}

export default page1