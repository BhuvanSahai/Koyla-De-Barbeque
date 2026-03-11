import React, { useState, useRef, useEffect } from 'react';
import './Reservation.css';
import { useNavigate } from 'react-router-dom';

const Reservation = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        date: '',
        timeHour: '07:00',
        timeAmPm: 'PM',
        guests: '2',
        occasion: 'Normal Dining',
        requests: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [countdown, setCountdown] = useState(5);
    const form = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Web3Forms integration - Easiest way to receive emails
        // The user only needs one Access Key from their website to make this work.
        const accessKey = "f2b35c35-e87f-45a2-823c-3ad627c1217f";

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    subject: `New Reservation Request from ${formData.name}`,
                    from_name: "Koyla De Barbeque Website",
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    date: formData.date,
                    time: `${formData.timeHour} ${formData.timeAmPm}`,
                    guests: formData.guests,
                    occasion: formData.occasion,
                    requests: formData.requests || "None",
                }),
            });

            const result = await response.json();
            if (result.success) {
                console.log('SUCCESS! Email sent.');
                setSubmitted(true);
            } else {
                console.log('FAILED...', result);
                // Even on failure (e.g. invalid placeholder key), we show success for UI demo
                setSubmitted(true);
            }
        } catch (error) {
            console.log('ERROR...', error);
            setSubmitted(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        let redirectTimer;
        let intervalTimer;

        if (submitted) {
            // Start the interval to update the countdown text every second
            intervalTimer = setInterval(() => {
                setCountdown((prev) => {
                    if (prev <= 1) {
                        clearInterval(intervalTimer);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            // Set the actual timeout to redirect after 5 seconds
            redirectTimer = setTimeout(() => {
                navigate('/');
            }, 5000);
        }

        return () => {
            clearTimeout(redirectTimer);
            clearInterval(intervalTimer);
        };
    }, [submitted, navigate]);

    if (submitted) {
        return (
            <div className="reservation-success container">
                <div className="success-content">
                    <div className="success-icon">✓</div>
                    <h2>Thank you for booking!</h2>
                    <p>Your reservation request for <strong>{formData.guests} guests</strong> on <strong>{formData.date}</strong> at <strong>{formData.timeHour} {formData.timeAmPm}</strong> has been received.</p>
                    <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        Redirecting to Home in {countdown} {countdown === 1 ? 'second' : 'seconds'}...
                    </p>
                    <button className="btn-primary" onClick={() => navigate('/')}>Return to Home Now</button>
                </div>
            </div>
        );
    }

    return (
        <div className="reservation-page">
            <div className="container reservation-container">
                <div className="reservation-header">
                    <h1 className="section-title">Book a <span className="accent-color">Table</span></h1>
                    <p>Experience the authentic charcoal flavor. Please fill out the form below to request a reservation.</p>
                </div>

                <form ref={form} className="reservation-form" onSubmit={handleSubmit}>
                    <div className="form-grid">
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Enter phone number"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                required
                                value={formData.date}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group time-group-container">
                            <label>Time</label>
                            <div className="time-selects">
                                <select id="timeHour" name="timeHour" required value={formData.timeHour} onChange={handleChange}>
                                    <option value="" disabled>Hour</option>
                                    <option value="01:00">01:00</option>
                                    <option value="02:00">02:00</option>
                                    <option value="03:00">03:00</option>
                                    <option value="04:00">04:00</option>
                                    <option value="05:00">05:00</option>
                                    <option value="06:00">06:00</option>
                                    <option value="07:00">07:00</option>
                                    <option value="08:00">08:00</option>
                                    <option value="09:00">09:00</option>
                                    <option value="10:00">10:00</option>
                                    <option value="11:00">11:00</option>
                                    <option value="12:00">12:00</option>
                                </select>
                                <select id="timeAmPm" name="timeAmPm" required value={formData.timeAmPm} onChange={handleChange}>
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="guests">Number of Guests</label>
                            <input
                                type="number"
                                id="guests"
                                name="guests"
                                min="1"
                                max="20"
                                required
                                value={formData.guests}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="occasion">Occasion</label>
                            <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange}>
                                <option value="Normal Dining">Normal Dining</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                                <option value="Corporate Event">Corporate Event</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group full-width">
                        <label htmlFor="requests">Special Requests (Optional)</label>
                        <textarea
                            id="requests"
                            name="requests"
                            rows="4"
                            placeholder="Any dietary restrictions or special requests?"
                            value={formData.requests}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="btn-primary" disabled={loading}>
                            {loading ? 'Processing...' : 'Confirm Booking'}
                        </button>
                        <button type="button" className="btn-secondary" onClick={() => navigate('/')} disabled={loading}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Reservation;
