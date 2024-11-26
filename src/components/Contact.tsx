import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export function Contact() {
  const contactInfo = {
    phone: '0721942406',
    email: 'kevinnimneth025@gmail.com',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  };

  return (
    <section id="contact" className="bg-gray-900 py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
          <a
            href={`tel:${contactInfo.phone}`}
            className="flex items-center justify-center gap-3 bg-gray-800/50 rounded-lg p-4 hover:bg-gray-700/50 transition-colors"
          >
            <Phone className="w-5 h-5 text-blue-400" />
            <span>{contactInfo.phone}</span>
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center justify-center gap-3 bg-gray-800/50 rounded-lg p-4 hover:bg-gray-700/50 transition-colors"
          >
            <Mail className="w-5 h-5 text-blue-400" />
            <span>{contactInfo.email}</span>
          </a>
        </div>
        <div className="flex justify-center gap-8">
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
        <p className="text-gray-400 mt-12">© 2024 K.H Kevin Nimneth. All rights reserved.</p>
      </div>
    </section>
  );
}