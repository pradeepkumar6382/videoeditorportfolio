import React, { useState } from 'react';
import cashcow from '../videoimages/download.jpeg'
import General from '../videoimages/download2.jpeg'
import gym from '../videoimages/download3.jpeg'
import Montage from '../videoimages/download4.jpeg'
import Realestate from '../videoimages/download5.jpeg'
import shorts from '../videoimages/download7.jpeg'
const ProjectPage: React.FC = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: 'CashCow Videos',
      features: [
        'Script-based visual alignment',
        'Enhanced audio quality',
        'Smooth transitions and animations',
        'Brand consistency with intros and outros',
        'Engaging and concise content for retention'
      ],
      img: cashcow,
      link: 'https://drive.google.com/drive/folders/1DRogRC72aCl4L4Yz8cnTcORkeK05A9E-?usp=drive_link',
      description: 'I edit cash cow videos by aligning visuals with the script, enhancing audio, and adding stock footage, animations, and smooth transitions. I ensure brand consistency with intros, outros, and on-screen elements. My focus is on creating engaging, concise content that captivates viewers, drives retention, and boosts channel growth effectively.'
    },
    {
      id: 2,
      title: 'General Videos',
      features: [
        'Versatile editing styles',
        'Clean and professional audio',
        'Custom animations and overlays',
        'Focus on storytelling and engagement',
        'Optimized video length for varied audiences'
      ],
      img: General,
      link: 'https://drive.google.com/drive/folders/1efmti7CkRX3lVORVucoTq3S_YHhQGsrq?usp=drive_link',
      description: 'I craft general videos that cater to diverse content needs with clean visuals, custom animations, and a focus on storytelling to engage viewers effectively.'
    },
    {
      id: 3,
      title: 'GYM Videos',
      features: [
        'Dynamic transitions',
        'Energy-packed soundtracks',
        'Focus on workout highlights',
        'Cinematic color grading',
        'Motivational themes to inspire viewers'
      ],
      img: gym,
      link: 'https://drive.google.com/drive/folders/13Obk5dLtG9aDqDYQNElWNfP3qjpbJLFw?usp=drive_link',
      description: 'I create high-energy gym videos showcasing workout highlights, cinematic transitions, and motivational themes to inspire fitness enthusiasts.'
    },
    {
      id: 4,
      title: 'Montage Videos',
      features: [
        'Seamless clips integration',
        'Emotion-driven storytelling',
        'High-quality audio synchronization',
        'Advanced motion graphics',
        'Focus on mood and aesthetics'
      ],
      img: Montage,
      link: 'https://drive.google.com/drive/folders/1eZ_v3elKkzE7zCMDIj6SWgGS-j46_6IE?usp=drive_link',
      description: 'Montage videos with seamless integration of clips, mood-centric editing, and advanced motion graphics to create visually compelling content.'
    },
    {
      id: 5,
      title: 'Real Estate Videos',
      features: [
        'Elegant property showcases',
        'Smooth walkthroughs and transitions',
        'Cinematic drone footage integration',
        'Highlight key property features',
        'Professional branding elements'
      ],
      img: Realestate,
      link: 'https://drive.google.com/drive/folders/1ZZwxDtLqvR3UZ6tELRHupMG0xQnA2__o?usp=drive_link',
      description: 'Professional real estate videos highlighting property features with smooth walkthroughs, cinematic shots, and a focus on elegance.'
    },
    {
      id: 6,
      title: 'Shorts',
      features: [
        'High-impact visuals in under a minute',
        'Quick transitions for attention retention',
        'Mobile-friendly formatting',
        'Engaging hooks and call-to-actions',
        'Optimized for social media trends'
      ],
      img: shorts,
      link: 'https://drive.google.com/drive/folders/1WzQkqNF9tXlEZT8T-8LWsmwwz6d0s1i1?usp=drive_link',
      description: 'Short videos designed for social media with high-impact visuals, quick transitions, and engaging hooks to captivate viewers instantly.'
    }
  ]);

  const [visibleIndex, setVisibleIndex] = useState(0);

  const nextCard = () => {
    setVisibleIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      
       <img src={cards[visibleIndex].img}/>
      <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">{cards[visibleIndex].title}</h2>
          <p className="text-gray-600 text-base leading-relaxed">
            {cards[visibleIndex].description}
          </p>
        </div>

        <div className="p-4 border-t border-gray-200">
          <h3 className="text-xl font-medium text-gray-700 mb-2">Features:</h3>
          <ul className="list-disc list-inside text-gray-600">
  {cards[visibleIndex].features.map((item, index) => (
    <li key={index}>{item}</li>
  ))} 
</ul>

        </div>

        <div className=" p-2  justify-left">
        <a
            href={cards[visibleIndex].link}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-bold rounded-lg shadow-lg hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-300 transition duration-300 transform hover:scale-105"
          >
            Click Here to Watch
          </a>

          </div>
          <div className=" p-2 flex justify-end">
          <button
            onClick={nextCard}
            className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 focus:outline-none focus:ring"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
