import { css } from "@emotion/react"

const Blog = () => {
  return (
    <div css={cssBlog}>
        <div className="flex w-[1140px] m-auto pt-7">
            <div className="w-[458px] h-[688px] my-28">
                <div className="flex">
                    <p className="text-red-600">|</p>
                    <a href="#" className="ml-2 font-semibold pt-[2px]">Recommended Reading</a>
                </div>
                <div className="mr-4 mt-7 text-[#595959]">
                    <h1 className="font-serif text-5xl leading-tight">Get warm for these forms: the best shapesshifter romance novels</h1>

                    <p className="mt-7 mb-7 ">Margo Bond Collins, author of The Moonstone Pack trilogy, explains what she loves about shifter romances—and recommends some of her favourites.</p>
                </div>
                    <a href="#" className="text-[#BF0010] underline font-semibold">READ MORE</a>
            </div>
            <img src="https://news.objects.frb.io/transforms/blogimagesfb/1030489/marek-szturc-n3qWOO_WO3E-unsplash_b39201f4d348eaa20f9504953d804c25.jpg" className="w-[682px] h-[688px]" alt="" />
        </div>
       

         {/*  */}

        <div>

        </div>
    </div>
  )
}

export default Blog

const cssBlog = css`

`