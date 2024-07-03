import React from 'react'

export default function Footer() {
    return (
        <div id='footer'>
            <footer class="site-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <h2 className='h6'>About</h2>
                            <p class="text-justify">
                            At Metatech, we are a passionate team of professionals dedicated to delivering top-notch website and app development and design services. Our skilled developers work tirelessly to create cutting-edge websites and user-friendly apps that cater to your specific needs, ensuring a seamless online presence for your business.
                            </p>
In addition to our development expertise, we offer result-driven SEO services that will boost your website's visibility and improve search engine rankings. Our digital marketing solutions are tailored to expand your brand's reach, drive organic traffic, and generate meaningful leads, ensuring business growth and success.
<p className="text-justify">
With a customer-centric approach, we take the time to understand your goals and objectives, and then implement strategies that deliver exceptional results. Whether you are a startup, small business, or a large enterprise, we have the tools and expertise to elevate your online presence and take your business to new heights.
</p>
<p className="text-justify">
Experience excellence in web and app development, design, SEO, and digital marketing with Metatech. Contact us today for a free consultation!
                            </p>
                        </div>

                       
                    </div>
                    <hr/>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-sm-6 col-xs-12">
                            <p class="copyright-text">Copyright &copy; 2023 All Rights Reserved by 
                                <span href="#" className='mx-1'>Metatech</span>
                            </p>
                            <p class="copyright-text">Site developed by: <a href='/Metatech.pdf' target="_blank" download> Metatech <span className='d-none'>Metatech-PDF</span></a>
                                
                            </p>
                        </div>

                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <ul class="social-icons">
                                <li><a class="facebook" target='_blank' href="https://www.facebook.com/profile.php?id=100094100574663"><i class="fa fa-facebook"></i></a></li>
                                <li><a class="twitter" target='_blank' href="https://twitter.com/metatech_offic"><i class="fa fa-twitter"></i></a></li>
                                <li><a class="linkedin" target='_blank' href="https://www.linkedin.com/company/metatech-official/"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}