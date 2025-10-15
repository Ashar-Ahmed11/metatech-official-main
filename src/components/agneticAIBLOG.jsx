import React from 'react'
import blogcover from './agenticAI.png'
import { useState } from 'react'
import { useEffect } from 'react'
import MetaDecorator from './metadecorator'

const AgenticAIBlog = () => {
    const [comments, setComments] = useState([])
    const [commentBody, setCommentBody] = useState({ name: "", email: "", website: "", description: "" })
    const [commentLoader, setCommentLoader] = useState(false)
    const [commentSubmitted, setCommentSubmitted] = useState(false)
    const [fetchLoader, setFetchLoader] = useState(true)
    
    const {location:{hostname}} = window
    // useEffect(() => {
    //     fetchComments()
    // // console.log(comments)
    // }, [])
    // const fetchComments = async () => {
    //     const response = await fetch("https://metatechcomments.vercel.app/api/v1/comment/getcomments", {
    //         method: "GET",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         }
    //     })
    //     const allcomments = await response.json()
    //     setFetchLoader(false)
    //     setComments(allcomments)

    // }
    // const postComment = async (e) => {
    //     e.preventDefault()
    //     setCommentLoader(true)
    //     const response = await fetch("https://metatechcomments.vercel.app/api/v1/comment/postcomment", {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         },
    //         body: JSON.stringify(commentBody)
    //     })
    //     const thecomment = await response.json()
    //     setCommentLoader(false)

    //     if (thecomment.error) {
    //         alert(thecomment.error)
    //     }
    //     else {
    //         setComments([...comments, thecomment])
    //         setCommentSubmitted(true)
    //     }
    // }

    // const dateConverter = (isoDate) => {

    //     const date = new Date(isoDate);
    //     const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear().toString().slice(-2)}`;
    //     return formattedDate
    // }

    return (

        <div style={{ backgroundColor: '#151619' }}>
                {/* <MetaDecorator showBrand={false} title={'How to Make Money with AI Agents?'} description={'Agentic AI goes beyond content creation—it runs tasks, manages workflows, and builds income streams. Learn to use AI tools to grow in 2025.'} imageUrl={"https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60/https://res.cloudinary.com/dextrzp2q/image/upload/v1720097625/ob14j2kfdbjqq5te5tbn.png"} /> */}
                <MetaDecorator showBrand={false} title={'How to Make Money with AI Agents?'} description={'Agentic AI goes beyond content creation—it runs tasks, manages workflows, and builds income streams. Learn to use AI tools to grow in 2025.'} imageUrl={blogcover} />

            <div className="container">
                <div className="py-5">
                    <div className="pt-5">
                        <div className={`${window.innerWidth < 992 ? "" : "pt-5"}`}>
                            <h1 className='text-light py-2'>How to Make Money with AI Agents?</h1>
                            <div className="text-center">
                                <div className="py-3">
                                    <img src={hostname=="localhost"?blogcover:`https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60/https://${hostname}/${blogcover}`} class="img-fluid rounded-4 " alt="..."></img>
                                </div>
                            </div>
                            <p className='text-light'>Artificial intelligence is changing from simple tools to self-driving systems that can think, act, and produce results on their own.  Generative AI tools, like ChatGPT or Midjourney, make content. Agentic AI goes one step further and does things like run tasks, manage workflows, and even make money streams automatically.  Whether you're a business owner, freelancer, or investor, learning how to use these smart tools can help you make more money in 2025 and beyond. Traditional AI models can only come up with ideas. These agents, on the other hand, can do full jobs, like managing clients, running marketing campaigns, or improving sales funnels in real time.</p>
                            <h2 className="text-light">
                              What Is the Difference Between Agentic AI and Generative AI?
                            </h2>
                            <p className='text-light'>
                               Agentic AI, on the other hand, does more than just create. It acts.  These systems use advanced agentic AI frameworks to plan, reason, and make choices on their own to reach their goals without constant human input.  Generative models react, but agentic agents react, change, and act.  With this difference, AI goes from being a way to boost productivity to a way to help make money.
                            </p>
                            <p className="text-light">
                                Generative AI needs a lot of direction from humans, but agentic AI can work on its own to reach its goals.  It can look at data, decide what to do based on its surroundings, and work with other digital systems to finish complicated jobs from beginning to end.  Businesses can automate whole processes with this self-directed feature, from lead generation to sales execution. This creates long-term income opportunities with little supervision.
                            </p>
                            <h2 className="text-light">
                               Agentic AI Examples
                            </h2>
                            <p className="text-light">
                                Agentic AI is used in many different types of businesses in the real world.  As an example, there are customer service agents that handle tickets automatically, trade bots that carry out financial strategies, and marketing agents that run ad campaigns with little to no oversight.  Modern platforms and tools, such as Cursor AI Agent, come with an AI agent control panel that lets users easily check, change, and grow agent performance.
                            </p>
                            <p className="text-light">
                                 In addition to these uses, agentic AI is also changing the way we learn, get medical care, and shop online.  Intelligent tutoring systems, for instance, tailor learning to each student, virtual health helpers help patients, and self-driving e-commerce bots manage inventory and deal with customers.  
                            </p>
                            <h2 className="text-light">
                               What Is an AI Voice Agent?
                            </h2>
                            <p className="text-light"> An AI voice agent is a smart computer program that can understand and react to real-time speech.  Voice-driven agents like these can answer calls for customer service, make appointments, and close deals 24 hours a day, seven days a week. This makes them perfect for businesses that want to automate communication without losing the human touch.</p>
                            <p className="text-light">AI voice agents are unique because they can understand tone, purpose, and emotion, which lets them interact with people in a natural, human-like way.  They improve customer service, increase sales, and create new ways to make money through smart automation thanks to agentic AI systems.</p>
                            
                            <h2 className="text-light">AI for Real Estate Agents</h2>
                            <p className="text-light">AI agents are changing how homes are marketed, sold, and handled in the real estate business. Intelligent chatbots screen leads and virtual assistants set up showings and follow up with buyers are two examples of agentic AI frameworks that make repetitive chores easier. This gives agents more time to focus on high-value deals. Adopting technology powered by AI not only makes things run more smoothly, but it also creates new ways to make money with AI agents by expanding services beyond what was possible before.</p>
                            <p className="text-light">With the help of agentic AI use cases designed specifically for real estate, agents can now very accurately look at market trends, guess how buyers will act, and make personalized property suggestions. With tools like the AI agent control panel, real estate agents can easily keep track of performance, handle interactions with clients, and set up automated follow-ups. By combining these smart systems, real estate agents can close more deals, cut down on costs, and eventually make more money in a market that is very competitive.</p>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AgenticAIBlog