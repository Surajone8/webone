import React from 'react'

const CommentCard = (props) => {
    const CommentData = props.CommentData;
    // console.log(CommentData);
    return (
        <>
            <div className="Card-cont">
                <p className='Card-line1'>{CommentData.desc}</p>
                <hr className='cardhr' />
                <div className="card-bottom">
                    <img src={CommentData.imgUrl} alt="" />
                    <span>
                        <h6>{CommentData.name}</h6>
                        <p className='Card-post'>{CommentData.post}</p>
                    </span>
                </div>
            </div>
        </>
    )
}

export default CommentCard