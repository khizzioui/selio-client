"use client"
import Login from "./Models/login";
import Register from "./Models/register";
import GridCard from "./components/GridCard";
import ListCard from "./components/ListCard";
import Header from "./components/layouts/header";

export default function Home() {
  return (
    <>
      
        <title>Selio geo marckete place</title>
        <meta name="description" content="" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="shortcut icon" href="assets/images/favicon.png" />
        <link rel="stylesheet" href="assets/css/animate.min.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
        <link rel="stylesheet" type="text/css" href="assets/css/responsive.css" />
        <link rel="stylesheet" type="text/css" href="assets/css/color.css" />

    
      <div className="wrapper half_map">
        <Header></Header>
        <Login></Login>
        <Register></Register>
        <section className="half-map-sec">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-12">
                <div id="map-container" className="fullwidth-home-map">
                  <div id="map" data-map-zoom={9} />
                </div>
              </div>
              <div className="col-xl-8 col-lg-12">
                <div className="widget-property-search">
                  <form action="#" className="row banner-search">
                    <div className="form_field full">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Address, City or State"
                      />
                    </div>
                    <div className="form_field">
                      <div className="form-group">
                        <div className="drop-menu">
                          <div className="select">
                            <span>Any type</span>
                            <i className="fa fa-angle-down" />
                          </div>
                          <input type="hidden" name="gender" />
                          <ul className="dropeddown">
                            <li>For Sale</li>
                            <li>For Rent</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form_field">
                      <div className="form-group">
                        <div className="drop-menu">
                          <div className="select">
                            <span>Min Price</span>
                            <i className="fa fa-angle-down" />
                          </div>
                          <input type="hidden" name="gender" />
                          <ul className="dropeddown">
                            <li>300$</li>
                            <li>400$</li>
                            <li>500$</li>
                            <li>200$</li>
                            <li>600$</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form_field">
                      <div className="form-group">
                        <div className="drop-menu">
                          <div className="select">
                            <span>Max Price</span>
                            <i className="fa fa-angle-down" />
                          </div>
                          <input type="hidden" name="gender" />
                          <ul className="dropeddown">
                            <li>2000</li>
                            <li>3000</li>
                            <li>4000</li>
                            <li>5000</li>
                            <li>6000</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form_field">
                      <div className="form-group">
                        <div className="drop-menu">
                          <div className="select">
                            <span>Badrooms</span>
                            <i className="fa fa-angle-down" />
                          </div>
                          <input type="hidden" name="gender" />
                          <ul className="dropeddown">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="feat-srch">
                      <div className="more-feat">
                        <h3>
                          {" "}
                          <i className="la la-cog" /> Show More Features
                        </h3>
                      </div>
                      {/*more-feat end*/}
                      <div className="form_field">
                        <a href="#" className="btn btn-outline-primary ">
                          <span>Search</span>
                        </a>
                      </div>
                    </div>
                    {/*more-feat end*/}
                    <div className="features_list">
                      <ul>
                        <li className="input-field">
                          <input type="checkbox" name="bb" id="b1" />
                          <label htmlFor="b1">
                            <span />
                            <small>Parking</small>
                          </label>
                        </li>
                        <li className="input-field">
                          <input type="checkbox" name="bb" id="b2" />
                          <label htmlFor="b2">
                            <span />
                            <small>Gym</small>
                          </label>
                        </li>
                        <li className="input-field">
                          <input type="checkbox" name="bb" id="b3" />
                          <label htmlFor="b3">
                            <span />
                            <small>Washing Machine</small>
                          </label>
                        </li>
                        <li className="input-field">
                          <input type="checkbox" name="bb" id="b4" />
                          <label htmlFor="b4">
                            <span />
                            <small>Elevator</small>
                          </label>
                        </li>
                        <li className="input-field">
                          <input type="checkbox" name="bb" id="b5" />
                          <label htmlFor="b5">
                            <span />
                            <small>Storage</small>
                          </label>
                        </li>
                        <li className="input-field">
                          <input type="checkbox" name="bb" id="b6" />
                          <label htmlFor="b6">
                            <span />
                            <small>Air Conditioner</small>
                          </label>
                        </li>
                        <li className="input-field">
                          <input type="checkbox" name="bb" id="b7" />
                          <label htmlFor="b7">
                            <span />
                            <small>Wireless Internet</small>
                          </label>
                        </li>
                        <li className="input-field">
                          <input type="checkbox" name="bb" id="b8" />
                          <label htmlFor="b8">
                            <span />
                            <small>Heating</small>
                          </label>
                        </li>
                        <li className="input-field">
                          <input type="checkbox" name="bb" id="b9" />
                          <label htmlFor="b9">
                            <span />
                            <small>Swimming Pool</small>
                          </label>
                        </li>
                        <li className="input-field">
                          <input type="checkbox" name="bb" id="b10" />
                          <label htmlFor="b10">
                            <span />
                            <small>Home Theater</small>
                          </label>
                        </li>
                      </ul>
                    </div>
                    {/*features end*/}
                  </form>
                </div>
                {/*widget widget-property-searche end*/}
                <div className="listing-directs">
                  <div className="list-head">
                    <div className="sortby">
                      <span>Sort by:</span>
                      <div className="drop-menu">
                        <div className="select">
                          <span>Relevant</span>
                          <i className="la la-caret-down" />
                        </div>
                        <input type="hidden" name="gender" />
                        <ul className="dropeddown">
                          <li>For Sale</li>
                          <li>For Rent</li>
                        </ul>
                      </div>
                    </div>
                    {/*sortby end*/}
                    <div className="view-change">
                      <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="grid-tab1"
                            data-toggle="tab"
                            href="#grid-view-tab1"
                            role="tab"
                            aria-controls="grid-view-tab1"
                            aria-selected="true"
                          >
                            <i className="la la-th-large" />
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="grid-tab2"
                            data-toggle="tab"
                            href="#grid-view-tab2"
                            role="tab"
                            aria-controls="grid-view-tab2"
                            aria-selected="true"
                          >
                            <i className="la la-th-list" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/*view-change end*/}
                  </div>
                  {/*list-head end*/}
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="grid-view-tab1"
                      role="tabpanel"
                      aria-labelledby="grid-view-tab1"
                    >
                      <div className="list_products">
                        <div className="row">
                          <GridCard></GridCard>
                        </div>
                      </div>
                      {/*list_products end*/}
                    </div>
                    <div
                      className="tab-pane fade"
                      id="grid-view-tab2"
                      role="tabpanel"
                      aria-labelledby="grid-view-tab2"
                    >
                      <div className="list-products">
                        <ListCard></ListCard>
                        {/*card end*/}
                      </div>
                      {/* list-products end*/}
                    </div>
                  </div>
                  {/*tab-content end*/}
                  <nav aria-label="Page navigation example">
                    <ul className="pagination">
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">
                            <i className="la la-arrow-right" />
                          </span>
                          <span className="sr-only">Next</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                  {/*pagination end*/}
                </div>
                {/*listing-directs end*/}
              </div>
            </div>
          </div>
        </section>
        
      </div>
      
    <script src="assets/js/jquery-3.3.1.min.js"></script>
    <script src="assets/js/modernizr-3.6.0.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/html5lightbox.js"></script>
    <script src="assets/js/scripts.js"></script>

    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDVwc4veKudU0qjYrLrrQXacCkDkcy3AeQ"></script>
    <script src="assets/js/map-cluster/infobox.min.js"></script>
    <script src="assets/js/map-cluster/markerclusterer.js"></script>
    
    <script src="assets/js/map-cluster/mapc.js"></script>

    </>

  );
}
