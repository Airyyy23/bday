import background from '../../image/background.png'

const popup = ({ isOpen, onClose }) => {

  if (!isOpen ) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className='absolute inset-0 backdrop-blur-sm bg-opacity-50' onClick={onClose} />
      <div className='relative bg-zinc-900 rounded-lg shadow-xl max-w-5xl max-h-[80vh] overflow-y-auto z-10 custom-scrollbar scroll-smooth'>
        <img src={background} alt="image" className='w-[2000px]'/>
        <div className='p-5'>
          <h1>title</h1>
          <p>selamat yaa, kamu hari ini hari special kamu, umur kamu sekarang bertambah 1 tahun, kamu tau ga, kamu itu kuat, kamu hebat, kamu udah sejauh ini ngejalanin hari hari kamu, mulai dari kamu masi di rahim mamim sampe kamu udah sedewasa ini, makasi yaa kamu udah mau ngejalanin hari hari kamu bareng aku walaupun aku banyak bikin masalah, tetep sama aku ya? kalo ga sama kamu rasanya itu kurang soalnya wkwk, kamu seneng ngga pas hari special kamu ini kita masih bareng bareng begini? aku harap pas kamu ulang tahun, semua kemauan kamu bisa terwujud satu per satu, semoga kamu panjang umur, diberi kesehatan selalu, dimudahkan segala urusan kamu, kalo hari hari kamu ada masalah tetep semangat ya aku ada disini selalu buat kamu, i love u so much.</p>
        </div>
      </div>
    </div>
  )
}

export default popup