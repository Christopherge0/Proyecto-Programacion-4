class miNav extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML=`
        <nav class="navbar navbar-expand-lg navbar-light  bg-light py-3 ">
        <div class="container px-0">
            <a class="navbar-brand" href="index.html"><span class="fw-bolder text-primary">
            <img style="max-width: 25%; max-height: 25%; height: auto; width: auto;" src="assets/logo.png" alt="..." />
            CS PRIMARIA</span></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-0 mb-2 mb-lg-0 small fw-bolder">
                    <li class="nav-item text-center"><a class="nav-link" href="index.html"><p class="black">Inicio</p></a></li>
                    <li class="nav-item text-center"><a class="nav-link" href="programa.html"><p class="black">Programa Educativo</p></a></li>
                    <li class="nav-item text-center"><a class="nav-link" href="instalaciones.html"><p class="black">Nuestras Instalaciones</p></a></li>
                    <li class="nav-item text-center"><a class="nav-link" href="contact.html"><p style="color: black;">Contacto</p></a></li>
                    <li class="nav-item text-center"><a class="nav-link" href="acercade.html"><p class="black">Acerca de</p></a></li>
                </ul>
            </div>
        </div>
    </nav>

        `
        
        
           
    }
}
customElements.define('mi-header', miNav);


class mifos extends HTMLElement
{
    connectedCallback()
    {
        
        this.innerHTML=`
        <footer class="bg-light py-4 mt-auto">
        <div class="container px-5">
            <div class="row align-items-center justify-content-between flex-column flex-sm-row">
                <div class="col-auto">
                    <div class="small m-0">Copyright &copy; Your Website 2023</div>
                    <div class="small m-0"> <a class="small" href="https://startbootstrap.com/previews/personal">Referecia de la pagina</a></div>
                </div>
                <style>
                    .col-auto a {
                    margin-right: 10px; /* Puedes ajustar el valor según tus necesidades */
                    }
                </style>
                <d class="col-auto">
                    <a class="small" href="https://www.facebook.com/estimulacion.casitadesuenos" target="_blank"> <i class="bi bi-facebook"></i></a>
                    <a class="small" href="https://wa.me/62808943" target="_blank"> <i class="bi bi-whatsapp"></i></a>
                    <a class="small" href="https://www.instagram.com/cslearning.cr/" target="_blank"> <i class="bi bi-instagram"></i></a>
                </div>
            </div>
        </div>
    </footer>
        `
        
        
           
    }
}
customElements.define('mi-footer', mifos);