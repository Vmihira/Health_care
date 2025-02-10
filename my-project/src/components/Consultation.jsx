import React, { useState } from 'react';
import { Upload, Calendar, Phone } from 'lucide-react';

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    preferredDate: '',
    department: '',
    file: null
  });

  const ageOptions = Array.from({ length: 100 }, (_, i) => i + 1);
  const departments = [
    'General Medicine',
    'Cardiology',
    'Orthopedics',
    'Pediatrics',
    'Neurology',
    'Dermatology',
    'Ophthalmology',
    'Dental Care'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="consult" className="py-20 bg-blue-600">
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-6 transform transition-all duration-300 hover:from-blue-700 hover:to-blue-900">
            <h2 className="text-3xl font-bold text-white">Book Your Consultation</h2>
            <p className="mt-2 text-blue-100">Schedule an appointment with our medical experts</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Personal Information</h3>
                
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-blue-600 transition-colors">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-400 hover:shadow-md"
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-blue-600 transition-colors">
                    Age
                  </label>
                  <select
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-400 hover:shadow-md"
                    required
                  >
                    <option value="">Select Age</option>
                    {ageOptions.map((age) => (
                      <option key={age} value={age}>{age}</option>
                    ))}
                  </select>
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-blue-600 transition-colors">
                    <Phone className="inline-block w-4 h-4 mr-1 transition-transform group-hover:scale-110" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-400 hover:shadow-md"
                    required
                    placeholder="Your contact number"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Appointment Details</h3>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-blue-600 transition-colors">
                    <Calendar className="inline-block w-4 h-4 mr-1 transition-transform group-hover:scale-110" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-400 hover:shadow-md"
                    required
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-blue-600 transition-colors">
                    Department
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-400 hover:shadow-md"
                    required
                  >
                    <option value="">Select Department</option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>

                {/* File Upload moved here */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-blue-600 transition-colors">
                    <Upload className="inline-block w-4 h-4 mr-1 transition-transform group-hover:scale-110" />
                    Medical Records
                  </label>
                  <div className="mt-1 flex justify-center px-4 py-4 border-2 border-gray-300 border-dashed rounded-lg transition-all duration-300 hover:border-blue-500 hover:shadow-lg group">
                    <div className="space-y-1 text-center">
                      <div className="flex text-sm text-gray-600">
                        <label className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500 transition-colors">
                          <span>Upload files</span>
                          <input
                            type="file"
                            className="sr-only"
                            onChange={(e) => setFormData({ ...formData, file: e.target.files[0] })}
                            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PDF, DOC, DOCX, JPG up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg transition-all duration-300 transform hover:from-blue-700 hover:to-blue-800 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95"
              >
                Schedule Consultation
              </button>
            </div>
          </form>
        </div>

        {/* Additional Information */}
        <div className="mt-6 text-center text-gray-600">
          <p className="text-sm hover:text-blue-600 transition-colors">
            Need immediate assistance? Call our 24/7 helpline: <span className="font-semibold">1-800-HEALTH</span>
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Consultation;