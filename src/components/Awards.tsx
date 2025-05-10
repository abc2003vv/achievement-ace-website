
import React from "react";
import AwardCard from "./AwardCard";
import { Medal } from "lucide-react";

const Awards = () => {
  const awards = [
    {
      title: "Sinh Viên Xuất Sắc",
      organization: "Đại học ABC",
      date: "2023",
      description: "Đạt danh hiệu sinh viên xuất sắc toàn trường với GPA 3.9/4.0 trong năm học 2022-2023."
    },
    {
      title: "Huy chương Vàng Olympic Tin học",
      organization: "Hội Tin học Việt Nam",
      date: "2022",
      description: "Đạt huy chương vàng trong cuộc thi Olympic Tin học Sinh viên toàn quốc năm 2022."
    },
    {
      title: "Học bổng Tài năng",
      organization: "Quỹ Đổi mới Sáng tạo",
      date: "2022",
      description: "Được trao học bổng tài năng dựa trên thành tích nghiên cứu và điểm số học tập xuất sắc."
    },
    {
      title: "Giải Nhất Hackathon",
      organization: "TechFest 2023",
      date: "2023",
      description: "Đạt giải nhất cuộc thi lập trình Hackathon với dự án ứng dụng AI trong y tế."
    },
    {
      title: "Chứng chỉ Google Cloud",
      organization: "Google",
      date: "2021",
      description: "Đạt chứng chỉ Google Cloud Professional Data Engineer và Google Cloud Architect."
    },
    {
      title: "Giải Ba Nghiên cứu Khoa học",
      organization: "Bộ Giáo dục và Đào tạo",
      date: "2021",
      description: "Giải ba cuộc thi sinh viên nghiên cứu khoa học cấp bộ với đề tài về học máy."
    }
  ];

  return (
    <div className="bg-lightGray py-20" id="awards">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <Medal className="h-10 w-10 text-gold mr-3" />
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center">
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
