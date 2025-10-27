import React from 'react'
import aboutUsData from '@/data/aboutData.json'
import HeroSection from '@/components/aboutUs/HeroSection'
import CompanyOverview from '@/components/aboutUs/CompanyOverview'
import WhoWeAre from '@/components/aboutUs/WhoWeAre'
import OurStory from '@/components/aboutUs/OurStory'
import LatestTechnologies from '@/components/aboutUs/LatestTechnologies'
import CtaSection from '@/components/aboutUs/CtaSection'
import OurVisionMission from '@/components/aboutUs/OurVisionMission'
import OurServices from '@/components/aboutUs/OurServices'
import OurExpertise from '@/components/aboutUs/OurExpertise'
import OurAchievements from '@/components/aboutUs/OurAchievements'
import OurDevelopmentProcess from '@/components/aboutUs/OurDevelopmentProcess'
import IndustriesSection from '@/components/aboutUs/IndustriesSection'
import TechCapabilities from '@/components/aboutUs/TechCapabilities'
import WhyChooseUs from '@/components/aboutUs/WhyChooseUs'
import PartnershipSection from '@/components/aboutUs/PartnershipSection'
import DevelopmentProcess from '@/components/aboutUs/DevelopmentProcess'


const AboutPage = () => {
    return (
        <div>
            <HeroSection data={aboutUsData.heroSection} />
            <CompanyOverview data={aboutUsData.companyOverview} />
            {/* <WhoWeAre data={aboutUsData.whoWeAre} /> */}
            <OurVisionMission data={aboutUsData.ourVisionMission} />
            <OurAchievements data={aboutUsData.ourAchievements} />
            <OurStory data={aboutUsData.ourStory} />
            {/* <OurDevelopmentProcess data={aboutUsData.ourDevelopmentProcess} /> */}
            <DevelopmentProcess data={aboutUsData.developmentProcessSection} />
            <IndustriesSection data={aboutUsData.industriesSection} />
            {/* <OurServices data={aboutUsData.ourServices} /> */}
            {/* <TechCapabilities data={aboutUsData.techCapabilities} /> */}
            <OurExpertise data={aboutUsData.ourExpertise} />
            <LatestTechnologies data={aboutUsData.latestTechnologies} />
            <CtaSection data={aboutUsData.ctaSection} />
            <WhyChooseUs data={aboutUsData.whyChooseUs} />
            <PartnershipSection data={aboutUsData.partnershipSection} />

        </div>
    )
}

export default AboutPage