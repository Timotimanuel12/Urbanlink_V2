import React, { useState, useEffect } from 'react';

// --- Helper Functions ---

/**
 * Formats a number into a currency string (e.g., "100.000.000").
 * @param {string|number} value - The number or string to format.
 * @returns {string} - The formatted currency string.
 */
const formatCurrency = (value) => {
  if (!value) return '';
  // Remove all non-digit characters
  const num = String(value).replace(/\D/g, '');
  if (num === '') return '';
  // Format using Indonesian locale for dot separators
  return new Intl.NumberFormat('id-ID').format(Number(num));
};

/**
 * Parses a currency string ("100.000.000") into a plain number (100000000).
 * @param {string} value - The formatted currency string.
 * @returns {number} - The parsed number.
 */
const parseCurrency = (value) => {
  if (!value) return 0;
  // Remove all dots, "Rp", and spaces
  return Number(String(value).replace(/[.,Rp\s]/g, ''));
};

/**
 * Calculates the monthly mortgage payment (PMT).
 * @param {number} principal - The total loan amount.
 * @param {number} monthlyRate - The monthly interest rate (e.g., 0.005 for 6% annual).
 * @param {number} numMonths - The total number of months for the loan.
 * @returns {number} - The calculated monthly payment.
 */
const calculatePMT = (principal, monthlyRate, numMonths) => {
  if (principal <= 0 || numMonths <= 0) return 0;
  if (monthlyRate === 0) return principal / numMonths;
  
  const factor = Math.pow(1 + monthlyRate, numMonths);
  return principal * (monthlyRate * factor) / (factor - 1);
};


// --- Main KPR Calculator Component ---

