import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const TestimonialSection = () => {
  const testimonials = [
    {
      quote:
        "I hired MJ to help me clean my daycare because things were everywhere from the multiple years of working from home. She first started in the daycare room before moving to my office area. If I tell you that she is a diligent, precise, and hard worker, it's an understatement. She takes so much pride in her work and was committed through the entire process. You are truly hiring the best of the best when you call her.",
      name: "Mommies Family Day Care",
      title: "Catonsville, MD",
    },
    {
      quote:
        "We hired MJ to assist us with organizing our office over the summer and the results were amazing. Running a business with limited administrative staff is a real challenge. Not enough time to wear all the many hats to run a functioning office. Being able to hire MJ allowed us to keep our office organized & improve staff productivity. Their services have a big impact on productivity and we love their results.",
      name: "HomeFirst Care Services",
      title: "",
    },
    {
      quote:
        "MJ has been organizing my kitchen cabinets, laundry room, and office area. She has been very supportive in keeping me grounded and does excellent work! What I love most is her recurring check-ups because she keeps me in line and out of messes. She is highly recommended by me.",
      name: "Francella B",
      title: "Cleaning Service Owner",
    },
    {
      quote:
        "I hired MJ to organize the back section of my basement, and all I can say is that she truly makes things happen. I had boxes and containers with clothes and old movies, cassette tapes (for the over 50 crew), CDs, you name it, I had it. Christmas wrapping paper, box fans, luggage, and old boxes my television was in. Once MJ arrived it was like within a short space of time, Poof 💨 things disappeared and other things were organized!",
      name: "Tahnya H.",
      title: "",
    },
    {
      quote:
        "I hired MJ to organize my garage and let me tell you, she is a magician. Everyone knows the garage is where everything you don't want ends up. It was too daunting a task to even start. MJ came in and got straight to work. She was professional, respectful, and worked diligently until the project was complete. Words cannot express how grateful I am to her. If you need ANY space reorganized, don't look any further. She is definitely the one for the job!",
      name: "Jason W",
      title: "",
    },
    {
      quote:
        "I met MJ through a friend who was telling me what great services she offers. I asked her to come into my home to DECLUTTER my bedroom closet, my laundry area, my hallway closet, and entranceway. If I can swear, I would, but MJ is so proficient and a masterpiece at what she does. She is like a battery that can't be turned off. She worked so hard every time she came into my home and every time she completed an area, I would scream! She is truly the one to make you get your life back and stay in order. You have found a treasure!",
      name: "Jeneba K.",
      title: "Hanover, MD",
    },
  ];

  return (
    <section
      className="h-fit flex flex-col antialiased bg-  items-center justify-center relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-12"
      id="testimonials"
    >
      <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-railway">
        Hear What Our Clients Are Saying
      </div>
      <h2 className="text-5xl font-bold text-center mb-10 text-blue-900 ">Testimonials</h2>
      <div className="flex items-center justify-center flex-col w-11/12">
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
      </div>
    </section>
  );
};

export default TestimonialSection;
