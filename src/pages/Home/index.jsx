import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';
import EditText from '../../components/ui/EditText';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [menuOpen, setMenuOpen] = useState(false);

  const testimonials = [
    {
      name: "Daniel Kim",
      role: "Operations Lead at Flowbyte",
      image: "/images/img_user_image.png",
      quote: "Truly impressive. The AI assistant is fast, accurate, and blends into our daily ops without friction."
    },
    {
      name: "Priya Mehra", 
      role: "CTO at Brightstack Labs",
      image: "/images/img_.png",
      quote: "Game-changer. Automation flows run flawlessly. Our team now focuses only on what really matters."
    },
    {
      name: "Elena Rodriguez",
      role: "Product Manager at Nexora", 
      image: "/images/img_user_image.png",
      quote: "Smooth setup. Their system replaced three tools. We saw improvements in just the first week."
    },
    {
      name: "Marcus Thompson",
      role: "Marketing Director at OrbitShift Director",
      image: "/images/img_user_image.png", 
      quote: "Surprisingly simple. The AI adapts quickly. Our campaigns are now running 2x more efficiently."
    },
    {
      name: "Sarah Wong",
      role: "Analytics Manager at Corelink",
      image: "/images/img_user_image.png",
      quote: "Huge time-saver. Data is better organized. The insights we get now are actionable and fast."
    },
    {
      name: "Ravi Shah",
      role: "COO at PixelNest Solutions", 
      image: "/images/img_user_image.png",
      quote: "Very intuitive. No fluff, just performance. Our internal processes finally feel under control."
    }
  ];

  const successStories = [
    {
      name: "Sophia\'s Retail Breakthrough",
      description: "Sophia, the marketing lead at Trendify, used AI-driven analytics to dive deep into customer behavior. The insights led to a 40% increase in engagement and a 30% rise in repeat purchases, creating long-term customer relationships.",
      metrics: [
        { value: "40", label: "gain in retention" },
        { value: "50", label: "surge in profits" }
      ],
      image: "/images/img_image_txdilxb.png"
    },
    {
      name: "Emily\'s E-commerce Success", 
      description: "Emily, the CEO of BloomTech, transformed their marketing efforts using AI-powered tools. This shift resulted in a 60% increase in ROI and a 45% improvement in customer personalization, leading to a surge in brand loyalty",
      metrics: [
        { value: "70", label: "growth in sales" },
        { value: "50", label: "rise in engagement" }
      ],
      image: "/images/img_image_gufzfcq.png"
    },
    {
      name: "Max\'s SaaS Revolution",
      description: "Max, the founder of CloudFlow, implemented AI automation in their processes. This move slashed operational costs by 50% and boosted team productivity by 75%, empowering the company to accelerate growth and expand faster.",
      metrics: [
        { value: "60", label: "increase in ROI" },
        { value: "45", label: "boost in revenue" }
      ],
      image: "/images/img_image_46ywpjk.png"
    }
  ];

  const teamMembers = [
    {
      name: "Ikta Sollork",
      role: "Founder / Data Analyst",
      image: "/images/img_pic_user_pic.png",
      socialLinks: [
        "/images/img_link_icon.svg",
        "/images/img_link_icon_black_900_01.svg", 
        "/images/img_link_icon_black_900_01_40x40.svg"
      ]
    },
    {
      name: "Gwen chase",
      role: "AI Strategist", 
      image: "/images/img_pic_user_pic_132x144.png",
      socialLinks: [
        "/images/img_link_icon.svg",
        "/images/img_link_icon_black_900_01.svg",
        "/images/img_link_icon_black_900_01_40x40.svg"
      ]
    },
    {
      name: "James Bond",
      role: "Automation Engineer",
      image: "/images/img_pic_user_pic_1.png", 
      socialLinks: [
        "/images/img_link_icon.svg",
        "/images/img_link_icon_black_900_01.svg",
        "/images/img_link_icon_black_900_01_40x40.svg"
      ]
    },
    {
      name: "Jenny Will",
      role: "SEO / Others",
      image: "/images/img_pic_user_pic_2.png",
      socialLinks: [
        "/images/img_link_icon.svg", 
        "/images/img_link_icon_black_900_01.svg",
        "/images/img_link_icon_black_900_01_40x40.svg"
      ]
    },
    {
      name: "Jan Wink", 
      role: "Integration Specialist",
      image: "/images/img_pic_user_pic_3.png",
      socialLinks: [
        "/images/img_link_icon.svg",
        "/images/img_link_icon_black_900_01.svg", 
        "/images/img_link_icon_black_900_01_40x40.svg"
      ]
    },
    {
      name: "Lilli Math",
      role: "Client Manager",
      image: "/images/img_pic_user_pic_4.png",
      socialLinks: [
        "/images/img_link_icon.svg",
        "/images/img_link_icon_black_900_01.svg",
        "/images/img_link_icon_black_900_01_40x40.svg"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$50",
      period: "/month",
      features: [
        "3 Automated Workflows",
        "Basic AI Assistant Access", 
        "Email + Slack Integration",
        "Monthly Performance Reports",
        "Email Support"
      ]
    },
    {
      name: "Pro",
      price: "$90", 
      period: "/month",
      popular: true,
      features: [
        "10+ Automated Workflows",
        "Advanced AI Assistant Features",
        "Bi-Weekly Strategy Reviews", 
        "CRM + Marketing Tool Integrations",
        "Priority Support"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Unlimited Custom Workflows",
        "Dedicated AI Strategist",
        "API & Private Integrations",
        "Real-Time Performance Dashboards", 
        "24/7 Premium Support + SLA"
      ]
    }
  ];

  const faqItems = [
    {
      question: "What types of processes can you automate?",
      answer: "We specialize in automating repetitive workflows across operations, marketing, sales, and customer support using AI and custom logic.",
      isOpen: true
    },
    {
      question: "Do I need technical knowledge to use your service?",
      answer: "",
      isOpen: false
    },
    {
      question: "Can you integrate with our existing tools?", 
      answer: "",
      isOpen: false
    },
    {
      question: "How long does implementation take?",
      answer: "",
      isOpen: false
    },
    {
      question: "Is your AI secure and compliant?",
      answer: "",
      isOpen: false
    }
  ];

  return (
    <div className="w-full bg-global-2 overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full bg-global-2 -mt-16">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/img_1g8ikhtjmlwcc4zeywkumegwzimp4.png')" }}
        />
        
        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-32 lg:pt-40">
          {/* AI Icon */}
          <div className="flex justify-center mb-8 sm:mb-12 md:mb-16">
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-global-2 rounded-2xl flex items-center justify-center shadow-[0px_30px_30px_#4078a817]">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-global-2 rounded-xl flex items-center justify-center shadow-[0px_20px_20px_#5785b335]">
                  <img 
                    src="/images/img_5bvui56yoqdfz1x.svg" 
                    alt="AI Icon" 
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-11 md:h-11"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Hero Text */}
          <div className="text-center mb-8 sm:mb-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-2 py-2 mb-6 sm:mb-8">
              <div className="w-1.5 h-1.5 bg-global-9 rounded-full shadow-[0px_0px_20px_#a8d1ff7f]"></div>
              <span className="text-global-4 text-sm font-medium">NEW GEN AI AUTOMATION PARTNER</span>
            </div>

            {/* Main Heading */}
            <div className="mb-6 sm:mb-8">
              <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px] font-medium leading-tight bg-gradient-to-r from-global-4 to-global-2 bg-clip-text text-transparent">
                Automate Smarter. Grow 
              </h1>
              <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px] font-medium leading-tight bg-gradient-to-r from-global-4 to-global-2 bg-clip-text text-transparent ml-0 sm:ml-12 md:ml-24 lg:ml-60">
                Faster.
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-global-4 text-base sm:text-lg mb-6 sm:mb-8">
              AI Automation for Modern Businesses Made Simple
            </p>

            {/* CTA Button */}
            <Button
              variant="primary"
              size="large"
              rightImage={{
                src: "/images/img_mask_group.png",
                width: 22,
                height: 22
              }}
              className="mb-6 sm:mb-8 bg-[linear-gradient(90deg,#ffffff_0%,_#ffffff00_100%)] text-global-11 font-semibold"
            >
              Book A Free Call
            </Button>

            {/* Social Proof Icons */}
            <div className="flex justify-center items-center gap-8 sm:gap-12 mb-12 sm:mb-16">
              <img src="/images/img_link_primary.svg" alt="" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" />
              <div className="w-0.5 h-6 bg-[#d8e7f211]"></div>
              <div className="relative w-4 h-4 sm:w-5 sm:h-5">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/img_vvj8fldvj.svg')" }}
                >
                  <div className="flex justify-end items-start w-4/5 h-full p-0.5">
                    <div className="w-0.5 h-0.5 bg-global-10 rounded-full mb-1.5"></div>
                  </div>
                </div>
              </div>
              <div className="w-0.5 h-6 bg-[#d8e7f211]"></div>
              <img src="/images/img_link_primary_blue_gray_100.svg" alt="" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" />
            </div>

            {/* Scroll Indicator */}
            <img src="/images/img_arrow_down.svg" alt="" className="w-8 h-8 sm:w-9 sm:h-9 mx-auto rounded-full" />
          </div>
        </div>

        {/* Bottom Section with Analysis Text */}
        <div className="relative z-10 w-full bg-global-2 rounded-t-[50px] -mt-52 pt-52">
          <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
            <div className="relative bg-cover bg-center rounded-xl p-8 sm:p-12 md:p-16" style={{ backgroundImage: "url('/images/img_bg_shape.png')" }}>
              <div className="text-center">
                {/* Analysis Badge */}
                <Button
                  variant="secondary"
                  leftImage={{
                    src: "/images/img_2930526878.svg",
                    width: 16,
                    height: 16
                  }}
                  className="mb-6 sm:mb-8 text-global-4 text-xs border border-[#d8e7f211] rounded-[14px] bg-global-2"
                >
                  WE ANALYZE YOUR DATA
                </Button>

                {/* Analysis Text */}
                <div className="space-y-4 sm:space-y-6 text-center">
                  <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-2 text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] leading-tight">
                    <span className="text-global-2">We</span>
                    <span className="text-global-2 ml-1.5">find</span>
                    <span className="text-global-2 ml-1.5">what</span>
                    <span className="text-global-2 ml-1">to</span>
                    <span className="text-global-4 font-serif italic ml-1">automate</span>
                    <span className="text-global-2">,</span>
                    <span className="text-global-2 ml-1">who</span>
                    <span className="text-global-2 ml-1.5">your</span>
                    <span className="text-global-2 ml-1.5">users</span>
                    <span className="text-global-2 ml-1.5">are</span>
                    <span className="text-global-2 ml-1">&</span>
                    <span className="text-global-2 ml-1">how</span>
                  </div>
                  
                  <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-2 text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] leading-tight">
                    <span className="text-global-2">AI</span>
                    <span className="text-global-2 ml-1">can</span>
                    <span className="text-global-2 ml-1.5">optimize</span>
                    <span className="text-global-2 ml-1.5">your</span>
                    <span className="text-global-4 font-serif italic ml-1.5">workflow</span>
                    <span className="text-global-2">.</span>
                    <span className="text-global-2 ml-1">Best</span>
                    <span className="text-global-2 ml-1">part</span>
                    <span className="text-global-2 ml-1">is</span>
                    <span className="text-global-2 ml-1">we</span>
                    <span className="text-global-2 ml-1">also</span>
                  </div>
                  
                  <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-2 text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] leading-tight">
                    <span className="text-global-2">build</span>
                    <span className="text-global-2 ml-1.5">and</span>
                    <span className="text-global-2 ml-1.5">launch</span>
                    <span className="text-global-4 font-serif italic ml-1.5">real</span>
                    <span className="text-global-4 font-serif italic">solutions</span>
                    <span className="text-global-2">.</span>
                  </div>
                </div>

                {/* Author Info */}
                <div className="flex justify-center items-center gap-4 mt-8 sm:mt-12">
                  <img src="/images/img_user_pic.png" alt="" className="w-7 h-7 rounded-[14px]" />
                  <span className="text-global-4 text-base">Co-founder & AI Strategy Lead</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="w-full bg-global-2 py-16 sm:py-24">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <Button
              variant="secondary"
              leftImage={{
                src: "/images/img_1529132500_blue_gray_100.svg",
                width: 16,
                height: 16
              }}
              className="mb-6 text-global-4 text-xs border border-[#d8e7f211] rounded-[14px] bg-global-2"
            >
              BENEFITS
            </Button>
            
            <h2 className="text-[22px] sm:text-[32px] md:text-[44px] font-medium leading-tight bg-gradient-to-r from-global-4 to-global-2 bg-clip-text text-transparent mb-4">
              Why Choose
            </h2>
            
            <p className="text-global-4 text-base">
              Everything you need to automate, optimize, and scale
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Real-Time Intelligence */}
            <div className="relative bg-global-2 border border-[#d8e7f211] rounded-[20px] p-6 sm:p-8 shadow-[0px_2px_1px_#cfe7ff33]">
              <div className="relative mb-6">
                <img src="/images/img_light.png" alt="" className="w-full h-48 sm:h-60 object-cover rounded-xl" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-global-4 rounded-xl p-6 shadow-[0px_2px_1px_#cfe7ff26]">
                    <div className="w-8 h-8 bg-global-8 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-global-11 text-xl font-medium mb-2">Real-Time Intelligence</h3>
                <div className="space-y-1">
                  <p className="text-global-4 text-base">Access accurate, real-time data to drive</p>
                  <p className="text-global-4 text-base">smarter decisions</p>
                </div>
              </div>
            </div>

            {/* Measurable Impact */}
            <div className="relative bg-global-2 border border-[#d8e7f211] rounded-[20px] p-6 sm:p-8 shadow-[0px_2px_1px_#cfe7ff33]">
              <div className="relative mb-6">
                <img src="/images/img_light_306x380.png" alt="" className="w-full h-48 sm:h-60 object-cover rounded-xl" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex gap-4">
                    <div className="w-10 h-16 bg-global-4 rounded-lg shadow-[0px_2px_1px_#cfe7ff26]"></div>
                    <div className="w-10 h-20 bg-global-4 rounded-lg shadow-[0px_2px_1px_#cfe7ff26]"></div>
                    <div className="w-10 h-18 bg-global-4 rounded-lg shadow-[0px_2px_1px_#cfe7ff26]"></div>
                    <div className="w-10 h-22 bg-global-4 rounded-lg shadow-[0px_2px_1px_#cfe7ff26]"></div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-global-11 text-xl font-medium mb-2">Measurable Impact</h3>
                <div className="space-y-1">
                  <p className="text-global-4 text-base">Track performance, uncover insights, and</p>
                  <p className="text-global-4 text-base">achieve data-backed growth</p>
                </div>
              </div>
            </div>

            {/* Seamless Integration */}
            <div className="relative bg-[linear-gradient(90deg,#b8c7d919_0%,_#b8c7d919_100%)] border border-[#d8e7f211] rounded-[20px] p-6 sm:p-8">
              <div className="relative mb-6 h-48 sm:h-60">
                {/* Integration Icons */}
                <div className="absolute top-4 right-6">
                  <img src="/images/img_background.svg" alt="" className="w-12 h-20 rounded-[24px]" />
                </div>
                <div className="absolute top-16 right-0">
                  <img src="/images/img_container.svg" alt="" className="w-32 h-36" />
                </div>
                <div className="absolute top-2 left-20">
                  <div className="w-6 h-6 bg-global-4 rounded-xl shadow-[0px_2px_1px_#cfe7ff26]"></div>
                </div>
                <div className="absolute top-8 left-0">
                  <img src="/images/img_background.svg" alt="" className="w-16 h-24 rounded-[32px]" />
                </div>
                <div className="absolute bottom-8 left-6">
                  <img src="/images/img_container_gray_900.svg" alt="" className="w-32 h-24" />
                </div>
                <div className="absolute bottom-0 right-8">
                  <img src="/images/img_container_gray_900_152x146.svg" alt="" className="w-36 h-36" />
                </div>
                <div className="absolute top-0 left-16">
                  <div className="w-5 h-5 bg-global-4 rounded-[10px] shadow-[0px_2px_1px_#cfe7ff26]"></div>
                </div>
                <div className="absolute bottom-16 left-0">
                  <img src="/images/img_container_gray_900_150x150.svg" alt="" className="w-36 h-36" />
                </div>
                <div className="absolute bottom-8 right-4">
                  <img src="/images/img_center.svg" alt="" className="w-11 h-11 rounded-[22px]" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-global-11 text-xl font-medium mb-2">Seamless Integration</h3>
                <div className="space-y-1">
                  <p className="text-global-4 text-base">Connect tools, teams, and workflows with</p>
                  <p className="text-global-4 text-base">intelligent automation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Shape */}
        <div className="flex justify-center mt-16">
          <img src="/images/img_bg_shape.png" alt="" className="w-full max-w-[884px] h-[166px] sm:h-[332px] rounded-xl" />
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-global-2 py-16 sm:py-24">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-1.5 py-1.5 mb-6 border border-[#d8e7f211] rounded-[14px] bg-global-2">
              <img src="/images/img_3494739676.svg" alt="" className="w-4 h-4" />
              <span className="text-global-4 text-xs">SERVICES</span>
            </div>
            
            <h2 className="text-[22px] sm:text-[32px] md:text-[44px] font-medium leading-tight bg-gradient-to-r from-global-4 to-global-2 bg-clip-text text-transparent mb-4">
              Smarter Services,
            </h2>
            
            <p className="text-global-4 text-base">
              Everything you need to automate operations, boost productivity
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-6 sm:space-y-8">
            {/* Row 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Automate repetitive tasks */}
              <div className="bg-global-2 border border-[#d8e7f211] rounded-2xl p-6 sm:p-8 shadow-[0px_2px_1px_#cfe7ff33]">
                <div className="space-y-6">
                  {/* Task Items */}
                  <div className="space-y-1.5">
                    <EditText
                      placeholder="Social media post"
                      leftImage={{
                        src: "/images/img_1688045918.svg",
                        width: 24,
                        height: 24
                      }}
                      rightImage={{
                        src: "/images/img_1850400172.svg",
                        width: 24,
                        height: 24
                      }}
                      className="text-global-4 text-sm"
                    />
                    
                    <div className="flex items-center justify-between p-2 border border-[#d8e7f211] rounded bg-global-2 shadow-[0px_1px_1px_#cfe7ff33]">
                      <div className="flex items-center gap-2.5">
                        <img src="/images/img_2109778876.svg" alt="" className="w-6 h-6" />
                        <span className="text-global-4 text-sm">Employee Tracking</span>
                      </div>
                      <img src="/images/img_1035730532.svg" alt="" className="w-6 h-6" />
                    </div>
                    
                    <EditText
                      placeholder="Payment reminder"
                      leftImage={{
                        src: "/images/img_78418125.svg",
                        width: 24,
                        height: 24
                      }}
                      rightImage={{
                        src: "/images/img_1850400172.svg",
                        width: 24,
                        height: 24
                      }}
                      className="text-global-4 text-sm"
                    />
                    
                    <EditText
                      placeholder="Cost Management"
                      leftImage={{
                        src: "/images/img_2922751717.svg",
                        width: 24,
                        height: 24
                      }}
                      rightImage={{
                        src: "/images/img_1035730532.svg",
                        width: 24,
                        height: 24
                      }}
                      className="text-global-4 text-sm"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-global-11 text-xl font-medium">Automate repetitive tasks</h3>
                    <p className="text-global-6 text-base leading-relaxed">
                      We help you streamline internal operations by automating manual workflows
                    </p>
                  </div>
                </div>
              </div>

              {/* Automated Workflows */}
              <div className="bg-global-2 border border-[#d8e7f211] rounded-2xl p-6 sm:p-8 shadow-[0px_2px_1px_#cfe7ff33]">
                <div className="space-y-6">
                  <img src="/images/img_variant_1.svg" alt="Workflow Diagram" className="w-full h-48 sm:h-60 object-cover" />
                  <div className="space-y-2.5">
                    <h3 className="text-global-11 text-xl font-medium">Automated Workflows</h3>
                    <p className="text-global-6 text-base leading-relaxed">
                      Boost efficiency across teams with smart automation Build intelligent workflows that automate multi-step processes across tools and platforms
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Real-Time Intelligence */}
              <div className="bg-global-2 border border-[#d8e7f211] rounded-[20px] shadow-[0px_2px_1px_#cfe7ff33]">
                <div className="relative">
                  <img src="/images/img_light_306x384.png" alt="" className="w-full h-60 sm:h-80 object-cover rounded-t-[20px]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-global-2 to-transparent rounded-t-[20px]"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <div className="space-y-1">
                      <h3 className="text-global-11 text-xl font-medium">Real-Time Intelligence</h3>
                      <p className="text-global-6 text-base leading-relaxed">
                        Make smarter decisions with live data insights Tap into real-time data
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Custom AI Agent development */}
              <div className="bg-global-2 border border-[#d8e7f211] rounded-[20px] shadow-[0px_2px_1px_#cfe7ff33]">
                <div className="relative">
                  <img src="/images/img_light_1.png" alt="" className="w-full h-60 sm:h-80 object-cover rounded-t-[20px]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-global-2 to-transparent rounded-t-[20px]"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <div className="space-y-1">
                      <h3 className="text-global-11 text-xl font-medium">Custom AI Agent development</h3>
                      <p className="text-global-6 text-base leading-relaxed">
                        We develop custom AI agents that integrate seamlessly with your tools
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Strategy Consulting */}
            <div className="bg-global-2 border border-[#d8e7f211] rounded-[20px] p-6 sm:p-8 shadow-[0px_2px_1px_#cfe7ff33]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                <div className="relative bg-[linear-gradient(90deg,#b8c7d919_0%,_#b8c7d919_100%)] rounded-[20px] p-6 sm:p-8 h-60 sm:h-80">
                  {/* Integration visualization */}
                  <div className="relative h-full">
                    <div className="absolute top-12 right-6 w-28 h-20 border border-[#d8e7f211] bg-global-2"></div>
                    <div className="absolute top-4 left-8">
                      <div className="space-y-12">
                        <div className="flex items-start gap-4">
                          <img src="/images/img_shape.svg" alt="" className="w-20 h-20 rounded-[42px]" />
                          <div className="mt-16">
                            <div className="w-6 h-6 border border-[#d8e7f211] rounded-[10px]"></div>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="w-8 h-8 border border-[#d8e7f211] rounded-2xl"></div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-0">
                      <img src="/images/img_shape_teal_50.svg" alt="" className="w-30 h-30 rounded-[62px]" />
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-global-11 text-xl font-medium">AI Strategy Consulting</h3>
                  <p className="text-global-6 text-base leading-relaxed">
                    Get expert guidance to implement AI solutions that drive business growth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Shape */}
        <div className="flex justify-center mt-16">
          <img src="/images/img_bg_shape.png" alt="" className="w-full max-w-[884px] h-[166px] sm:h-[332px] rounded-xl" />
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-global-2 py-16 sm:py-24">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-1.5 py-1.5 mb-6 border border-[#d8e7f211] rounded-[14px] bg-global-2">
              <img src="/images/img_3494739676.svg" alt="" className="w-4 h-4" />
              <span className="text-global-4 text-xs">FEATURES</span>
            </div>
            
            <h2 className="text-[22px] sm:text-[32px] md:text-[44px] font-medium leading-tight bg-gradient-to-r from-global-4 to-global-2 bg-clip-text text-transparent mb-4">
              All features in
            </h2>
            
            <p className="text-global-4 text-base">
              Everything you need to automate operations, boost productivity
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Workflow Automation */}
            <div className="bg-global-2 border border-[#d8e7f211] rounded-2xl p-6 sm:p-8 shadow-[0px_2px_1px_#cfe7ff33]">
              <div className="space-y-6">
                <div className="relative h-32 sm:h-40">
                  <img src="/images/img_light_160x316.png" alt="" className="w-full h-full object-cover rounded-xl" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src="/images/img_icon_container.svg" alt="" className="w-24 h-12 sm:w-31 h-16 rounded-lg" />
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-global-11 text-xl font-medium">Workflow Automation</h3>
                  <p className="text-global-6 text-base">Automate complex business processes to</p>
                  <p className="text-global-6 text-base">boost speed, clarity, and efficiency.</p>
                </div>
              </div>
            </div>

            {/* Custom AI Solutions */}
            <div className="bg-global-2 border border-[#d8e7f211] rounded-2xl p-6 sm:p-8 shadow-[0px_2px_1px_#cfe7ff33]">
              <div className="space-y-6">
                <div className="relative h-32 sm:h-40">
                  <img src="/images/img_light_2.png" alt="" className="w-full h-full object-cover rounded-xl" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src="/images/img_icon_container_gray_900.svg" alt="" className="w-24 h-12 sm:w-31 h-16 rounded-lg" />
                  </div>
                </div>
                <div className="text-center space-y-2.5">
                  <h3 className="text-global-11 text-xl font-medium">Custom AI Solutions</h3>
                  <p className="text-global-6 text-base">Build tailored AI systems that align with</p>
                  <p className="text-global-6 text-base">your business goals and challenges.</p>
                </div>
              </div>
            </div>

            {/* AI Assistant */}
            <div className="bg-global-2 border border-[#d8e7f211] rounded-2xl p-6 sm:p-8 shadow-[0px_2px_1px_#cfe7ff33]">
              <div className="space-y-6">
                <div className="relative h-32 sm:h-40">
                  <img src="/images/img_light_3.png" alt="" className="w-full h-full object-cover rounded-xl" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src="/images/img_icon_container_gray_900_64x124.svg" alt="" className="w-24 h-12 sm:w-31 h-16 rounded-lg" />
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-global-11 text-xl font-medium">AI Assistant</h3>
                  <p className="text-global-6 text-base">Deploy intelligent virtual agents to</p>
                  <p className="text-global-6 text-base">streamline tasks.</p>
                </div>
              </div>
            </div>

            {/* Sales & Marketing */}
            <div className="bg-global-2 border border-[#d8e7f211] rounded-2xl p-6 sm:p-8 shadow-[0px_2px_1px_#cfe7ff33]">
              <div className="space-y-6">
                <div className="relative h-32 sm:h-40">
                  <img src="/images/img_light_4.png" alt="" className="w-full h-full object-cover rounded-xl" />
                  <div className="absolute top-12 inset-x-0 flex justify-center">
                    <img src="/images/img_icon_container_64x124.svg" alt="" className="w-24 h-12 sm:w-31 h-16 rounded-lg" />
                  </div>
                </div>
                <div className="text-center space-y-1.5 -mt-20">
                  <h3 className="text-global-11 text-xl font-medium">Sales & Marketing</h3>
                  <p className="text-global-6 text-base">Leverage AI to optimize campaigns, track</p>
                  <p className="text-global-6 text-base">leads, and personalize outreach.</p>
                </div>
              </div>
            </div>

            {/* Performance Tracking */}
            <div className="bg-global-2 border border-[#d8e7f211] rounded-2xl p-6 sm:p-8 shadow-[0px_2px_1px_#cfe7ff33]">
              <div className="space-y-6">
                <div className="relative h-32 sm:h-40">
                  <img src="/images/img_light_5.png" alt="" className="w-full h-full object-cover rounded-xl" />
                  <div className="absolute top-12 inset-x-0 flex justify-center">
                    <img src="/images/img_icon_container_1.svg" alt="" className="w-24 h-12 sm:w-31 h-16 rounded-lg" />
                  </div>
                </div>
                <div className="text-center space-y-1.5 -mt-20">
                  <h3 className="text-global-11 text-xl font-medium">Performance Tracking</h3>
                  <p className="text-global-6 text-base">Track automation results in real time to</p>
                  <p className="text-global-6 text-base">improve and scale your workflows.</p>
                </div>
              </div>
            </div>

            {/* Seamless Integrations */}
            <div className="bg-global-2 border border-[#d8e7f211] rounded-2xl p-6 sm:p-8 shadow-[0px_2px_1px_#cfe7ff33]">
              <div className="space-y-6">
                <div className="relative h-32 sm:h-40">
                  <img src="/images/img_light_6.png" alt="" className="w-full h-full object-cover rounded-xl" />
                  <div className="absolute top-12 inset-x-0 flex justify-center">
                    <img src="/images/img_icon_container_2.svg" alt="" className="w-24 h-12 sm:w-31 h-16 rounded-lg" />
                  </div>
                </div>
                <div className="text-center space-y-1.5 -mt-20">
                  <h3 className="text-global-11 text-xl font-medium">Seamless Integrations</h3>
                  <p className="text-global-6 text-base">Connect your tools and apps for smooth,</p>
                  <p className="text-global-6 text-base">unified AI-powered workflows.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Shape */}
        <div className="flex justify-center mt-16">
          <img src="/images/img_bg_shape.png" alt="" className="w-full max-w-[884px] h-[166px] sm:h-[332px] rounded-xl" />
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full bg-global-2 py-16 sm:py-24">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <Button
              variant="secondary"
              leftImage={{
                src: "/images/img_3233394945.svg",
                width: 16,
                height: 16
              }}
              className="mb-6 text-global-4 text-xs border border-[#d8e7f211] rounded-[14px] bg-global-2"
            >
              PROCESS
            </Button>
            
            <h2 className="text-[22px] sm:text-[32px] md:text-[44px] font-medium leading-tight bg-gradient-to-r from-global-4 to-global-2 bg-clip-text text-transparent mb-4">
              Our Simple &
            </h2>
            
            <p className="text-global-4 text-base">
              Everything you need to collaborate, create, and scale, all in one place.
            </p>
          </div>

          {/* Process Steps */}
          <div className="bg-global-2 border border-[#d8e7f211] rounded-2xl p-4 sm:p-6 shadow-[0px_2px_1px_#cfe7ff33]">
            {/* Step Tabs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button
                variant={selectedTab === 0 ? "primary" : "secondary"}
                onClick={() => setSelectedTab(0)}
                className={`flex-1 ${selectedTab === 0 ? 'bg-button-1' : 'bg-button-1'} text-global-4 text-xs rounded-lg shadow-[0px_1px_1px_#cfe7ff33]`}
              >
                STEP 1
              </Button>
              <Button
                variant={selectedTab === 1 ? "primary" : "secondary"}
                onClick={() => setSelectedTab(1)}
                className={`flex-1 ${selectedTab === 1 ? 'bg-button-1' : 'bg-button-1'} text-global-4 text-xs rounded-lg shadow-[0px_1px_1px_#cfe7ff33]`}
              >
                STEP 2
              </Button>
              <Button
                variant={selectedTab === 2 ? "primary" : "secondary"}
                onClick={() => setSelectedTab(2)}
                className={`flex-1 ${selectedTab === 2 ? 'bg-global-4' : 'bg-button-1'} text-global-4 text-xs rounded-lg shadow-[0px_1px_1px_#cfe7ff33]`}
              >
                STEP 3
              </Button>
            </div>

            {/* Step Content */}
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="flex-1">
                <img 
                  src="/images/img_graphic_container.png" 
                  alt="Process Step" 
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-[20px]" 
                />
              </div>
              <div className="flex-1 flex justify-center lg:justify-end">
                <span className="text-global-2 text-sm">03</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Shape */}
        <div className="flex justify-center mt-16">
          <img src="/images/img_bg_shape.png" alt="" className="w-full max-w-[884px] h-[166px] sm:h-[332px] rounded-xl" />
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="w-full bg-global-2 py-16 sm:py-24">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <Button
              variant="secondary"
              leftImage={{
                src: "/images/img_3752660003_blue_gray_100.svg",
                width: 16,
                height: 16
              }}
              className="mb-6 text-global-4 text-xs border border-[#d8e7f211] rounded-[14px] bg-global-2"
            >
              OUR CLIENTS
            </Button>
            
            <h2 className="text-[22px] sm:text-[32px] md:text-[44px] font-medium leading-tight bg-gradient-to-r from-global-4 to-global-2 bg-clip-text text-transparent mb-4">
              Success Stories to
            </h2>
            
            <p className="text-global-4 text-base">
              Discover how businesses and creators achieve results
            </p>
          </div>

          {/* Success Stories Carousel */}
          <div className="relative">
            <div className="space-y-12">
              {successStories.map((story, index) => (
                <div key={index} className="bg-global-2 border-2 border-[#d8e7f211] rounded-xl p-6 sm:p-8 shadow-[0px_2px_1px_#cfe7ff33]">
                  {/* Story Header */}
                  <div className="flex justify-between items-center mb-6 sm:mb-8">
                    <img src="/images/img_svg.svg" alt="" className="w-7 h-7" />
                    <img src="/images/img_dots.svg" alt="" className="w-11 h-2.5" />
                  </div>

                  {/* Story Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                    <div className="space-y-6">
                      <div className="space-y-3.5">
                        <h3 className="text-global-4 text-[20px] sm:text-[28px] font-medium leading-tight">
                          {story.name}
                        </h3>
                        <p className="text-global-6 text-base leading-relaxed">
                          {story.description}
                        </p>
                      </div>

                      {/* Metrics */}
                      <div className="flex gap-4">
                        {story.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="bg-[linear-gradient(90deg,#b8c7d919_0%,_#b8c7d919_100%)] rounded-lg p-4 sm:p-5 shadow-[0px_2px_1px_#cfe7ff33] text-center">
                            <div className="flex items-center justify-center gap-0.5 mb-2.5">
                              <span className="text-global-11 text-[24px] sm:text-[32px] font-normal">{metric.value}</span>
                              <span className="text-global-4 text-[20px] sm:text-[28px] font-medium">%</span>
                            </div>
                            <p className="text-global-4 text-base">{metric.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                      <img 
                        src={story.image} 
                        alt={story.name} 
                        className="w-full max-w-[360px] lg:max-w-[434px] h-64 sm:h-80 object-cover rounded-xl" 
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote Section */}
            <div className="text-center mt-12 sm:mt-16 space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-2 text-[16px] sm:text-[24px] md:text-[32px] leading-tight">
                  <span className="text-global-2">They</span>
                  <span className="text-global-2 ml-1.5">took</span>
                  <span className="text-global-2 ml-1.5">the</span>
                  <span className="text-global-2 ml-1">time</span>
                  <span className="text-global-2 ml-1">to</span>
                  <span className="text-global-2 ml-1">understand</span>
                  <span className="text-global-2 ml-1.5">our</span>
                  <span className="text-global-4 font-serif italic ml-1.5">challenges</span>
                  <span className="text-global-2">,</span>
                </div>
                
                <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-2 text-[16px] sm:text-[24px] md:text-[32px] leading-tight">
                  <span className="text-global-2">identified</span>
                  <span className="text-global-2 ml-1.5">our</span>
                  <span className="text-global-4 font-serif italic ml-1.5">target</span>
                  <span className="text-global-4 font-serif italic">audience</span>
                  <span className="text-global-2">,</span>
                  <span className="text-global-2 ml-1.5">and</span>
                  <span className="text-global-2 ml-1.5">made</span>
                  <span className="text-global-2 ml-1.5">our</span>
                  <span className="text-global-2 ml-1.5">brand</span>
                </div>
                
                <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-2 text-[16px] sm:text-[24px] md:text-[32px] leading-tight">
                  <span className="text-global-2">shine.</span>
                  <span className="text-global-2">Their</span>
                  <span className="text-global-2">solutions</span>
                  <span className="text-global-2">were</span>
                  <span className="text-global-2">very</span>
                  <span className="text-global-2">effective!</span>
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-4">
                <div className="w-2.5 h-2.5 bg-global-11 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-global-14 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-global-14 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Shape */}
        <div className="flex justify-center mt-16">
          <img src="/images/img_bg_shape.png" alt="" className="w-full max-w-[884px] h-[166px] sm:h-[332px] rounded-xl" />
        </div>
      </section>

      {/* Integrations Section */}
      <section className="w-full bg-global-2 py-16 sm:py-24">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-1.5 py-1.5 mb-6 border border-[#d8e7f211] rounded-[14px] bg-global-2">
              <img src="/images/img_3076148817.svg" alt="" className="w-4 h-4" />
              <span className="text-global-4 text-xs">INTEGRATIONS</span>
            </div>
            
            <h2 className="text-[22px] sm:text-[32px] md:text-[44px] font-serif italic leading-tight bg-gradient-to-r from-global-4 to-global-2 bg-clip-text text-transparent mb-4">
              Integrations
            </h2>
            
            <p className="text-global-4 text-base">
              Interact with all your favorite software without unnecessary fuss
            </p>
          </div>

          {/* Integration Visual */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex justify-center">
              <img 
                src="/images/img_content.svg" 
                alt="Integration Diagram" 
                className="w-full max-w-[600px] h-64 sm:h-80 rounded-2xl" 
              />
            </div>
            
            <p className="text-global-9 text-base text-center">
              "Our AI automation plugs into your stack to create a unified, intelligent workflow"
            </p>
          </div>
        </div>
        
        {/* Background Shape */}
        <div className="flex justify-center mt-16">
          <img src="/images/img_bg_shape.png" alt="" className="w-full max-w-[884px] h-[166px] sm:h-[332px] rounded-xl" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-global-2 py-16 sm:py-24">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <Button
              variant="secondary"
              leftImage={{
                src: "/images/img_4282185190.svg",
                width: 16,
                height: 16
              }}
              className="mb-6 text-global-4 text-xs border border-[#d8e7f211] rounded-[14px] bg-global-2"
            >
              REVIEWS
            </Button>
            
            <h2 className="text-[22px] sm:text-[32px] md:text-[44px] font-medium leading-tight bg-gradient-to-r from-global-4 to-global-2 bg-clip-text text-transparent mb-4">
              Trusted by
            </h2>
            
            <p className="text-global-4 text-base">
              Hear from real users who achieved success with our automation
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="space-y-16 sm:space-y-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <div key={index} className="bg-[linear-gradient(90deg,#b8c7d919_0%,_#b8c7d919_100%)] rounded-2xl p-6 sm:p-8">
                  <div className="space-y-6">
                    {/* User Info */}
                    <div className="flex items-center gap-3.5 p-3.5 sm:p-4 bg-global-2 rounded-2xl shadow-[0px_-1px_1px_#cfe7ff19]">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover" 
                      />
                      <div className="space-y-0.5">
                        <h4 className="text-global-4 text-base font-normal">{testimonial.name}</h4>
                        <p className="text-global-5 text-xs">{testimonial.role}</p>
                      </div>
                    </div>

                    {/* Quote */}
                    <p className="text-global-4 text-base leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.slice(3, 6).map((testimonial, index) => (
                <div key={index + 3} className="bg-[linear-gradient(90deg,#b8c7d919_0%,_#b8c7d919_100%)] rounded-2xl p-6 sm:p-8">
                  <div className="space-y-6">
                    {/* User Info */}
                    <div className="flex items-center gap-3.5 p-3.5 sm:p-4 bg-global-2 rounded-2xl shadow-[0px_-1px_1px_#cfe7ff19]">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover" 
                      />
                      <div className="space-y-0.5">
                        <h4 className="text-global-4 text-base font-normal">{testimonial.name}</h4>
                        <p className="text-global-5 text-xs">{testimonial.role}</p>
                      </div>
                    </div>

                    {/* Quote */}
                    <p className="text-global-4 text-base leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Company Logos */}
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16">
              <img src="/images/img_item_logo_r.png" alt="Company Logo" className="h-6 sm:h-8 opacity-60" />
              <img src="/images/img_item_logo_h.png" alt="Company Logo" className="h-6 sm:h-8 opacity-60" />
              <img src="/images/img_item_logo_1.png" alt="Company Logo" className="h-6 sm:h-8 opacity-60" />
              <img src="/images/img_item_logo_y.png" alt="Company Logo" className="h-6 sm:h-8 opacity-60" />
              <img src="/images/img_item_logo_o.png" alt="Company Logo" className="h-6 sm:h-8 opacity-60" />
              <img src="/images/img_item_logo_r.png" alt="Company Logo" className="h-6 sm:h-8 opacity-60" />
            </div>
          </div>
        </div>
        
        {/* Background Shape */}
        <div className="flex justify-center mt-16">
          <img src="/images/img_bg_shape.png" alt="" className="w-full max-w-[884px] h-[166px] sm:h-[332px] rounded-xl" />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full bg-global-2 py-16 sm:py-24">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <Button
              variant="secondary"
              leftImage={{
                src: "/images/img_1547879971.svg",
                width: 16,
                height: 16
              }}
              className="mb-6 text-global-4 text-xs border border-[#d8e7f211] rounded-[14px] bg-global-2"
            >
              PRICING
            </Button>
            
            <h2 className="text-[22px] sm:text-[32px] md:text-[44px] font-medium leading-tight bg-gradient-to-r from-global-4 to-global-2 bg-clip-text text-transparent mb-4">
              Flexible Plans for
            </h2>
            
            <p className="text-global-4 text-base">
              Choose a plan that fits your goals and scale as you grow
            </p>
          </div>

          {/* Pricing Toggle */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="flex items-center bg-global-4 rounded-lg p-1 shadow-[0px_1px_1px_#cfe7ff33]">
              <button
                onClick={() => setSelectedPlan('monthly')}
                className={`px-6 sm:px-8 py-2 text-sm font-medium rounded-md transition-colors ${
                  selectedPlan === 'monthly' ?'bg-global-2 text-global-4' :'text-global-8'
                }`}
              >
                Monthly
              </button>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setSelectedPlan('yearly')}
                  className={`text-sm font-medium ${
                    selectedPlan === 'yearly' ? 'text-global-4' : 'text-global-8'
                  }`}
                >
                  Yearly
                </button>
                <Button
                  variant="secondary"
                  className="text-global-4 text-sm bg-global-2 border border-[#d8e7f211] rounded-[14px]"
                >
                  Save 20%
                </Button>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="bg-[linear-gradient(90deg,#b8c7d919_0%,_#b8c7d919_100%)] border border-[#d8e7f211] rounded-2xl p-6 sm:p-8 shadow-[0px_2px_1px_#cfe7ff33]">
                <div className="space-y-6">
                  {/* Plan Header */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-2">
                      <h3 className="text-global-11 text-base font-semibold">{plan.name}</h3>
                      {plan.popular && (
                        <Button
                          variant="secondary"
                          leftImage={{
                            src: "/images/img_svg_white_a700.svg",
                            width: 20,
                            height: 20
                          }}
                          className="text-global-11 text-sm bg-global-2 border border-[#d8e7f211] rounded-2xl shadow-[0px_1px_1px_#cfe7ff33]"
                        >
                          Popular
                        </Button>
                      )}
                    </div>

                    {/* Price */}
                    <div className="flex items-end gap-1.5">
                      <span className="text-global-4 text-[32px] sm:text-[44px] font-medium">{plan.price}</span>
                      {plan.period && (
                        <span className="text-global-10 text-sm mb-1">{plan.period}</span>
                      )}
                    </div>

                    {/* CTA Button */}
                    {plan.popular ? (
                      <Button
                        variant="primary"
                        fullWidth
                        rightImage={{
                          src: "/images/img_mask_group_white_a700.svg",
                          width: 22,
                          height: 22
                        }}
                        className="bg-[linear-gradient(90deg,#ffffff_0%,_#ffffff00_100%)] text-global-11 font-semibold"
                      >
                        Get Started
                      </Button>
                    ) : (
                      <div className="relative">
                        <div className="w-full h-12 bg-global-2 rounded-lg border border-[#d8e7f211]"></div>
                        <div className="absolute inset-0 flex items-center justify-center gap-1">
                          <span className="text-global-11 text-base font-semibold">Get Started</span>
                          <img src="/images/img_mask_group_white_a700.svg" alt="" className="w-5 h-5" />
                        </div>
                      </div>
                    )}

                    {/* Divider */}
                    <img src="/images/img_border.png" alt="" className="w-full h-0.5" />
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2">
                        <img src="/images/img_svg_blue_gray_100.svg" alt="" className="w-4 h-4 mt-0.5" />
                        <span className="text-global-10 text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="flex justify-center mt-8 sm:mt-12">
            <div className="flex items-center gap-4 px-1.5 py-1.5 bg-global-4 rounded-lg">
              <img src="/images/img_779403512.svg" alt="" className="w-6 h-6" />
              <span className="text-global-4 text-base">
                We donate 2% of your membership to pediatric wellbeing
              </span>
            </div>
          </div>
        </div>
        
        {/* Background Shape */}
        <div className="flex justify-center mt-16">
          <img src="/images/img_bg_shape.png" alt="" className="w-full max-w-[884px] h-[166px] sm:h-[332px] rounded-xl" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-global-2 py-16 sm:py-24">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <Button
              variant="secondary"
              leftImage={{
                src: "/images/img_1167808242.svg",
                width: 16,
                height: 16
              }}
              className="mb-6 text-global-4 text-xs border border-[#d8e7f211] rounded-[14px] bg-global-2"
            >
              FAQ'S
            </Button>
            
            <h2 className="text-[22px] sm:text-[32px] md:text-[44px] font-medium leading-tight bg-gradient-to-r from-global-4 to-global-2 bg-clip-text text-transparent mb-4">
              Frequently Asked
            </h2>
            
            <p className="text-global-4 text-base">
              Find quick answers to the most common support questions
            </p>
          </div>

          {/* FAQ Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Card */}
            <div className="bg-[linear-gradient(90deg,#b8c7d919_0%,_#b8c7d919_100%)] rounded-[20px] p-6 sm:p-8 shadow-[0px_2px_1px_#cfe7ff33]">
              <div className="text-center space-y-6">
                <div className="flex justify-center">
                  <div className="w-14 h-14 bg-global-2 rounded-lg flex items-center justify-center shadow-[0px_1px_1px_#cfe7ff33]">
                    <img src="/images/img_1059275922.svg" alt="" className="w-8 h-8" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-global-4 text-xl font-medium">Still Have Questions?</h3>
                  <p className="text-global-4 text-base">
                    Still have questions? Feel free to get in touch with us today!
                  </p>
                </div>

                <Button
                  variant="primary"
                  leftImage={{
                    src: "/images/img_mask_group_white_a700.svg",
                    width: 20,
                    height: 20
                  }}
                  className="bg-[linear-gradient(180deg,#10131c_0%,_#d8e7f211_100%)] text-global-12 font-medium border border-[#d8e7f211] shadow-[0px_-8px_8px_#0000003d]"
                >
                  Ask A Question
                </Button>
              </div>
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-global-2 border border-[#d8e7f211] rounded-[10px] shadow-[0px_2px_1px_#cfe7ff33]">
                  {item.isOpen ? (
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-global-4 text-base">{item.question}</h4>
                        <img src="/images/img_container_svg.svg" alt="" className="w-5 h-5" />
                      </div>
                      <p className="text-global-4 text-base leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  ) : (
                    <div className="flex justify-between items-center p-4">
                      <h4 className="text-global-4 text-base">{item.question}</h4>
                      <img src="/images/img_close_container.svg" alt="" className="w-5 h-5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Background Shape */}
        <div className="flex justify-center mt-16">
          <img src="/images/img_bg_shape.png" alt="" className="w-full max-w-[884px] h-[166px] sm:h-[332px] rounded-xl" />
        </div>
      </section>

      {/* Comparison Section */}
      <section className="w-full bg-global-2 py-16 sm:py-24">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <Button
              variant="secondary"
              leftImage={{
                src: "/images/img_1540026494.svg",
                width: 16,
                height: 16
              }}
              className="mb-6 text-global-4 text-xs border border-[#d8e7f211] rounded-[14px] bg-global-2"
            >
              COMPARISON
            </Button>
            
            <h2 className="text-[22px] sm:text-[32px] md:text-[44px] font-medium leading-tight bg-gradient-to-r from-global-4 to-global-2 bg-clip-text text-transparent mb-4">
              Why Choose Us
            </h2>
            
            <p className="text-global-4 text-base">
              See how we compare against others in performance, growth
            </p>
          </div>

          {/* Comparison Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Our Platform */}
            <div className="space-y-2">
              <div className="flex justify-center p-2.5">
                <img src="/images/img_04vjjz3d2ponpv6.png" alt="Our Platform" className="h-8 sm:h-10" />
              </div>
              
              <div className="bg-global-2 border border-[#d8e7f211] rounded-2xl shadow-[0px_2px_1px_#cfe7ff33]">
                <div className="space-y-0">
                  <div className="flex items-center gap-2.5 p-6 sm:p-8">
                    <img src="/images/img_svg11505255690.svg" alt="" className="w-4 h-3.5" />
                    <span className="text-global-4 text-base">Fast setup with ready AI workflows</span>
                  </div>
                  
                  <div className="flex items-center gap-2.5 p-6 sm:p-8">
                    <img src="/images/img_svg11505255690.svg" alt="" className="w-4 h-5" />
                    <span className="text-global-4 text-base">Built to grow and adapt with you</span>
                  </div>
                  
                  <div className="flex items-center gap-2.5 p-6 sm:p-8">
                    <img src="/images/img_svg11505255690.svg" alt="" className="w-4 h-5" />
                    <span className="text-global-4 text-base">Real-time, AI-powered analytics</span>
                  </div>
                  
                  <div className="flex items-center gap-2.5 p-6 sm:p-8">
                    <img src="/images/img_svg11505255690.svg" alt="" className="w-4 h-5" />
                    <span className="text-global-4 text-base">Automates tasks, reducing overhead</span>
                  </div>
                  
                  <div className="flex items-center gap-2.5 p-6 sm:p-8">
                    <img src="/images/img_svg11505255690.svg" alt="" className="w-4 h-5" />
                    <span className="text-global-4 text-base">Expert support + AI guidance</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Others */}
            <div className="space-y-2">
              <div className="flex justify-center items-center gap-2 p-3">
                <img src="/images/img_3076148817_white_a700.svg" alt="" className="w-6 h-6" />
                <span className="text-[18px] sm:text-[24px] font-serif italic bg-gradient-to-r from-global-4 to-global-2 bg-clip-text text-transparent">
                  Others
                </span>
              </div>
              
              <div className="bg-global-2 border border-[#d8e7f211] rounded-2xl shadow-[0px_2px_1px_#cfe7ff33]">
                <div className="space-y-0">
                  <div className="flex items-center gap-2.5 p-6 sm:p-8">
                    <img src="/images/img_svg12058602176.svg" alt="" className="w-3.5 h-4" />
                    <span className="text-global-7 text-base">Slower execution and manual setup</span>
                  </div>
                  
                  <div className="flex items-center gap-2.5 p-6 sm:p-8">
                    <img src="/images/img_svg12058602176.svg" alt="" className="w-3.5 h-4" />
                    <span className="text-global-4 text-base">Requires manual updates as you scale</span>
                  </div>
                  
                  <div className="flex items-center gap-2.5 p-6 sm:p-8">
                    <img src="/images/img_svg12058602176.svg" alt="" className="w-3.5 h-4" />
                    <span className="text-global-4 text-base">Limited or delayed reporting</span>
                  </div>
                  
                  <div className="flex items-center gap-2.5 p-6 sm:p-8">
                    <img src="/images/img_svg12058602176.svg" alt="" className="w-3.5 h-4" />
                    <span className="text-global-4 text-base">Higher labor costs, less automation</span>
                  </div>
                  
                  <div className="flex items-center gap-2.5 p-6 sm:p-8">
                    <img src="/images/img_svg12058602176.svg" alt="" className="w-3.5 h-4" />
                    <span className="text-global-4 text-base">Generic support or none at all</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Shape */}
        <div className="flex justify-center mt-16">
          <img src="/images/img_bg_shape.png" alt="" className="w-full max-w-[884px] h-[166px] sm:h-[332px] rounded-xl" />
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full bg-global-2 py-16 sm:py-24">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <Button
              variant="secondary"
              leftImage={{
                src: "/images/img_535953797.svg",
                width: 16,
                height: 16
              }}
              className="mb-6 text-global-4 text-xs border border-[#d8e7f211] rounded-[14px] bg-global-2"
            >
              OUR AMAZING TEAM
            </Button>
            
            <h2 className="text-[22px] sm:text-[32px] md:text-[44px] font-medium leading-tight bg-gradient-to-r from-global-4 to-global-2 bg-clip-text text-transparent mb-4">
              Get to Know
            </h2>
            
            <p className="text-global-4 text-base">
              Everything you need to collaborate, create, and scale, all in one place.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-[linear-gradient(90deg,#b8c7d919_0%,_#b8c7d919_100%)] rounded-2xl p-6 sm:p-8 shadow-[0px_2px_1px_#cfe7ff33]">
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="space-y-3 sm:space-y-5.5">
                    <div className="space-y-2.5 sm:space-y-3">
                      <h3 className="text-global-4 text-base">{member.name}</h3>
                      <p className="text-global-6 text-xs">{member.role}</p>
                    </div>
                    
                    <div className="flex gap-2">
                      {member.socialLinks.map((link, linkIndex) => (
                        <img 
                          key={linkIndex} 
                          src={link} 
                          alt="" 
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg" 
                        />
                      ))}
                    </div>
                  </div>
                  
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-20 h-18 sm:w-24 sm:h-22 md:w-36 md:h-33 rounded-lg object-cover" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Background Shape */}
        <div className="flex justify-center mt-16">
          <img src="/images/img_bg_shape.png" alt="" className="w-full max-w-[884px] h-[166px] sm:h-[332px] rounded-xl" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-global-2 py-16 sm:py-24">
        <div className="relative w-full max-w-[884px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Background Image */}
          <img 
            src="/images/img_bg_shape.png" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover rounded-xl" 
          />
          
          {/* CTA Content */}
          <div className="relative z-10 text-center py-16 sm:py-24 px-6 sm:px-12">
            <div className="space-y-6 sm:space-y-8">
              {/* Divider with Text */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-global-11 to-global-11"></div>
                <span className="text-global-4 text-base font-serif italic">Reach out anytime</span>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent via-global-11 to-global-11"></div>
              </div>

              {/* Main Heading */}
              <div className="space-y-2">
                <h2 className="text-[22px] sm:text-[32px] md:text-[44px] font-medium leading-tight bg-gradient-to-r from-global-4 to-global-2 bg-clip-text text-transparent">
                  Ready to Automate Smarter?
                </h2>
                <h2 className="text-[22px] sm:text-[32px] md:text-[44px] font-medium leading-tight bg-gradient-to-r from-global-4 to-global-2 bg-clip-text text-transparent">
                  Let's
                </h2>
              </div>

              {/* Subtitle */}
              <p className="text-global-4 text-base">
                Schedule a Call and Begin Automating
              </p>

              {/* CTA Button */}
              <Button
                variant="primary"
                size="large"
                rightImage={{
                  src: "/images/img_mask_group.png",
                  width: 22,
                  height: 22
                }}
                className="bg-[linear-gradient(90deg,#ffffff_0%,_#ffffff00_100%)] text-global-11 font-semibold"
              >
                Book A Free Call
              </Button>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex justify-center items-center gap-8 sm:gap-12">
                  <div className="relative w-4 h-4">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: "url('/images/img_el8uvqlqv.svg')" }}
                    >
                      <div className="flex flex-col gap-0.5 justify-start items-start w-[8%]">
                        <img src="/images/img_h4gjunyzh.svg" alt="" className="w-[6px] h-[6px] self-end" />
                        <img src="/images/img_h4gjunyzh.svg" alt="" className="w-[6px] h-[6px]" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-0.5 h-6 bg-[#d8e7f211]"></div>
                  
                  <div className="relative w-4 h-4">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: "url('/images/img_vvj8fldvj.svg')" }}
                    >
                      <div className="flex justify-end items-start w-4/5 h-full p-0.5">
                        <div className="w-0.5 h-0.5 bg-global-10 rounded-full mb-1.5"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-0.5 h-6 bg-[#d8e7f211]"></div>
                  
                  <div className="relative w-4 h-4">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: "url('/images/img_nb8qhy58t.svg')" }}
                    >
                      <div className="flex justify-center items-center w-full h-full">
                        <div className="flex justify-center items-start gap-0 mt-1">
                          <img src="/images/img_h4gjunyzh.svg" alt="" className="w-[6px] h-[1px] mt-1" />
                          <img src="/images/img_qfonxwoye.svg" alt="" className="w-[3px] h-[12px] -ml-0.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-global-4 text-base">
                  landio@support.com
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Image */}
        <div className="mt-16">
          <img src="/images/img_image_642x1920.png" alt="" className="w-full h-64 sm:h-80 lg:h-96 object-cover" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;