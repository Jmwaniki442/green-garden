import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Mary W.",
    comment:
      "FreshGro has the freshest vegetables I’ve ever bought online. Everything arrives crisp and beautiful!",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
  {
    name: "James K.",
    comment:
      "I love how affordable and high-quality their organic produce is. Broccoli and cabbage are always perfect!",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },
  {
    name: "Sarah M.",
    comment:
      "Great service and timely delivery. I can finally trust an online grocery shop for my weekly veggies!",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-green-50 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-12">
          What Our Customers Say
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 mx-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 mx-auto rounded-full object-cover mb-4 border-4 border-green-200"
                />
                <p className="text-gray-700 italic mb-4">“{t.comment}”</p>
                <h4 className="font-semibold text-green-800">{t.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
