import '../SCSS/Components/Card.scss'

function ImageCard({ src, text }) {
    return (
        <div className='image-card'>
            <div className='image-card-div'>
                <div className='image-card-div-group'>
                    <p>Hello World!</p>
                </div>
                
                <div className='image-card-div-circle'></div>
            
                <p className='image-card-text'>{text}</p>
                <img src={src}></img>       
            </div>
        </div>
    )
}

export default ImageCard;