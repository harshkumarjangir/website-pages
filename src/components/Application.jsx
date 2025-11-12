import React from 'react'
import HeroSection from './application/Hero'
import OfficialPartners from './application/OfficialPartners'
import Section3 from './application/Section3'
import OverviewSection from './application/OverviewSection'
import RestaurantAppFeatures from './application/RestaurantAppFeatures'
import IncludedWithSection from './application/IncludedWithSection'
import AppDevelopmentServices from './application/AppDevelopmentServices'
import CallToAction from './application/CallToAction'
import HowItWorks from './application/HowItWorks'
import MobileMockUp from './application/MobileMockUp'
import FeatureSection from './application/FeatureSection'
import DemoSection from './application/DemoSection'
import DontSettle from './application/dashboard/DontSettle'
import Dashboard from './application/Dashboard'
import AppOperations from './application/AppOperations'
import MistakesToAvoid from './application/MistakesToAvoid'
import LatestTechnologies from './application/LatestTechnologies'
import VideoInsights from './application/VideoInsights'
import HireDevelopers from './application/HireDevelopers'
import CustomVsReadymadeApp from './application/CustomVsReadymadeApp'
import RestaurantAppSolutions from './application/RestaurantAppSolutions'
import AppDevelopment from './application/AppDevelopment'
import AppLanding from './application/AppLanding'
import FAQ from './application/FAQ'
import VideoTestimonialsSection from './application/VideoTestimonialsSection'
import CompanyTestimonials from './application/CompanyTestimonials'
import DiscussProject from './application/DiscussProject'
import AppPortfolio from './application/AppPortfolio'
import LatestBlogs from './application/LatestBlogs'
import GlobalOffices from './application/GlobalOffices'
import Footer from './application/Footer'
import CtaSection from './application/CtaSection'
import OverviewSection3 from './application/OverviewSection3'

const Application = ({data}) => {
     const homedata = data; // this fixes undefined error
    return (
        <>
            <HeroSection data={homedata.heroSection} />
            <OfficialPartners data={homedata.officialPartners} />
            <Section3 data={homedata.section3} />
            <OverviewSection data={homedata.overviewSection} />
            {/* <OverviewSection3 data={homedata.overviewSection} /> */}
            <RestaurantAppFeatures data={homedata.restaurantAppFeaturesSection} />
            <IncludedWithSection data={homedata.includedSection} />
            <AppDevelopmentServices data={homedata.developmentServicesSection} />
            <CallToAction data={homedata.callToAction} />
            <HowItWorks data={homedata.howItWorks} />
            <MobileMockUp data={homedata.mobileMockupSection} />
            <FeatureSection data={homedata.featureSection} />
            {/* <CtaSection data={homedata.ctaSection[0]} /> */}
            {/* <CtaSection data={homedata.ctaSection[1]} /> */}
            {/* <CtaSection data={homedata.ctaSection[3]} /> */}
            {/* <CtaSection data={homedata.ctaSection[4]} /> */}
            {/* <CtaSection data={homedata.ctaSection[5]} /> */}
            <CtaSection data={homedata.ctaSection[2]} />
            {/* <CtaSection data={homedata.ctaSection[6]} /> */}
            {/* <DemoSection data={homedata.demoSection} colorTheme={homedata.demoSection.colorWhite} /> */}
            <DontSettle data={homedata.dontSettle} />
            <Dashboard data={homedata.dashboardSection} />
            {/* <DemoSection data={homedata.demoSection} colorTheme={homedata.demoSection.colorGreen} /> */}
            <CtaSection data={homedata.ctaSection[6]} />
            {/* <BusinessInterfaces data={homedata.businessInterfaces} /> */}
            <AppOperations data={homedata.appOperations} />
            <MistakesToAvoid data={homedata.mistakesToAvoidSection} />

            {/* <AppDevelopmentProcess data={homedata2.appDevelopmentProcessStepsOld} /> */}
            <HowItWorks data={homedata.appDevelopmentProcessSteps} />

            <LatestTechnologies data={homedata.latestTechnologies} />
            <VideoInsights data={homedata.videoInsights} />
            <HireDevelopers data={homedata.hireDevelopers} />
            <CustomVsReadymadeApp data={homedata.customVsReadymadeApp} />
            <RestaurantAppSolutions data={homedata.restaurantAppSolutions} />
            <AppDevelopment data={homedata.appDevelopment} />
            <AppLanding data={homedata.appLandingSection} />
            <FAQ data={homedata.faqSection} />
            <VideoTestimonialsSection data={homedata.videoTestimonials} />
            <CompanyTestimonials data={homedata.companyTestimonials} />
            <DiscussProject data={homedata.discussProject} />

            <AppPortfolio data={homedata.restaurantData} />

            <LatestBlogs data={homedata.latestBlogs} />
            {/* <GlobalOffices data={homedata.offices} /> */}
            {/* <Footer /> */}
        </>
    )
}

export default Application