import Button from "../components/Button"
import Upload from "../components/Upload"

function Request() {
    return (
        <div className="px-5">
            <h3 className="text-center py-3">Request Funding</h3>
            <p className="text-center">Tell us how you intend to move your business online, why and what you would need funding for in that regard</p>
            <div className="row">
                <div className="col-6">
                    <div class="mb-3">
                        <label for="business_type" class="form-label">Business type</label>
                        <input className="form-control" list="business_type_list" id="business_type" placeholder="Choose your business type" />
                        <datalist id="business_type_list">
                            <option value="Health Sector" />
                            <option value="Clothing Accessories" />
                            <option value="Manual Repairs" />
                            <option value="Book Shops" />
                            <option value="Education" />
                        </datalist>

                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">How long do you need this loan ?</label>
                        <input className="form-control" list="duration_list" id="duration" placeholder="Choose the duration" />
                        <datalist id="duration_list">
                            <option value="< 6 months" />
                            <option value="6 months" />
                            <option value="> 6 months" />
                            <option value="12 months" />
                        </datalist>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">How much do you need ?</label>
                        <input className="form-control" list="amount_list" id="amount" placeholder="Choose" />
                        <datalist id="amount_list">
                            <option value="$1000" />
                            <option value="$2000" />
                            <option value="$5000" />
                            <option value="> $5000" />
                        </datalist>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Your goal ?</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="What do you want to achieve with this funding in detail and how?"></textarea>
                    </div>
                </div>
                <div className="col-6">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">How old is your business ?</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="...yrs" />
                        <Upload />
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">How has the pandemic affected your business ?</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="5.3" placeholder="Main points on how the pandemic might have affected your business 
not more than 1000 characters"></textarea>
                        </div>
                        <Button text="Request Fund" span={12} Bg='purple' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Request
