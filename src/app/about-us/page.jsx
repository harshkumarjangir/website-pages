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
import AbouUsForm from '@/components/aboutUs/AbouUsForm'
import SpiritualFoundation from '@/components/aboutUs/SpiritualFoundation'
import WhyPeopleLoveMetaBlock from '@/components/aboutUs/WhyPeopleLoveMetaBlock'
import CultureOfMetablock from '@/components/aboutUs/CultureOfMetablock'


const AboutPage = () => {
    return (
        <div>
            <HeroSection data={aboutUsData.heroSection} />
            <CompanyOverview data={aboutUsData.companyOverview} />
            {/* <WhoWeAre data={aboutUsData.whoWeAre} /> */}
            <OurVisionMission data={aboutUsData.ourVisionMission} />
            <SpiritualFoundation data={aboutUsData.spiritualFoundationSection}/>
            <WhyChooseUs data={aboutUsData.financialGrouth} />
            <CultureOfMetablock data={aboutUsData.cultureOfMetablock} />
            <WhyPeopleLoveMetaBlock data={aboutUsData.whyPeopleLoveMetaBlock}/>
            <OurAchievements data={aboutUsData.ourAchievements} />
            <CtaSection data={aboutUsData.ctaSection[0]} />
            <LatestTechnologies data={aboutUsData.latestTechnologies} />
            <OurStory data={aboutUsData.ourStory} />
            <PartnershipSection data={aboutUsData.partnershipSection} />
            <CtaSection data={aboutUsData.ctaSection[2]} />
            <IndustriesSection data={aboutUsData.industriesSection} />
            {/* <DevelopmentProcess data={aboutUsData.developmentProcessSection} /> */}
            <OurExpertise data={aboutUsData.ourExpertise} />
            <CtaSection data={aboutUsData.ctaSection[6]} />
            {/* <WhyChooseUs data={aboutUsData.whyChooseUs} /> */}
            <AbouUsForm data={aboutUsData.aboutUsForm} />

        </div>
    )
}

export default AboutPage