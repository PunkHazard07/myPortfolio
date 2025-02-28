import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub } from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    // Handle input changes
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            const response = await fetch('http://localhost:8080/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            setResponseMessage(result.message);
        } catch (error) {
            console.error(error);
            setResponseMessage('An error occurred while sending your message');
        } finally {
            setLoading(false);
            setFormData({
                name: '',
                email: '',
                message: ''
            }); // Clear form data
        };
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 py-16">
            <h2 className="text-5xl font-extrabold text-gray-800 mb-10 text-center">
                Contact Me
            </h2>

            <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl p-10 grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left Side: Contact Info */}
                <div className="text-center md:text-left">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h1>
                    <p className="text-gray-600 mb-6">Feel free to reach out to me through the following channels:</p>
                    <div className="space-y-6 text-lg font-semibold">
                        <p className="flex items-center justify-center md:justify-start space-x-3 text-gray-700">
                            <FaEnvelope className="text-blue-500 text-2xl" />
                            <a href="mailto:belloayoola20@gmail.com" className="hover:underline">belloayoola20@gmail.com</a>
                        </p>
                        <p className="flex items-center justify-center md:justify-start space-x-3 text-gray-700">
                            <FaPhone className="text-green-500 text-2xl" />
                            <a href="tel:08141501346" className="hover:underline">08141501346</a>
                        </p>
                        <p className="flex items-center justify-center md:justify-start space-x-3 text-gray-700">
                            <FaMapMarkerAlt className="text-red-500 text-2xl" />
                            <span>Lagos, Nigeria</span>
                        </p>
                        <p className="flex items-center justify-center md:justify-start space-x-3 text-gray-700">
                            <FaGithub className="text-gray-800 text-2xl" />
                            <a href="https://github.com/PunkHazard07" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
                        </p>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="bg-gray-50 p-8 shadow-lg rounded-xl w-full">
                    <form className="space-y-6" onSubmit={handleFormSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-lg text-gray-700 font-semibold mb-2">Name</label>
                            <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-lg text-gray-700 font-semibold mb-2">Email</label>
                            <input
                            type="email"
                            id="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-lg text-gray-700 font-semibold mb-2">Message</label>
                            <textarea 
                            id="message" 
                            name="message" 
                            rows="4"
                            value={formData.message}
                            onChange={handleInputChange}
                            required 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                        </div>
                        <button 
                        type="submit"
                        disabled={loading} 
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition shadow-md focus:ring-4 focus:ring-blue-300">
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                    {responseMessage && (
                        <p className={`mt-4 text-center font-semibold ${responseMessage.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
                            {responseMessage}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;
