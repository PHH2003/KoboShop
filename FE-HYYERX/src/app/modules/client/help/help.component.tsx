
import { Link } from 'react-router-dom';
import ContactComponent from './components/contact/contact.component';
import FormComponent from './components/form/form.component';
import LinkContact from './components/link-contact/link-contact.component';

const Help = () => {
  return (
    <div className='w-[1140px] m-auto'>
      <LinkContact/>
      <h2 className="font-semibold text-[#BF0000] text-2xl mt-4">Contact</h2>
      <div className='flex justify-between py-4'>
        <div className='w-[45%]'>
        <ContactComponent/>
      </div>
      {/* <div className='border-gray-800 w-[1%]'></div> */}
      <div className='w-[50%] border-l-[1px]'>
        <FormComponent/>
      </div>
      </div>
      
      
    </div>
  )
}

export default Help;