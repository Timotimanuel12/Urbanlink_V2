import React from 'react';
import { HeartIcon, ShareIcon, PhoneIcon } from '@heroicons/react/24/outline';

const sampleProperty = {
  id: 101,
  price: '$687,142',
  title: 'Spectacular Country Estate With Private Park And Panoramic View.',
  specs: { beds: 4, baths: 3, size: '600 Sqm', lot: '10,000 Sqm lot' },
  location: 'Varese, Lombardy, Italy',
  images: [
    'https://images.unsplash.com/photo-1600585154340-9b04b3a86c34?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1502005229762-cf1b2c8cdac0?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1560185007-5b508b6731d8?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1600&q=80'
  ],
  description:
    "Nestled in the greenery of Bregazzana, this elegant country villa offers a rare combination of nature and comfort. The property consists of a main villa, guesthouse, and a spacious garage across more than 500 square meters of living space.",
  facts: [
    { label: 'Property type', value: 'Villa' },
    { label: 'Floors', value: '3' },
    { label: 'Year built', value: '1970' },
    { label: 'Price/sqm', value: '$11,145' },
    { label: 'Emissions', value: 'G' },
    { label: 'Consumption', value: 'G' }
  ],
  features: ['Garden','Garage','Terrace','Mountain View','Vineyard / Winery','Equestrian','Outdoor Kitchen','Fire Pit','Walk In Closet'],
  agent: { name: 'Renzo Bossi', agency: 'Bossi Real Estate', phone: '+62 812-0000-0000', avatar: 'https://placehold.co/64x64/EEE/333?text=RB' }
};

const PropertyDetails = () => {
  const property = sampleProperty;

  return (
    <div className="pt-[112px] lg:pt-[160px] bg-white">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <img src={property.images[0]} alt="Main" className="col-span-2 md:col-span-2 h-[300px] md:h-[380px] w-full object-cover rounded" />
              <img src={property.images[1]} alt="Alt" className="h-[140px] md:h-[180px] w-full object-cover rounded" />
              <img src={property.images[2]} alt="Alt" className="h-[140px] md:h-[180px] w-full object-cover rounded" />
              <img src={property.images[3]} alt="Alt" className="h-[140px] md:h-[180px] w-full object-cover rounded" />
              <img src={property.images[4]} alt="Alt" className="h-[140px] md:h-[180px] w-full object-cover rounded" />
            </div>

            <div className="mt-6 flex items-start justify-between">
              <div>
                <div className="text-3xl font-bold">{property.price}</div>
                <h1 className="mt-2 text-2xl md:text-3xl font-serif">{property.title}</h1>
                <div className="mt-2 text-sm text-gray-600">
                  {property.specs.beds} Beds • {property.specs.baths} Baths • {property.specs.size} • {property.specs.lot}
                </div>
                <div className="mt-2 text-sm text-emerald-700 font-medium">{property.location}</div>
                <div className="mt-2 flex items-center gap-4 text-xs text-gray-400">
                  <span>Updated: October 20</span>
                  <span>•</span>
                  <span>69 views</span>
                  <span>•</span>
                  <span>4 saves</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 border rounded-full text-sm font-semibold flex items-center gap-2">
                  <ShareIcon className="w-4 h-4" /> Share
                </button>
                <button className="px-4 py-2 border rounded-full text-sm font-semibold flex items-center gap-2">
                  <HeartIcon className="w-4 h-4" /> Save
                </button>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-xl font-semibold">About the Property</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">{property.description}</p>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {property.facts.map((f, i) => (
                  <div key={i} className="border rounded p-3">
                    <div className="text-xs text-gray-500">{f.label}</div>
                    <div className="text-sm font-semibold">{f.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-xl font-semibold">Features</h2>
              <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-3">
                {property.features.map((ft) => (
                  <div key={ft} className="flex items-center gap-2 text-sm">
                    <span className="w-6 h-6 rounded bg-gray-100" />
                    <span>{ft}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-xl font-semibold">Explore the Area</h2>
              <div className="mt-3 h-[320px] w-full rounded overflow-hidden border">
                <img src="https://placehold.co/1200x600/EEE/333?text=Map" alt="Map" className="w-full h-full object-cover" />
              </div>
              <div className="mt-3 text-sm text-gray-600">Situated in the picturesque city of Varese, this property offers an elegant lifestyle with stunning views.</div>
            </div>

            <div className="mt-12">
              <h2 className="text-xl font-semibold">Similar Properties Nearby</h2>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1,2,3].map((n) => (
                  <div key={n} className="group">
                    <div className="relative h-52 rounded overflow-hidden">
                      <img src="https://placehold.co/800x600/EEE/333?text=Property" alt="Similar" className="w-full h-full object-cover group-hover:scale-105 transition" />
                      <div className="absolute top-3 right-3 bg-white p-2 rounded-full"><HeartIcon className="w-4 h-4" /></div>
                    </div>
                    <div className="mt-3">
                      <div className="font-semibold">$1,397,578</div>
                      <div className="text-sm text-gray-500">5 Beds • 5 Baths • 400 Sqm</div>
                      <div className="text-sm text-gray-600">Villa in Varese, Lombardy, Italy</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-[140px] border rounded-lg p-4">
              <div className="flex items-center gap-3">
                <img src={property.agent.avatar} alt={property.agent.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-semibold">{property.agent.name}</div>
                  <div className="text-xs text-gray-500">Joined 3 years ago</div>
                </div>
              </div>
              <button className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-teal-700 text-white text-sm font-semibold">
                <PhoneIcon className="w-4 h-4" /> Call Agent
              </button>
              <form className="mt-4 space-y-3">
                <input type="text" placeholder="Your name" className="w-full border rounded-md p-3" />
                <input type="email" placeholder="Your email address" className="w-full border rounded-md p-3" />
                <div className="flex gap-2">
                  <select className="w-24 border rounded-md p-3"><option>+62</option></select>
                  <input type="text" placeholder="Phone number (optional)" className="flex-1 border rounded-md p-3" />
                </div>
                <textarea rows="3" placeholder={`Please contact me regarding ${property.title}`} className="w-full border rounded-md p-3" />
                <button type="button" className="w-full bg-teal-700 text-white font-semibold py-3 rounded-md">Send message</button>
              </form>
              <div className="mt-3 space-y-2">
                <label className="flex items-center gap-2 text-xs"><input type="checkbox" /> Notify me via email when similar listings appear</label>
                <label className="flex items-center gap-2 text-xs"><input type="checkbox" /> I agree to Terms of Use and Privacy Policy</label>
              </div>
              <div className="mt-6 border-t pt-4">
                <div className="text-sm font-semibold">Listed by</div>
                <div className="mt-2">
                  <div className="text-sm">{property.agent.agency}</div>
                  <div className="text-xs text-gray-500">Via Carrobio 19, 21100, Varese, Italy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
