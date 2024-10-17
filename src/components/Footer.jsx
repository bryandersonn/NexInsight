import React from 'react';
import {
  FaTiktok,
  FaInstagram,
  FaWhatsapp,
  FaFacebook
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full flex justify-center align-middle py-16 px-4 gap-8 text-gray-300 '>
      <div className='w-1/2'>
        <h1 className='text-3xl font-bold'>NexInsight</h1>
        <p className='py-4 text-justify'>At NexInsight, we specialize in data visualization services using tools like Tableau to create custom dashboards tailored to each client's business needs. Our process involves: Data Analysis, Data Visualization, and Insight Generation.</p>
        <div className='flex gap-4 md:w-[75%] my-6'>
            <a href="https://www.instagram.com/nexinsight_/?utm_source=ig_web_button_share_sheet" target='#'><button><FaInstagram size={30} /></button></a>
            <a href="https://web.whatsapp.com" target='#'><button><FaWhatsapp size={30} /></button></a>
            <a href="https://www.tiktok.com/@nexinsight_" target='#'><button><FaTiktok size={30} /></button></a>
            <a href="https://id-id.facebook.com" target='#'><button><FaFacebook size={30} /></button></a>
        </div>
      </div>
      <div className='justify-between mt-6'>
          <h6 className='font-medium text-[#00df9a]'>Solutions</h6>
            <ul className='flex-col'>
                <li className='py-2 text-sm'>Analytics</li>
                <li className='py-2 text-sm'>Marketing</li>
                <li className='py-2 text-sm'>Commerce</li>
                <li className='py-2 text-sm'>Insights</li>
            </ul>
      </div>
    </div>
  );
};

export default Footer;
