import React, { useState } from 'react';

// --- Icons for the 3-step header ---
const EditIcon = ({ className = "w-10 h-10" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);
const UserCheckIcon = ({ className = "w-10 h-10" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);
const HeadsetIcon = ({ className = "w-10 h-10" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a9 9 0 11-15.5 0m15.5 0a9 9 0 00-15.5 0m15.5 0H3.75m15.5 0z" />
  </svg>
);

// --- Rich Text Editor Placeholder ---
const RichTextEditorPlaceholder = ({ label }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <div className="border border-gray-300 rounded-md overflow-hidden">
      {/* Toolbar Placeholder */}
      <div className="bg-gray-100 p-2 border-b border-gray-300 flex space-x-2 text-gray-600 text-sm flex-wrap">
        <span className="font-semibold">Paragraph</span>
        <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        <span className="mx-2">|</span>
        <span className="font-bold">B</span> {/* Bold */}
        <span className="italic">I</span> {/* Italic */}
        <span className="underline">U</span> {/* Underline */}
        <span className="mx-2">|</span>
        <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg> {/* Align Left */}
        <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg> {/* Align Center */}
        <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h-7" /></svg> {/* Align Right */}
      </div>
      <textarea
        className="w-full p-2 h-32 focus:outline-none text-sm text-gray-800 resize-y"
        placeholder={`Masukkan ${label.toLowerCase()} Anda...`}
      ></textarea>
    </div>
  </div>
);

// --- Main Form Component ---
const SellPropertyForm = () => {
  const [ownershipStatus, setOwnershipStatus] = useState('pribadi');
  const [formData, setFormData] = useState({ /* ... form state ... */ });

  const handleChange = (e) => { /* ... handle change ... */ };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', { ...formData, ownershipStatus });
    // In a real app, you'd use a modal here, not an alert.
    // alert('Data Submitted (Check console for details)');
  };

  return (
    <>
      {/* Use 'Nunito' font for a fun vibe */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap');
        `}
      </style>
      <div 
        className="bg-gray-50 min-h-screen p-4 md:p-8 pt-24 md:pt-32"
        style={{ fontFamily: "'Nunito', sans-serif" }}
      >
        <div className="max-w-6xl mx-auto">
          
          {/* --- 3 Langkah Praktis Section --- */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              3 Langkah Praktis Titip/Cari Properti di Urbalink
            </h2>
            <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0 md:space-x-8">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <EditIcon className="w-12 h-12 text-gray-800" />
                <p className="font-semibold text-gray-700 mt-2">Isi Form Kebutuhan<br/>Properti Anda</p>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <UserCheckIcon className="w-12 h-12 text-gray-800" />
                <p className="font-semibold text-gray-700 mt-2">Pilih Agen Terbaik<br/>Rekomendasi Kami</p>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <HeadsetIcon className="w-12 h-12 text-gray-800" />
                <p className="font-semibold text-gray-700 mt-2">Hubungi Agen Pilihan<br/>Anda Secara Langsung</p>
              </div>
            </div>
          </div>

          {/* --- Form and Sidebar Layout --- */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* --- Main Form Area --- */}
            <div className="w-full md:w-3/4 bg-white shadow-lg rounded-xl p-6 md:p-8 border border-gray-200">
              <h1 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">
                Titip Jual Properti
              </h1>
              
              <form onSubmit={handleSubmit}>
                {/* Data Diri Section */}
                <h2 className="text-lg font-semibold text-gray-700 mb-3">Data Diri</h2>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Masukkan Nama Anda<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
                    placeholder="Masukkan Nama Anda"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">
                    Nomor WhatsApp<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="whatsapp"
                    name="whatsapp"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
                    placeholder="0812XXXXXXXX"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Alamat Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
                    placeholder="Masukkan Alamat Email Anda"
                    required
                  />
                </div>

                {/* Status Kepemilikan */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status Kepemilikan<span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center space-x-6">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="ownershipStatus"
                        value="pribadi"
                        checked={ownershipStatus === 'pribadi'}
                        onChange={(e) => setOwnershipStatus(e.target.value)}
                        className="form-radio text-blue-600 h-4 w-4"
                      />
                      <span className="ml-2 text-gray-700">Pribadi</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="ownershipStatus"
                        value="orang_lain"
                        checked={ownershipStatus === 'orang_lain'}
                        onChange={(e) => setOwnershipStatus(e.target.value)}
                        className="form-radio text-blue-600 h-4 w-4"
                      />
                      <span className="ml-2 text-gray-700">Orang Lain</span>
                    </label>
                  </div>
                </div>

                {/* Tipe Properti */}
                <div className="mb-4">
                  <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">
                    Tipe Properti<span className="text-red-500">*</span>
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 bg-white"
                    required
                  >
                    <option value="">-- Pilih Tipe Properti --</option>
                    <option value="rumah">Rumah</option>
                    <option value="apartemen">Apartemen</option>
                    <option value="tanah">Tanah</option>
                    <option value="ruko">Ruko</option>
                    <option value="kantor">Kantor</option>
                  </select>
                </div>

                {/* Alamat Properti */}
                <RichTextEditorPlaceholder label="Alamat Properti" />

                {/* Spesifikasi Properti */}
                <RichTextEditorPlaceholder label="Spesifikasi Properti" />

                {/* Harga */}
                <div className="mb-4">
                  <label htmlFor="harga" className="block text-sm font-medium text-gray-700 mb-1">
                    Harga<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="harga"
                    name="harga"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
                    placeholder="Masukkan Harga Properti"
                    required
                  />
                </div>

                {/* Jenis Transaksi */}
                <div className="mb-4">
                  <label htmlFor="transactionType" className="block text-sm font-medium text-gray-700 mb-1">
                    Jenis Transaksi<span className="text-red-500">*</span>
                  </label>
                  <select
                    id="transactionType"
                    name="transactionType"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 bg-white"
                    required
                  >
                    <option value="">-- Pilih Jenis Transaksi --</option>
                    <option value="jual">Jual</option>
                    <option value="sewa">Sewa</option>
                  </select>
                </div>

                {/* Apakah dijamin oleh bank? */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Apakah dijamin oleh bank?<span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center space-x-6">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="bankGuaranteed"
                        value="ya"
                        className="form-radio text-blue-600 h-4 w-4"
                      />
                      <span className="ml-2 text-gray-700">Ya</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="bankGuaranteed"
                        value="tidak"
                        defaultChecked
                        className="form-radio text-blue-600 h-4 w-4"
                      />
                      <span className="ml-2 text-gray-700">Tidak</span>
                    </label>
                  </div>
                </div>

                {/* Nama Bank */}
                <div className="mb-6">
                  <label htmlFor="bankName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Bank
                  </label>
                  <input
                    type="text"
                    id="bankName"
                    name="bankName"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
                    placeholder="Nama Bank"
                  />
                </div>

                {/* Foto Properti */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Foto Properti<span className="text-red-500">*</span>
                  </label>
                  <p className="text-xs text-gray-500 mb-2">Maksimum file 7 MB</p>
                  <input
                    type="file"
                    id="propertyPhotos"
                    name="propertyPhotos"
                    onChange={handleChange}
                    className="block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-md file:border-0
                      file:text-sm file:font-semibold
                      file:bg-blue-50 file:text-blue-700
                      hover:file:bg-blue-100"
                    accept="image/*"
                    multiple
                    required
                  />
                </div>

                {/* Note Section */}
                <div className="mb-6 p-4 bg-gray-50 rounded-md border-l-4 border-gray-200 text-sm text-gray-600">
                  <p className="font-semibold mb-2 text-gray-800">Note:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Anda adalah Pemilik langsung Properti yang akan dititipkan di Urbanlink dan dengan ini menjamin bahwa Anda adalah pemilik yang sah atas Properti tersebut, atau/dan memang pihak yang berwenang atas Properti tersebut. Anda menjamin akan menyediakan dokumen, tidak ada pihak lain yang berkepentingan atas kepemilikan dan/atau penjualan/ sewa Properti tersebut kecuali dari Urbanlink, dan tidak bersengketa dalam serta perbaikan apapun.</li>
                    <li>Anda menjamin kebenaran informasi yang diberikan sehubungan dengan Properti tersebut dan Urbanlink tidak bertanggung jawab atas kerugian yang ditimbulkan akibat informasi maupun dokumen yang diakibatkan oleh informasi yang tidak benar, tidak tepat, atau yang tidak diberikan oleh Anda.</li>
                  </ul>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200"
                >
                  KIRIM DATA
                </button>
              </form>
            </div>

            {/* --- Right Sidebar --- */}
            <div className="w-full md:w-1/4">
              <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg text-center sticky top-24"> {/* Made sidebar sticky */}
                <p className="text-lg font-semibold mb-4">
                  Butuh bantuan seputar titip atau cari properti?
                </p>
                <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-100 transition duration-200">
                  Hubungi Customer Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellPropertyForm;