import { Inter } from "../ui/fonts";
import RevenueChart from "../ui/dashboard/revenue-chart";
import LatestInvoices from "../ui/dashboard/latest-invoices";
import { Suspense } from "react";
import { RevenueChartSkeleton } from "../ui/skeletons";
import { LatestInvoicesSkeleton } from "../ui/skeletons";
import { Card }  from "../ui/dashboard/cards";
import { string } from "zod";

export default function Page() {
    // Define the data variables or obtain them from props or context
    const totalPaidInvoices = 0;  // Replace with actual value or logic to obtain value
    const totalPendingInvoices = 0;  // Replace with actual value or logic to obtain value
    const numberOfInvoices = 0;  // Replace with actual value or logic to obtain value
    const numberOfCustomers = 0;  // Replace with actual value or logic to obtain value

    return (
        <main>
            <h1 className={`mb-4 text-xl md:text-2xl`}>  {/* Adjusted className */}
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card 
            title="Collected" 
            value={totalPaidInvoices} 
            type="collected"
            totalPaidInvoices={totalPaidInvoices}
            totalPendingInvoices={totalPendingInvoices}
            numberOfInvoices={numberOfInvoices}
            numberOfCustomers={numberOfCustomers}
        /> 
        <Card 
            title="Pending" 
            value={totalPendingInvoices} 
            type="pending"
            totalPaidInvoices={totalPaidInvoices}
            totalPendingInvoices={totalPendingInvoices}
            numberOfInvoices={numberOfInvoices}
            numberOfCustomers={numberOfCustomers}
        /> 
        <Card 
            title="Total Invoices" 
            value={numberOfInvoices} 
            type="invoices"
            totalPaidInvoices={totalPaidInvoices}
            totalPendingInvoices={totalPendingInvoices}
            numberOfInvoices={numberOfInvoices}
            numberOfCustomers={numberOfCustomers}
        /> 
        <Card
            title="Total customers"
            value={numberOfCustomers}
            type="customers"
            totalPaidInvoices={totalPaidInvoices}
            totalPendingInvoices={totalPendingInvoices}
            numberOfInvoices={numberOfInvoices}
            numberOfCustomers={numberOfCustomers}
        /> 
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <Suspense fallback={<RevenueChartSkeleton />}>
                    <RevenueChart /> 
                </Suspense>    
                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <LatestInvoices /> 
                </Suspense>
            </div>
        </main>
    );
}
