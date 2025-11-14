import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card from "../common/Card";
import ResponsiveImage from "../common/ResponsiveImage";

const testimonials = [
  {
    name: "Mary W.",
    role: "Home Chef",
    comment:
      "FreshGro has the freshest vegetables I’ve ever bought online. Everything arrives crisp and beautiful!",
    customerImage: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
  {
    name: "James K.",
    role: "Nutritionist",
    comment:
      "I love how affordable and high-quality their organic produce is. Broccoli and cabbage are always perfect!",
    customerImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },
  {
    name: "Sarah M.",
    role: "Food Blogger",
    comment:
      "Great service and timely delivery. I can finally trust an online grocery shop for my weekly veggies!",
    customerImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
  {
    name: "Tom H.",
    role: "Chef",
    comment:
      "The produce is always fresh and the delivery is super reliable. Highly recommend FreshGro!",
    customerImage: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-green-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">
          What Our Customers Say
        </h2>

        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="py-6"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <Card className="p-6 mx-2">
                <div className="flex flex-col items-center text-center">
                  <ResponsiveImage
                    src={t.customerImage}
                    alt={t.name}
                    className="w-20 h-20 rounded-full mb-4 border-2 border-green-200"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">{t.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{t.role}</p>
                  <p className="text-gray-700 italic">“{t.comment}”</p>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
