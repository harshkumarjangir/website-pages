import React from 'react'
import aboutUsData from '@/data/aboutData.json'
import HeroSection from '@/components/aboutUs/HeroSection'
import CompanyOverview from '@/components/aboutUs/CompanyOverview'
import WhoWeAre from '@/components/aboutUs/WhoWeAre'
import OurStory from '@/components/aboutUs/OurStory'
import LatestTechnologies from '@/components/aboutUs/LatestTechnologies'
import CtaSection from '@/components/aboutUs/CtaSection'
import OurVisionMission from '@/components/aboutUs/OurVisionMission'
import OurExpertise from '@/components/aboutUs/OurExpertise'
import OurAchievements from '@/components/aboutUs/OurAchievements'
import IndustriesSection from '@/components/aboutUs/IndustriesSection'
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
            <LatestTechnologies data={aboutUsData.latestTechnologies} />
            <OurStory data={aboutUsData.ourStory} />
            <PartnershipSection data={aboutUsData.partnershipSection} />
            <IndustriesSection data={aboutUsData.industriesSection} />
            <CtaSection data={aboutUsData.ctaSection} />
            <DevelopmentProcess data={aboutUsData.developmentProcessSection} />
            <OurExpertise data={aboutUsData.ourExpertise} />
            <WhyChooseUs data={aboutUsData.whyChooseUs} />

        </div>
    )
}

export default AboutPage