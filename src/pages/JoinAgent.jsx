import React, { useState } from 'react';

const StepBadge = ({ number, label, active }) => (
  <div className={`flex items-center gap-3 ${active ? 'text-black' : 'text-gray-400'}`}>
    <div className={`w-9 h-9 rounded-full flex items-center justify-center border ${active ? 'border-black bg-white' : 'border-gray-300 bg-white'}`}>
      <span className={`text-sm font-bold ${active ? 'text-black' : 'text-gray-400'}`}>{number}</span>
    </div>
    <span className={`text-sm font-medium ${active ? '' : 'text-gray-400'}`}>{label}</span>
  </div>
);

const JoinAgent = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '',
    whatsapp: '',
    email: '',
    address: '',
    ktp: null,
    instagram: '',
    ownsVehicle: '',
    salesExperience: '',
    wasAgent: '',
    motivation: '',
    focusAreas: '',
    availability: '',
    commission: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;
    if (type === 'file') return setForm((f) => ({ ...f, [name]: files?.[0] || null }));
    if (type === 'checkbox') return setForm((f) => ({ ...f, [name]: checked }));
    setForm((f) => ({ ...f, [name]: value }));
  };

  const next = () => setStep(2);
  const back = () => setStep(1);
  const submit = (e) => {
    e.preventDefault();
    console.log('Join Agent Application', form);
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-[112px] lg:pt-[160px]">
      <div className="relative h-[480px] w-full">
        <img src="https://placehold.co/1920x800/222/EEE?text=Join+as+Agent" alt="Join Hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4 tracking-wide">Bangun Bisnis Bersama Urbanlink</h1>
          <p className="text-white/80 max-w-2xl">Silakan isi data di bawah ini untuk melanjutkan tahap interview menjadi agen Urbanlink.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="flex items-center justify-between mb-6">
              <StepBadge number={1} label="Data Diri" active={step === 1} />
              <div className="flex-1 mx-6 h-px bg-gray-200" />
              <StepBadge number={2} label="Background" active={step === 2} />
            </div>
            <div className="h-px bg-gray-200 mb-6" />

            {step === 1 && (
              <form onSubmit={(e) => { e.preventDefault(); next(); }} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                  <input name="name" value={form.name} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-black focus:outline-none" placeholder="Nama Lengkap" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nomor WhatsApp</label>
                  <input name="whatsapp" value={form.whatsapp} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-black focus:outline-none" placeholder="Ex: 0812949xxxx" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Alamat Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-black focus:outline-none" placeholder="Alamat Email" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Alamat Domisili</label>
                  <textarea name="address" value={form.address} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-black focus:outline-none h-24" placeholder="Isi Alamat Lengkap" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Upload Foto KTP</label>
                  <input type="file" name="ktp" onChange={handleChange} accept="image/*" className="block w-full text-sm text-gray-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Instagram</label>
                  <input name="instagram" value={form.instagram} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-black focus:outline-none" placeholder="Ex: @username" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Punya Kendaraan Pribadi?</label>
                  <select name="ownsVehicle" value={form.ownsVehicle} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-3 bg-white">
                    <option value="">Pilih Salah Satu</option>
                    <option value="ya">Ya</option>
                    <option value="tidak">Tidak</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Apakah Pernah Menjual Properti?</label>
                  <select name="salesExperience" value={form.salesExperience} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-3 bg-white">
                    <option value="">Pilih Salah Satu</option>
                    <option value="Tidak Ada">Tidak Ada</option>
                    <option value="Pernah">Pernah</option>
                    <option value="Berpengalaman">Berpengalaman</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pernah Aktif Sebagai Agen?</label>
                  <select name="wasAgent" value={form.wasAgent} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-3 bg-white">
                    <option value="">Pilih Salah Satu</option>
                    <option value="Ya">Ya</option>
                    <option value="Tidak">Tidak</option>
                  </select>
                </div>
                <div className="pt-2">
                  <button type="submit" className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-900">Lanjutkan</button>
                </div>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={submit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mengapa ingin bergabung dengan Urbanlink?</label>
                  <textarea name="motivation" value={form.motivation} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-black focus:outline-none h-28" placeholder="Ceritakan singkat motivasi Anda" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Area Fokus</label>
                  <input name="focusAreas" value={form.focusAreas} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-black focus:outline-none" placeholder="Contoh: Jakarta Selatan, BSD, dll." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ketersediaan Waktu</label>
                  <select name="availability" value={form.availability} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-3 bg-white">
                    <option value="">Pilih Salah Satu</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Fleksibel">Fleksibel</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Harapan Komisi</label>
                  <select name="commission" value={form.commission} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-3 bg-white">
                    <option value="">Pilih Salah Satu</option>
                    <option value="Standar">Standar</option>
                    <option value="Premium">Premium</option>
                  </select>
                </div>
                <div className="flex items-center gap-3">
                  <input id="agree" type="checkbox" name="agree" checked={form.agree} onChange={handleChange} />
                  <label htmlFor="agree" className="text-sm text-gray-700">Saya setuju untuk mengikuti proses seleksi Urbanlink</label>
                </div>
                <div className="flex gap-3 pt-2">
                  <button type="button" onClick={back} className="px-4 py-3 rounded-lg border">Kembali</button>
                  <button type="submit" className="flex-1 bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-900">Kirim Lamaran</button>
                </div>
              </form>
            )}
      </div>
    </div>
  );
};

export default JoinAgent;
