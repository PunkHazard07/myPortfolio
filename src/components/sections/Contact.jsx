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

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('https://portfolio-backend-s1n7.onrender.com/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            setResponseMessage(result.message);
        } catch (error) {
            setResponseMessage('An error occurred. Please try again.');
        } finally {
            setLoading(false);
            setFormData({ name: '', email: '', message: '' });
        }
    };

    return (
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Left: Content */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                            Let's <span className="text-violet-500">Connect</span>
                        </h2>
                        <p className="text-zinc-400 text-lg max-w-md leading-relaxed">
                            Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new opportunities.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <a href="mailto:belloayoola20@gmail.com" className="group flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-violet-500/30 transition-all">
                            <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400 group-hover:scale-110 transition-transform">
                                <FaEnvelope className="text-xl" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Email Me</p>
                                <p className="text-zinc-200 font-medium">belloayoola20@gmail.com</p>
                            </div>
                        </a>

                        <div className="group flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/50">
                            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                                <FaMapMarkerAlt className="text-xl" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Location</p>
                                <p className="text-zinc-200 font-medium">Lagos, Nigeria</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="p-8 md:p-10 rounded-3xl bg-zinc-900/50 border border-zinc-800/50 shadow-2xl">
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-zinc-400 ml-1">Name</label>
                                <input 
                                    type="text" name="name" value={formData.name} onChange={handleInputChange} required
                                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-zinc-400 ml-1">Email</label>
                                <input 
                                    type="email" name="email" value={formData.email} onChange={handleInputChange} required
                                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-zinc-400 ml-1">Message</label>
                            <textarea 
                                name="message" value={formData.message} onChange={handleInputChange} required rows="4"
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>
                        <button 
                            type="submit" disabled={loading}
                            className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-violet-600/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Sending Message...' : 'Send Message'}
                        </button>
                    </form>
                    {responseMessage && (
                        <div className={`mt-6 p-4 rounded-xl text-center text-sm font-medium ${responseMessage.includes('Error') || responseMessage.includes('failed') ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'}`}>
                            {responseMessage}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;
