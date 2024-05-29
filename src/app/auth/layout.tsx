import Background from "@/../public/images/Mask-group.png"
import Image from 'next/image'
import Logo from "@/../public/images/logowithbrans.svg"
type Props = {
    children:React.ReactNode
}
const layout = ({children}:Props) => {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-center h-screen w-screen bg-[#F8F5F3]'>
            <Image src={Logo} className='lg:hidden' alt='' />
            <div className="w-[90%] mt-[54px] lg:mt-0 lg:w-[954.31px] p-3 lg:p-2 lg:h-[631.87px] flex bg-white rounded-[20px] border border-pink-200" >
                <div className='flex-1 hidden lg:block w-full h-full rounded-xl overflow-hidden'>
                    <Image className='w-full h-full object-cover' src={Background} alt='' />
                </div>
                <div className='flex-1 flex justify-center items-center'>
                   {children}
                </div>
            </div>
        </div>
    )
}

export default layout