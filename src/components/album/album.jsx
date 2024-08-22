import img1 from '../../image/birth/img1.jpg';
import img2 from '../../image/birth/img2.jpg';
import img3 from '../../image/birth/img3.jpg';
import img4 from '../../image/birth/img4.jpg';
import img5 from '../../image/birth/img5.jpg';
import img6 from '../../image/birth/img6.jpg';
import img7 from '../../image/birth/img7.jpg';
import img8 from '../../image/birth/img8.jpg';
import img9 from '../../image/birth/img9.jpg';
import img10 from '../../image/birth/img10.jpg';
import img11 from '../../image/birth/img11.jpg';
import img12 from '../../image/birth/img12.jpg';
import img13 from '../../image/birth/img13.jpg';
import img14 from '../../image/birth/img14.jpg';
import img15 from '../../image/birth/img15.jpg';
import img16 from '../../image/birth/img16.jpg';

const imgAlbum = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16
];

const Album = () => {
  return (
    <div className='py-10 px-5'>
      <h1 className='text-xl font-semibold'>How Beuatiful she&apos;s</h1>
      <div className=" album flex overflow-x-auto space-x-4 scroll-smooth mt-5">
        {
          imgAlbum.map((i, index) => (
            <div key={index} className="w-40 h-60 flex-shrink-0">
              <img src={i} alt={`image ${index}`} className="w-full h-full object-cover rounded-md" />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Album;
