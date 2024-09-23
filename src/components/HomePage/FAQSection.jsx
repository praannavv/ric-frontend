import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

// Sample data for FAQs
const faqs = [
  {
    id: 1,
    question: "What services does RIC Group offer?",
    answer:
      "RIC Group offers a wide range of IT services, including system development, cloud solutions, and cybersecurity. We tailor our services to meet the unique needs of each client.",
  },
  {
    id: 2,
    question: "How can I contact customer support?",
    answer:
      "You can reach our customer support team through our website's contact form, email, or phone. We are available 24/7 to assist with any inquiries.",
  },
  {
    id: 3,
    question: "What is the process for onboarding a new client?",
    answer:
      "Our onboarding process includes an initial consultation to understand your needs, followed by a tailored proposal and implementation plan. We ensure a smooth transition with dedicated support.",
  },
  {
    id: 4,
    question: "Are your services customizable?",
    answer:
      "Yes, all our services are customizable to fit the specific requirements of your business. We work closely with you to create solutions that align with your goals.",
  },
  {
    id: 5,
    question: "What is the cost of your services?",
    answer:
      "The cost of our services varies depending on the scope and complexity of the project. We provide detailed quotes after assessing your needs and requirements.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  const handleOpen = (value) => setOpen(open === value ? null : value);

  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold leading-tight text-black dark:text-fontColor-dark  lg:text-5xl">
            Frequently Asked <span className="text-green-300">Questions</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-300">
            Find answers to the most common questions about our services and how
            we can help you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {faqs.map((faq) => (
            <Accordion key={faq.id} open={open === faq.id}>
              <AccordionHeader
                className="text-sm sm:text-base dark:text-gray-400 dark:hover:text-gray-300"
                onClick={() => handleOpen(faq.id)}
              >
                {faq.question}
              </AccordionHeader>
              <AccordionBody className="text-sm sm:text-base dark:text-gray-400">
                {faq.answer}
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}
