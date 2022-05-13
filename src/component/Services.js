import React from 'react';
import DESIGN_ICON from '../assets/design.svg';
import DEV_ICON from '../assets/development.svg';
import REVIEW_ICON from '../assets/review.svg';
import INTEGRATION_ICON from '../assets/integration.svg';
import SUPPORT_ICON from '../assets/support.svg';

const Services = () => {
  return (
    <div className='service-cards'>
      <article className='s-card'>
        <div className='icon-wrap'>
          <img src={DESIGN_ICON} alt='design' />
        </div>
        <h3>Web Design</h3>
        <p>
          I'll help you with everything involved with visual aesthetics(color
          scheme, layout, information flow etc.) & usability of your website.
        </p>
      </article>

      <article className='s-card'>
        <div className='icon-wrap'>
          <img src={DEV_ICON} alt='development' />
        </div>
        <h3>Web Development</h3>
        <p>
          With usability, accessibility & functionality in mind, i build simple,
          flexible, mobile responsive & custom website for individuals &
          small/medium sized company.
        </p>
      </article>

      <article className='s-card'>
        <div className='icon-wrap'>
          <img src={REVIEW_ICON} alt='review' />
        </div>
        <h3>Website Review</h3>
        <p>
          I will help you evaluates all of the pieces of your websites, identify
          issues that arises during testing & make changes that will improve
          usability, accessibilty and functionality of your website.
        </p>
      </article>

      <article className='s-card'>
        <div className='icon-wrap'>
          <img src={INTEGRATION_ICON} alt='integration' />
        </div>
        <h3>Integration</h3>
        <p>
          I'll help you integrate 3rd party APIs into your web app. App
          integration helps manage & keep your data in sync, automate task,
          enhance productivity & drive more revenue.
        </p>
      </article>

      <article className='s-card'>
        <div className='icon-wrap'>
          <img src={SUPPORT_ICON} alt='integration' />
        </div>
        <h3>Continous Support</h3>
        <p>
          Even after your project is completed, i provide continous support wich
          may includes fixes & update, development of additional functionality &
          features that will make your product reach its full potentials.
        </p>
      </article>
    </div>
  );
};

export default Services;
