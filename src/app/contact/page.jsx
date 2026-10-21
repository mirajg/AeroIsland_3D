
'use client';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Button from "@/components/ui/Button";

const Contact = () => {
  // Initialize Formspree using the environment variable
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID);
  console.log(state, 'x');


  return (
    <>
      <Button text={"Home"} linkHref={"/"} />
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-md bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">

          {/* Glow decoration */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* Header Section */}
          <div className="text-center mb-8 relative z-10">
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Get in Touch
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Have a project or question? Send us a message below.
            </p>
          </div>

          {/* Success View */}
          {state.succeeded ? (
            <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-4 rounded-xl text-center text-sm font-medium animate-fade-in">
              🎉 Thank you! Your message has been sent successfully.
            </div>
          ) : (
            <>
              {state.errors && (
                <div className="bg-rose-500/10 border border-rose-500/30 text-rose-400 p-4 rounded-xl text-center text-sm font-medium animate-fade-in mb-5">
                  {/* ❌ Please fix the errors above and try again. */}
                  {state.errors.formErrors[0].message || "Something went wrong. Please try again later."}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">

                {/* Full Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 bg-slate-950/60 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-200"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 bg-slate-950/60 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-200"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-rose-400 text-xs mt-1"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="How can we help you?"
                    required
                    className="w-full px-4 py-3 bg-slate-950/60 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-200 resize-none"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-rose-400 text-xs mt-1"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-3.5 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-xl text-sm shadow-lg shadow-blue-500/25 transition-all duration-200 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Contact;