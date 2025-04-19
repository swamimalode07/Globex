import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <section className=''>
                <div className=" container mx-auto px-5 py-10">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>Our Team</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>What our <span className=' text-blue-600'>Team</span> is saying</h2>
                    <div className="flex flex-wrap -m-4 justify-center">
  {[
    {
      name: "Swami Malode",
      role: "Full stack developer",
      image: "https://dqy38fnwh4fqs.cloudfront.net/UHOK7LP9K8MPLGOHGAEQ8M8AJMPK/hok7lp9k8mplgohgaeq8m8ajmpk-profile.webp",
    },
    {
      name: "Himanshu Patil",
      role: "Full stack developer",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvcGgShmi5rRXqPuprEW3VfCLkwbQmvvVcTw&s",
    },
    {
      name: "Tanishka Jagtap",
      role: "Backend Developer",
      image: "https://img.freepik.com/free-vector/swan-princess-concept_23-2148514104.jpg",
    },
    {
      name: "Mrunmai Girame",
      role: "Frontend Developer",
      image: "https://avatars.githubusercontent.com/u/122109270?v=4",
    },
    {
      name: "Hiteshi Patil",
      role: "Backend Developer",
      image: "https://img.freepik.com/free-vector/cute-girl-hacker-operating-laptop-cartoon-vector-icon-illustration-people-technology-isolated-flat_138676-9487.jpg",
    },
  ].map((testimonial, index) => (
    <div key={index} className="lg:w-1/3 md:w-1/2 w-full lg:mb-0 mb-6 p-4 max-w-sm">
      <div
        className="h-full text-center border rounded-2xl p-6 transition-shadow duration-300 hover:shadow-xl"
        style={{
          backgroundColor: mode === 'dark' ? '#1f2937' : '#ffffff',
          color: mode === 'dark' ? 'white' : '',
          borderColor: mode === 'dark' ? '#374151' : '#dbeafe',
        }}
      >
        <img
          alt="testimonial"
          className="w-20 h-20 mb-6 object-cover object-center rounded-full inline-block border-2"
          style={{
            borderColor: mode === 'dark' ? '#334155' : '#bfdbfe',
            backgroundColor: mode === 'dark' ? '#374151' : '#eff6ff',
          }}
          src={testimonial.image}
        />
        <p className="leading-relaxed text-sm md:text-base">
          Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki
          taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman.
        </p>
        <span
          className="inline-block h-1 w-10 rounded mt-6 mb-3"
          style={{ backgroundColor: mode === 'dark' ? '#3b82f6' : '#2563eb' }}
        />
        <h2
          className="font-semibold title-font tracking-wider text-sm uppercase"
          style={{ color: mode === 'dark' ? '#60a5fa' : '#1e3a8a' }}
        >
          {testimonial.name}
        </h2>
        <p className="text-sm" style={{ color: mode === 'dark' ? '#e5e7eb' : '#6b7280' }}>
          {testimonial.role}
        </p>
      </div>
    </div>
  ))}
</div>

                </div>
            </section>
        </div>
    )
}

export default Testimonial