import Image from 'next/image'
import Header from '../componets/Header'
import Cover from '../componets/home/Cover'
import UpcomingEvents from '../componets/home/UpcomingEvents'
import Blog from '../componets/home/Blog'
import Footer from '../componets/Footer'
import Category from '../componets/home/Category'
import GetStart from '../componets/common/GetStart'

export default function Home() {
  return (
    <div>
      <Cover />
      <main className='w-[95%] lg:w-[950px] mx-auto'>
        <Category/>
        <UpcomingEvents />
        <UpcomingEvents />
        <Blog />
       <GetStart/>
      </main>
    </div>
  )
}
