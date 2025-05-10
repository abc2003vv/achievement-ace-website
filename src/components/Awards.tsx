
import React from "react";
import AwardCard from "./AwardCard";
import { Trophy, Gamepad } from "lucide-react";

const Awards = () => {
  const awards = [
    {
      title: "Best Game Developer",
      organization: "Vietnam Game Awards",
      date: "2023",
      description: "Được vinh danh là nhà phát triển game xuất sắc nhất tại Vietnam Game Awards 2023."
    },
    {
      title: "Giải Nhất Hackathon Game",
      organization: "GameTech 2023",
      date: "2023",
      description: "Đạt giải nhất cuộc thi phát triển game trong 48 giờ với tựa game 'Super Adventure'."
    },
    {
      title: "Unity Certified Developer",
      organization: "Unity Technologies",
      date: "2022",
      description: "Đạt chứng chỉ Unity Certified Developer và Unity Certified Programmer."
    },
    {
      title: "Champion Esports",
      organization: "National Esports Tournament",
      date: "2023",
      description: "Vô địch giải đấu Esports quốc gia ở môn thể thao điện tử Liên Minh Huyền Thoại."
    },
    {
      title: "Game Innovation Award",
      organization: "Global Game Jam",
      date: "2022",
      description: "Đạt giải Game đổi mới nhất tại sự kiện Global Game Jam với concept game VR độc đáo."
    },
    {
      title: "Indie Game Showcase",
      organization: "Southeast Asia Games Conference",
      date: "2021",
      description: "Được chọn trình diễn game độc lập tại Hội nghị Game Đông Nam Á năm 2021."
    }
  ];

  return (
    <div className="bg-[#0EA5E9]/5 py-20" id="awards">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <Gamepad className="h-10 w-10 text-[#0EA5E9] mr-3" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#0EA5E9] text-center">
            Thành Tựu & Giải Thưởng
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <AwardCard
              key={index}
              title={award.title}
              organization={award.organization}
              date={award.date}
              description={award.description}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
