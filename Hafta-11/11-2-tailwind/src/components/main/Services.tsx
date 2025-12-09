import ServicesImageContainer from "./ServicesImageContainer";
import ServicesTextContainer from "./ServicesTextContainer";

const Services = () => {
  return (
    <section
      className="relative bg-gradient-to-br
    from-orange-50 to-teal-50 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ServicesTextContainer />
          <ServicesImageContainer />
        </div>
      </div>
    </section>
  );
};

export default Services;
