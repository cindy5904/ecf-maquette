


function Header() {
    return(
        <div className="header">
            <div className="title">
                <h1>
                    <span className="block">Découvrez notre </span>
                    <span className="block skew">menu.</span>
                </h1>
               
            </div>
            <div className="nav">

                <ul className="link">
                    <li className="lio">
                        <a href="#" className="bg hoo">Tout</a>
                    </li>
                    <li>
                        <a className="hoo" href="#">Viandes</a>
                    </li>
                    <li>
                        <a className="hoo" href="#">Légumes</a>
                    </li>
                </ul>
                
            </div>
        </div>
    )
}

export default Header;