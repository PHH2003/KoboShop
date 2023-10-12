import ButtonComponent from "~/app/components/parts/button/button.component"

const FormComponent = () => {
  return (
    <div className="ml-11">
        <h2 className="font-semibold font-mono">Please make sure to provide correct email so that we can contact you for support.</h2>
        <div className="my-3">
            <p className="flex">Your Name <p className="text-red-600 ml-2">*</p></p>
            <input type="text" className="mt-2 w-60 border border-gray-400 rounded text-lg" />
        </div>
        <div className="my-3">
            <p className="flex">Your Email <p className="text-red-600 ml-2">*</p></p>
            <input type="text" className="mt-2 w-60 border border-gray-400 rounded text-lg" />
        </div>
        <div>
            <p className="flex">Your Message, Question, Comment, or Testimonial <p className="text-red-600 ml-2">*</p></p>
            <textarea  className="mt-2 w-[450px] h-[200px] border border-gray-400 rounded text-lg  text-start" />
        </div>
        <div className="my-3">
        <ButtonComponent handleColor title={"Submit"} className="rounded hover:bg-[#595959] mt-3 w-[100px]"/>
        <a href="#" className="ml-4 underline font-semibold">Cancel</a>
        </div>
    </div>
  )
}

export default FormComponent