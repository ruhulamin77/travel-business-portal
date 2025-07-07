import { FaPersonHiking } from 'react-icons/fa6';
import { FaGlobeAmericas } from 'react-icons/fa';
import { FaCalendarCheck } from 'react-icons/fa6';
import Image from 'next/image';
export default function ValueProps() {
  const values = [
    {
      id: 1,
      title: 'Lots Of Choices',
      desc: 'Choose your destination with a variety of options.',
      icon: <FaGlobeAmericas size={40} />,
    },
    {
      id: 2,
      title: 'Best Tour Guide',
      desc: 'Guided by professional and experienced guides.',
      icon: <FaPersonHiking size={40} />,
    },
    {
      id: 3,
      title: 'Easy Booking',
      desc: 'Book with just a few clicks.',
      icon: <FaCalendarCheck size={40} />,
    },
  ];

  return (
    <section className="py-12 bg-gray-50 container">
      <div className=" mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-8">
          Top Value From Us For You
        </h3>
        <div className="grid md:grid-cols-3 gap-6 auto-rows-fr">
          {values.map((v) => (
            <div
              key={v.id}
              className="flex flex-col flex-1 justify-between p-6 bg-white rounded shadow space-y-3"
            >
              <div>
                <div className="flex justify-center items-center mb-4">
                  <span className="border p-4 rounded">{v.icon}</span>
                </div>
                <h4 className="text-xl font-bold mb-2 text-center">
                  {v.title}
                </h4>
                <p className="text-gray-500 max-w-52 text-center mx-auto">
                  {v.desc}
                </p>
              </div>
              <button className="text-center text-rose-500 font-semibold mt-auto">
                Read more
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
