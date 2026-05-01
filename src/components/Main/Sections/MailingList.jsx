
export default function MailingList() {
  
  return (
    <section className="py-16 px-6 bg-[#EEF2F8]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Join Our Mailing List
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-8">
          Sign up to receive inspiration, product updates,
          <br />
          and special offers from our team.
        </p>

        <div className="flex items-stretch max-w-md mx-auto rounded-md overflow-hidden border border-gray-300 bg-white">
          <input
            type="email"
            placeholder="example@gmail.com"
            className="flex-1 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none bg-white"
          />
          <button
            className="px-6 py-3 bg-[#1B4F72] hover:bg-[#154060] text-white text-sm font-semibold transition-colors"
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}