const KprCalculator = () => {
  // --- State Variables ---
  const [propertyPrice, setPropertyPrice] = useState('100.000.000');
  const [dpAmount, setDpAmount] = useState('20.000.000');
  const [dpPercent, setDpPercent] = useState('20');
  const [loanTerm, setLoanTerm] = useState('10'); // In years
  const [interestRate, setInterestRate] = useState('6'); // Annual percentage
  
  const [loanAmount, setLoanAmount] = useState(80000000);
  const [installments, setInstallments] = useState([]);

  // --- Form Input Handlers ---

  const handlePropertyPriceChange = (e) => {
    const newPriceStr = formatCurrency(e.target.value);
    const newPriceNum = parseCurrency(newPriceStr);
    const percent = parseFloat(dpPercent) || 0;
    
    setPropertyPrice(newPriceStr);
    
    // Recalculate DP Amount based on new price and existing percentage
    const newDpAmount = (newPriceNum * percent) / 100;
    setDpAmount(formatCurrency(Math.round(newDpAmount)));
  };

  const handleDpAmountChange = (e) => {
    const newDpAmountStr = formatCurrency(e.target.value);
    const newDpAmountNum = parseCurrency(newDpAmountStr);
    const price = parseCurrency(propertyPrice);

    setDpAmount(newDpAmountStr);

    // Recalculate DP Percent
    if (price > 0) {
      const newPercent = (newDpAmountNum / price) * 100;
      setDpPercent(newPercent.toFixed(0)); // .toFixed(0) to match image
    }
  };

  const handleDpPercentChange = (e) => {
    const newPercentStr = e.target.value.replace(/\D/g, ''); // Allow only digits
    const newPercentNum = parseFloat(newPercentStr) || 0;
    const price = parseCurrency(propertyPrice);

    setDpPercent(newPercentStr);

    // Recalculate DP Amount
    const newDpAmount = (price * newPercentNum) / 100;
    setDpAmount(formatCurrency(Math.round(newDpAmount)));
  };

  // --- Derived State Calculation ---

  // Update Loan Amount whenever price or DP changes
  useEffect(() => {
    const price = parseCurrency(propertyPrice);
    const dp = parseCurrency(dpAmount);
    setLoanAmount(price - dp);
  }, [propertyPrice, dpAmount]);

  // --- Main Calculation Function ---

  const handleCalculate = () => {
    const termsInYears = [5, 10, 15, 20, 25, 30];
    const principal = loanAmount;
    const annualRate = parseFloat(interestRate) || 0;
    const monthlyRate = annualRate / 100 / 12;

    const results = termsInYears.map(term => {
      const numMonths = term * 12;
      const monthlyPayment = calculatePMT(principal, monthlyRate, numMonths);
      return {
        term: term,
        amount: Math.round(monthlyPayment)
      };
    });
    
    setInstallments(results);
  };

  // Run calculation on initial load to populate the right side
  useEffect(() => {
    handleCalculate();
  }, []); // Empty dependency array means this runs once on mount

  // --- New component for the description text ---
  const KprDescription = () => (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden mt-8">
      <div className="p-6 md:p-8 text-gray-700 leading-relaxed">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Kalkulator KPR: Simulasi Kredit Pemilikan Rumah
        </h2>
        
        <hr className="my-6" />

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Pengertian Simulasi KPR
        </h3>
        <p className="mb-4">
          Memiliki properti merupakan impian bagi banyak orang. Selain menjadi kebutuhan utama, harga yang semakin tinggi tiap tahunnya juga menjadi alasan rumah sangat diminati. Dalam pembelian properti, proses pembayaran menjadi faktor penting ketika ingin membeli sebuah rumah. Para calon pembeli biasanya akan mencari proses pembayaran yang termudah dan termurah seperti sistem Kredit Pemilikan Rumah (KPR).
        </p>
        <p className="mb-4">
          Kredit Pemilikan Rumah atau KPR adalah kredit untuk kepemilikan rumah tinggal berupa rumah dengan agunan yang diberikan oleh pihak bank kepada debitur perorangan dengan terdapat jumlah maksimum dari suatu pinjaman berdasarkan nilai agunan.
        </p>
        <p className="mb-6">
          Sistem KPR juga dipahami sebagai salah satu cara untuk bisa membeli rumah dengan tunai bertahap atau mencicil sebuah rumah dengan jangka waktu dan bunga tertentu. Dalam prosesnya, sistem KPR bisa diajukan pihak debitur kepada lembaga keuangan seperti bank.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Syarat KPR
        </h3>
        <p className="mb-4">
          Dalam mengajukan KPR, terdapat beberapa persyaratan yang harus Anda penuhi. Seseorang yang mengajukan KPR harus merupakan Warga Negara Indonesia dengan usia minimal 21 tahun. Selain itu, seseorang yang mengajukan KPR wajib memiliki penghasilan atau pekerjaan tetap.
        </p>
        <p className="mb-4">
          Selain persyaratan diatas, terdapat juga persyaratan administrasi yang harus dilengkapi. Diantaranya adalah sebagai berikut:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Fotokopi KTP, Kartu Keluarga (KK), akta nikah atau surat keterangan cerai</li>
          <li>Surat keterangan WNI (untuk WNI keturunan)</li>
          <li>Fotokopi NPWP (Nomor Pokok Wajib Pajak)</li>
          <li>Fotokopi kartu kredit beserta tagihan selama 1 bulan terakhir</li>
          <li>Dokumen kepemilikan bangunan (SHM, IMB, PBB)</li>
          <li>Slip gaji dan surat keterangan dari tempat bekerja</li>
          <li>Buku rekening tabungan yang menampilkan kondisi keuangan selama 3 bulan terakhir</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Jenis-jenis KPR
        </h3>
        <p className="mb-4">
          Terdapat beberapa jenis KPR yang dapat menjadi pertimbangan Anda sebelum mengajukan KPR kepada pihak Bank. Berikut penjelasan mengenai jenis-jenis KPR.
        </p>
        <h4 className="text-lg font-semibold text-gray-800 mb-2">
          1. KPR Non-subsidi / KPR Konvensional
        </h4>
        <p className="mb-4">
          KPR Non-Subsidi atau yang biasa dikenal sebagai KPR Konvensional merupakan jenis kredit rumah yang ditawarkan oleh bank konvensional dan tanpa campur tangan pemerintah. Biaya kredit serta suku bunga yang ditetapkan oleh pihak bank merupakan hasil dari kebijakan bank yang bersangkutan. Jika Anda ingin mengajukan KPR Non-Subsidi, Anda bisa mengajukannya di berbagai bank konvensional, seperti Mandiri, BNI, BCA dan masih banyak laga.
        </p>
        <p className="mb-4">
          Dalam pengajuan KPR Non-Subsidi, suku bunga serta tenor yang diberikan berbeda setiap bank nya. Umumnya bank memberikan tenor dalam jangka waktu 20-30 tahun. Maka dari itu, sebelum mengajukan KPR Non-Subsidi, Anda harus membandingkan antar bank untuk menentukan suku bunga terkecil dengan tenor yang sesuai.
        </p>
        <h4 className="text-lg font-semibold text-gray-800 mb-2">
          2. KPR Bersubsidi
        </h4>
        <p className="mb-4">
          Jenis KPR selanjutnya adalah KPR Subsidi. KPR Subsidi merupakan program pemerintah berupa kredit rumah yang ditujukkan kepada masyarakat, khususnya masyarakat menengah kebawah. Program ini bertujuan untuk membantu memenuhi kebutuhan tempat tinggal.
        </p>
        <p className="mb-4">
          Bentuk subsidi yang diberikan oleh pemerintah adalah berupa pengurangan uang muka serta suku bunga untuk cicilan berikutnya. Pada umumnya, KPR Subsidi bisa dimanfaatkan untuk rumah tipe 36 dengan harga dibawah dari Rp 300 juta-an. Dalam penerapannya, KPR Subsidi diatur oleh pemerintah, sehingga tidak seluruh masyarakat dapat mengajukannya.
        </p>
        <h4 className="text-lg font-semibold text-gray-800 mb-2">
          3. KPR Syariah
        </h4>
        <p className="mb-6">
          KPR Syariah merupakan jenis Kredit Pemilikan Rumah yang menerapkan prinsip-prinsip syariah. Dalam penerapannya tidak ditemukan sistem suku bunga, melainkan bagi hasil atau disebut nisbah. Jika Anda tertarik dengan sistem KPR Syariah, terdapat bank syariah yang menyediakan KPR Syariah, seperti BNI Syariah, BRI Syariah, BCA Syariah, dan lainnya.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Simulasi KPR Menggunakan Kalkulator KPR
        </h3>
        <p className="mb-4">
          Simulasi hitungan KPR menggunakan kalkulator KPR Urbanlink akan membantu Anda untuk mengetahuin perkiraan cicilan perbulannya. Melalui penghitungan Kalkulator KPR, Anda akan mengetahui bahwa harga rumah yang harus Anda bayar dengan sistem KPR akan lebih besar jika dibandingkan pembelian secara cash atau tunai.
        </p>
        <p className="mb-4">
          Selain memperkirakan besaran cicilan setiap bulannya, Kalkulator KPR juga membantu Anda untuk mencari kombinasi yang tepat antara besaran bunga dengan jangka waktu cicilan. Hal ini bertujuan agar biaya kredit bisa sesuai dengan kemampuan Anda
        </p>
        <p className="mb-4">
          Dalam memilih sistem kredit, usahakan bahwa jumlah cicilan perbulannya tidak lebih besar dari sekitar 30% penghasilan bulanan Anda. Untuk mengetahui jumlah cicilan, Anda dapat menggunakan Kalkulator KPR ini dengan mengisi data berikut:
        </p>
        <ul className="list-decimal list-inside mb-4 space-y-2">
          <li><strong>Harga Properti</strong> adalah besaran harga properti yang akan Anda beli dengan sistem KPR.</li>
          <li><strong>Down Payment (DP)</strong> adalah uang muka yang dibayarkan secara tunai ketika membeli rumah. Jika DP sudah dibayarkan di awal, maka tugas Anda adalah membayar sisa dari harga rumah.</li>
          <li><strong>Jangka Waktu</strong> dapat diisi dengan durasi waktu cicilan. Biasanya maksimal jangka waktu cicilan hingga 20-30 tahun, namun hal ini dikembalikan dengan aturan masing-masing bank.</li>
          <li><strong>Bunga</strong> dapat diisi dengan besaran suku bunga KPR. Biasanya, dalam sistem pengajuan KPR, besaran bunga KPR berkisar pada angka 7% hingga 12%.</li>
        </ul>
        <p className="mb-6">
          Misalnya, Anda berniat membeli rumah seharga Rp 300 juta dengan bunga efektif 12% per tahun. Jika Anda mengambil KPR dalam jangka waktu 15 tahun dengan DP 15%, Anda harus menyicil pinjaman pokok ditambah bunga sekitar Rp 3.060.429 per bulan.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Bagaimana Cara Beli Rumah KPR di Urbanlink?
        </h3>
        <p className="mb-4">
          Berminat untuk beli rumah dengan sistem KPR di Urbanlink? Caranya sangat mudah, Anda hanya perlu klik Tombol Whatsapp atau hubungi langsung Customer Supportr di nomor 0895-0444-4213. Nantinya, Anda akan dibantu untuk menemukan rumah yang Anda minati.
        </p>
        <p className="mb-4">
          Untuk memilih unit hunian, Anda bisa membaca informasi seputar unit di halaman Urbanlink. Cukup ketikan nama cluster atau nama kawasan di kolom pencarian halaman utama. Setelah itu, Anda bisa menemukan referensi rumah berkualitas yang sesuai dengan kebutuhan.
        </p>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-8 font-sans">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          
          {/* --- Left Side: Inputs --- */}
          <div className="w-full md:w-3/5 p-6 md:p-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              Kalkulator KPR
            </h1>
            
            <form onSubmit={(e) => { e.preventDefault(); handleCalculate(); }}>
              {/* Harga Properti */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Harga Properti
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    Rp.
                  </span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={propertyPrice}
                    onChange={handlePropertyPriceChange}
                    className="w-full pl-10 pr-4 py-2 border rounded-md text-gray-700 text-right focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Down Payment (DP) */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Down Payment (DP)
                </label>
                <div className="flex space-x-2">
                  <div className="relative w-3/5">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      Rp.
                    </span>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={dpAmount}
                      onChange={handleDpAmountChange}
                      className="w-full pl-10 pr-4 py-2 border rounded-md text-gray-700 text-right focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                  <div className="relative w-2/5">
                    <input
                      type="text"
                      inputMode="numeric"
                      value={dpPercent}
                      onChange={handleDpPercentChange}
                      className="w-full pl-4 pr-8 py-2 border rounded-md text-gray-700 text-right focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
                      %
                    </span>
                  </div>
                </div>
              </div>

              {/* Jumlah Kredit */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Jumlah Kredit
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    Rp.
                  </span>
                  <input
                    type="text"
                    value={formatCurrency(loanAmount)}
                    readOnly
                    className="w-full pl-10 pr-4 py-2 border rounded-md text-gray-700 text-right bg-gray-100"
                  />
                </div>
              </div>

              {/* Jangka Waktu & Bunga */}
              <div className="flex space-x-2 mb-6">
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Jangka Waktu
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      inputMode="numeric"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(e.target.value.replace(/\D/g, ''))}
                      className="w-full pl-4 pr-14 py-2 border rounded-md text-gray-700 text-right focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
                      tahun
                    </span>
                  </div>
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Bunga
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      inputMode="numeric"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                      className="w-full pl-4 pr-8 py-2 border rounded-md text-gray-700 text-right focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
                      %
                    </span>
                  </div>
                </div>
              </div>

              {/* Tombol Hitung */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Hitung Angsuran
              </button>
            </form>
          </div>
          
          {/* --- Right Side: Outputs --- */}
          <div className="w-full md:w-2/5 bg-gray-50 p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-5">
              Angsuran KPR
            </h2>
            <div className="space-y-2">
              {installments.length > 0 ? (
                installments.map((item) => (
                  <div
                    key={item.term}
                    className={`flex justify-between items-center p-3 rounded-lg ${
                      item.term == loanTerm ? 'bg-blue-100 border border-blue-300' : 'bg-white'
                    }`}
                  >
                    <span className={`font-medium ${
                      item.term == loanTerm ? 'text-blue-700' : 'text-gray-600'
                    }`}>
                      {item.term} tahun
                    </span>
                    <span className={`font-bold ${
                      item.term == loanTerm ? 'text-blue-700' : 'text-gray-800'
                    }`}>
                      Rp. {formatCurrency(item.amount)}/bln
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">
                  Masukkan data untuk melihat hasil.
                </p>
              )}
            </div>
            
            <p className="text-xs text-gray-500 mt-6"><i>
              *Hasil dari perhitungan simulasi KPR ini hanya merupakan perkiraan saja. Untuk perhitungan tepatnya, pihak bank akan memberikan ilustrasi angsuran Anda.
            </i></p>
          </div>
        </div>
      </div>
      
      {/* --- Added Description Section --- */}
      <KprDescription />

    </div>
  );
};

export default KprCalculator;