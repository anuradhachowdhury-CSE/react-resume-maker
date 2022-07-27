import React from 'react'
import images from '../component/image'


const Home = () => {
  return (
    <div>
       <main>
        <section className='home-one'>
          <div className="row">
            <div className="col-md-4 ">
            <h1 className='animate__animated animate__backInLeft'>The online resume builder getting folks hired by BBC, Google, Apple, Tesla, and Airbnb.</h1>
        <h4 className='animate__animated animate__backInRight'>Build your brand-new resume in as little as 5 minutes.</h4>
       
       <h5>Try it for free.</h5>
       <a href="" >Get Started Now</a>
       
            </div>
            <div className="col-md-6">
            <img className="imgs img-fluid" src={images.img47} alt=".." />
            </div>
          </div>
        {/* <h1>The online resume builder getting folks hired by BBC, Google, Apple, Tesla, and Airbnb.</h1>
        <h4>Build your brand-new resume in as little as 5 minutes.</h4>
       
       <h5>Try it for free.</h5>
       <a href="">Get Started Now</a>
       <p>No credit cad required</p> */}
       </section>

       <h3 className="xtra">Build Your Resume Fast and Easy</h3>
       <section className='home-four'>
      
       <div class="container">
           <div class="row">
               <div class="col-md-6">
                   
                   <h4> Recruiters Love Our Resume Builder. Learn Why Below.</h4>
                   <h5>Build your resume </h5>
                   
                   <a className='green' href="">Get Started Now</a>
                   {/* <p>No credit card required</p> */}
               </div>
               <div class="col-md-6">
        <img src={images.img12} alt=""/>
               </div>
           </div>
       </div>
      
   </section> 
     
       <section className='home-two'>
    <h3>Our Users Are Being Hired at the World's Leading Companies.</h3>
    <div className="row">
      <div className="col-md-6">
        <div className="card">
          <div className="row">
            <div className="col-md-3">
            <img src={images.img39} alt="" />
            </div>
            <div className="col-md-6">
            <h5>Name:Danie Avez</h5>
            <h5>Senior Product Marketing Manager at Badu Networks</h5>
            <h6>Absolutely love Novorésumé! The layouts are phenomenal and enhancement hints that the tool provides you with is like having your own personal resume consultant! So much better. </h6>
            </div>
          </div>
        
         
        </div>
      </div>
      <div className="col-md-6">
      <div className="card">
          <div className="row">
            <div className="col-md-3">
            <img src={images.img53} alt="" />
            </div>
            <div className="col-md-6">
            <h5>Name:Otimelia D'costa</h5>
            <h5>Junior Marketing Assistant</h5>
            <h6>With sleek designs and an easy to use online tool, Novorésumé allowed me to quickly build and edit a professional resume with a personal touch, which ultimately helped me to get my dream job. I am now relocating to Barcelona.</h6>
            </div>
          </div>
        
         
        </div>
      </div>
    </div>
       </section>
       <section class="home-five">
    <div class="col-md-6">
        <h3>If you’re on a budget, you can use it to create your resume completely free of charge. And no, unlike some other resume builders out there, we don’t hit you with a paywall once you’ve completed your resume.</h3>
         <p>
            If you use any of our premium features, the software will let you know about it. It will then ask if you did it accidentally, or if you would like to upgrade to Novorésumé Premium. You're in control!
         </p>
            <a href="">Apply Now</a>
            <img className='img-fluid' src={images.img33} alt=""/>
    </div>
  {/* <img src="image/ebook-cover.webp" alt="">  */}
 
  </section>
       <section className='home-three'>
      
 <div class="container">
    <div>
        <h3>Resume Templates for Every Career Path.</h3>
    <p>You can pick one of our handcrafted resume templates above. You can start building your resume in less than 5 seconds, using predefined sections approved by recruiters worldwide. You can also customize it to your own needs and personality and hit 'Download'. It's THAT easy to use, even if you've never made a resume in your life before!</p>
    </div>
    
    <div class="row">
        <div class="col-md-3">
            <img  src={images.img45} alt=""/>
            <h4>Creative Resume Template</h4>
            <p>A resume template as creative as your imagination</p>
        </div>
        <div class="col-md-3">
   <img  src={images.img46} alt=""/>
     <h4>Professional Resume template</h4>
     <p>Put your best foot forward with a professional resume template</p>
        </div>
        <div class="col-md-3">
   <img  src={images.img44} alt=""/>
   <h4>College Resume Template</h4>
   <p>No experience? No problem!</p>
        </div>
        <a href="">Discover More Resume Templates</a>
    </div>
 </div>
  </section>
      
   
       <section class="home-seven">
    <h1>Resume Builder FAQ.</h1>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
              <img src={images.img1} alt=""/>
            </div>
            <div class="col-md-6">
                <h3>Why should I use a resume builder?</h3>
                <p>Using a resume builder makes the process of creating a resume significantly faster and easier. Ever tried building your resume with Word?

                    The whole process is a huge pain – you make a TINY change to your resume, and the entire resume layout gets completely messed up.
                    
                    With a resume builder, you don’t have to worry about the nitty gritty of resume creation, like font selection, layout, formatting, etc.
                    
                    All you have to do is pick a resume template, fill it in, and then you’re ready to start applying for jobs!</p>

            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <h3>What is the best resume builder?</h3>
             <p>Over the past 7 years, we’ve been working hard to make Novorésumé the best resume builder out there.

                And we’d say we succeeded! Here’s what sets us apart from the rest of the competition:</p>
                <ul>
                    <li>Easy to Use - Our builder is very easy to use, even if you're not too tech-friendly.</li>
                    <li>Get Started in under 5 Minutes - Just pick one of our resume templates, and you're good to go!</li>
                    <li>It's 100% free - Some resume builders out there pretend to be free… and then they hit you with a paywall once you’re done writing your resume! We don’t do that. Our builder will instantly notify you if you’re using any of our premium features.</li>
                    <li>Cover Letter Builder - If you’re using Novorésumé Premium, you gain access to our cover letter builder for free (including matching cover letter templates).</li>
                    <li>Tons of Customization and Design Options - Our builder offers a ton of customization. You can make changes to the layout, color schemes, and much more.</li>
                </ul>
            </div>
            <div class="col-md-3">
                <img src={images.img2} alt=""/>

            </div>
        </div>
        <div class="row">
            <div class="col-md-3">
              <img src={images.img3} alt=""/>
            </div>
            <div class="col-md-6">
                <h3>Is this a completely free resume builder?</h3>
                <p>es, Novorésumé is a 100% free resume builder.

                    If you’re on a budget, you can use it to create your resume completely free of charge. And no, unlike some other resume builders out there, we don’t hit you with a paywall once you’ve completed your resume.
                    
                    If you use any of our premium features, the software will let you know about it. It will then ask if you did it accidentally, or if you would like to upgrade to Novorésumé Premium. You're in control!</p>

            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
             <h3>What is a resume?</h3>
             <p>A resume (also known as a CV, or curriculum vitae) is a 1-2 page document that summarizes your work experience and career history.

                It usually includes information about the following:</p>
                <ul>
                    <li>Your work history</li>
                    <li>Educational background</li>
                    <li>Achievements</li>
                    <li>Contact information</li>
                    <li>Resume summary or resume objective</li>
                </ul>
            </div>
            <div class="col-md-3">
                <img src={images.img4} alt=""/>

            </div>
        </div>
        <div class="row">
            <div class="col-md-3">
              <img src={images.img5} alt=""/>
            </div>
            <div class="col-md-6">
                <h3>What's the difference between a CV and a resume?</h3>
                <p>In the EU, the words "CV" and "resume" are used interchangeably

                    In the United States, however, a resume is a document you use to apply for jobs, while a CV is mainly used by academics.
                    
                    Want to learn more? Check out our article on the differences between CVs and resumes.</p>

            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
             <h3>How can I create my resume?</h3>
             <p>Making a resume with Novorésumé is very straightforward.

                Just pick one of our professional resume templates.
                
                Then, you’ll be forwarded to our resume builder, where all you have to do is fill in your resume content!</p>
            </div>
            <div class="col-md-3">
                <img src={images.img6} alt=""/>

            </div>
        </div>
        <div class="row">
            <div class="col-md-3">
                <img src={images.img8} alt=""/>
            </div>
            <div class="col-md-6">
                <h3>What should a resume include?</h3>
                <p>The must-have contents in your resume include the following sections:</p>
                <ul>
                    <li>Work Experience</li>
                    <li>Educational Background</li>
                    <li>Contact Information</li>
                    <li>Resume sumamry or Resume Objective</li>
               </ul>
                <p>The optional ones are:</p>
                <ul>
                    <li>Hobbies & Interests</li>
                    <li>Skills</li>
                    <li>Volunteering Experience</li>
                </ul>
            </div>
        </div>
    </div>
    
    
    
    
  </section>
  <section class="home-eight">
    <h3>Ready to jump start your career</h3>
    <a href="">Get sarted now</a>
    <p>No credit card required</p> 
  <img class="img-fluid" src={images.img15} alt=""/>
  </section>




       </main>
    </div>
  )
}

export default Home