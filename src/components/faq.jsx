import React, { useState } from 'react'

const faqItems = [
  { id: 1, q: 'How Do I Start a Website Project?', a: 'Share your ideas with us and let our experts guide you from concept to launch. Give us a call today, and let’s start building your website!' },
  { id: 2, q: 'Can You Integrate My Existing System?', a: 'Yes! At Metatech Official, we seamlessly integrate your existing systems, including REST and GraphQL APIs, CRMs, payment gateways, analytics tools, and custom backends—making sure everything works together smoothly.' },
  { id: 3, q: 'Do You Provide SEO and Performance Optimization?', a: 'Absolutely ! At Metatech Official, we build websites with Core Web Vitals, on-page SEO, meta tags, and structured data best practices to ensure your site performs fast, ranks well, and delivers a seamless user experience.' },
]

export default function Faq() {
  const [openId, setOpenId] = useState(1)
  const toggle = (id) => setOpenId(openId === id ? -1 : id)
  return (
    <section style={{ backgroundColor: '#151619' }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6">
            <div>
              <h2 className="text-light">FAQs - Let’s Talk Details</h2>
              <p className="text-light text-opacity-75">
              Ready to take your project to the next level? Contact Metatech Official today and get expert advice to make it happen seamlessly.
              </p>
              <div className="mt-4">
                <a className="btn btn-primary rounded-pill" href="/seo-contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  Ask your questions
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div>
              {faqItems.map((f) => (
                <div key={f.id} className="my-3 p-3 rounded-4" style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="d-flex justify-content-between align-items-center" style={{ cursor: 'pointer' }} onClick={() => toggle(f.id)}>
                    <h3 className="h6 m-0 text-light">{f.q}</h3>
                    <span className="text-light" style={{ transform: openId === f.id ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform .3s' }}>+</span>
                  </div>
                  {openId === f.id && <div className="pt-2 text-light text-opacity-75">{f.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



