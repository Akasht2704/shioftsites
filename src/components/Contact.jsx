'use client'

import { FaUser, FaEnvelope, FaCommentDots, FaPaperPlane } from 'react-icons/fa'
import axios from 'axios'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const router = useRouter();

  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

 /* const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await axios.post('/api/interest',formData)

      if (res.data.success) {
        setStatus('success')
        setFormData({ name: '', email: '',  message: '' })
        router.push('/thank-you');
      } else {
        setStatus(result.error || 'Something went wrong')
      }
    } catch (error) {
      setStatus('error')
    }
  }*/
  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-gradient-to-br from-blue-100 via-white to-indigo-100 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/contact-bg.jpg')] bg-cover bg-center opacity-10 blur-sm"></div>

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 drop-shadow-sm">Let’s Talk</h2>
          <p className="mt-2 text-gray-600 text-lg">
            Have a project or just want to say hi? Fill the form below.
          </p>
        </div>

        <form  className="bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-10 space-y-8">
          {/* Name Field */}
          <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden transition-all focus-within:ring-2 focus-within:ring-blue-500">
            <div className="bg-blue-100 px-4 py-3">
              <FaUser className="text-blue-600" />
            </div>
            <input
              type="text"
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Full Name"
              className="w-full px-4 py-3 text-gray-800 placeholder-gray-500 bg-transparent focus:outline-none"
            />
          </div>

          {/* Email Field */}
          <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden transition-all focus-within:ring-2 focus-within:ring-blue-500">
            <div className="bg-blue-100 px-4 py-3">
              <FaEnvelope className="text-blue-600" />
            </div>
            <input
              type="email"
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              className="w-full px-4 py-3 text-gray-800 placeholder-gray-500 bg-transparent focus:outline-none"
            />
          </div>

          {/* Message Field */}
          <div className="flex items-start border border-gray-300 rounded-xl overflow-hidden transition-all focus-within:ring-2 focus-within:ring-blue-500">
            <div className="bg-blue-100 px-4 py-3">
              <FaCommentDots className="text-blue-600 mt-1" />
            </div>
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={6}
              className="w-full px-4 py-3 text-gray-800 placeholder-gray-500 bg-transparent focus:outline-none resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-3 transition-all hover:shadow-xl hover:scale-105 duration-300"
          >
            <FaPaperPlane className="animate-bounce" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
