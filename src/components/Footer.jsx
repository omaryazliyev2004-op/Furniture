const instagramImages = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop",
];

export default function Footer() {
  return (
    <footer className="bg-[#0D3B5E] text-white py-12 px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10">
        <div className="md:w-1/3">
          <h3 className="text-lg font-bold mb-4">Beauty Care</h3>
          <p className="text-sm text-blue-200 leading-relaxed mb-6">
            Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <h4 className="text-base font-bold">Follow Us</h4>
        </div>

        <div className="md:w-2/3">
          <h3 className="text-lg font-bold mb-4">Instagram Shop</h3>
          <div className="grid grid-cols-4 gap-3">
            {instagramImages.map((src, i) => (
              <div
                key={i}
                className="rounded-lg overflow-hidden aspect-square cursor-pointer hover:opacity-80 transition-opacity"
              >
                <img
                  src={src}
                  alt={`Instagram post ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
