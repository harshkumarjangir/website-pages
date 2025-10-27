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


const AboutPage = () => {
    return (
        <div>
            <HeroSection data={aboutUsData.heroSection} />
            <CompanyOverview data={aboutUsData.companyOverview} />
            {/* <WhoWeAre data={aboutUsData.whoWeAre} /> */}
            <OurVisionMission data={aboutUsData.ourVisionMission} />
            <OurStory data={aboutUsData.ourStory} />
            <OurServices data={aboutUsData.ourServices} />
            <LatestTechnologies data={aboutUsData.latestTechnologies} />
            <CtaSection data={aboutUsData.ctaSection} />

        </div>
    )
}

export default AboutPage