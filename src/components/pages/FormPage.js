import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import React, { useState } from 'react'

function FormPage() {
    const [data, setData] = useState({
        patientId: "",
        firstname: "",
        lastname: "",
        phone: "",
        dob: "",
        insuranceId: "",
        s_no: "",
    });

    const [value, setValue] = useState('tab1');

    const handleTab = (event, newValue) => {
        setValue(newValue);
    };


    // var phone = '1234567890';



    //   let navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        if (!(data.phone.match('[0-9]{10}'))) {
            alert('Please provide valid phone number');
        } else {
            //good to go

            alert(
                `Patient Data That You Entered
                 Name : ${data.firstname} ${data.lastname}
                Patient Id : ${data.patientId}
                Phone No : ${data.phone}
                DOB : ${data.dob}
                                  Data Submited`
            );
            setData({
                patientId: "",
                firstname: "",
                lastname: "",
                phone: "",
                dob: "",
                insuranceId: "",
                s_no: "",
            })
        }
        // navigate("/");
    };
    return (
        <div>

            {/* <!-- Right Panel --> */}
            <div id="right-panel" className="right-panel">

                {/* <!-- Content --> */}
                <div className="content">
                    {/* <!-- Animated --> */}
                    <p style={{ color: "red" }}>
                        Please add validation in following Search Section on submit <br />
                        1. All fields are require<br />
                        2. Patient Id only Interger allow<br />
                        3. Enter valid Phone Number<br />
                        4. Enter valid DOB<br />
                    </p>

                    <div className="animated fadeIn">
                        {/* <!-- Widgets  --> */}
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-header">
                                        Search Patient
                                    </div>
                                    <div className="card-body card-block">
                                        <form action="#" method="post" className="form-horizontal" onSubmit={formSubmit}>
                                            <div className="row form-group">
                                                <div className="col-4"><input type="text" name='patientId' value={data.patientId} onChange={handleChange} required placeholder="Patient ID"
                                                    className="form-control" /></div>
                                                <div className="col-4"><input type="text" name='firstname' value={data.firstname} onChange={handleChange} required placeholder="First Name"
                                                    className="form-control" /></div>
                                                <div className="col-4"><input type="text" name='lastname' value={data.lastname} onChange={handleChange} required placeholder="Last Name"
                                                    className="form-control" /></div>
                                            </div>
                                            <div className="row form-group">
                                                <div className="col-4"><input type="number" name='phone' value={data.phone} onChange={handleChange} required placeholder="Phone Number"
                                                    className="form-control" /></div>
                                                <div className="col-4"><input type="date" name='dob' value={data.dob} onChange={handleChange} required title='Enter DOB' placeholder="DOB" className="form-control" />
                                                </div>
                                                <div className="col-4"><input type="number" name='insuranceId' value={data.insuranceId} onChange={handleChange} required placeholder="Insurance ID"
                                                    className="form-control" /></div>
                                            </div>
                                            <div className="row form-group">
                                                <div className="col-4"><input type="number" name='s_no' value={data.s_no} onChange={handleChange} required title='Enter S No' placeholder="S# S# No."
                                                    className="form-control" /></div>
                                                <div className="col-4"><button type="submit" className="btn btn-primary">Submit</button>
                                                </div>
                                            </div>

                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <p style={{ color: "red" }}> Material-ui Tabs</p>
                            <div className="col-lg-12">
                                <div className="card">

                                    <Box sx={{ width: '100%', typography: 'body1' }}>
                                        <TabContext value={value}>
                                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                                <TabList onChange={handleTab} aria-label="lab API tabs example">
                                                    <Tab label="Patient’s Section Daily Routin" value="1" />
                                                    <Tab label="Misc Daily Activity Section" value="2" />
                                                    <Tab label="Claim / Preauthorization Section" value="3" />
                                                    <Tab label="Appointment Section" value="4" />
                                                    <Tab label="Marketing Section" value="5" />
                                                    <Tab label="Corporate Area Section" value="6" />
                                                    <Tab label="Other" value="7" />
                                                </TabList>
                                            </Box>
                                            <TabPanel value="1">Item One</TabPanel>
                                            <TabPanel value="1">
                                                <i className="menu-icon fa fa-laptop"></i>
                                                <span>Patient’s Section Daily Routine1</span>
                                            </TabPanel>
                                            <TabPanel value="1">
                                                <i className="menu-icon fa fa-laptop"></i>
                                                <span>Patient Registration From 1</span>
                                            </TabPanel>
                                            <TabPanel value="1">
                                                <i className="menu-icon fa fa-laptop"></i>
                                                <span>Patient Registration From 2</span>
                                            </TabPanel>
                                            <TabPanel value="1">
                                                <i className="menu-icon fa fa-laptop"></i>
                                                <span>Patient Registration From 3</span>
                                            </TabPanel>

                                            <TabPanel value="2">Item Two</TabPanel>
                                            <TabPanel value="2">
                                                <i className="menu-icon fa fa-laptop"></i>
                                                <span>Patient’s Section Daily Routine 2</span>
                                            </TabPanel>
                                            <TabPanel value="2">
                                                <i className="menu-icon fa fa-laptop"></i>
                                                <span>Patient Registration From 1</span>
                                            </TabPanel>
                                            <TabPanel value="2">
                                                <i className="menu-icon fa fa-laptop"></i>
                                                <span>Patient Registration From 2</span>
                                            </TabPanel>
                                            <TabPanel value="2">
                                                <i className="menu-icon fa fa-laptop"></i>
                                                <span>Patient Registration From 3</span>
                                            </TabPanel>

                                            <TabPanel value="3">Item Three</TabPanel>
                                            <TabPanel value="3">
                                                <i className="menu-icon fa fa-laptop"></i>
                                                <span>Patient’s Section Daily Routine 3</span>
                                            </TabPanel>
                                            <TabPanel value="3">
                                                <i className="menu-icon fa fa-laptop"></i>
                                                <span>Patient Registration From 1</span>
                                            </TabPanel>
                                            <TabPanel value="3">
                                                <i className="menu-icon fa fa-laptop"></i>
                                                <span>Patient Registration From 2</span>
                                            </TabPanel>
                                            <TabPanel value="3">
                                                <i className="menu-icon fa fa-laptop"></i>
                                                <span>Patient Registration From 3</span>
                                            </TabPanel>

                                            <TabPanel value="4">Item Four</TabPanel>
                                            <TabPanel value="4">
                                                <i className="menu-icon fa fa-laptop"></i>
                                                <span>Patient’s Section Daily Routine 4</span>
                                            </TabPanel>
                                            <TabPanel value="4">
                                                <i className="menu-icon fa fa-laptop"></i>
                                                <span>Patient Registration From 1</span>
                                            </TabPanel>
                                            <TabPanel value="4">
                                                <i className="menu-icon fa fa-laptop"></i>
                                                <span>Patient Registration From 2</span>
                                            </TabPanel>
                                            <TabPanel value="4">
                                                <i className="menu-icon fa fa-laptop"></i>
                                                <span>Patient Registration From 3</span>
                                            </TabPanel>

                                            <TabPanel value="5">Item Five</TabPanel>
                                            <TabPanel value="5">
                                                <i className="menu-icon fa fa-laptop"></i>
                                                <span>Patient’s Section Daily Routine 5</span>
                                            </TabPanel>
                                            <TabPanel value="5">
                                                <i className="menu-icon fa fa-laptop"></i>
                                                <span>Patient Registration From 1</span>
                                            </TabPanel>
                                            <TabPanel value="5">
                                                <i className="menu-icon fa fa-laptop"></i>
                                                <span>Patient Registration From 2</span>
                                            </TabPanel>
                                            <TabPanel value="5">
                                                <i className="menu-icon fa fa-laptop"></i>
                                                <span>Patient Registration From 3</span>
                                            </TabPanel>

                                            <TabPanel value="6">Item Six</TabPanel>
                                            <TabPanel value="6">
                                                <i className="menu-icon fa fa-laptop"></i>
                                                <span>Patient’s Section Daily Routine 6</span>
                                            </TabPanel>
                                            <TabPanel value="6">
                                                <i className="menu-icon fa fa-laptop"></i>
                                                <span>Patient Registration From 1</span>
                                            </TabPanel>
                                            <TabPanel value="6">
                                                <i className="menu-icon fa fa-laptop"></i>
                                                <span>Patient Registration From 2</span>
                                            </TabPanel>
                                            <TabPanel value="6">
                                                <i className="menu-icon fa fa-laptop"></i>
                                                <span>Patient Registration From 3</span>
                                            </TabPanel>

                                            <TabPanel value="7">Item Seven</TabPanel>
                                            <TabPanel value="7">
                                                <i className="menu-icon fa fa-laptop"></i>
                                                <span>Patient’s Section Daily Routine 7</span>
                                            </TabPanel>
                                            <TabPanel value="7">
                                                <i className="menu-icon fa fa-laptop"></i>
                                                <span>Patient Registration From 1</span>
                                            </TabPanel>
                                            <TabPanel value="7">
                                                <i className="menu-icon fa fa-laptop"></i>
                                                <span>Patient Registration From 2</span>
                                            </TabPanel>
                                            <TabPanel value="7">
                                                <i className="menu-icon fa fa-laptop"></i>
                                                <span>Patient Registration From 3</span>
                                            </TabPanel>
                                        </TabContext>
                                    </Box>


                                </div>
                            </div>
                        </div>
                        {/* <!-- /Widgets --> */}



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
                                Designed by <a href="/#">Dentaweb</a>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* <!-- /.site-footer --> */}
            </div>
            {/* <!-- /#right-panel --> */}

        </div>
    );
}

export default FormPage;
