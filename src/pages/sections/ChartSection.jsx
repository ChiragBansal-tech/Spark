import React from "react";
import ReactApexChart from "react-apexcharts";

const IncomeTrend = () => {
    const series = [
        {
            name: "income",
            type: "column",
            data: [3500, 5000, 7000, 3000, 5000, 0],
        },
        {
            name: "momGrowth",
            type: "line",
            data: [40, 55, 50, -30, 60, -100],
        },
    ];

    const options = {
        chart: {
            height: 350,
            type: "line",
            stacked: false,
            toolbar: { show: false },
            zoom: { enabled: false },
        },
        stroke: {
            width: [0, 2],
            curve: "smooth",
        },
        plotOptions: {
            bar: {
                columnWidth: "40%",
                borderRadius: 4,
            },
        },
        colors: ["#A855F7", "#6B1E1E"], // Purple & Brownish-red
        dataLabels: {
            enabled: false,
        },
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        yaxis: [
            {
                seriesName: "income",
                title: { text: undefined },
                labels: {
                    formatter: (val) => `$${val / 1000}k`,
                },
                min: 0,
                max: 8000,
                tickAmount: 4,
            },
            {
                opposite: true,
                seriesName: "momGrowth",
                title: { text: undefined },
                labels: {
                    formatter: (val) => `${val}%`,
                },
                min: -100,
                max: 100,
                tickAmount: 4,
            },
        ],
        legend: {
            position: "bottom",
            horizontalAlign: "center",
            markers: {
                width: 14,
                height: 14,
                radius: 2,
                customHTML: [
                    () =>
                        `<div style="width:14px;height:14px;background:#A855F7;border-radius:2px;"></div>`,
                    () =>
                        `<div style="display:flex;align-items:center;justify-content:center;width:40px;height:20px;">
                            <div style="flex:2;height:2px;background:#6B1E1E;"></div>
                            <div style="width:6px;height:6px;border:2px solid #6B1E1E;border-radius:50%;background:white;margin:0 2px;"></div>
                            <div style="flex:2;height:2px;background:#6B1E1E;"></div>
                        </div>`,
                ],
            },
            itemMargin: {
                horizontal: 15,
                vertical: 5,
            },
        },
        grid: {
            borderColor: "#E5E5E5",
        },
    };

    return (
        <div className="bg-white border-2 border-[#F2F2F2] shadow rounded-2xl p-2 md:p-4">
            <h2 className="text-sm md:text-lg roboto-500 md:roboto-600 text-[#999999] ">Income Trend</h2>
            <p className="text-sm md:text-base text-[#6B7280] mb-4">
                Your monthly income and growth for the last 6 months.
            </p>
            <ReactApexChart options={options} series={series} type="line" height={350} />
        </div>
    );
};

export default IncomeTrend;
