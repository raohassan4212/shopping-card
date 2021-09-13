var Carousel = require('react-responsive-carousel').Carousel;

const ImageCarosel = ({ images }) => {
    return (
        <div className='main-carosel'>
            <Carousel showArrows={true} >
                {
                    images.map((v, i) => {
                        return (
                            <div key={i} className="carosel-img-width">
                                <img className="i-carosel" src={v} />
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default ImageCarosel;

