
function Upload() {
    const color = '#fff';
    return (

        <div>
            <div className="pt-2 pb-3">
                <label for="exampleFormControlInput1" class="form-label">Your business’s Financial Report</label>
                <p style={{ fontSize: '0.6rem' }}><span style={{ color: 'red' }}>*</span>  Should not include very sensitive information but at least monthly
                    and yearly turnovers</p>
                <input style={{ backgroundColor: color }} className="form-control" type="file" id="formFileMultiple" multiple />

            </div>
        </div>
    )
}

export default Upload
