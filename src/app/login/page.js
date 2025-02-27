'use client'
import LoginForm from '@/components/common/login-form'
import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function page() {
  const sliderContent = [
    {
      title: "Introducing New Features",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when."
    },
    {
      title: "Easy Customization",
      description: "Experience a modern UI with fully customizable options to match your business style."
    },
    {
      title: "Secure Payment",
      description: "We provide secure payment gateways with 100% encrypted transactions."
    } 
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    // autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    customPaging: function () {
      return <div className="w-2 h-2 rounded-full bg-white/50 hover:bg-white"></div>
    },
    appendDots: dots => (
      <div>
        <ul className="flex justify-center space-x-2 mt-8">{dots}</ul>
      </div>
    )
  }

  return (
    <>
      <main className="min-h-screen flex">
        <div className="hidden md:flex md:w-1/2 bg-gray-900 relative">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <div className="relative max-w-lg mx-auto z-20 p-12 text-white mt-[400px]">
            <Slider {...settings}>
              {sliderContent.map((item, index) => (
                <div key={index}>
                  <h2 className="text-3xl mb-4 font-lora">{item.title}</h2>
                  <p className="text-gray-300 font-questrial">{item.description}</p>
                </div>
              ))}
            </Slider>
          </div>
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/auth/login.png')",
              filter: "brightness(0.6)",
            }}
          />
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <LoginForm />
        </div>
      </main>
    </>
  )
}

export default page
