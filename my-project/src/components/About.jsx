import React from 'react';
import { Users, Award, Clock, Building2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About Us</h2>
          <p className="mt-4 text-lg text-gray-600">Leading the way in medical excellence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              With over 25 years of experience in healthcare, we've built a reputation for excellence
              in medical services. Our state-of-the-art facilities and dedicated team of professionals
              ensure that you receive the best possible care.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <Users className="h-12 w-12 text-blue-600" />
                <div>
                  <h4 className="font-bold text-gray-900">50+</h4>
                  <p className="text-gray-600">Specialists</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Award className="h-12 w-12 text-blue-600" />
                <div>
                  <h4 className="font-bold text-gray-900">25+</h4>
                  <p className="text-gray-600">Awards</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="h-12 w-12 text-blue-600" />
                <div>
                  <h4 className="font-bold text-gray-900">24/7</h4>
                  <p className="text-gray-600">Support</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Building2 className="h-12 w-12 text-blue-600" />
                <div>
                  <h4 className="font-bold text-gray-900">10+</h4>
                  <p className="text-gray-600">Facilities</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80"
              alt="Medical Facility"
              className="rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80"
              alt="Medical Team"
              className="rounded-lg shadow-lg mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;