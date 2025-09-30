"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();

    // Reset success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="space-y-8">
      {/* Form Header */}
      <div className="space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
          Start a Conversation
        </h2>
        <p className="text-gray-600 text-lg">
          Tell us about your project and let&apos;s create something
          extraordinary together.
        </p>
      </div>

      {/* Success Message */}
      {isSubmitted && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
          <CheckCircle className="h-5 w-5 text-green-600" />
          <span className="text-green-800 font-medium">
            Thank you! Your message has been sent successfully.
          </span>
        </div>
      )}

      {/* Form */}
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 px-4"
      >
        {/* Hidden input so Netlify identifies the form */}
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>

        {/* Name and Email Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-black">
              Full Name *
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Your name"
              className="h-12 border-gray-300 focus:border-black focus:ring-black"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })}
            />
            {errors.name && (
              <p className="text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-black">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              className="h-12 border-gray-300 focus:border-black focus:ring-black"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Company and Subject Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="company" className="text-sm font-medium text-black">
              Company
            </Label>
            <Input
              id="company"
              type="text"
              placeholder="Your company name"
              className="h-12 border-gray-300 focus:border-black focus:ring-black"
              {...register("company")}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject" className="text-sm font-medium text-black">
              Subject *
            </Label>
            <Input
              id="subject"
              type="text"
              placeholder="Project inquiry"
              className="h-12 border-gray-300 focus:border-black focus:ring-black"
              {...register("subject", { required: "Subject is required" })}
            />
            {errors.subject && (
              <p className="text-sm text-red-600">{errors.subject.message}</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-medium text-black">
            Message *
          </Label>
          <Textarea
            id="message"
            placeholder="Tell us about your project, goals, and how we can help you..."
            rows={6}
            className="resize-none border-gray-300 focus:border-black focus:ring-black"
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
            })}
          />
          {errors.message && (
            <p className="text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <Button
            type="submit"
            disabled={isSubmitting}
            variant={"default"}
            className="button hover:text-white duration-300 transition-all leading-0"
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white relative z-[1] border-t-transparent rounded-full animate-spin" />
                <span>Sending...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2 relative z-[1]">
                <span>Send Message</span>
              </div>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
