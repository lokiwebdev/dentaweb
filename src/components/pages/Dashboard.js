import React from 'react'
// import $ from 'jquery';


const Dashboard = () => {


    return (

        <>

            {/* <!-- Right Panel --> */}
            <div id="right-panel" className="right-panel">

                {/* <!-- Content --> */}
                <div className="content">
                    {/* <!-- Animated --> */}
                    <div className="animated fadeIn">
                        {/* <!-- Widgets  --> */}
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="stat-widget-five">
                                            <div className="stat-icon dib flat-color-1">
                                                <i className="pe-7s-cash"></i>
                                            </div>
                                            <div className="stat-content">
                                                <div className="text-left dib">
                                                    <div className="stat-text">$<span className="count">23569</span></div>
                                                    <div className="stat-heading">Revenue</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="stat-widget-five">
                                            <div className="stat-icon dib flat-color-2">
                                                <i className="pe-7s-cart"></i>
                                            </div>
                                            <div className="stat-content">
                                                <div className="text-left dib">
                                                    <div className="stat-text"><span className="count">3435</span></div>
                                                    <div className="stat-heading">Sales</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="stat-widget-five">
                                            <div className="stat-icon dib flat-color-3">
                                                <i className="pe-7s-browser"></i>
                                            </div>
                                            <div className="stat-content">
                                                <div className="text-left dib">
                                                    <div className="stat-text"><span className="count">349</span></div>
                                                    <div className="stat-heading">Templates</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="stat-widget-five">
                                            <div className="stat-icon dib flat-color-4">
                                                <i className="pe-7s-users"></i>
                                            </div>
                                            <div className="stat-content">
                                                <div className="text-left dib">
                                                    <div className="stat-text"><span className="count">2986</span></div>
                                                    <div className="stat-heading">Clients</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- /Widgets --> */}
                        {/* <!--  Traffic  --> */}
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="box-title">Traffic </h4>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="card-body">
                                                {/* <!-- <canvas id="TrafficChart"></canvas>   --> */}
                                                <div id="traffic-chart" className="traffic-chart"></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="card-body">
                                                <div className="progress-box progress-1">
                                                    <h4 className="por-title">Visits</h4>
                                                    <div className="por-txt">96,930 Users (40%)</div>
                                                    <div className="progress mb-2" style={{ height: "5px" }}>
                                                        <div className="progress-bar bg-flat-color-1" role="progressbar"
                                                            style={{ width: "40%" }} aria-valuenow="25" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <div className="progress-box progress-2">
                                                    <h4 className="por-title">Bounce Rate</h4>
                                                    <div className="por-txt">3,220 Users (24%)</div>
                                                    <div className="progress mb-2" style={{ height: "5px" }}>
                                                        <div className="progress-bar bg-flat-color-2" role="progressbar"
                                                            style={{ width: "24%" }} aria-valuenow="25" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <div className="progress-box progress-2">
                                                    <h4 className="por-title">Unique Visitors</h4>
                                                    <div className="por-txt">29,658 Users (60%)</div>
                                                    <div className="progress mb-2" style={{ height: "5px" }}>
                                                        <div className="progress-bar bg-flat-color-3" role="progressbar"
                                                            style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <div className="progress-box progress-2">
                                                    <h4 className="por-title">Targeted Visitors</h4>
                                                    <div className="por-txt">99,658 Users (90%)</div>
                                                    <div className="progress mb-2" style={{ height: "5px" }}>
                                                        <div className="progress-bar bg-flat-color-4" role="progressbar"
                                                            style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- /.card-body --> */}
                                        </div>
                                    </div>
                                    {/* <!-- /.row --> */}
                                    <div className="card-body"></div>
                                </div>
                            </div>
                            {/* <!-- /# column --> */}
                        </div>
                        {/* <!--  /Traffic --> */}
                        <div className="clearfix"></div>
                        {/* <!-- Orders --> */}
                        <div className="orders">
                            <div className="row">
                                <div className="col-xl-8">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="box-title">Orders </h4>
                                        </div>
                                        <div className="card-body--">
                                            <div className="table-stats order-table ov-h">
                                                <table className="table ">
                                                    <thead>
                                                        <tr>
                                                            <th className="serial">#</th>
                                                            <th className="avatar">Avatar</th>
                                                            <th>ID</th>
                                                            <th>Name</th>
                                                            <th>Product</th>
                                                            <th>Quantity</th>
                                                            <th>Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="serial">1.</td>
                                                            <td className="avatar">
                                                                <div className="round-img">
                                                                    <a href="#"><img className="rounded-circle"
                                                                        src="images/avatar/1.jpg" alt="" /></a>
                                                                </div>
                                                            </td>
                                                            <td> #5469 </td>
                                                            <td> <span className="name">Louis Stanley</span> </td>
                                                            <td> <span className="product">iMax</span> </td>
                                                            <td><span className="count">231</span></td>
                                                            <td>
                                                                <span className="badge badge-complete">Complete</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="serial">2.</td>
                                                            <td className="avatar">
                                                                <div className="round-img">
                                                                    <a href="#"><img className="rounded-circle"
                                                                        src="images/avatar/2.jpg" alt="" /></a>
                                                                </div>
                                                            </td>
                                                            <td> #5468 </td>
                                                            <td> <span className="name">Gregory Dixon</span> </td>
                                                            <td> <span className="product">iPad</span> </td>
                                                            <td><span className="count">250</span></td>
                                                            <td>
                                                                <span className="badge badge-complete">Complete</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="serial">3.</td>
                                                            <td className="avatar">
                                                                <div className="round-img">
                                                                    <a href="#"><img className="rounded-circle"
                                                                        src="images/avatar/3.jpg" alt="" /></a>
                                                                </div>
                                                            </td>
                                                            <td> #5467 </td>
                                                            <td> <span className="name">Catherine Dixon</span> </td>
                                                            <td> <span className="product">SSD</span> </td>
                                                            <td><span className="count">250</span></td>
                                                            <td>
                                                                <span className="badge badge-complete">Complete</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="serial">4.</td>
                                                            <td className="avatar">
                                                                <div className="round-img">
                                                                    <a href="#"><img className="rounded-circle"
                                                                        src="images/avatar/4.jpg" alt="" /></a>
                                                                </div>
                                                            </td>
                                                            <td> #5466 </td>
                                                            <td> <span className="name">Mary Silva</span> </td>
                                                            <td> <span className="product">Magic Mouse</span> </td>
                                                            <td><span className="count">250</span></td>
                                                            <td>
                                                                <span className="badge badge-pending">Pending</span>
                                                            </td>
                                                        </tr>
                                                        <tr className=" pb-0">
                                                            <td className="serial">5.</td>
                                                            <td className="avatar pb-0">
                                                                <div className="round-img">
                                                                    <a href="#"><img className="rounded-circle"
                                                                        src="images/avatar/6.jpg" alt="" /></a>
                                                                </div>
                                                            </td>
                                                            <td> #5465 </td>
                                                            <td> <span className="name">Johnny Stephens</span> </td>
                                                            <td> <span className="product">Monitor</span> </td>
                                                            <td><span className="count">250</span></td>
                                                            <td>
                                                                <span className="badge badge-complete">Complete</span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            {/* <!-- /.table-stats --> */}
                                        </div>
                                    </div>
                                    {/* <!-- /.card --> */}
                                </div>
                                {/* <!-- /.col-lg-8 --> */}

                                <div className="col-xl-4">
                                    <div className="row">
                                        <div className="col-lg-6 col-xl-12">
                                            <div className="card br-0">
                                                <div className="card-body">
                                                    <div className="chart-container ov-h">
                                                        <div id="flotPie1" className="float-chart"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- /.card --> */}
                                        </div>

                                        <div className="col-lg-6 col-xl-12">
                                            <div className="card bg-flat-color-3  ">
                                                <div className="card-body">
                                                    <h4 className="card-title m-0  white-color ">August 2018</h4>
                                                </div>
                                                <div className="card-body">
                                                    <div id="flotLine5" className="flot-line"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /.col-md-4 --> */}
                            </div>
                        </div>
                        {/* <!-- /.orders --> */}

                        {/* <!-- Calender Chart Weather  --> */}
                        <div className="row">
                            <div className="col-md-12 col-lg-4">
                                <div className="card">
                                    <div className="card-body">
                                        {/* <!-- <h4 className="box-title">Chandler</h4> --> */}
                                        <div className="calender-cont widget-calender">
                                            <div id="calendar"></div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /.card --> */}
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="card ov-h">
                                    <div className="card-body bg-flat-color-2">
                                        <div id="flotBarChart" className="float-chart ml-4 mr-4"></div>
                                    </div>
                                    <div id="cellPaiChart" className="float-chart"></div>
                                </div>
                                {/* <!-- /.card --> */}
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card weather-box">
                                    <h4 className="weather-title box-title">Weather</h4>
                                    <div className="card-body">
                                        <div className="weather-widget">
                                            <div id="weather-one" className="weather-one"></div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /.card --> */}
                            </div>
                        </div>
                        {/* <!-- /Calender Chart Weather --> */}
                        {/* <!-- Modal - Calendar - Add New Event --> */}
                        <div className="modal fade none-border" id="event-modal">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal"
                                            aria-hidden="true">&times;</button>
                                        <h4 className="modal-title"><strong>Add New Event</strong></h4>
                                    </div>
                                    <div className="modal-body"></div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-default waves-effect"
                                            data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-success save-event waves-effect waves-light">Create
                                            event</button>
                                        <button type="button" className="btn btn-danger delete-event waves-effect waves-light"
                                            data-dismiss="modal">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- /#event-modal --> */}
                        {/* <!-- Modal - Calendar - Add Category --> */}
                        <div className="modal fade none-border" id="add-category">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal"
                                            aria-hidden="true">&times;</button>
                                        <h4 className="modal-title"><strong>Add a category </strong></h4>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label className="control-label">Category Name</label>
                                                    <input className="form-control form-white" placeholder="Enter name" type="text"
                                                        name="category-name" />
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="control-label">Choose Category Color</label>
                                                    <select className="form-control form-white" data-placeholder="Choose a color..."
                                                        name="category-color">
                                                        <option value="success">Success</option>
                                                        <option value="danger">Danger</option>
                                                        <option value="info">Info</option>
                                                        <option value="pink">Pink</option>
                                                        <option value="primary">Primary</option>
                                                        <option value="warning">Warning</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-default waves-effect"
                                            data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-danger waves-effect waves-light save-category"
                                            data-dismiss="modal">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- /#add-category --> */}
                    </div>
                    {/* <!-- .animated --> */}
                </div>
                {/* <!-- /.content --> */}
                <div className="clearfix"></div>
                {/* <!-- Footer --> */}
                <footer className="site-footer">
                    <div className="footer-inner bg-white">
                        <div className="row">
                            <div className="col-sm-6">
                                Copyright &copy; 2022 Dentaweb
                            </div>
                            <div className="col-sm-6 text-right">
                                Designed by <a href="#">Dentaweb</a>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* <!-- /.site-footer --> */}
            </div>
            {/* <!-- /#right-panel --> */}

        </>

    )
}

export default Dashboard