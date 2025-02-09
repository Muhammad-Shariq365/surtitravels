import React, { useEffect, useRef, useState } from 'react';
import Grouptours from '../tours/grouptours';
import Privatetours from '../tours/privatetour';
import Internationaltours from './internationaltours';
import Honeymoontours from './honeymoontours';
import HeaderReusable from '../HeaderResuable';

const Tours = () => {
  // Create refs for each section
  const groupToursRef = useRef(null);
  const privateToursRef = useRef(null);
  const honeymoonToursRef = useRef(null);
  const internationalToursRef = useRef(null);

  const [currentSection, setCurrentSection] = useState(null);

  // Scroll function for smooth scrolling with offset
  const scrollToSection = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop - 50, // 50px offset from the top
      behavior: 'smooth',
    });
  };

  // Use IntersectionObserver to detect section visibility
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Section must be at least 50% visible to trigger
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe each section
    if (groupToursRef.current) observer.observe(groupToursRef.current);
    if (privateToursRef.current) observer.observe(privateToursRef.current);
    if (honeymoonToursRef.current) observer.observe(honeymoonToursRef.current);
    if (internationalToursRef.current) observer.observe(internationalToursRef.current);

    return () => {
      // Cleanup observer on component unmount
      observer.disconnect();
    };
  }, []);

  // Scroll to section when hash changes or on initial render
  useEffect(() => {
    const handleHashChange = () => {
      const sectionId = window.location.hash.replace('#', ''); // Get the section ID without the hash
      if (sectionId) {
        const sectionMap = {
          'group-tours': groupToursRef,
          'private-tours': privateToursRef,
          'international-tours': internationalToursRef,
          'honeymoon-tours': honeymoonToursRef,
        };

        const targetRef = sectionMap[sectionId];
        if (targetRef && targetRef.current) {
          scrollToSection(targetRef); // Scroll to the section with offset
        }
      }
    };

    // Handle hash change and initial render
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange); // Cleanup event listener
    };
  }, []);

  return (
    <div>
      {/* Navigation Links */}
      <HeaderReusable
        title="OUR TOURS"
        subtitle="Find answers to common queries."
        imageUrl="https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?q=80&w=1506&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      {/* Tour Sections */}
      <section ref={groupToursRef} id="group-tours" style={{ minHeight: '100vh' }}>
        <Grouptours />
      </section>

      <section ref={privateToursRef} id="private-tours" style={{ minHeight: '100vh' }}>
        <Privatetours />
      </section>

     
      <section ref={internationalToursRef} id="private-tours" style={{ minHeight: '100vh' }}>
        <Internationaltours />
      </section>
    
      <section ref={honeymoonToursRef} id="honeymoon-tours" style={{ minHeight: '100vh' }}>
        <Honeymoontours />
      </section>
    </div>
  );
};

export default Tours;
