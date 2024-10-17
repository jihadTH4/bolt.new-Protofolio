import React from 'react';
import { Code, Layout, Palette } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Code size={48} className="mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">HTML & CSS</h3>
            <p>Proficient in creating responsive and accessible web layouts.</p>
          </div>
          <div className="text-center">
            <Layout size={48} className="mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">JavaScript</h3>
            <p>Experienced in building interactive and dynamic web applications.</p>
          </div>
          <div className="text-center">
            <Palette size={48} className="mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <p>Passionate about creating beautiful and user-friendly interfaces.</p>
          </div>
        </div>
        <p className="mt-12 text-center text-lg">
          I'm a junior frontend developer with a passion for creating engaging web experiences. 
          With a strong foundation in HTML, CSS, and JavaScript, I'm always eager to learn and 
          apply new technologies to solve real-world problems.
        </p>
      </div>
    </section>
  );
};

export default About;