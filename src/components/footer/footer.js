import React from "react";

function Footer() {
    return (
        <footer className="dark-bg">
            <div className="container">
                <div className="row" style={{ padding: "0px; margin: 0px" }}>
                    <div className="col s12 m12">
                        <p className="left-align light">&copy;
                        2020 Keeley Byerly Made with <a href="https://materializecss.com/" target="_blank"
                                style={{ color: "#FFF", textDecoration: "underline" }}>Materialize</a> and <a href="https://reactjs.org/" target="_blank"
                                    style={{ color: "#FFF", textDecoration: "underline" }}>React</a></p>
                    </div>
                </div>
            </div>
        </footer >
    );
}

export default Footer;
