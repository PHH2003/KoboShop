import { css } from "@emotion/react"
import StarComponent from "~/app/components/parts/star/star.component"


const InfoDetail = () => {
    return (
        <div css={cssDetail} className="flex justify-between">
            <div className="w-[246px]">
                <div>
                    <img src="https://th.bing.com/th/id/OIP.nVRzDIJP6TFqhcO0Hf-3RgHaJr?pid=ImgDet&rs=1" alt="" className="w-[246px] h-[376px]" />
                </div>
                <div className="flex items-center py-5 justify-center">
                    <StarComponent />
                    <StarComponent />
                    <StarComponent />
                    <StarComponent />
                    <StarComponent />
                    (5)
                </div>
                <div>
                    <p className="text-[0.9rem]">#28 in <a href="#">Fiction & Literature</a>, <a href="#">Thrillers</a></p>
                    <p className="text-[0.9rem]">#34 in <a href="#">Fiction & Literature</a>, <a href="#">Thrillers</a></p>
                    <p className="text-[0.9rem]">#74 in <a href="#">Fiction & Literature</a>, <a href="#">Thrillers</a></p>
                </div>
            </div>
            <div className="px-6 w-[633px]">
                <h2>Her Hidden Shadow</h2>
                <span className="title">A completely nail-biting and gripping crime thriller</span>
                <p className="mt-4">by <a href="#">Carla Kovach</a></p>

                <div className="flex mt-6">
                    <div className="title-price border border-[#bbb]">
                        <span>Audiobook</span>
                        <div> $0.00</div>
                    </div>
                    <div className="px-5">
                        <div className="title-price border border-red-600 bg-red-200">
                            <span>eBook</span>
                            <div> $14.79</div>
                        </div>
                    </div>

                </div>
                <p className="my-4">Free with Trial</p>
                <hr className="my-4"/>

                <h2 className="title-name">Synopsis</h2>
                <span>
                    'A gutsy heroine. A ticking clock. A breathless pace. Wow! This one had me reeling' JANE CORRY

                    'Compelling' Crime Monthly

                    **_____________________

                    Her name is Jane Smith. But to friends and foes, she's Jane Effing Smith.**

                    Why? Because she's the best criminal defence attorney in the Hamptons - the elite world of New York's rich and infamous. Because she's as good an investigator as she is a lawyer. Because she's tough. She's strong.

                    As Jane is preparing to defend a high-profile client accused of a triple homicide, she's also hired to revive a cold case - a cluster of unsolved murders.

                    Then another bombshell lands. A devastating medical diagnosis. Terminal. She's got a year to live.

                    But for now, she has a trial to win. Unless one of her many enemies kills her first.

                    **____________________________

                    Readers are loving 12 Months to Live!

                    'You are going to love Jane Smith! She is a fantastic new character from one of my favourite authors'
                    'Wow what a book! I could not put it down'
                    'A fast, easy to read, enjoyable and entertaining read'

                    ________________________________

                    PRAISE FOR JAMES PATTERSON**
                </span>
            </div>
        </div>
    )
}

export default InfoDetail


const cssDetail = css`
a{
    text-decoration:underline;
    font-weight:600;
}
.title-name{
    font-size: 1rem;
}
h2{
    font-family: "Trebuchet MS",Trebuchet,Arial,Helvetica,sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: #000;
}
.title{
    font-family: "Trebuchet MS",Trebuchet,Arial,Helvetica,sans-serif;
    font-size: 1.2rem;
    color: #595959;
    display: inline-block;
}
.title-price{
    text-align:center;
    width: 120px;
    padding: 0.3rem 0.3rem 0.5rem 0.5rem;
    // border: 1px solid #bbb;
}
`