export default function Footer() {
  return (
    <footer className="bg-white/5 border-t border-white/10 py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="text-xl font-bold text-neon mb-4">FiTusion</h3>
          <p className="text-gray-400 mb-6">
            Your ultimate fitness partner for body transformation and mind elevation.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20">📘</a>
            <a href="#" className="w-8 h-8 border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20">📷</a>
            <a href="#" className="w-8 h-8 border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20">🐦</a>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-neon">Home</a></li>
            <li><a href="/about" className="hover:text-neon">About</a></li>
            <li><a href="/services" className="hover:text-neon">Services</a></li>
            <li><a href="/exercise" className="hover:text-neon">Exercises</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-neon">Strength Training</a></li>
            <li><a href="#" className="hover:text-neon">Yoga</a></li>
            <li><a href="#" className="hover:text-neon">Nutrition</a></li>
            <li><a href="#" className="hover:text-neon">Plans</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <p className="text-gray-400 mb-2">hello@fitusion.com</p>
          <p className="text-gray-400 mb-4">+1 (555) 123-4567</p>
          <p className="text-gray-400">123 Fitness St, Gym City</p>
        </div>
      </div>
      
      <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-gray-400">
        <p>&copy; 2024 FiTusion. All rights reserved.</p>
      </div>
    </footer>
  );
}
