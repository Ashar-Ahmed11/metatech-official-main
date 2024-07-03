import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactCarousal from './carousal copy';
import ErrorModal from './errorModal';

const CostCalculator = () => {
    const navigate = useNavigate();
    const [specs, setSpecs] = useState({});
    const [toggleModal, settoggleModal] = useState(false);
    const modalref = useRef(null);

    useEffect(() => {
        const changeClass = (element) => {
            const buttons = document.getElementsByClassName(`${element}`);
            for (let index = 0; index < buttons.length; index++) {
                const e = buttons[index];
                if (specs[element] && specs[element].value === e.innerHTML) {
                    e.className = `${e.className} selectedbutton`;
                } else {
                    e.className = `${element} btn btn-outline-light rounded-3 mx-2`;
                }
            }
        };

        if (specs) {
            Object.keys(specs).forEach(changeClass);
        }
    }, [specs]);

    const totalCost = () => {
        const nums = Object.values(specs).map(e => e.price);
        if (nums.length === 8) {
            const sum = nums.reduce((acc, curr) => acc + curr, 0);
            localStorage.setItem('specs', JSON.stringify(specs));
            localStorage.setItem('subtotal', sum);
            window.scrollTo({ behavior: 'smooth', top: 0, left: 0 });
            navigate("/estimated-cost");
        } else {
            settoggleModal(true);
            modalref.current.click();
        }
    };

    return (
        <>
            <ContactCarousal pageTitle={"Website Cost Calculator"} />
            <ErrorModal settoggleModal={settoggleModal} />
            <button ref={modalref} type="button" class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div style={{ backgroundColor: '#151619' }}>
                <div className="container py-5">
                    <h5 className='pb-3' style={{ textDecoration: 'underline', textUnderlineOffset: "6px", color: '#6565ff' }}>Website Cost Calculator</h5>
                    <h4 style={{ color: "white" }} className="display-4">Get The Best Quotes For Your Website.</h4>

                    <div style={{ color: 'white' }}>
                        <div className="py-2">
                            <h2 className='py-2 h4'>Number Of Pages</h2>
                            <div className='d-flex justify-content-center'>
                                <button onClick={(e) => setSpecs({ ...specs, pages: { value: e.target.innerHTML, price: 50 } })} className={`pages btn btn-outline-light rounded-3 mx-2`}>1</button>
                                <button onClick={(e) => setSpecs({ ...specs, pages: { value: e.target.innerHTML, price: 100 } })} className="pages btn btn-outline-light rounded-3 mx-2">5</button>
                                <button onClick={(e) => setSpecs({ ...specs, pages: { value: e.target.innerHTML, price: 500 } })} className="pages btn btn-outline-light rounded-3 mx-2">Infinite</button>
                            </div>
                        </div>
                        <div className="py-2">
                            <h2 className='py-2 h4'>Style Of Design</h2>
                            <div className='d-flex justify-content-center'>
                                <button onClick={(e) => setSpecs({ ...specs, design: { value: e.target.innerHTML, price: 50 } })} className="btn btn-outline-light rounded-3 mx-2 design">Simple</button>
                                <button onClick={(e) => setSpecs({ ...specs, design: { value: e.target.innerHTML, price: 100 } })} className="btn btn-outline-light rounded-3 mx-2 design">Optimum</button>
                                <button onClick={(e) => setSpecs({ ...specs, design: { value: e.target.innerHTML, price: 600 } })} className="btn btn-outline-light rounded-3 mx-2 design">High End</button>
                            </div>
                        </div>
                        <div className="py-2">
                            <h2 className='py-2 h4'>Responsive Design</h2>
                            <div className='d-flex justify-content-center'>
                                <button onClick={(e) => setSpecs({ ...specs, responsive: { value: e.target.innerHTML, price: 0 } })} className="responsive btn btn-outline-light rounded-3 mx-2">No</button>
                                <button onClick={(e) => setSpecs({ ...specs, responsive: { value: e.target.innerHTML, price: 100 } })} className="responsive btn btn-outline-light rounded-3 mx-2">Yes</button>
                            </div>
                        </div>
                        <div className="py-2">
                            <h2 className='py-2 h4'>Backend Integration</h2>
                            <div className='d-flex justify-content-center'>
                                <button onClick={(e) => setSpecs({ ...specs, backend: { value: e.target.innerHTML, price: 0 } })} className="backend btn btn-outline-light rounded-3 mx-2">None</button>
                                <button onClick={(e) => setSpecs({ ...specs, backend: { value: e.target.innerHTML, price: 350 } })} className="backend btn btn-outline-light rounded-3 mx-2">Simple</button>
                                <button onClick={(e) => setSpecs({ ...specs, backend: { value: e.target.innerHTML, price: 550 } })} className="backend btn btn-outline-light rounded-3 mx-2">Advanced</button>
                            </div>
                        </div>
                        <div className="py-2">
                            <h2 className='py-2 h4'>CMS Integration</h2>
                            <div className='d-flex justify-content-center'>
                                <button onClick={(e) => setSpecs({ ...specs, cms: { value: e.target.innerHTML, price: 0 } })} className="cms btn btn-outline-light rounded-3 mx-2">None</button>
                                <button onClick={(e) => setSpecs({ ...specs, cms: { value: e.target.innerHTML, price: 500 } })} className="cms btn btn-outline-light rounded-3 mx-2">Simple</button>
                                <button onClick={(e) => setSpecs({ ...specs, cms: { value: e.target.innerHTML, price: 700 } })} className="cms btn btn-outline-light rounded-3 mx-2">Advanced</button>
                            </div>
                        </div>
                        <div className="py-2">
                            <h2 className='py-2 h4'>Content Quality</h2>
                            <div className='d-flex justify-content-center'>
                                <button onClick={(e) => setSpecs({ ...specs, content: { value: e.target.innerHTML, price: 100 } })} className="content btn btn-outline-light rounded-3 mx-2">AI Generated</button>
                                <button onClick={(e) => setSpecs({ ...specs, content: { value: e.target.innerHTML, price: 200 } })} className="content btn btn-outline-light rounded-3 mx-2">Non AI Generated</button>
                                <button onClick={(e) => setSpecs({ ...specs, content: { value: e.target.innerHTML, price: 400 } })} className="content btn btn-outline-light rounded-3 mx-2">Ultimate SEO</button>
                            </div>
                        </div>
                        <div className="py-2">
                            <h2 className='py-2 h4'>Domain Integration With Hosting</h2>
                            <div className='d-flex justify-content-center'>
                                <button onClick={(e) => setSpecs({ ...specs, domain: { value: e.target.innerHTML, price: 0 } })} className="domain btn btn-outline-light rounded-3 mx-2">No</button>
                                <button onClick={(e) => setSpecs({ ...specs, domain: { value: e.target.innerHTML, price: 50 } })} className="domain btn btn-outline-light rounded-3 mx-2">Yes</button>
                            </div>
                        </div>
                        <div className="py-2">
                            <h2 className='py-2 h4'>Hosting</h2>
                            <div className='d-flex justify-content-center'>
                                <button onClick={(e) => setSpecs({ ...specs, hosting: { value: e.target.innerHTML, price: 0 } })} className="hosting btn btn-outline-light rounded-3 mx-2">None</button>
                                <button onClick={(e) => setSpecs({ ...specs, hosting: { value: e.target.innerHTML, price: 50 } })} className="hosting btn btn-outline-light rounded-3 mx-2">Only Front-End</button>
                                <button onClick={(e) => setSpecs({ ...specs, hosting: { value: e.target.innerHTML, price: 100 } })} className="hosting btn btn-outline-light rounded-3 mx-2">Both Front-End & Back-End</button>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end pt-3">
                        <button onClick={() => { totalCost() }} className="btn " style={{ borderColor: "#6565ff", color: "#6565ff" }}>See Pricing</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CostCalculator