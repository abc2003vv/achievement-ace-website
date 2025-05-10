
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <GraduationCap className="h-10 w-10 text-navy mr-3" />
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center">
            Học Vấn
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="mb-6 border-l-4 border-l-navy animate-fade-in opacity-0" style={{animationDelay: '0.2s'}}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl font-bold text-navy">Đại học ABC</CardTitle>
                <span className="text-sm text-charcoal/70">2020 - Hiện tại</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-charcoal">Cử nhân Khoa học Máy tính</p>
              <p className="mt-2 text-charcoal/80">GPA: 3.9/4.0</p>
              <p className="mt-2">Chuyên ngành trí tuệ nhân tạo và khoa học dữ liệu. Tham gia nhiều dự án nghiên cứu và phát triển ứng dụng AI trong thực tế.</p>
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-navy animate-fade-in opacity-0" style={{animationDelay: '0.3s'}}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl font-bold text-navy">Trường THPT XYZ</CardTitle>
                <span className="text-sm text-charcoal/70">2017 - 2020</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-charcoal">Tốt nghiệp THPT</p>
              <p className="mt-2 text-charcoal/80">Điểm trung bình: 9.8/10</p>
              <p className="mt-2">Học sinh xuất sắc, chủ nhiệm câu lạc bộ Tin học và đạt nhiều giải thưởng trong các kỳ thi học sinh giỏi cấp tỉnh và quốc gia.</p>
            </CardContent>
          </Card>

          <div className="mt-10">
            <h3 className="text-2xl font-bold text-navy mb-6">Các Khóa Học & Chứng Chỉ</h3>
            
            <ul className="space-y-4">
              <li className="flex items-start animate-fade-in opacity-0" style={{animationDelay: '0.4s'}}>
                <div className="h-6 w-6 rounded-full bg-gold flex items-center justify-center mt-1 mr-3">
                  <span className="text-navy font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-charcoal">Chứng chỉ AWS Solutions Architect</h4>
                  <p className="text-charcoal/80">Amazon Web Services, 2022</p>
                </div>
              </li>
              
              <li className="flex items-start animate-fade-in opacity-0" style={{animationDelay: '0.5s'}}>
                <div className="h-6 w-6 rounded-full bg-gold flex items-center justify-center mt-1 mr-3">
                  <span className="text-navy font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-charcoal">Deep Learning Specialization</h4>
                  <p className="text-charcoal/80">Coursera - Andrew Ng, 2021</p>
                </div>
              </li>
              
              <li className="flex items-start animate-fade-in opacity-0" style={{animationDelay: '0.6s'}}>
                <div className="h-6 w-6 rounded-full bg-gold flex items-center justify-center mt-1 mr-3">
                  <span className="text-navy font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-charcoal">TensorFlow Developer Certificate</h4>
                  <p className="text-charcoal/80">Google, 2022</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
