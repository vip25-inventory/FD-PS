import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import './SpectrumCoursesPage.css';

import Breadcrumbs from '../../common/Breadcrumbs';
import AnimatedButton from '../../common/AnimatedButton';
import CollisionButton from '../../common/CollisionButton';

import { getCanonicalUrl } from '../../../utils/seoUtils';


// ============================================================
// COURSE HOME (general landing — lists course categories)
// ============================================================
const CourseHome = () => {
  return (
    <div className="courses-home">
      <Helmet>
        <title>Academic & Skill Development Courses | SPECTRUM Education</title>
        <meta name="description" content="Discover SPECTRUM's comprehensive education offerings including competitive exam coaching and skill development courses. Excellence in education since 2006." />
<meta
  name="keywords"
  content="Best Tuition Centre in Vellore, CBSE Tuition in Vellore, ICSE Tuition, State Board Tuition, Maths Tuition, Physics Tuition, Chemistry Tuition, Biology Tuition, Board Exam Coaching"
/> 
<meta
  name="description"
  content="Best Tuition Centre in Vellore offering CBSE, ICSE and State Board tuition with expert coaching in Maths, Physics, Chemistry, Biology and board exam preparation."
/>
       <link rel="canonical" href={getCanonicalUrl("/spectrum/SpectrumCoursesPage")} />
      </Helmet>
      <main className="container">
        <Breadcrumbs
          customPaths={[
            { path: '/spectrum/SpectrumCoursesPage', label: 'Courses' }
          ]}
        />
        <header className="page-header">
          <h1>Our Courses</h1>
          <p>Board-Specific Coaching
Our programs are designed according to the latest syllabus and exam pattern of CBSE, ICSE, and State Board (Matriculation), ensuring students receive relevant and effective preparation.
</p>
        </header>
                    <h2>Explore <span className="text-black">Our Course</span> Categories</h2>

        <section className="section course-categories">
          

          <div className="row g-4 mt-4">
            <div className="col-md-12">
              <div className="category-card spectrum-card d-flex flex-column h-100">
                <div className="category-header text-center mb-3">
                  <div className="category-icon">
                    <i className="fas fa-atom"></i>
                  </div>
                  <h3>Board-Specific Coaching</h3>
                </div>
                <div className="category-content">
                </div>
                <div className="course-features">
                    <ul className="category-features">
                      <li>CBSE Coaching – Curriculum-aligned, concept-focused learning with regular assessments.</li>
                      <li>ICSE Coaching – Detailed subject coverage with analytical and conceptual learning.</li>
                      <li>State Board Coaching – Structured lessons focused on fundamentals and exam performance.</li>
                    </ul>
                  </div>
                <div className="category-footer text-center mt-auto">
                  {/* <AnimatedButton
                    text="Explore Spectrum Courses"
                    href="/spectrum/SpectrumCoursesPage/spectrum"
                    className="btn-category"
                  /> */}
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="section course-categories">

          <div className="row g-4 mt-4">
            <div className="col-md-12">
              <div className="category-card spectrum-card d-flex flex-column h-100">
                <div className="category-header text-center mb-3">
                  <div className="category-icon">
                    <i className="fas fa-atom"></i>
                  </div>
                  <h3>Subject-Wise Coaching</h3>
                </div>
                <div className="category-content">
                  <div className="course-features">
                    <ul className="category-features">
                      <li>Mathematics – Concept clarity, problem-solving, and exam strategies.</li>
                      <li>Physics – Concepts, numerical practice, and applications.</li>
                      <li>Chemistry – Simple explanations, revision, and complete subject coverage.</li>
                      <li>Biology – Diagrams, concept mapping, and board-focused preparation.</li>
                      
                    </ul>
                  </div>
                </div>
                <div className="category-footer text-center mt-auto">
                  <AnimatedButton
                    text="Enquire "
                    href="/spectrum/course-registration/"
                    className="btn-category"
                  />
                </div>
              </div>
            </div>

          </div>
        </section>
        <section className="section why-choose-us">
          <h2><span className="text-black">Why</span> Choose Us?</h2>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="fas fa-history"></i>
                </div>
                <h3>Established Legacy</h3>
                <p>Providing quality education since 2006 with proven results</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="fas fa-chalkboard-teacher"></i>
                </div>
                <h3>Expert Faculty</h3>
                <p>Learn from experienced educators passionate about student success</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="fas fa-book"></i>
                </div>
                <h3>Comprehensive Materials</h3>
                <p>Access to quality study materials and resources for effective learning</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3>Individual Attention</h3>
                <p>Focus on personalized learning with regular feedback and guidance</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3>Progress Tracking</h3>
                <p>Regular assessments and detailed analytics to monitor improvement</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="fas fa-award"></i>
                </div>
                <h3>Proven Results</h3>
                <p>Consistently helping students achieve their academic and personal goals</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section smart-tuition">
          <h2 className="text-center">
            <span className="text-black">Smart</span> Tuition – Class 6 Onwards
          </h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-book"></i>
                </div>
                <h3>Daily Classes with Concept Notes</h3>
                <p className="mb-0">Regular classes reinforced with comprehensive concept notes for better retention</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-tasks"></i>
                </div>
                <h3>Homework Help & Exam Readiness</h3>
                <p className="mb-0">Support for assignments and thorough preparation for all examinations</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3>Join Early. Learn Smart. Lead Ahead.</h3>
                <p className="mb-0">Build a strong foundation early for greater academic success</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section cta-section">
          <div className="cta-content">
            <h2>Begin Your Learning Journey Today</h2>
            <p>Explore our diverse course offerings and take the first step toward academic and personal excellence</p>
            <div className="cta-buttons">
              <CollisionButton
                text="Contact Us"
                href="/spectrum/contact"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};


// ============================================================
// SPECTRUM COURSE HOME (NEET / IIT-JEE category cards)
// ============================================================
const SpectrumPage: React.FC = () => {
  return (
    <div className="courses-home">

      <Helmet>
        <title>
          Spectrum Courses | NEET & IIT-JEE Coaching
        </title>

        <meta
          name="description"
          content="Explore SPECTRUM's academic coaching programs including NEET and IIT-JEE preparation with expert faculty, comprehensive study materials and regular assessments."
        />

        <meta
          name="keywords"
          content="Spectrum courses, NEET coaching, NEET preparation, IIT-JEE coaching, JEE preparation, Spectrum Education"
        />

        <link
          rel="canonical"
          href={getCanonicalUrl("/spectrum/SpectrumCoursesPage/spectrum")}
        />
      </Helmet>


      <main className="container">

        <Breadcrumbs
          customPaths={[
            {
              path: '/spectrum/SpectrumCoursesPage',
              label: 'Courses'
            },
            {
              path: '/spectrum/SpectrumCoursesPage/spectrum',
              label: 'Spectrum'
            }
          ]}
        />

 <header className="page-header">
          <h1>Spectrum Courses</h1>
          <p>Expert coaching for competitive examinations</p>
        </header>
        
        <section className="section academic-programs">
          <h2>Our <span className="text-black">Competitive</span> Programs</h2>
          
          <div className="row g-4">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="academic-program-card h-100 d-flex flex-column">
                <div className="text-center mb-3">
                  <div className="program-icon">
                    <i className="fas fa-heartbeat"></i>
                  </div>
                </div>
                <h3 className="text-center">NEET Preparation</h3>
                <p className="text-center">Comprehensive coaching for the National Eligibility cum Entrance Test for medical aspirants</p>
                <div className="course-features">
                  <ul className="program-features">
                    <li>Expert faculty from medical background</li>
                    <li>Subject-focused teaching approach</li>
                    <li>Regular mock tests and assessments</li>
                    <li>Special focus on NCERT alignments</li>
                    <li>Practical and application-based learning</li>
                  </ul>
                </div>
                <div className="mt-auto text-center">
                  <CollisionButton
                    text="Learn More"
                    href="/spectrum/SpectrumCoursesPage/spectrum/neet"
                    className="px-4"
                  />
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="academic-program-card h-100 d-flex flex-column">
                <div className="text-center mb-3">
                  <div className="program-icon">
                    <i className="fas fa-cogs"></i>
                  </div>
                </div>
                <h3 className="text-center">IIT-JEE Preparation</h3>
                <p className="text-center">Expert coaching for Joint Entrance Examination for engineering aspirants</p>
                <div className="course-features">
                  <ul className="program-features">
                    <li>Specialized faculty for Physics, Chemistry, and Mathematics</li>
                    <li>Problem-solving centric approach</li>
                    <li>Advanced study materials and question banks</li>
                    <li>Regular practice tests and performance tracking</li>
                    <li>Competitive environment for better preparation</li>
                  </ul>
                </div>
                <div className="mt-auto text-center">
                  <CollisionButton
                    text="Learn More"
                    href="/spectrum/SpectrumCoursesPage/spectrum/iit-jee"
                    className="px-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section why-choose-us">
          <h2>Why <span className="text-black">Choose Spectrum</span> Courses?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="fas fa-chalkboard-teacher"></i>
                </div>
                <h3>Expert Faculty</h3>
                <p>Learn from experienced educators with proven success in preparing students for competitive exams</p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="fas fa-book"></i>
                </div>
                <h3>Comprehensive Materials</h3>
                <p>Access carefully crafted study materials, question banks, and practice papers</p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3>Performance Tracking</h3>
                <p>Regular assessments and detailed analytics to monitor progress and identify improvement areas</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section cta-section">
          <div className="cta-content">
            <h2>Begin Your Journey to Success</h2>
            <p>Join Spectrum's premier coaching programs for NEET and IIT-JEE preparation</p>
            <div className="cta-buttons">
              <CollisionButton
                text="Contact Us"
                href="/contact"
              />
            </div>
          </div>
        </section>

      </main>

    </div>
  );
};






// ============================================================
// SPECTRUM COURSES ROUTER
// ============================================================

const SpectrumCoursesPage: React.FC = () => {

  const courseSchemaData = {

    "@context": "https://schema.org",

    "@type": "ItemList",

    "itemListElement": [

      {
        "@type": "Course",

        "name": "NEET Preparation Course",

        "description":
          "Comprehensive coaching for medical entrance exam preparation",

        "provider": {
          "@type": "Organization",
          "name": "SPECTRUM Education"
        }
      },


      {
        "@type": "Course",

        "name": "IIT-JEE Preparation Course",

        "description":
          "Expert coaching for engineering entrance exam preparation",

        "provider": {
          "@type": "Organization",
          "name": "SPECTRUM Education"
        }
      }

    ]

  };


  return (

    <div className="courses-page">

      <Helmet>

        <script type="application/ld+json">
          {JSON.stringify(courseSchemaData)}
        </script>

      </Helmet>


      <Routes>

        {/* ==================================================
            GENERAL COURSES LANDING
        ================================================== */}

        <Route
          path="/"
          element={<CourseHome />}
        />


        {/* ==================================================
            SPECTRUM CATEGORY HOME (NEET / IIT-JEE cards)
        ================================================== */}

        <Route
          path="spectrum"
          element={<SpectrumPage />}
        />


        {/* ==================================================
            NEET
        ================================================== */}

     


        {/* ==================================================
            IIT-JEE
        ================================================== */}

      


        {/* ==================================================
            INVALID ROUTE
        ================================================== */}

        <Route
          path="*"
          element={
            <Navigate
              to="/spectrum/SpectrumCoursesPage"
              replace
            />
          }
        />

      </Routes>

    </div>

  );
};


export default SpectrumCoursesPage;
