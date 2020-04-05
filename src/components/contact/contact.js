import React from "react";



function Contact() {
    return (
        <div className="container">
            <div className="section">
                <a name="contact">&nbsp;</a>
                <div className="row" style={{ padding: "20px 0px 20px 0px" }}>
                    <div className="col s12 m12">
                        <h4>Contact Me</h4>
                        <p className="left-align light"><a href="tel:3035478913">(303) 547-8913</a> | <a
                            href="mailto:keeley.blakley@gmail.com">keeley.blakley@gmail.com</a></p>
                        <form action="https://formspree.io/xyykogqv" method="POST">
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" name="name"
                                    placeholder="Your name" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                    placeholder="name@example.com" name="email" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                    name="message"></textarea>
                            </div>
                            <button type="submit" className="btn  btn-large">Submit</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contact;
