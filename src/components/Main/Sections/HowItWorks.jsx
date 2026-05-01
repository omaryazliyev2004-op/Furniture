const steps = [
  {
    id: 1,
    title: "Purchase Securely",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/work1.svg",
  },
  {
    id: 2,
    title: "Ships From Warehouse",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/work2.png",
  },
  {
    id: 3,
    title: "Style Your Room",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/work3.svg",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">How It Works</h2>
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center">
              {/* Image with badge */}
              <div className="relative w-full mb-8">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] w-full">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-semibold shadow-md">
                  {step.id}.
                </div>
              </div>

              <h3 className="font-bold text-gray-900 text-base mb-1">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
