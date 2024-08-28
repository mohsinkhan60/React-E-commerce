import { socials } from '../constant'
import Section from './Section'

export const Footer = () => {
  return (
    <Section id="Footer" crosses className="!px-0 !py-10">
      <div className='container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col'>
         <p className='caption text-n-1 lg:block text-[1.25rem]'>
         © <span className='text-[1.5rem] font-semibold'>{new Date().getFullYear()}</span> .  All rights reserved.
         </p>
         <ul className='flex gap-5 flex-wrap'>
            {socials.map((item, index) => (
               <a key={index} href='item.url' target='_blank' className='flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors
                hover:bg-n-6'>
                  <img src={item.iconUrl} alt="icon" width={20} height={20} />
               </a>
            ))}
         </ul>
      </div>
    </Section>
  )
}
export default Footer