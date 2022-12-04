function Dashboard() {
    return (
        <div id="wrapper">
            <ul className="navbar-nav sidebar sidebar-dark">
                <span className="sidebar-brand d-flex align-items-center justify-content-center">
                    <span className="fs-4">Dashboard</span>
                </span>

                <hr className="sidebar-divider" />

                <li className="nav-item">
                    <a className="nav-link" href="/dashboard">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/gallery">
                        <i className="fas fa-fw fa-image"></i>
                        <span>Land Gallery</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/profile">
                        <i className="fas fa-fw fa-user"></i>
                        <span>Profile</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/lands">
                        <i className="fas fa-fw fa-landmark"></i>
                        <span>Owned Lands</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/payment">
                        <i className="fas fa-fw fa-dollar-sign"></i>
                        <span>Payment</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/faq">
                        <i className="fas fa-fw fa-info"></i>
                        <span>Help</span>
                    </a>
                </li>
            </ul>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown no-arrow">Welcome, User</li>
                        </ul>
                    </nav>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-4 col-md-12 mb-4">
                                <div className="card border-left-primary shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="font-weight-bold text-primary text-uppercase mb-1">Total Sellers</div>
                                                <div className="h5 mb-0 font-weight-bold text-gray-800">1</div>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fas fa-users fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-md-12 mb-4">
                                <div className="card border-left-success shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="font-weight-bold text-success text-uppercase mb-1">Registered Land Counts</div>
                                                <div className="h5 mb-0 font-weight-bold text-gray-800">0</div>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fas fa-landmark fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-md-12 mb-4">
                                <div className="card border-left-warning shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="font-weight-bold text-warning text-uppercase mb-1">Pending Requests</div>
                                                <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fas fa-bell fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                                <div className="card shadow mb-4">
                                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                        <h6 className="m-0 fw-semibold fs-4">Lands Info</h6>
                                    </div>
                                    <div className="card-body">
                                        <div className="chart-area">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Area</th>
                                                        <th scope="col">City</th>
                                                        <th scope="col">State</th>
                                                        <th scope="col">Price</th>
                                                        <th scope="col">Property PID</th>
                                                        <th scope="col">Survey Number</th>
                                                        <th scope="col">Request Land</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>C-10</td>
                                                        <td>Noida</td>
                                                        <td>Uttar Pradesh</td>
                                                        <td>₹5000000</td>
                                                        <td>15</td>
                                                        <td>35</td>
                                                        <td>
                                                            <button className="btn btn-primary">Request</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
