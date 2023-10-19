const BannerComponent = () => {
    return (
        <div className="flex justify-between mb-20">
            <div className="w-[760px] h-[300px]">
                <img src="https://res.cloudinary.com/dpfndtcya/image/upload/v1697685518/banner-to_mc3r8q.png" alt="" />
            </div>

            <div className="w-[376px] h-[170px]">
                <img src="https://res.cloudinary.com/dpfndtcya/image/upload/v1697685528/banner1_rown5q.png" alt="" className="h-[169px]" />
                <img src="https://res.cloudinary.com/dpfndtcya/image/upload/v1697685536/banner2_nkllgq.png" alt="" className="pt-[5px] " />
            </div>
        </div>
    )
}

export default BannerComponent