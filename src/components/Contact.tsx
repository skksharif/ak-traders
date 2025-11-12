import { Phone, MessageCircle, MapPin, Instagram, Facebook, FileText } from 'lucide-react';

const contacts = [
  { name: 'Shaik Muteeb', phone: '99635 54996' },
  { name: 'Shaik Irshad', phone: '76589 94774' },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-neutral-800 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Get In <span className="text-yellow-500">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Contact Persons</h3>
            <div className="space-y-6 mb-8">
              {contacts.map((contact, index) => (
                <div key={index} className="bg-neutral-900 border border-yellow-600/20 rounded-xl p-6 hover:border-yellow-500/50 transition-all">
                  <p className="text-yellow-500 font-semibold text-lg mb-2">{contact.name}</p>
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, '')}`}
                    className="flex items-center space-x-3 text-white text-xl font-bold hover:text-yellow-500 transition-colors"
                  >
                    <Phone size={24} />
                    <span>{contact.phone}</span>
                  </a>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <a
                href="https://wa.me/919963554996"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 bg-green-500 text-white px-6 py-4 rounded-xl font-bold hover:bg-green-400 transition-all shadow-lg"
              >
                <MessageCircle size={28} />
                <span className="text-lg">WhatsApp Chat</span>
              </a>

              <div className="bg-neutral-900 border border-yellow-600/20 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <FileText className="text-yellow-500" size={24} />
                  <span className="text-white font-semibold">GSTIN</span>
                </div>
                <p className="text-gray-300 font-mono text-lg">37NOLPS3993N2ZF</p>
              </div>

              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/aktraderscenteringmaterials"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-3 bg-gradient-to-br from-purple-600 to-pink-500 text-white px-6 py-4 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg"
                >
                  <Instagram size={24} />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/share/1CvRGKPPVL/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-3 bg-blue-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all shadow-lg"
                >
                  <Facebook size={24} />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Our Location</h3>
            <div className="bg-neutral-900 border border-yellow-600/20 rounded-xl p-4 mb-6">
              <div className="flex items-start space-x-3">
                <MapPin className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-white font-semibold mb-2">Visit Us</p>
                  <a
                    href="https://maps.app.goo.gl/Y7fHmGr24oYU6MwM7?g_st=aw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-500 hover:text-yellow-400 transition-colors"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl border border-yellow-600/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5!2d78.4!3d17.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzAwLjAiTiA3OMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AK Traders Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
