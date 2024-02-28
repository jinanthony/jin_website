const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="../img/light-logo.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">merch</li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">hoodies</a></li>
                <!-- <li><a href="#" class="footer-link">sweatshirts</a></li> -->
                <li><a href="#" class="footer-link">coming soon</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">about Jin Design</p>
    <p class="info">asdlksafjdlksfjs</p>
    <p class="info">support emails - help@jindesign.com </p>
    <p class="info">Phone - (xxx)-xxx-xxxx </p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
            
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">Clothing, Best apparels online store</p>
    `;
}

createFooter();