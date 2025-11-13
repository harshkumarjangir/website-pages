import ourTeamData from "@/data/ourTeamData.json";

import OurTeamHero from "@/components/ourTeam/OurTeamHero";
import OurLeaders from "@/components/ourTeam/OurLeaders";
import OurVisionaries from "@/components/ourTeam/OurVisionaries";
import Team from "@/components/ourTeam/Team";

export default function OurTeam() {
    const { teamHero, leaders, visionaries, teamDev ,teamSales } = ourTeamData;

    return (
        <>
            <OurTeamHero data={teamHero} />
            <OurLeaders data={leaders} />
            <OurVisionaries data={visionaries} />
            <Team data={teamDev} />
            <Team data={teamSales} />
        </>


    );
}
