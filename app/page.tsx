'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const data = {
  headline: {
    title: "Transform Your Body with GYM",
    subtitle: "Join GYM's fitness community and achieve your goals with expert trainers and state-of-the-art equipment."
  },
  benefits: [
    {
      icon: "💪",
      title: "Expert Trainers",
      description: "Get personalized training from GYM's certified professionals."
    },
    {
      icon: "🏋️",
      title: "Modern Equipment",
      description: "Access GYM's latest fitness equipment and facilities."
    },
    {
      icon: "👥",
      title: "Community Support",
      description: "Join GYM's supportive community that motivates you to succeed."
    }
  ],
  testimonials: [
    {
      quote: "GYM changed my life! The trainers are amazing and the community is so supportive.",
      author: "Sarah Johnson"
    },
    {
      quote: "I've never felt better. GYM's equipment is top-notch and the classes are fantastic.",
      author: "Mike Chen"
    }
  ],
  signup: {
    title: "Join GYM Today!",
    buttonText: "Sign Up Now"
  }
};

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this data to your backend
    console.log('Form submitted:', { name, email });
    router.push('/thank-you');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Headline */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-6">
            {data.headline.title}
          </h1>
          <p className="text-xl mb-8">
            {data.headline.subtitle}
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose GYM?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {data.benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What GYM Members Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {data.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">
                  "{testimonial.quote}"
                </p>
                <p className="font-semibold">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section className="py-16 bg-white">
        <div className="max-w-md mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">{data.signup.title}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              {data.signup.buttonText}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
