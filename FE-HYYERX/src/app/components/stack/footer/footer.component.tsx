import { css } from "@emotion/react"

const Footer = () => {
    return (
        <div css={cssFooter}>
            <div className=" w-[1140px] m-auto font-semibold">
                <div className="flex justify-between ">
                    <div>
                        <h2>All about Rakuten Kobo</h2>
                        <p>About Rakuten Kobo</p>
                        <p>Management Team</p>
                        <p>Kobo in Conversation Podcast</p>
                        <p>eRecycling Program</p>
                        <p>Free Apps</p>
                        <p>Buy eGift Cards</p>
                        <p>Get Help</p>
                        <p>Sitemap</p>
                    </div>

                    <div>
                        <h2>Opportunities</h2>
                        <p>Self Publish</p>
                        <p>Affiliates</p>
                        <p>Job Openings</p>
                    </div>

                    <div>
                        <h2>Latest Blog Posts</h2>
                        <p>Get warm for these forms: the best shapeshifte...</p>
                        <p>56 new eBooks and audiobooks coming out Septem...</p>
                        <p>Get into the Grishaverse: a beginner's guide t...</p>
                        <p>Zalika Reid-Benta on becoming the "weird write...</p>
                        <p>58 new eBooks and audiobooks coming out Septem...</p>
                        <button>View all posts</button>
                    </div>

                    <div>
                        <h2>Stay Connected</h2>
                        <div className="flex pb-2">
                            <div>
                                <img src="https://static.kobo.com/1.0.1.3568/Images/social/Facebook.png" alt="" />
                            </div>
                            <div className="px-6">
                                <p>Facebook</p>
                            </div>
                        </div>

                        <div className="flex pb-2">
                            <div>
                                <img src="https://static.kobo.com/1.0.1.3568/Images/social/Twitter.png" alt="" />
                            </div>
                            <div className="px-6 ">
                                <p>Twitter</p>
                            </div>
                        </div>


                        <div className="flex pb-2">
                            <div>
                                <img src="https://static.kobo.com/1.0.1.3568/Images/social/Pinterest.png" alt="" />
                            </div>
                            <div className="px-6 ">
                                <p>Pinterest</p>
                            </div>
                        </div>


                        <div className="flex pb-2">
                            <div>
                                <img src="https://static.kobo.com/1.0.1.3568/Images/social/YouTube.png" alt="" />
                            </div>
                            <div className="px-6 ">
                                <p>YouTube</p>
                            </div>
                        </div>


                        <div className="flex pb-2">
                            <div>
                                <img src="https://static.kobo.com/1.0.1.3568/Images/social/Instagram.png" alt="" />
                            </div>
                            <div className="px-6 ">
                                <p>Instagram</p>
                            </div>
                        </div>

                    </div>


                    <div>
                        <h2>Get the Free App</h2>
                        <div>
                            <img src="https://static.kobo.com/1.0.1.3568/Images/appstore/googleplay_badge_en.svg" alt="" />
                        </div>
                        <div className="px-3">
                            <img src="https://static.kobo.com/1.0.1.3568/Images/appstore/appstore_badge_en.svg" alt="" />
                        </div>
                    </div>
                </div>
                <hr className=" mt-8" />
                <div className="flex justify-center mt-4 mb-4">
                    <div>
                        <p>Accepted Payment Methods:</p>
                    </div>
                    <div className="flex items-center">
                        <div className="px-3">
                            <img src="https://static.kobo.com/1.0.1.3568/Images/payment-methods/Visa.png" alt="" />
                        </div>

                        <div className="px-3">
                            <img src="https://static.kobo.com/1.0.1.3568/Images/payment-methods/MasterCard.png" alt="" />
                        </div>

                        <div className="px-3">
                            <img src="https://static.kobo.com/1.0.1.3568/Images/payment-methods/PayPal.png" alt="" />
                        </div>

                        <div className="px-3">
                            <img src="	https://static.kobo.com/1.0.1.3568/Images/payment-methods/Kobo.png" alt="" />
                        </div>
                    </div>
                </div>
                <hr />

                <div className="flex justify-between py-8">
                    <div>
                        <p>Now Shopping: Worldwide Kobo store Worldwide (USD) Change country</p>
                    </div>
                    <div>
                        <p>© 2023 Rakuten Kobo Inc. Terms of Use Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

const cssFooter = css`
margin-top:55px;
background-color: #595959;
h2{
    margin-top:15px;
    font-family: "Trebuchet MS",Trebuchet,Arial,Helvetica,sans-serif;
    font-size: 1.1rem;
    font-style: normal;
    color: #fff;
    padding: 0 7px 0 0;
    font-weight: 700;
    margin-bottom: 15px;
}
p{
    padding:5px 0;
    font-family: "Trebuchet MS",Trebuchet,Arial,Helvetica,sans-serif;
    font-size: 0.9rem;
    color: #fff;
}
button{
    text-decoration: none;
    display: inline-block;
    border: 1px solid #fff;
    padding: 0.2rem;
    color: #fff;
}
button:hover{
    background:#fff;
    color: #595959;
}
`