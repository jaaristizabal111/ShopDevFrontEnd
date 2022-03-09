import './HeaderAdmin.css';
import React from 'react';

export const HeaderAdmin = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-lightb nav-background">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                        <span class="navbar-text">Administrador</span>
                        <i className="icon-logout fa fa-sign-out-alt fa-2x"></i>
                    </div>
                </div>
            </nav>
        </>
    )
}