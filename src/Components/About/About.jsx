import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import Tilt from 'react-parallax-tilt'
import MyImage  from '../../Images/my rounded img.png'
function About() {

  return (
    <section
    id='about'
    className='py-4 px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans mt-16 md:mt-24 lg:mt-24'
    >
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
          {/* LEFT SIDE */}
          <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight'>
                HI , I am
              </h1>

              <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
                Prem Kumar Yadav
              </h2>

              <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
                <span className='text-white'>
                  I am a
                </span> 
                <span > Frontend Developer</span>              

                {/* <ReactTypingEffect
                  text={[
                    'Frontend Developer',
                    'UI/UX Designer',
                    'Coder'
                  ]}
                  speed={100}
                  eraseSpeed={50}
                  typingDelay={500}
                  eraseDelay={2000}
                  cursorRenderer={(cursor)=>(
                    <span className='text-[#8245ec]'>{cursor}</span>
                  )}
                /> */}
                
              </h3>


              {/* About me */}
              <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
                I am a front-end developer with over 1 years of experience in
            building scalable web applications. Skilled in both front-end and
            back-end development, I specialize in the MERN stack and other
            modern technologies to create seamless user experiences and
            efficient solutions.
              </p>

              {/* resume button */}
              <a href="https://drive.google.com/file/d/1s3jy6rbzzPNDfLoQ9LY6oMnKUOqM6Wa-/view?usp=sharing"
                  target='_blank'
                  rel="noopener noreferrer"
                  className='inline-block text-white py-3 px-8 rounded-full mt-4 text-lg font-bold transition duration-300 transform hover:scale-105'
                  style={{
                    background:'linear-gradient(90deg,#8245ec,#a855f7)',
                    boxShadow:"0 0 2px #8245ec , 0 0 2px #8245ec ,0 0 40px #8245ec"
                  }}
              >
                  DOWNLOAD CV
              </a>
          </div>

          {/* RIGHT SIDE */}
          <div className=' md:w-1/2 flex justify-center md:justify-end  '>
            <Tilt
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
                  <img src={MyImage} alt="my image" 
                  className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]'/>
            </Tilt>

          </div>
      </div>

    </section>
  )
}

export default About;