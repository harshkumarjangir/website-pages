// import BusinessInterfaces from "./dashboard/BusinessInterfaces"
// import DashboardFeatures from "./dashboard/DashboardFeatures"
// import DashboardStatistics from "./dashboard/DashboardStatistics"
// import StoreDashboardFeatures from "./dashboard/StoreDashboardFeatures"
// import DontSettle from "./dashboard/DontSettle"

import DashboardFeatures from "./dashboard/DashboardFeatures"
import DashboardStatistics from "./dashboard/DashboardStatistics"


const Dashboard = ({ data }) => {
    const { dashboardFeaturesSection, dashboardStatistics, storeDashboardFeatures, businessInterfaces } = data
    return (
        <div className='w-full'>
            {/* <DontSettle /> */}
            <DashboardStatistics data={dashboardStatistics} />
            <DashboardFeatures data={dashboardFeaturesSection} />
            {/* <StoreDashboardFeatures data={storeDashboardFeatures} /> */}
            {/* <BusinessInterfaces data={businessInterfaces} /> */}
            {/* <EcommerceFlow /> */}
            {/* <AppFeatures /> */}
        </div>
    )
}

export default Dashboard