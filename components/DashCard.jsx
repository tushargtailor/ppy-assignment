import dashboardData from "../data/dashboard.json";

export default function DashCard() {
  const { aum, sip } = dashboardData;

  const cards = [
    { title: "AUM", value: aum.value, unit: aum.unit, mom: aum.mom },
    { title: "SIP", value: sip.value, unit: sip.unit, mom: sip.mom },
  ];

  return (
    <div className="w-full mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-lg p-6 h-38 flex flex-col justify-between"
          >
            <div className="relative w-full flex justify-center">
              <span className="text-gray-500 text-sm">Current</span>

              <button className="absolute right-0 text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
                View Report
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-1">
              <div>
                <span className="text-4xl font-bold text-gray-900">
                  {card.title} {card.value}
                </span>
                <span className="ml-1 text-xl text-gray-500">{card.unit}</span>
              </div>
              <span className="text-green-600 text-sm mt-2">
                ▲ {card.mom}% MoM
              </span>
            </div>

            <div className="flex justify-end">
              <button className="text-xs text-green-600 hover:underline">
                View Trend ▼
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
