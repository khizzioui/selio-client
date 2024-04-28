

export default function GridCard(){
    return (
        <>
        <div className="col-lg-4 col-md-4">
            <div className="card">
                <a href="24_Property_Single.html" title="">
                <div className="img-block">
                    <div className="overlay" />
                    <img
                    src="https://via.placeholder.com/370x295"
                    alt=""
                    className="img-fluid"
                    />
                    <div className="rate-info">
                    <h5>$550.000</h5>
                    <span>For Rent</span>
                    </div>
                </div>
                </a>
                <div className="card-body">
                <a href="24_Property_Single.html" title="">
                    <h3>Traditional Apartments</h3>
                    <p>
                    <i className="la la-map-marker" />
                    212 5th Ave, New York
                    </p>
                </a>
                <ul>
                    <li>3 Bathrooms</li>
                    <li>2 Beds</li>
                    <li>Area 555 Sq Ft</li>
                </ul>
                </div>
                <a
                href="24_Property_Single.html"
                title=""
                className="ext-link"
                />
            </div>
        </div>
        </>
    )
}