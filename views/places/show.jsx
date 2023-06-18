const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">
          No comments yet!
        </h3>
    )
    let rating = (
        <h3 className="inactive">
          Not rated yet
        </h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
          }, 0)
          let averageRating = sumRatings / data.place.comments.length
          rating = (
            <h3>
              {Math.round(averageRating)} stars
            </h3>
          )
        comments = data.place.comments.map(c => {
        return (
            <div className="border">
              <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h2>
              <h4>{c.content}</h4>
              <h3>
                <stong>- {c.author}</stong>
              </h3>
              <h4>Rating: {c.stars}</h4>
            </div>
        )
        })
    }
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
            <img src={data.place.pic} alt={data.place.name} />
            <h2>Rating</h2>
            {rating}
            <h2>Description</h2>
            <p>{data.place.showEstablished()}</p>
            <h2>Comments</h2>
            <div className="row">
              {comments}
            </div>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                Edit
            </a>     
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
            </form> 
            <form method="POST" action={`/places/${data.place.id}/comment`}>
                <div className="form-group col-sm-12">
                    <label htmlFor="author">Author</label>
                    <input id="author" name="author"/>
                </div>
                <div className="row">
                    <div className="form-group col-sm-4">
                        <label htmlFor="content">Content</label>
                        <textarea id="content" name="content"></textarea>
                    </div>
                    <div className="form-group col-sm-4">
                        <label htmlFor="stars">Star Rating</label>
                        <input type="range" step="0.5" min="1" max="5" id="stars" name="stars"/>
                    </div>
                    <div className="form-group col-sm-2">
                        <input type="checkbox" id="rant" name="rant"/>
                        <label htmlFor="rant">Rant?</label>
                    </div>
                </div>
                <input className="btn btn-primary" type="submit" value="Add Comment" />
            </form> 
          </main>
        </Def>
    )
}

module.exports = show