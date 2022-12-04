import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const [auth, setAuth] = useState("");
    const to = useNavigate();

    return (
        <div className="container">
            <h1 className="display-2 text-white text-center">Land Registry using Ethereum Blockchain</h1>
            <br />
            <div className="card mx-auto" style={{ width: "35rem" }}>
                <div className="card-body">
                    <h5 className="card-title fs-1 text-black">Welcome</h5>
                    <h6 className="card-subtitle mb-2 fs-4 text-black">Making the most of digital era!</h6>
                    <hr />
                    <form>
                        <div className="mb-3">
                            <label htmlFor="selectionBox" className="form-label text-black">
                                Select Role
                            </label>
                            <select className="form-select" id="selectionBox" aria-label="Select Role" onChange={(e) => setAuth(e.target.value)}>
                                <option disabled selected>
                                    Select
                                </option>
                                <option value="buyer">Buyer</option>
                                <option value="seller">Seller</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary col-12" onClick={() => to("/" + auth)}>
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;
