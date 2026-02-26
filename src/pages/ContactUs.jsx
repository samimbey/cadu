import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import NavMenu from "@/components/marketplace/NavMenu";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    inquiryType: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobTitle: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, inquiryType: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      if (!formData.inquiryType || !formData.firstName || !formData.email) {
        setError("Please fill in all required fields");
        setIsSubmitting(false);
        return;
      }

      await base44.functions.invoke('sendContactEmail', {
        inquiryType: formData.inquiryType,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        jobTitle: formData.jobTitle,
        company: formData.company,
        message: formData.message,
      });

      setSubmitted(true);
      setFormData({
        inquiryType: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        jobTitle: "",
        company: "",
        message: "",
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact Us — Cadu</title>
        <meta name="description" content="Get in touch with the Cadu team for partnerships, support, or inquiries." />
      </Helmet>

      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to={createPageUrl("Home")} className="flex items-center gap-2">
              <span className="text-2xl font-light tracking-tight text-primary" style={{ fontFamily: "Georgia, serif" }}>
                cadu
              </span>
            </Link>
            <NavMenu isMarketplace={false} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-normal text-foreground mb-2" style={{ fontFamily: "Georgia, serif" }}>
            How can we help?
          </h1>
          <p className="text-muted-foreground">Get in touch with our team</p>
        </div>

        {submitted && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 font-medium">Thank you! We've received your message and will get back to you soon.</p>
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800 font-medium">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Inquiry Type */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              How can we help you?<span className="text-destructive">*</span>
            </label>
            <Select value={formData.inquiryType} onValueChange={handleSelectChange}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Please Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="partnership">Strategic Partnership Interest</SelectItem>
                <SelectItem value="support">Support</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* First Name and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                First name<span className="text-destructive">*</span>
              </label>
              <Input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="h-10"
                placeholder=""
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Last name
              </label>
              <Input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="h-10"
                placeholder=""
              />
            </div>
          </div>

          {/* Work Email and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Work email<span className="text-destructive">*</span>
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="h-10"
                placeholder=""
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Phone number
              </label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="h-10"
                placeholder=""
              />
            </div>
          </div>

          {/* Job Title and Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Job title
              </label>
              <Input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleInputChange}
                className="h-10"
                placeholder=""
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Company name
              </label>
              <Input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="h-10"
                placeholder=""
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Please share anything else we should know
            </label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="min-h-32 resize-none"
              placeholder=""
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-11 font-medium"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </Button>
        </form>
      </main>
    </div>
  );
}