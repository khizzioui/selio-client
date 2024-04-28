

export default function ListCard(){
    return (
        <>
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
                          <div className="card_bod_full">
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
                            <div className="card-footer">
                              <div className="crd-links">
                                <a href="#" className="pull-left">
                                  <i className="la la-heart-o" />
                                </a>
                                <a href="#" className="plf">
                                  <i className="la la-calendar-check-o" /> 25 Days
                                  Ago
                                </a>
                              </div>
                              {/*crd-links end*/}
                              <a href="#" title="" className="btn btn-default">
                                View Details
                              </a>
                            </div>
                          </div>
                          {/*card_bod_full end*/}
                          <a
                            href="24_Property_Single.html"
                            title=""
                            className="ext-link"
                          />
                        </div>
        </>
    )
}