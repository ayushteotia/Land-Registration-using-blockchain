function Buyer() {
    return (
        <div className="card mx-auto mt-5" style={{ width: "35rem" }}>
            <div className="card-body">
                <h5 className="card-title fs-1 text-black text-center">Seller Registration</h5>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label text-black">
                            Full Name
                        </label>
                        <input type="text" className="form-control" id="name" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="age" className="form-label text-black">
                            Age
                        </label>
                        <input type="text" className="form-control" id="age" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="city" className="form-label text-black">
                            City
                        </label>
                        <input type="text" className="form-control" id="city" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label text-black">
                            Email
                        </label>
                        <input type="email" className="form-control" id="email" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="aadhar" className="form-label text-black">
                            Aadhar Number
                        </label>
                        <input type="text" className="form-control" id="aadhar" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="pan" className="form-label text-black">
                            Pan Number
                        </label>
                        <input type="text" className="form-control" id="pan" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label text-black">
                            Aadhar Card (PDF Format)
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>

                    <button type="submit" className="btn btn-primary col-12">
                        Register as Seller
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Buyer;
