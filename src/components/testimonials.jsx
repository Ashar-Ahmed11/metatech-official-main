import React from 'react'

const items = [
    { text: 'Metatech Official developed a seamless financial expense management system for Lakhani Towers and Shops with automated balance tracking. It has completely streamlined our operations.”', name: 'Hussain Andani', role: 'Entrepreneur' },
    { text: '“The hotel management system for Travel Inn Islamabad was delivered flawlessly. Metatech Official understood our needs and created a solution that works perfectly.”', name: 'Adil', role: 'Hotel Founder' },
    { text: '“Our custom ecommerce website for Memon Foods & Spices is highly scalable and easy to manage. Metatech Official’s expertise made the entire process smooth.”', name: 'Furqan', role: 'Business Owner' },
    { text: 'Metatech Official created a unique ecommerce glasses website with Virtual Try On (VTO). The innovation and user experience exceeded our expectations.”', name: 'Kashan', role: 'Business Owner' },
    { text: '“The automatic installment management system for Kamran Mobile Installment has saved us a lot of time and effort. Truly reliable work from Metatech Official.”', name: 'Kamran', role: 'Business Owner' },
    { text: 'Metatech Official designed a professional and impactful website for our NGO. Their team was responsive, creative, and understanding of our goals.”', name: 'Alina', role: 'NGO Founder' },
]

export default function Testimonials() {
    return (
        <section className='rounded-4' style={{ backgroundColor: '#0f0f12' }}>
            <div className="container py-5">
                <div className="text-center mb-4">
                    <h2 className="text-light">What Our Clients Say About Metatech Official                    </h2>
                </div>
                <div className="row">
                    {items.map((t, i) => (
                        <div key={i} className="col-xl-4 col-lg-6 col-md-6 my-2">
                            <div className="p-4 rounded-4 h-100" style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                                <div className="mb-2">
                                    <i className="fa fa-star text-warning mx-1  "></i>
                                    <i className="fa fa-star text-warning mx-1  "></i>
                                    <i className="fa fa-star text-warning mx-1  "></i>
                                    <i className="fa fa-star text-warning mx-1  "></i>
                                </div>
                                <div className="text-light text-opacity-90" style={{ minHeight: '72px' }}>
                                    <p className="m-0">{t.text}</p>
                                </div>
                                <div className="d-flex align-items-center pt-3">
                                    <div className="rounded-circle me-3 d-flex justify-content-center align-items-center" style={{ width: 40, height: 40, backgroundColor: 'rgba(255,255,255,0.08)' }} >
                                        <i className="fa fa-lg fa-user text-light"></i>
                                        </div>
                                    <div>
                                        <p className="m-0 text-light">{t.name}</p>
                                        <span className="text-light text-opacity-75 small">{t.role}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


