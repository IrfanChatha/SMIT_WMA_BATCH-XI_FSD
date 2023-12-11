import DoctorMain from "../assets/img/doctor_main.jpg"
import Image from 'next/image'

function HomePage() {

  return (
<div className="bg-gradient-to-tr from-blue-800 to-purple-400 relative h-screen w-screen">
      <Image className="absolute inset-0 w-full h-full object-cover mix-blend-multiply filter brightness-50"
        alt="main background image" src={DoctorMain}/>
      <div className="absolute inset-0 flex flex-col justify-center items-center w-10/12 mx-auto text-center">
          <div className="space-y-8">
          <h1 className="font-extrabold text-green-400 sm:text-4xl md:text-5xl md:leading-tight">Doctors Appointment System</h1>
          <h2 className="font-primary text-palette-light text-base md:text-lg lg:text-xl">Effortless Scheduling: Book Your Doctor Appointments with Our User-Friendly Patient Appointment System - Quick, Simple, and Convenient!</h2>
      <div className="flex justify-center space-x-4">
      <button className="rounded-full bg-blue-800 text-white py-2 px-6 hover:bg-gray-900 hover:border-red-500 hover:text-green-500 border-2 border-red-500 transition duration-300 font-bold">
        Doctor Login
      </button>
      <button className="rounded-full bg-blue-800 text-white py-2 px-6 hover:bg-gray-900 hover:border-red-500 hover:text-green-500 border-2 border-red-500 transition duration-300 font-bold">
        Book Appointment
      </button>
      </div>
   </div>
 </div>
</div>
  )
}

export default HomePage