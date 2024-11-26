import React from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Cafe Owner",
    quote:
      "Storekode has revolutionized how we connect with our customers. It's so easy to update our information!",
    image: "/api/placeholder/100/100",
  },
  {
    name: "Mike Rodriguez",
    role: "Retail Store Manager",
    quote:
      "Our customer engagement has increased significantly since using Storekode. Highly recommended!",
    image: "/api/placeholder/100/100",
  },
  {
    name: "Emily Chen",
    role: "Small Business Owner",
    quote:
      "The QR code solution is simple, elegant, and has helped us modernize our business presence.",
    image: "/api/placeholder/100/100",
  },
];

function Testimonials() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-6 lg:p-16 mb-16 lg:my-24 mt-12">
      <div className="text-center mb-8 lg:mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          What Our Customers Say
        </h2>
        <p className="text-base lg:text-xl text-gray-600 max-w-3xl mx-auto">
          Real stories from businesses that have transformed their digital
          presence.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-orange-50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-700 italic">"{testimonial.quote}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
