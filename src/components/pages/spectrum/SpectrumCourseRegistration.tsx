import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './SpectrumCourseRegistration.css';
import Breadcrumbs from '../../common/Breadcrumbs';
import { getCanonicalUrl } from '../../../utils/seoUtils';
import { API_URL } from '../../../config';

const SpectrumCourseRegistration: React.FC = () => {
  const [googleFormURL, setGoogleFormURL] = React.useState(
    "https://docs.google.com/forms/d/e/1FAIpQLScbFIKqzOkKD_5qeqHFAmF3mpNamTu2aW-DpfScIJ-dv2SBLw/formResponse"
  );

  useEffect(() => {
    document.title = 'Course Registration | Spectrum';
    window.scrollTo(0, 0);

    fetch(`${API_URL}/registration/spectrum`)
      .then(res => res.json())
      .then(data => {
        if (data && data.google_form_url) {
          setGoogleFormURL(data.google_form_url);
        }
      })
      .catch(err => console.error("Error fetching registration URL from MongoDB:", err));
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData();

    formData.append(
      "entry.1923458730",
      (form.elements.namedItem("name") as HTMLInputElement).value
    );

    formData.append(
      "entry.1178799878",
      (form.elements.namedItem("mobile") as HTMLInputElement).value
    );

    try {
      await fetch(googleFormURL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      const statusEl = document.getElementById("status");
      if (statusEl) {
        statusEl.innerText = "Submitted Successfully";
      }

      form.reset();
    } catch (error) {
      console.error(error);
      const statusEl = document.getElementById("status");
      if (statusEl) {
        statusEl.innerText = "Submission failed";
      }
    }
  };

  return (
    <div className="course-registration-page">
      <Helmet>
        <title>Course Registration | Enroll in SPECTRUM Courses</title>
        <meta name="description" content="Register for SPECTRUM Education's courses. Fill out our simple form to enroll in NEET, IIT-JEE, Spoken English, and other programs." />
        <meta name="keywords" content="course registration, enroll, SPECTRUM courses, admission form, course enrollment" />
        <link rel="canonical" href={getCanonicalUrl("/spectrum/course-registration")} />
      </Helmet>

      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', path: '/' },
            { label: 'Spectrum', path: '/spectrum' },
            { label: 'Course Registration', path: '/spectrum/course-registration' }
          ]}
        />

        <div className="page-header text-center">
          <h1>Spectrum Course Registration</h1>
          <p>Complete the form below to register for our Spectrum courses</p>
        </div>

        <div className="section">
          <section className="formcarry-container">
            <form onSubmit={handleSubmit}>
              <div className="formcarry-block">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="formcarry-block">
                <label htmlFor="mobile">Mobile Number</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  placeholder="Your mobile number"
                  required
                />
              </div>

              <div className="formcarry-block">
                <button type="submit">
                  Send
                </button>
              </div>

              <p id="status"></p>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SpectrumCourseRegistration;
