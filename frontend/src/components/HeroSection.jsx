import React from "react";
import { FaBook, FaClock, FaChartLine } from 'react-icons/fa';
import './HeroSection.css';

function HeroSection() {
return (
    <div className="hero-section">
        <div className="logo-text">
            CAMPUS<br />
            CORE
        </div>

        <div className="welcome-content">
            <h2 className="welcome-title">Welcome to Your Academic Journey</h2>
            <p className="welcome-subtitle">
                Manage your courses, track your schedule, and stay organized 
                throughout your academic term with our comprehensive management platform.
            </p>
        </div>

        <div className="features-grid">
            <div className="feature-card">
                <div className="feature-icon">
                    <FaBook />
                </div>
                <h3>Course<br />Management</h3>
            </div>
            <div className="feature-card">
                <div className="feature-icon">
                    <FaClock />
                </div>
                <h3>Schedule<br />Tracking</h3>
            </div>
            <div className="feature-card">
                <div className="feature-icon">
                    <FaChartLine />
                </div>
                <h3>Progress<br />Analytics</h3>
            </div>
        </div>

        <div className="feature-indicators">
            <div className="indicator"></div>
            <div className="indicator active"></div>
            <div className="indicator"></div>
        </div>

        <div className="testimonial-card">
            <div className="testimonial-text">
                "As a professor, I appreciate how simple it is to communicate schedule 
                changes to my students. The platform is intuitive and saves me hours each week."
            </div>
            <div className="testimonial-author">
                - Dr. Michael T., Engineering Faculty
            </div>
        </div>
    </div>
);
}

export default HeroSection; 