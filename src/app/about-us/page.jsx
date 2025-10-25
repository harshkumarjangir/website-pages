import React from 'react'
import aboutUsData from '@/data/aboutData.json'
import HeroSection from '@/components/aboutUs/HeroSection'
import CompanyOverview from '@/components/aboutUs/CompanyOverview'
import WhoWeAre from '@/components/aboutUs/WhoWeAre'
import OurStory from '@/components/aboutUs/OurStory'
import LatestTechnologies from '@/components/aboutUs/LatestTechnologies'

const AboutPage = () => {
    return (
        <div>
            <HeroSection data={aboutUsData.heroSection} />
            <CompanyOverview data={aboutUsData.companyOverview} />
            <WhoWeAre data={aboutUsData.whoWeAre} />
            <OurStory data={aboutUsData.ourStory} />
            <LatestTechnologies data={aboutUsData.latestTechnologies} />

        </div>
    )
}

export default AboutPage