const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
        <main>
            <h1>HOME</h1>
            <div>
                <img src="/images/tacos.jpg" alt="Tacos Al Pastor" width="500"/>
                <div>
                    Photo by <a href="https://unsplash.com/@jarritos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jarritos Mexican Soda</a> on <a href="https://unsplash.com/photos/lmfEWru4V7A?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
            </div>
            <a href="/places">
                <button className="btn-primary">Places Page</button>
            </a>
        </main>
        </Def>
    )
}
  

module.exports = home
