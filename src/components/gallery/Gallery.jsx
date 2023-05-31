import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';

export const Gallery = () => {
    const items1 = [
        {
            source: 'https://mdbootstrap.com/img/new/slides/041.jpg',
            itemId: 1,
        },
        {
            source: 'https://mdbootstrap.com/img/new/slides/042.jpg',
            itemId: 2,
        },
    ];

    return (
        <>
            <div className="d-flex justify-content-center">The Girls</div>
            <MDBCarousel showControls fade dealy={2000}>
                {items1.map((item) => {
                    return (
                        <MDBCarouselItem
                            className='w-100 d-block'
                            itemId={item.itemId}
                            src={item.source}
                            alt='...'
                        />
                    )
                })}
            </MDBCarousel>
        </>
    );
}