import AnimatedHeadline from "@/components/animations/AnimatedHeadline";

const CardNumber = ({ title, headline, theme }) => {
  return (
    <AnimatedHeadline
      title={title}
      headline={
        <h1 className="text-3xl md:text-4xl lg:text-7xl font-helvetica-light font-light leading-tight">
          {headline}
        </h1>
      }
      theme={theme}
    />
  );
};

export default CardNumber;
