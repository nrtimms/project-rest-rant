const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
            <img src={data.place.pic} alt={data.place.name} />
            <h2>Rating</h2>
            <p>not rated</p>
            <h2>Description</h2>
            <p>Located in {data.place.city}, {data.place.state}. Serving {data.place.cuisines}</p>
            <h2>Comments</h2>
            <p>no comments</p>
          </main>
        </Def>
    )
}

module.exports = show