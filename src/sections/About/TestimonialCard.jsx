import { Star, ArrowRight } from "lucide-react";

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 mb-6 hover:bg-slate-800/70 transition-all duration-300">
    {/* Rating Stars */}
    <div className="flex items-center mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
      <span className="ml-2 text-yellow-400 text-sm font-medium">
        {testimonial.rating}.0/5.0
      </span>
    </div>

    {/* Testimonial Text */}
    <p className="text-gray-300 text-sm leading-relaxed mb-6">
      {testimonial.text}
    </p>

    {/* Author Info */}
    <div className="flex items-center">
      <img
        src={testimonial.avatar}
        alt={testimonial.author}
        className="w-10 h-10 rounded-full object-cover mr-3"
      />
      <div>
        <h4 className="text-white font-medium text-sm">{testimonial.author}</h4>
        <p className="text-gray-400 text-xs">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
