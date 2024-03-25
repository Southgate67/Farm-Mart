import React, { useState } from 'react';

function Tracking() {
  const [trackingId, setTrackingId] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setTrackingId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!trackingId.trim()) {
        setError('Please enter a valid Tracking ID.');
      } else if (trackingId.trim().length !== 10) {
        setError('Tracking ID must be exactly 10 characters long.');
      } else {
        setError('');
        alert('You have to connect to an API before it will work');
      // Process tracking logic here
      console.log('Tracking ID:', trackingId);
      window.location.href = '/';

    }
  };
  return (
    <>
    <div className="bg-dark">
        <div className="text-center pt-3 text-light">
            <h5 className="p-5">Keep An Eye on Your Goods In Transit</h5>
        </div>
    </div>
        <div className="container mt-5 mb-3">
            <div className="row">
                <div className="col-md-8" data-aos="fade-up">
                <h4>TRACK YOUR ORDER</h4>
                <div className="bg-red"></div>
                  <div className="pt-3">
                    <p><span className="fw-bold">Farm Mart</span> ensures safe delivery of your goods with our state-of-the-art logistics facilities. If you require maximum visibility of the movement of your goods, contact our customer team or you can track your cargo by using our tracking system here.</p>
                  </div>
                </div>
                <div className="col-md-4" data-aos="fade-up">
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" placeholder='Enter your Tracking ID Here' className="form-control mt-3 mb-3" value={trackingId} 
                onChange={handleInputChange}/>
                {error && <div className="text-danger">{error}</div>}

                <button className="btn btn-danger">Track</button>
                </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Tracking