import React from 'react';
import { PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-[112px] lg:pt-[160px]">
      <div className="relative h-[420px] w-full">
        <img src="https://placehold.co/1920x800/222/EEE?text=Contact+Urbanlink" alt="Contact Hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-3 tracking-wide">Hubungi Urbanlink</h1>
          <p className="text-white/80 max-w-2xl">Silakan pilih kanal kontak kami di bawah. Tim kami siap membantu dengan pelayanan premium.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-serif text-black mb-6">Hubungi Kami</h2>
            <div className="space-y-6">
              <div className="rounded-xl border border-gray-200 p-6 bg-white">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
                    <PhoneIcon className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-black">Whatsapp</div>
                    <div className="text-gray-600">0881-0100-53862</div>
                    <div className="mt-3">
                      <a href="https://wa.me/62881010053862" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 rounded-full border border-black text-sm font-semibold hover:bg-black hover:text-white">Chat via WhatsApp</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-gray-200 p-6 bg-white">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
                    <MapPinIcon className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-black">Alamat</div>
                    <div className="text-gray-600 leading-relaxed">
                      Ruko Pascal No 19 Jl. Scientia Square Barat 1 No.19,<br/>
                      Medang, Kec. Pagedangan, Kabupaten Tangerang,<br/>
                      Banten 15334
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-black mb-6">Customer Support</h2>
            <div className="rounded-xl border border-gray-200 p-6 bg-white">
              <div className="text-sm font-semibold text-black mb-3">Jam Operasional</div>
              <div className="text-gray-700 space-y-2">
                <div>Senin - Jumat, 09.00 - 17.00</div>
                <div>Sabtu, 09.00 - 14.00</div>
              </div>
              <div className="mt-6">
                <a href="mailto:info@urbanlink.id" className="inline-block px-4 py-2 rounded-full border border-black text-sm font-semibold hover:bg-black hover:text-white">Email Kami</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
